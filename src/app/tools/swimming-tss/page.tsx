"use client";

import { Input } from "@/components/ui/input";
import { Avatar, CalloutRoot, CalloutText, Code, Container, Flex, Grid, Heading, Section, Separator, Text } from "@radix-ui/themes";

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


const DurationInput = () => {
  return (
    <Flex>
      <Input type="number"/>
    </Flex>
  )
}


export default function Page() {
  const [ftpUnits, setFtpUnits] = useState("meters");

  return (
    <main className="min-h-screen">
      <Section size={{initial: "1", lg: "2"}} pl="3" pr="3">
        <Container size="4">
          <Flex direction="column" gap="4" className="max-w-xl">
            <Heading size="9">Swimming TSS</Heading>
            <Text>
              During a large swim block, I noticed that my fitness was steadily
              declining on Training Peaks despite doing a lot of aerobic volume in the pool.
              The reason is that my swims were uploading to Training Peaks with <Code>0 TSS</Code>.
            </Text>
            <Text>
              One option is to use <Code>hrTSS</Code>. However, if you don't trust your heart rate
              in the pool you can use a different a <RadixLink href="https://www.trainingpeaks.com/learn/articles/calculating-swimming-tss-score/" target="_blank">suggested formula</RadixLink> from Training Peaks for
              estimating the TSS of a swim workout. That formula is implemented in the calculator below.
            </Text>
            <Separator size="4"/>
          </Flex>
          <Flex direction="column" mt="6" gap="6" align="start">

            <Flex direction="column" gap="2">
              <Heading size="4">
                Total Moving Time
              </Heading>
              <Text className="text-muted-foreground">This is the amount of <strong>active</strong> swimming time during your workout.</Text>
              <Flex align="center" justify="start" gap="2">
                <Input type="number" className="rounded-xl w-[80px] text-center" placeholder="HH"/>
                <Text>:</Text>
                <Input type="number" className="rounded-xl w-[80px] text-center" placeholder="MM"/>
                <Text>:</Text>
                <Input type="number" className="rounded-xl w-[80px] text-center" placeholder="SS"/>
              </Flex>
            </Flex>

            <Flex direction="column" gap="2">
              <Heading size="4">
                Functional Threshold Pace
              </Heading>
              <Text className="text-muted-foreground">This is the best pace you could hold for one hour.</Text>
              <Flex align="center" justify="start" gap="2">
                <Input type="number" className="rounded-xl w-[80px] text-center" placeholder="MM"/>
                <Text>:</Text>
                <Input type="number" className="rounded-xl w-[80px] text-center" placeholder="SS"/>
                <Select value={ftpUnits} onValueChange={setFtpUnits}>
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

            <Flex direction="column" gap="2">
              <Heading size="4">
                Average Workout Pace
              </Heading>
              <Text className="text-muted-foreground">This is your average pace for the workout (<strong>not</strong> including rests).</Text>
            </Flex>

            <CalloutRoot>
              <CalloutText weight="bold">
                You spent <Code>30 mins</Code> at an intensity factor of <Code>0.5</Code>, for a total of <Code>53 TSS</Code>.
              </CalloutText>
            </CalloutRoot>
          </Flex>
        </Container>
      </Section>
    </main>
  );
}