import { Avatar, Container, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";

import { Link as RadixLink } from "@radix-ui/themes";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";


export const metadata: Metadata = {
  title: 'Triathlon Tools',
  description: "These are some tools that I've been developing to help myself train and race.",
}


const Card = (props: { t: string, d: string, abbrev: string, color?: string, href: string }) => (
  <Link href={props.href}>
  <button
    className="flex gap-4 items-center text-left select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
  >
    {/* @ts-ignore */}
    <Avatar fallback={props.abbrev} size="6" color={props.color || "indigo"}/>
    <div className="flex flex-col gap-2">
      <div className="text-md font-medium leading-none">{props.t}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {props.d}
      </p>
    </div>
  </button>
  </Link>
);


export default function Page() {
  return (
    <main className="min-h-screen">
      <Section size={{initial: "1", lg: "2"}} pl="3" pr="3">
        <Container size="4">
          <Flex direction="column" gap="4" className="max-w-lg">
            <Heading size="9">Triathlon Tools</Heading>
            <Text>These are some tools I've been developing to help myself train and
              race. If you have suggestions, feedback, or bugs, please <RadixLink href="mailto:miloknowles97@gmail.com">let me know.</RadixLink></Text>
          </Flex>
          <Grid columns={{initial: "1", md: "3"}} mt="6" gap="4">
            <Card
              href="/tools/bike-simulator"
              abbrev="BSP"
              color="green"
              t="Bike split simulator"
              d="Predict your finish time on a bike course using a physics simulator"
            />
            <Card
              href="/tools/swimming-tss"
              abbrev="sTSS"
              color="blue"
              t="Swimming TSS calculator"
              d="Calculate TSS for a swim workout based on the Training Peaks formula"
            />
          </Grid>
        </Container>
      </Section>
    </main>
  );
}