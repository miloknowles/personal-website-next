import { InfoCircledIcon } from "@radix-ui/react-icons";
import { CalloutIcon, CalloutRoot, CalloutText, Code, Container, Flex, Heading, Section, Text } from "@radix-ui/themes";
import { Link as RadixLink } from "@radix-ui/themes"

export default function Tool() {
  return (
    <main className="min-h-screen">
      <Section size={{initial: "1", lg: "2"}} pl="3" pr="3">
        <Container size="4">
          <Flex direction="column" gap="4" className="max-w-lg" justify="center">
            <Heading size="8">Bike Split Simulator</Heading>
            <Text className="pt-2">
              This tool helps you predict what your race time will be on a bike course, taking into
              account the elevation profile and parameters like your average power and rolling resistance.
            </Text>
            <Text>
              The simulation engine reads in a <Code>.gpx</Code> or <Code>.fit</Code> file, and then
              simulates what would happen if you cycle at a constant, average race power.
            </Text>
            <Text>
              My goal is to (1) help others figure out what a realistic bike split might be, and (2) more
              importantly, see how changing parameters will affect their race performance.
            </Text>
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
          </Flex>
        </Container>
      </Section>
    </main>
  );
}