"use client";

import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import {
  CalloutIcon, CalloutRoot, CalloutText, Code, DialogContent,
  DialogRoot, DialogTrigger, Flex, Grid, Heading, Text
} from "@radix-ui/themes";
import { Link as RadixLink } from "@radix-ui/themes"
import ChooseCourse from "./ChooseCourse";
import { Input } from "@/components/ui/input";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import useSWR, { useSWRConfig } from "swr"
import { useState } from "react";
import { Loader2 } from "lucide-react";


const formSchema = z.object({
  course_name: z.string({
    required_error: "Please select a course.",
  }),
  average_power_watts: z.coerce.number().min(50).max(1000),
  average_cda: z.coerce.number().min(0.1).max(1),
  crr: z.coerce.number().min(0.001).max(0.01),
  loss_drivetrain: z.coerce.number().min(0.1).max(5),
  mass_rider_kg: z.coerce.number().min(10).max(200),
  mass_bike_kg: z.coerce.number().min(1).max(30)
});


const CourseCallout = () => (
  <CalloutRoot>
    <CalloutIcon>
      <InfoCircledIcon/>
    </CalloutIcon>
    <CalloutText>
      Don't see your course? Send me
      an email with the <Code>GPX</Code> or <Code>FIT</Code> file and
      I'm happy to add it to the tool.
    </CalloutText>
  </CalloutRoot>
);


const Label = (props: { title: string, units: string, description: any }) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
      <Heading size="3" style={{borderBottom: "0.5px dashed white"}} className="w-fit">
        {props.title} (<Code>{props.units}</Code>)
      </Heading>
      </HoverCardTrigger>
      <HoverCardContent className="rounded-xl min-w-[400px] text-sm">
        {props.description}
      </HoverCardContent>
    </HoverCard>
  );
}


export default function Toolbar() {
  const baseUrl = process.env.NODE_ENV === "production" ? "https://todo.app" : "http://localhost:8000"
  const [loading, setLoading] = useState(false);

  const { mutate } = useSWRConfig()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      average_power_watts: 250,
      average_cda: 0.3,
      crr: 0.002,
      loss_drivetrain: 2,
      mass_rider_kg: 75,
      mass_bike_kg: 10,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const response = await fetch(baseUrl + "/simulate", {
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
      },
      method: "POST",
      body: JSON.stringify({timestep: 1, ...values}),
      mode: 'cors',
    });
    const content = await response.json();

    // Mutate the cache to include the latest results. This makes it globally
    // accessible to other components tht fetch the same key.
    mutate('/api/simulate', content, {
      populateCache: (resultData, currentData) => {
        return resultData;
      },
      revalidate: false
    });

    setLoading(false);
  }

  return (
    <Flex direction="column" gap="6" justify="center" align="start">
      <DialogRoot>
        <DialogTrigger>
          <Flex gap="4">
            <Heading size="8">Bike Split Simulator</Heading>
            <Button variant="secondary">How it works</Button>
          </Flex>
        </DialogTrigger>
        <DialogContent>
          <Flex direction="column" gap="4">
            <Heading size="7">How to use the simulator</Heading>
            <Text className="pt-2">
              This tool predicts what your race time will be on a bike course, taking into
              account the elevation profile and key parameters like your average power, CdA, and rolling resistance.
            </Text>
            <Text weight="medium" color="indigo">
              You can use the tool to (1) estimate what a realistic bike split might be, and (2)
              play with parameters to improve performance.
            </Text>
            <Text>
              Internally, the simulator reads in a <Code>.gpx</Code> or <Code>.fit</Code> file, and then
              simulates what would happen if you cycle at a constant race power. The physics equations
              are from this excellent <RadixLink href="https://www.gribble.org/cycling/power_v_speed.html">tool</RadixLink> by Steve Gribble.
            </Text>
          </Flex>
        </DialogContent>
      </DialogRoot>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Grid columns={{initial: "1", md: "3", lg: "4"}} gap="5">
          <Flex gap="4" direction="column">
            <Heading size="7">Inputs</Heading>
            <FormField
              control={form.control}
              name="course_name"
              render={({ field }) => (
                <ChooseCourse value={field.value} setValue={(v) => form.setValue("course_name", v)}/>
              )}
            />
            <CourseCallout/>
            <Button
              className="w-full"
              type="submit"
              disabled={loading}
            >
              {
                loading ?
                  <Flex align="center"><Loader2 className="mr-2 h-4 w-4 animate-spin" /><Text>Simulating</Text></Flex> :
                  "Run simulation"
              }
            </Button>
          </Flex>

          <Flex direction="column" gap="4" className="w-full">
            <Flex direction="column" gap="2">
              <Label title="Race power" units="W" description="This is the average power you plan to race at."/>
              <FormField
                control={form.control}
                name="average_power_watts"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your race power"
                        className="rounded-xl text-center"
                        type="number"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Flex>

            <Flex direction="column" gap="2">
              <Heading size="3">
                Mass of rider (<Code>kg</Code>)
              </Heading>
              <FormField
                control={form.control}
                name="mass_rider_kg"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                    <Input
                      {...field}
                      type="number"
                      className="rounded-xl text-center"
                      placeholder="Your dressed weight"
                      required
                    />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Flex>

            <Flex direction="column" gap="2">
              <Heading size="3">
                Mass of bike (<Code>kg</Code>)
              </Heading>
              <FormField
                control={form.control}
                name="mass_bike_kg"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                    <Input
                      {...field}
                      type="number"
                      className="rounded-xl text-center"
                      placeholder="Loaded bike weight"
                    />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Flex>
          </Flex>

          <Flex direction="column" gap="2" className="w-full">
            <Label
              title="CdA"
              units="m2"
              description={
                <Flex gap="2" direction="column">
                  <Text>
                    Your coefficient of drag, or CdA, is a measure of how streamlined you are, and is one of the most important parameters for race performance.
                  </Text>
                  <Text>
                    You can measure this with a wind tunnel or aerometer. A more accessible way to estimate it is called the Chung method.
                  </Text>
                  <Text>
                    If you don't know this number, just make an educated guess.
                  </Text>
                </Flex>
              }
            />
            <Flex gap="2" wrap="wrap">
              <Button size="sm" className="rounded-xl text-xs" variant="secondary">Upright</Button>
              <Button size="sm" className="rounded-xl text-xs" variant="secondary">Drops</Button>
              <Button size="sm" className="rounded-xl text-xs" variant="secondary">Aero (avg)</Button>
              <Button size="sm" className="rounded-xl text-xs" variant="secondary">Aero (good)</Button>
              <Button size="sm" className="rounded-xl text-xs" variant="secondary">Aero (pro)</Button>
            </Flex>
            <FormField
              control={form.control}
              name="average_cda"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                  <Input
                    {...field}
                    type="number"
                    className="rounded-xl text-center"
                    placeholder="Typically around 0.2-0.4"
                  />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Flex>

          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2" className="w-full">
              <Label
                title="Coeff. of rolling resistance"
                units="unitless"
                description={
                  <Text>
                    This coefficient measures how much resistance your wheel encounters as it rolls, and
                    depends on the tube/tire you use and your tire pressure.
                    You can find an very comprehensive database of rolling
                    resistances <RadixLink href="https://www.bicyclerollingresistance.com/road-bike-reviews">here</RadixLink>.
                  </Text>
                }
              />
              <Flex gap="2">
                <Button size="sm" className="rounded-xl text-xs" variant="secondary">Bad</Button>
                <Button size="sm" className="rounded-xl text-xs" variant="secondary">Average</Button>
                <Button size="sm" className="rounded-xl text-xs" variant="secondary">Good</Button>
                <Button size="sm" className="rounded-xl text-xs" variant="secondary">Excellent</Button>
              </Flex>
              <FormField
                control={form.control}
                name="crr"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                    <Input
                      {...field}
                      type="number"
                      className="rounded-xl text-center w-full"
                      placeholder="Typically around 0.002"
                    />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Flex>

            <Flex direction="column" gap="2" className="w-full">
              <Label
                title="Drivetrain loss"
                units="%"
                description="This is the percentage of power lost due to friction in your chain and drivetrain. It's typically in the 1-2% range and can be improved by things like waxing your chain and using optimal gearing."
              />
              <Flex gap="2">
                <Button size="sm" className="rounded-xl text-xs" variant="secondary">Bad</Button>
                <Button size="sm" className="rounded-xl text-xs" variant="secondary">Average</Button>
                <Button size="sm" className="rounded-xl text-xs" variant="secondary">Good</Button>
              </Flex>
              <FormField
                control={form.control}
                name="loss_drivetrain"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                    <Input
                      {...field}
                      type="number"
                      className="rounded-xl text-center w-full"
                      placeholder="Typically around 1-2%"
                    />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Flex>
          </Flex>
        </Grid>
        </form>
      </Form>
    </Flex>
  );
}