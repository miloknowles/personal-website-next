"use client";

import dynamic from 'next/dynamic';

import { Button, Container, Group, Modal, SegmentedControl, Slider, Stack, Text, createStyles } from "@mantine/core";
import { useState } from "react";

import React from 'react';
// @ts-ignore
import { IconAdjustments } from "@tabler/icons-react";
import { useCounter, useDisclosure } from "@mantine/hooks";

const DEFAULT_ALPHA = 0.2;
const DEFAULT_NUM_NODES = 100;
const DEFAULT_NODES_PER_SEC = 50;
const DEFAULT_CIRCLE_RADIUS = 5;

type ColorMap = "turbo" | "inferno";


const useStyles = createStyles((theme) => ({
  mainVisualContainer: {
    marginTop: "-16px",
    height: "calc(100vh - 90px)",
    // height: "100%",
    padding: 0,
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
    <Modal
      opened={opened}
      onClose={() => {
        close();
        increment();
      }}
      radius="sm"
      title={<Text fw={"bold"}>Rapidly-Exploring Random Trees (RRT)</Text>}
      centered
    >
      <Stack>
        <Group>
          <Text fw={"bold"}>number of leaves</Text>
          <Text>The size of the final tree</Text>
        </Group>
        <Slider label={v => v} min={10} max={1000} step={1} value={numNodes} onChange={setNumNodes}/>

        <Group>
          <Text fw={"bold"}>iterations/sec</Text>
          <Text>How fast the tree grows</Text>
        </Group>
        <Slider label={v => v} min={1} max={200} step={1} value={nodesPerSec} onChange={setNodesPerSec}/>

        <Group>
          <Text fw={"bold"}>alpha</Text>
          <Text>How aggressively the tree grows</Text>
        </Group>
        <Slider label={v => v} min={0.1} max={1.0} value={alpha} onChange={setAlpha} step={0.01}/>

        <Group>
          <Text fw={"bold"}>leaf radius</Text>
          <Text>Size of the circles</Text>
        </Group>
        <Slider label={v => v} min={1} max={20} step={0.1} value={circleRadius} onChange={setCircleRadius}/>

        <Group>
          <Text fw={"bold"}>colormap</Text>
          <Text>Based on distance from the root</Text>
        </Group>
        <SegmentedControl
          value={colorMap}
          onChange={(value) => setColorMap(value as ColorMap)}
          size="xs"
          data={[
            {
              value: 'turbo',
              label: <Text fw={"normal"}>turbo</Text>
            },
            {
              value: 'inferno',
              label: <Text fw={"normal"}>inferno</Text>
            },
            {
              value: 'rainbow',
              label: <Text fw={"normal"}>rainbow</Text>
            },
            {
              value: 'spectral',
              label: <Text fw={"normal"}>spectral</Text>
            },
            {
              value: 'sinebow',
              label: <Text fw={"normal"}>sinebow</Text>
            },
          ]}
        />
      </Stack>
    </Modal>
    <Button
      variant="subtle"
      size="xs"
      sx={{position: "absolute", bottom: 24, right: 24, zIndex: 5}}
      leftIcon={<IconAdjustments size={"1rem"} stroke={1.5}/>}
      onClick={open}
    >
      Adjust Parameters
    </Button>
  </Container>
  )
}
