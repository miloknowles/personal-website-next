import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { CalloutIcon, CalloutRoot, CalloutText, Code, Container, DialogContent, DialogRoot, DialogTrigger, Flex, Heading, Section, Separator, Text } from "@radix-ui/themes";
import { Link as RadixLink } from "@radix-ui/themes"
import ChooseCourse from "./ChooseCourse";
import { Input } from "@/components/ui/input";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


const CourseCallout = () => (
  <CalloutRoot>
    <CalloutIcon>
      <InfoCircledIcon/>
    </CalloutIcon>
    <CalloutText>
      Don't see the course you're interested in? Send me
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


const Toolbar = () => {

  return (
    <Flex direction="column" gap="4" className="max-w-sm" justify="center" align="start">
      {/* <Heading size="8">Bike Split Simulator</Heading> */}
      <DialogRoot>
        <DialogTrigger>
          <Button variant="secondary">How it works</Button>
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
      <Heading size="7">Inputs</Heading>

      <ChooseCourse/>
      <CourseCallout/>

      <Flex direction="column" gap="2" className="w-full">
        <Label title="Race power" units="W" description="This is the average power you plan to race at."/>
        <Input
          type="number"
          className="rounded-xl text-center"
          placeholder="Race power (watts)"
          // value={Math.floor(props.seconds / 60)}
          // onChange={e => props.setSeconds}
        />
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
        <Flex gap="2">
          <Button size="sm" className="rounded-xl text-xs" variant="secondary">Upright</Button>
          <Button size="sm" className="rounded-xl text-xs" variant="secondary">Drops</Button>
          <Button size="sm" className="rounded-xl text-xs" variant="secondary">Aero (avg)</Button>
          <Button size="sm" className="rounded-xl text-xs" variant="secondary">Aero (good)</Button>
          <Button size="sm" className="rounded-xl text-xs" variant="secondary">Aero (pro)</Button>
        </Flex>
        <Input
          type="number"
          className="rounded-xl text-center"
          placeholder="Typically around 0.2-0.4"
          // value={Math.floor(props.seconds / 60)}
          // onChange={e => props.setSeconds}
        />
      </Flex>

      <Flex direction="column" gap="2" className="w-full">
        <Label
          title="Coefficient of rolling resistance"
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
        <Input
          type="number"
          className="rounded-xl text-center w-full"
          placeholder="Typically around 0.002"
          // value={Math.floor(props.seconds / 60)}
          // onChange={e => props.setSeconds}
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
        <Input
          type="number"
          className="rounded-xl text-center w-full"
          placeholder="Typically around 0.002"
          // value={Math.floor(props.seconds / 60)}
          // onChange={e => props.setSeconds}
        />
      </Flex>

      <Flex gap="2" className="w-full">
        <Flex direction="column" gap="2">
          <Heading size="3">
            Mass of rider (<Code>kg</Code>)
          </Heading>
          <Input
            type="number"
            className="rounded-xl text-center"
            placeholder="kg"
            // value={Math.floor(props.seconds / 60)}
            // onChange={e => props.setSeconds}
          />
        </Flex>

        <Flex direction="column" gap="2">
          <Heading size="3">
            Mass of bike (<Code>kg</Code>)
          </Heading>
          <Input
            type="number"
            className="rounded-xl text-center"
            placeholder="kg"
            // value={Math.floor(props.seconds / 60)}
            // onChange={e => props.setSeconds}
          />
        </Flex>
      </Flex>

      <Button className="w-full">Run simulation</Button>
    </Flex>
  );
}


const Results = () => {

  return (
    <Flex grow="1" direction="column">
      <Heading size="8">Results</Heading>
    </Flex>
  )
}


export default function Tool() {
  return (
    <main className="min-h-screen px-3 py-3">
      <Flex gap="4">
        <Toolbar/>
        <Results/>
      </Flex>
    </main>
  );
}