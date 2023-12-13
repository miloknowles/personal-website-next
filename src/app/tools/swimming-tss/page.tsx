"use client";

import { Input } from "@/components/ui/input";
import { Avatar, CalloutIcon, CalloutRoot, CalloutText, Code, Container, Flex, Grid, Heading, Section, Separator, Slider, Text } from "@radix-ui/themes";

import { Link as RadixLink } from "@radix-ui/themes";
import Link from "next/link";
import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IconSwimming } from "@tabler/icons-react";


/* Estimate the TSS of a swim session. One hour at FTP is equal to 100 TSS. */
const calculateTss = (distance_m: number, moving_sec: number, ftp_sec_per_100m: number) => {
  const NSS = distance_m / (moving_sec / 60); // meters per minute
  const FTP = (100 / ftp_sec_per_100m) * 60; // meters per minute
  const IF = NSS / FTP; // unitless
  return IF*IF*IF * (moving_sec / 3600) * 100;
}


const Group = (props: { t: string, d: string }) => {
  <Heading size="6">
    Functional Threshold Pace
  </Heading>
}


const PaceInput = (props: { onChange?: (seconds: number, units: "meters" | "yards") => void}) => {
  const [units, setUnits] = useState("meters");
  const [seconds, setSeconds] = useState(90);

  return (
    <Flex direction="column" gap="3" width="100%">
      <Slider
        defaultValue={[seconds]}
        min={50}
        max={3*60}
        step={1}
        className="w-[200px] sm:w-[400px]"
        value={[seconds]}
        onValueChange={(v) => setSeconds(v[0])}
      />
      <Flex align="center" justify="start" gap="1">
        <Input disabled type="number" className="rounded-xl w-[60px] text-center" placeholder="MM" value={Math.floor(seconds / 60)} onChange={e => setSeconds}/>
        <Text>:</Text>
        <Input disabled type="number" className="rounded-xl w-[60px] text-center" placeholder="SS" value={seconds % 60}/>
        <Select value={units} onValueChange={setUnits}>
          <SelectTrigger className="w-[180px] rounded-xl">
            <SelectValue placeholder="Select your pace units"/>
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectGroup>
              <SelectItem value="meters">/ 100 meters</SelectItem>
              <SelectItem value="yards">/ 100 yards</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Flex>
    </Flex>
  )
}


const DurationInput = () => {
  const [hh, setHH] = useState(0);
  const [mm, setMM] = useState(0);
  const [ss, setSS] = useState(0);

  const clamp = (v: number) => Math.max(0, Math.min(v, 59));

  return (
    <Flex align="center" justify="start" gap="2">
      <Input type="number" className="rounded-xl w-[80px] text-center" placeholder="HH" value={hh} onChange={(e) => setHH(clamp(parseFloat(e.target.value)))}/>
      <Text>:</Text>
      <Input type="number" className="rounded-xl w-[80px] text-center" placeholder="MM" value={mm} onChange={(e) => setMM(clamp(parseFloat(e.target.value)))}/>
      <Text>:</Text>
      <Input type="number" className="rounded-xl w-[80px] text-center" placeholder="SS" value={ss} onChange={(e) => setSS(clamp(parseFloat(e.target.value)))}/>
    </Flex>
  )
}


export default function Page() {
  const [movingMins, setMovingMins] = useState(45);

  return (
    <main className="min-h-screen">
      <Section size={{initial: "1", lg: "2"}} pl="3" pr="3">
        <Container size="4">
          <Grid columns={{initial: "1", md: "2"}} gap="6">
            <Flex direction="column" gap="4" className="max-w-lg">
              <Heading size="9">Swimming TSS</Heading>
              <Text className="pt-2">
                During a large swim block, I noticed that my fitness was steadily
                declining on Training Peaks despite doing a lot of aerobic volume in the pool.
                The reason is that my swims were uploading to Training Peaks with <Code>0 TSS</Code>.
              </Text>
              <Text>
                One option is to use <Code>hrTSS</Code>. However, if you don't trust your heart rate
                in the pool you can use a different a <RadixLink href="https://www.trainingpeaks.com/learn/articles/calculating-swimming-tss-score/" target="_blank">suggested formula</RadixLink> from Training Peaks for
                estimating the TSS of a swim workout. That formula is implemented in the calculator below.
              </Text>
            </Flex>
          
            <Flex direction="column" mt="6" gap="6" align="start">

              <Flex direction="column" gap="2">
                <Heading size="4">
                  Total Moving Time
                </Heading>
                <Text className="text-muted-foreground" size="4">This total <strong>active</strong> swimming duration of the workout.</Text>
                <Input
                  type="number"
                  className="rounded-xl text-center h-[48px] text-lg"
                  placeholder="Total minutes"
                  value={movingMins}
                  onChange={(e) => setMovingMins(parseFloat(e.target.value))}
                />
              </Flex>

              <Flex direction="column" gap="2">
                <Heading size="4">
                  Functional Threshold Pace
                </Heading>
                <Text className="text-muted-foreground" size="4">This is the best pace you could hold for one hour.</Text>
                <PaceInput/>
              </Flex>

              <Flex direction="column" gap="2">
                <Heading size="4">
                  Average Workout Pace
                </Heading>
                <Text className="text-muted-foreground" size="4">This is your average pace for the workout (<strong>not</strong> including rests).</Text>
                <PaceInput/>
              </Flex>

              <CalloutRoot>
                <CalloutIcon>
                  <IconSwimming width="32" height="32"/>
                </CalloutIcon>
                <CalloutText weight="bold" size="4">
                  Workout Total: 50 TSS
                </CalloutText>
              </CalloutRoot>
            </Flex>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}