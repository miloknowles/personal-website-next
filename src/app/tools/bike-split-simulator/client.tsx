"use client";

import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Card, Code, Flex, Grid, Heading, Separator, Text } from "@radix-ui/themes";
import { Link as RadixLink } from "@radix-ui/themes";

import demoData from "./example.json";

import useSWR, { useSWRConfig } from "swr"
import { useState } from "react";
import Toolbar from "./toolbar";
import { Results } from "./types";


const DataCard = (props: { title: string, value: string, units?: string }) => (
  <Card className="p-3 bg-transparent">
    <Flex direction="column" gap="1">
      <Text weight="medium" size="2">{props.title}</Text>
      <Heading size="7">{props.value}</Heading>
      <Text weight="light" size="1">{props.units}</Text>
    </Flex>
  </Card>
);


const ResultsDisplay = () => {
  // This will initially fetch nothing, but see data in the cache once it's fetched.
  // const { data, error } = useSWR<Results>('/api/simulate');
  const data: Results = demoData;

  if (!data) {
    return <></>;
  }

  const elapsed = data.states.at(-1)?.t || 0;
  const elapsedH = Math.floor(elapsed / 3600);
  const elapsedM = Math.floor((elapsed - elapsedH*3600) / 60);
  const elapsedS = Math.floor(elapsed % 60);

  return (
    <Flex direction="column" align="start" className="w-full" gap="6">
      <Flex direction="column" className="w-full">
        <Flex className="w-full">
          <Heading size="7">Results</Heading>
          <Button className="ml-auto">Download raw data</Button>
        </Flex>
        <Text size="1" className="text-muted-foreground">
          Simulated <Code>{data.meta.compute_iters || "N/A"}</Code> data points
          in <Code>{data.meta.compute_sec.toLocaleString("default", {maximumFractionDigits: 2}) || "N/A"} seconds</Code>
        </Text>
      </Flex>

      <Grid gap="6" columns={{initial: "1", md: "4"}}>
        <DataCard title="Predicted finish" value={`${elapsedH}:${elapsedM}:${elapsedS}`} units="elapsed"/>
        <DataCard title="Average speed" value="45" units="km/hr"/>
        <DataCard title="Total elevation gain" value="1200" units="m"/>
        <DataCard title="Total distance" value="90" units="km"/>
      </Grid>

    </Flex>
  )
}


export default function Tool() {
  return (
    <main className="min-h-screen px-6 py-5 gap-8 flex flex-col">
      <Toolbar/>
      <Separator size="4"/>
      <ResultsDisplay/>
    </main>
  );
}