"use client";

import { ScatterChart, Card, Title, Text } from "@tremor/react";
import { Link as RadixLink } from "@radix-ui/themes";

import { CLIMATE_NEUTRAL_DATA } from "./climateneutral";

export default function ClimateNeutralChart() {
  const chartData = CLIMATE_NEUTRAL_DATA.map(v => ({
    "Total Offsets": Math.log10(v.totalOffsets),
    "Price Per Ton": v.pricePerTon,
    "Total Spending": v.totalSpending,
    "category": v.companyName,
  }));

  return (
    // https://www.radix-ui.com/themes/docs/theme/breakpoints
    <Card className="my-4">
      <Title>Offset purchases by Climate Neutral brands (2022)</Title>
      <ScatterChart
        className="h-80 mt-6 -ml-2"
        yAxisWidth={60}
        key="companyName"
        data={chartData}
        colors={["indigo-200"]}
        category="category"
        x="Total Offsets"
        y="Price Per Ton"
        size="Total Spending"
        showOpacity={true}
        valueFormatter={{
          x: (x) => `${Math.pow(10, x).toFixed(0)} tCO₂`,
          y: (y) => `${y.toLocaleString("default", { style: "currency", currency: "USD" })}/ton`,
          size: (s) => `$${(s).toFixed(0)} spent`,
        }}
        enableLegendSlider={false}
        showLegend={false}
      />
      <Text className="pt-3">
        <RadixLink href="https://github.com/miloknowles/climateneutral">Source Code</RadixLink>
      </Text>
    </Card>
  );
}