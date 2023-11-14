"use client";

import { useEffect, useState } from "react";

import React from 'react';
// @ts-ignore
import * as d3 from 'd3-scale-chromatic';


type ColorMap = "turbo" | "inferno";


interface State {
  // x, y points
  nodes: [number, number][],
  // connections between two x, y points
  edges: [[number, number], [number, number]][],
  // indices
  parents: number[],
  // distance to each node in the tree
  distanceSoFar: number[],
}


function argMin(array: number[]) {
  return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] < r[0] ? a : r))[1];
}


// Linear interpolate between scalar values.
function linearInterpolate(a: number, b: number, alpha: number) {
  return a + alpha * (b - a);
}


interface VisualProps {
  maxNodes: number
  nodesPerSec: number
  alpha: number
  circleRadius: number
  colorMap: ColorMap
  counter: number
  root: [number, number]
}


var LOCK = false;


export default function Visual({ maxNodes, nodesPerSec, alpha, circleRadius, colorMap, counter, root }: VisualProps) {
  // const {colorScheme} = useMantineColorScheme();
  const colorScheme = "dark";

  const addNewNodeMs = (1000 / nodesPerSec);

  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const [state, setState] = useState<State>({
    nodes: [root], edges: [], parents: [0], distanceSoFar: [0]
  });

  const reset = () => {
    const newState: State = {nodes: [root], edges: [], parents: [0], distanceSoFar: [0]};
    setState(newState);
    return newState;
  }

  const start = (state: State) => {
    windowResizeCallback();
    setTimeout(() => addNewNode(state), addNewNodeMs);
  }

  // Sample free space, without collision checking.
  const sampleFreeSpace = () => {
    const x: [number, number] = [Math.random(), Math.random()];
    return x;
  }

  function addNewNode(state: State) {
    // Stopping condition to prevent clutter.
    if (state.nodes.length > maxNodes) {
      console.debug("Done");
      LOCK = false;
      return state;
    }

    const nodes = state.nodes.slice();
    const edges = state.edges.slice();
    const parents = state.parents.slice();
    const distanceSoFar = state.distanceSoFar.slice();

    const samplePoint = sampleFreeSpace();

    const eucDist2 = nodes.map((x) => {
      return Math.pow((x[0] - samplePoint[0]) * width, 2) +
             Math.pow((x[1] - samplePoint[1]) * height, 2);
    });
    const nnIndex = argMin(eucDist2);
    const nnPoint = nodes[nnIndex];
    const nnDist = alpha * Math.sqrt(eucDist2[nnIndex]);

    const clippedPoint: [number, number] = [
      linearInterpolate(nnPoint[0], samplePoint[0], alpha),
      linearInterpolate(nnPoint[1], samplePoint[1], alpha)
    ];

    nodes.push(clippedPoint);
    edges.push([nnPoint, clippedPoint]);
    parents.push(nnIndex);
    distanceSoFar.push(distanceSoFar[nnIndex] + nnDist);

    const newState = {
      nodes: nodes,
      edges: edges,
      parents: parents,
      distanceSoFar: distanceSoFar
    };

    setTimeout(() => setState(addNewNode(newState)), addNewNodeMs);

    return newState;
  }

  // Implement a hacky lock using a global `LOCK` variable.
  useEffect(() => {
    // To acquire the lock, wait for a random amount of time. If `useEffect`
    // happens twice in rapid succession, the random delay helps to separate
    // these two processes.
    const randomWait = Math.random() * 100;
    setTimeout(() => {
      // If the lock is already taken, give up.
      if (LOCK) {
        return;
      }
      LOCK = true; // Acquire the lock.
      start(reset()); // Start the algorithm.
    }, randomWait);
  }, [counter]);

  const windowResizeCallback = () => {
    const container = document.getElementById("main-visual-container");
    const width = container?.clientWidth;
    const height = container?.clientHeight;
    if (width && height) {
      setWidth(width);
      setHeight(height);
    }
  }

  window.addEventListener("resize", windowResizeCallback);

  // https://github.com/d3/d3-scale-chromatic
  const largestScreenDim = Math.max(width, height);

  const coloringFunction = {
    "turbo": d3.interpolateTurbo,
    "inferno": d3.interpolateInferno,
    "magma": d3.interpolateMagma,
    "blues": d3.interpolateBlues,
    "greens": d3.interpolateGreens,
    "greys": d3.interpolateGreys,
    "rainbow": d3.interpolateRainbow,
    "spectral": d3.interpolateSpectral,
    "sinebow": d3.interpolateSinebow
  }[colorMap];

  const renderedNodes = state.nodes.map((node, index) => React.createElement("circle", {
    r: circleRadius,
    fill: coloringFunction(state.distanceSoFar[index] / largestScreenDim),
    cx: node[0] * width,
    cy: node[1] * height,
    key: "node " + node[0].toString() + " " + node[1].toString()
  }));

  const renderedEdges = state.edges.map((edge, index) => React.createElement("line", {
    stroke: "white", // colorScheme === "light" ? "black" : "white",
    x1: edge[0][0] * width,
    y1: edge[0][1] * height,
    x2: edge[1][0] * width,
    y2: edge[1][1] * height,
    key: "edge " + edge[0][0].toString() + " " + edge[0][1].toString() + " " + edge[1][0].toString() + " " + edge[1][1].toString()
  }));

  return React.createElement("svg",
    {
      className: "visualization",
      width: width,
      height: height
    },
    renderedNodes,
    renderedEdges
  );
}
