"use client";

import dynamic from 'next/dynamic';

import { Container, SegmentedControl, createStyles } from "@mantine/core";
import { useState } from "react";
import { Button, DialogContent, DialogDescription, DialogRoot, DialogTitle, DialogTrigger, Flex, Text, Slider, DialogClose, Dialog } from '@radix-ui/themes';

import React from 'react';
// @ts-ignore
import { IconAdjustments } from "@tabler/icons-react";
import { useCounter, useDisclosure } from "@mantine/hooks";

const DEFAULT_ALPHA = 0.2;
const DEFAULT_NUM_NODES = 100;
const DEFAULT_NODES_PER_SEC = 100;
const DEFAULT_CIRCLE_RADIUS = 7;

type ColorMap = "turbo" | "inferno";


const useStyles = createStyles((theme) => ({
  mainVisualContainer: {
    marginTop: "-16px",
    height: "calc(100vh - 80px)",
    // height: "100%",
    padding: 0,
    fontFamily: "var(--font-circular)"
    // boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.05)"
    // backgroundColor: theme.colorScheme === "light" ? "white" : theme.colors.dark[8],
    // filter: "drop-shadow(0.3rem 0.3rem 0.2rem rgba(0, 0, 0, 0.1))"
  },
}));


// https://stackoverflow.com/questions/55151041/window-is-not-defined-in-next-js-react-app
const DynamicComponentWithNoSSR = dynamic(
  () => import('./visual'),
  { ssr: false }
)


export default function VisualSection() {
  const {classes} = useStyles();
  const [opened, { open, close }] = useDisclosure();

  // Bumping this counter is what restarts the algorithm.
  const [counter, {increment}] = useCounter();
  const [alpha, setAlpha] = useState(DEFAULT_ALPHA);
  const [numNodes, setNumNodes] = useState(DEFAULT_NUM_NODES);
  const [nodesPerSec, setNodesPerSec] = useState(DEFAULT_NODES_PER_SEC);
  const [colorMap, setColorMap] = useState<ColorMap>("turbo");
  const [circleRadius, setCircleRadius] = useState(DEFAULT_CIRCLE_RADIUS);

  return (
    <Container fluid
      className={classes.mainVisualContainer}
      id="main-visual-container"
      pos={"relative"}
    >
    <DynamicComponentWithNoSSR
      alpha={alpha}
      maxNodes={numNodes}
      nodesPerSec={nodesPerSec}
      colorMap={colorMap}
      circleRadius={circleRadius}
      counter={counter}
      root={[0.5, 0.5]}
    />
    <DialogRoot open={opened}>
      <DialogContent>
        <DialogTitle>
          Rapidly-Exploring Random Trees (RRT)
        </DialogTitle>
        <Flex direction="column" gap="5" pt="4">
          <Flex direction="column" gap="2">
            <Flex gap="3">
              <Text weight={"bold"}>number of leaves</Text>
              <Text color="gray">The size of the final tree</Text>
            </Flex>
            <Slider min={10} max={500} step={1} value={[numNodes]} onValueChange={(v) => setNumNodes(v[0])}/>
          </Flex>

          <Flex direction="column" gap="2">
            <Flex gap="3">
              <Text weight={"bold"}>iterations/sec</Text>
              <Text>How fast the tree grows</Text>
            </Flex>
            <Slider min={1} max={200} step={1} value={[nodesPerSec]} onValueChange={(v) => setNodesPerSec(v[0])}/>
          </Flex>

          <Flex direction="column" gap="2">
            <Flex gap="3">
              <Text weight={"bold"}>alpha</Text>
              <Text>How aggressively the tree grows</Text>
            </Flex>
            <Slider min={0.05} max={1.0} value={[alpha]} onValueChange={(v) => setAlpha(v[0])} step={0.01}/>
          </Flex>

          <Flex direction="column" gap="2">
            <Flex gap="3">
              <Text weight={"bold"}>leaf radius</Text>
              <Text>Size of the circles</Text>
            </Flex>
            <Slider min={1} max={20} step={0.1} value={[circleRadius]} onValueChange={(v) => setCircleRadius(v[0])}/>
          </Flex>

          <Flex direction="column" gap="2">
            <Flex gap="3">
              <Text weight={"bold"}>colormap</Text>
              <Text>Based on distance from the root</Text>
            </Flex>
            <SegmentedControl
              value={colorMap}
              onChange={(value) => setColorMap(value as ColorMap)}
              size="xs"
              color="gray"
              data={[
                {
                  value: 'turbo',
                  label: <Text weight={"regular"}>turbo</Text>
                },
                {
                  value: 'inferno',
                  label: <Text weight={"regular"}>inferno</Text>
                },
                {
                  value: 'rainbow',
                  label: <Text weight={"regular"}>rainbow</Text>
                },
                {
                  value: 'spectral',
                  label: <Text weight={"regular"}>spectral</Text>
                },
                {
                  value: 'sinebow',
                  label: <Text weight={"regular"}>sinebow</Text>
                },
              ]}
            />
          </Flex>
          <Flex>
            <Button
              variant="soft"
              color="gray"
              onClick={() => {
              increment();
              close();
              }} ml="auto"
            >Close</Button>
          </Flex>
        </Flex>
      </DialogContent>
    </DialogRoot>

    <Button
      variant="solid"
      style={{position: "absolute", bottom: 24, right: 24, zIndex: 5}}
      size="2"
      onClick={open}
    >
      <IconAdjustments size={"1rem"} stroke={1.5}/> Adjust Parameters
    </Button>
  </Container>
  )
}
