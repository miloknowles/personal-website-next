"use client";

import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import {
  CalloutIcon, CalloutRoot, CalloutText, Code, DialogContent,
  DialogRoot, DialogTrigger, Flex, Grid, Heading, IconButton, Text
} from "@radix-ui/themes";
import { Link as RadixLink } from "@radix-ui/themes"
import ChooseCourse from "./ChooseCourse";

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
import { Loader2, RulerIcon } from "lucide-react";
import { Badge, NumberInput, Select, SelectItem, Tab, TabGroup, TabList, TabPanel, TabPanels } from "@tremor/react";
import { presetsCRR, presetsCdA, presetsDtl } from "./presets";
import { IconCircle } from "@tabler/icons-react";


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


const Indicator = (props: { value: number, choices: { value: number, label: string, color: string }[], setValue: (v: number) => void }) => {
  const badges = props.choices.map((c, i) => (
  
    <Badge
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
    "https://training-tools-plum.vercel.app/simulate" :
    "http://localhost:8000";
  const [loading, setLoading] = useState(false);

  const { mutate } = useSWRConfig()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      average_power_watts: 250,
      average_cda: 0.27,
      crr: 0.005,
      loss_drivetrain: 3,
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

  const _crr = form.watch("crr");
  const _cda = form.watch("average_cda");
  const _dtl = form.watch("loss_drivetrain");

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
        
        {/* <TabGroup index={unitsTab} className="ml-auto w-fit" color="blue" onIndexChange={setUnitsTab}>
          <TabList className="mt-8" variant="solid">
            <Tab icon={IconRuler}>metric</Tab>
            <Tab icon={IconRuler2}>imperial</Tab>
          </TabList>
          <TabPanels>
            <TabPanel/>
            <TabPanel/>
          </TabPanels>
        </TabGroup> */}

        <Flex align="center" gap="3" className="ml-auto">
        <RulerIcon/>
        <Select
          value={units}
          onValueChange={v => setUnits(v as "imperial" | "metric")}
          className="w-fit"
          enableClear={false}
        >
          <SelectItem value="metric" icon={IconCircle}>
            metric
          </SelectItem>
          <SelectItem value="imperial" icon={IconCircle}>
            imperial
          </SelectItem>
        </Select>
        </Flex>
      </Flex>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Grid columns={{initial: "1", sm: "3", lg: "4"}} gap="6">
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
                name="mass_rider_kg"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <NumberInput
                        value={units === "metric" ? field.value : field.value * 2.20462}
                        onValueChange={(v) => form.setValue("mass_rider_kg", units === "metric" ? v : v / 2.20462)}
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
                name="mass_bike_kg"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <NumberInput
                        value={units === "metric" ? field.value : field.value * 2.20462}
                        onValueChange={(v) => form.setValue("mass_bike_kg", units === "metric" ? v : v / 2.20462)}
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
                  <Text>
                    This coefficient measures how much resistance your wheel encounters as it rolls, and
                    depends on the tube/tire you use and your tire pressure.
                    You can find an very comprehensive database of rolling
                    resistances <RadixLink href="https://www.bicyclerollingresistance.com/road-bike-reviews">here</RadixLink>.
                  </Text>
                }
              />
              <Flex gap="2">
                <Indicator
                  value={_crr}
                  choices={[
                    { label: "Bad", value: presetsCRR.bad, color: "orange" },
                    { label: "Average", value: presetsCRR.average, color: "yellow" },
                    { label: "Good", value: presetsCRR.good, color: "blue" },
                    { label: "Great", value: presetsCRR.excellent, color: "green" }
                  ]}
                  setValue={(v) => form.setValue("crr", v)}
                />
              </Flex>
              <FormField
                control={form.control}
                name="crr"
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
            </Flex>

            <Flex direction="column" gap="2" className="w-full">
              <Label
                title="Drivetrain loss"
                units="%"
                description="This is the percentage of power lost due to friction in your chain and drivetrain. It's typically in the 2-5% range and can be improved by things like waxing your chain, using ceramic bearings, and using optimal gearing."
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
                  setValue={(v) => form.setValue("loss_drivetrain", v)}
                />
              </Flex>
              <FormField
                control={form.control}
                name="loss_drivetrain"
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
              <Indicator
                value={_cda}
                choices={[
                  { label: "Upright", value: presetsCdA.upright, color: "orange" },
                  { label: "Drops", value: presetsCdA.drops, color: "yellow" },
                  { label: "Aero", value: presetsCdA.aero, color: "blue" },
                  { label: "Pro", value: presetsCdA.pro, color: "green" }
                ]}
                setValue={(v) => form.setValue("average_cda", v)}
              />
            </Flex>
            <FormField
              control={form.control}
              name="average_cda"
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