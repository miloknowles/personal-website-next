"use client";

import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import {
  CalloutIcon, CalloutRoot, CalloutText, Code, DialogContent,
  DialogRoot, DialogTrigger, Flex, Grid, Heading, IconButton, Text
} from "@radix-ui/themes";
import { Link as RadixLink } from "@radix-ui/themes"
import ChooseCourse from "./ChooseCourse";
import { COURSES } from "./courses";
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

import { useSWRConfig } from "swr"
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Badge, NumberInput, Tab, TabGroup, TabList, TabPanel, TabPanels } from "@tremor/react";
import { presetsCRR, presetsCdA, presetsDtl } from "./presets";
import { simulate } from "./simulator";


const formSchema = z.object({
  courseName: z.string({
    required_error: "Please select a course.",
  }),
  avgPowerWatts: z.coerce.number().min(50).max(1000),
  avgCdA: z.coerce.number().min(0.1).max(1),
  avgCrr: z.coerce.number().min(0.001).max(0.01),
  lossDrivetrain: z.coerce.number().min(0.1).max(5),
  massRiderKg: z.coerce.number().min(10).max(200),
  massBikeKg: z.coerce.number().min(1).max(30)
});


const CourseCallout = () => (
  <CalloutRoot>
    <CalloutIcon>
      <InfoCircledIcon/>
    </CalloutIcon>
    <CalloutText>
      Don't see your course? This tool is a work in progress, so please send me
      an email with the <Code>GPX</Code> or <Code>FIT</Code> file (or link) and
      I'm happy to add it.
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


const Indicator = (props: { value: number, choices: { value: number, label: string, color: string }[], setValue: (v: number) => void }) => {
  const badges = props.choices.map((c, i) => (
    <Badge
      key={c.value}
      size="sm"
      color={(
        (i === 0 && props.value >= c.value) || // First option
        (i >= (props.choices.length - 1) && props.value <= c.value) || // Last option
        (props.value <= c.value && props.value > props.choices[i + 1].value)
      ) ? c.color : "gray"}
      onClick={() => props.setValue(c.value)}
    >
      {c.label}
    </Badge>
  ));

  return badges;
}


interface IToolbarProps {
  units: "imperial" | "metric"
  setUnits: (units: "imperial" | "metric") => void
}


export default function Toolbar({units, setUnits} : IToolbarProps) {
  const baseUrl = process.env.NODE_ENV === "production" ?
    "https://training-tools-plum.vercel.app" :
    "http://localhost:8000";
  const [loading, setLoading] = useState(false);

  const { mutate } = useSWRConfig();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      avgPowerWatts: 250,
      avgCdA: 0.27,
      avgCrr: 0.005,
      lossDrivetrain: 3,
      massRiderKg: 75,
      massBikeKg: 10,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    const url = COURSES.find(v => (v.value === values.courseName))?.url;

    if (!url) {
      console.error(url);
      return;
    }

    const { results, errors, meta } = await simulate({
      url: url,
      timestep: 0.1,
      velocityMin: 1,
      ...values,
    });

    const maxStepsForPlotting = 5000;

    const takeEveryNth = Math.max(1, Math.ceil(results.length / maxStepsForPlotting));
    console.debug(`Thinning results to take every ${takeEveryNth}th value.`);

    // Mutate the cache to include the latest results. This makes it globally
    // accessible to other components tht fetch the same key.
    mutate('/api/simulate', { states: results.filter((v, i) => ((i % takeEveryNth) === 0)), errors, meta }, {
      populateCache: (resultData, currentData) => {
        return resultData;
      },
      revalidate: false
    });

    setLoading(false);
  }

  const _avgCrr = form.watch("avgCrr");
  const _cda = form.watch("avgCdA");
  const _dtl = form.watch("lossDrivetrain");

  return (
    <Flex direction="column" gap="6" justify="center" align="start" className="w-full">
      <Flex direction="row" gap="4" className="w-full">
        <DialogRoot>
          <DialogTrigger >
            <Flex gap="4" align="center">
              <Heading size="8">Bike Simulator</Heading>
              <IconButton variant="ghost" radius="full">
                <InfoCircledIcon width="24" height="24"/>
              </IconButton>
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
                simulates what would happen if you cycle at a constant race power. To see a derivation for
                the physics equations, I'd recommend this <RadixLink href="https://www.gribble.org/cycling/power_v_speed.html">tool</RadixLink> by Steve Gribble.
              </Text>
            </Flex>
          </DialogContent>
        </DialogRoot>
        
        <TabGroup
          index={["metric", "imperial"].indexOf(units)}
          onIndexChange={(index) => setUnits(["metric", "imperial"][index] as "metric" | "imperial")}
          className="ml-auto w-fit"
        >
          <TabList className="mt-8" variant="solid">
            <Tab>metric</Tab>
            <Tab>imperial</Tab>
          </TabList>
          <TabPanels>
            <TabPanel/>
            <TabPanel/>
          </TabPanels>
        </TabGroup>
      </Flex>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Grid columns={{initial: "1", sm: "3", lg: "4"}} gap="6">
          <Flex gap="4" direction="column">
            <Heading size="7">Inputs</Heading>
            <FormField
              control={form.control}
              name="courseName"
              render={({ field }) => (
                <ChooseCourse value={field.value} setValue={(v) => form.setValue("courseName", v)}/>
              )}
            />
            <CourseCallout/>
          </Flex>

          <Flex direction="column" gap="4" className="w-full">
            <Flex direction="column" gap="2">
              <Label title="Race power" units="W" description="This is the average power you plan (or hope) to race at."/>
              <FormField
                control={form.control}
                name="avgPowerWatts"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <NumberInput
                        {...field}
                        placeholder="Your race power"
                        step={5}
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
                Mass of rider (<Code>{units === "metric" ? "kg" : "lbs"}</Code>)
              </Heading>
              <FormField
                control={form.control}
                name="massRiderKg"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <NumberInput
                        value={units === "metric" ? field.value : field.value * 2.20462}
                        onValueChange={(v) => form.setValue("massRiderKg", units === "metric" ? v : v / 2.20462)}
                        placeholder="Your dressed weight"
                        step={0.5}
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
                Mass of bike (<Code>{units === "metric" ? "kg" : "lbs"}</Code>)
              </Heading>
              <FormField
                control={form.control}
                name="massBikeKg"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <NumberInput
                        value={units === "metric" ? field.value : field.value * 2.20462}
                        onValueChange={(v) => form.setValue("massBikeKg", units === "metric" ? v : v / 2.20462)}
                        placeholder="Loaded bike weight"
                        step={0.5}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Flex>
          </Flex>

          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2" className="w-full">
              <Label
                title="Crr"
                units="unitless"
                description={
                  <Flex direction="column" gap="2">
                  <Text>
                    The coefficient of rolling resistance quantifies the friction your wheel encounters as it rolls, and
                    depends on the tube/tire you use, your tire pressure, and the surface you're riding on.
                    You can find an very comprehensive database of rolling
                    resistances <RadixLink href="https://www.bicyclerollingresistance.com/road-bike-reviews">here</RadixLink>.
                  </Text>
                  <Text>
                    Note that the website above reports wattage values at a given velocity and weight. To convert to
                    unitless <Code>Crr</Code>, use the formula: <Code>Crr = P / (W * v * g)</Code> where
                    <Code>P</Code> is the reported rolling loss in watts, <Code>v</Code> is the velocity of the
                    test and <Code>g = 8.91</Code>.
                  </Text>
                  </Flex>
                }
              />
              <FormField
                control={form.control}
                name="avgCrr"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <NumberInput
                        {...field}
                        placeholder="Lower is better"
                        step={0.0005}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Flex gap="2">
                <Indicator
                  value={_avgCrr}
                  choices={[
                    { label: "Bad", value: presetsCRR.bad, color: "orange" },
                    { label: "Average", value: presetsCRR.average, color: "yellow" },
                    { label: "Good", value: presetsCRR.good, color: "blue" },
                    { label: "Great", value: presetsCRR.excellent, color: "green" }
                  ]}
                  setValue={(v) => form.setValue("avgCrr", v)}
                />
              </Flex>
            </Flex>

            <Flex direction="column" gap="2" className="w-full">
              <Label
                title="Drivetrain loss"
                units="%"
                description="This is the percentage of pedaling power that is lost due to friction in your chain and drivetrain. It's typically in the 2-5% range and can be reduced by things like cleaning and waxing your chain."
              />
              <FormField
                control={form.control}
                name="lossDrivetrain"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                    <NumberInput
                      {...field}
                      placeholder="Lower is better"
                      step={0.1}
                      min={0.1}
                      max={20}
                      required
                    />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Flex gap="2">
                <Indicator
                  value={_dtl}
                  choices={[
                    { label: "Bad", value: presetsDtl.bad, color: "orange" },
                    { label: "Average", value: presetsDtl.average, color: "yellow" },
                    { label: "Good", value: presetsDtl.good, color: "blue" },
                    { label: "Great", value: presetsDtl.excellent, color: "green" }
                  ]}
                  setValue={(v) => form.setValue("lossDrivetrain", v)}
                />
              </Flex>
            </Flex>
          </Flex>

          <Flex direction="column" gap="2" className="w-full">
            <Label
              title="CdA"
              units="m2"
              description={
                <Flex gap="2" direction="column">
                  <Text>
                    Your coefficient of drag, or <Code>CdA</Code>, is a measure of how aerodynamic you are, and is one of the most important parameters for race performance.
                  </Text>
                  <Text>
                    If you have a wind tunnel or track, you can measure this. Otherwise, the "Chung method" can be used for estimation, and there are several "aerometers" on the market now that combine measurement and estimation.
                  </Text>
                  <Text>
                    If you don't know this number, you can do some googling about your bike setup
                    and position to make an educated guess.
                  </Text>
                </Flex>
              }
            />
            <FormField
              control={form.control}
              name="avgCdA"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                  <NumberInput
                    {...field}
                    placeholder="Lower is better"
                    step={0.005}
                    min={0.1}
                    max={0.5}
                    required
                  />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Flex gap="2" wrap="wrap">
              <Indicator
                value={_cda}
                choices={[
                  { label: "Upright", value: presetsCdA.upright, color: "orange" },
                  { label: "Drops", value: presetsCdA.drops, color: "yellow" },
                  { label: "Aero", value: presetsCdA.aero, color: "blue" },
                  { label: "Pro", value: presetsCdA.pro, color: "green" }
                ]}
                setValue={(v) => form.setValue("avgCdA", v)}
              />
            </Flex>
          </Flex>
        </Grid>
        <Button
          className=""
          type="submit"
          disabled={loading}
        >
          {
            loading ?
              <Flex align="center"><Loader2 className="mr-2 h-4 w-4 animate-spin" /><Text>Simulating</Text></Flex> :
              "Run simulation"
          }
        </Button>
        </form>
      </Form>
    </Flex>
  );
}