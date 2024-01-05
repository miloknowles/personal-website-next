import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Code, Flex, Grid, Heading, Text } from "@radix-ui/themes";


export default function FAQs() {
  return (
    <Flex direction="column" gap="6">
    <Heading size="7">FAQs</Heading>
    <Grid columns={{initial: "1", sm: "2"}} gap="6">
      <Accordion type="single" collapsible>
        <AccordionItem value="model-limitations">
          <AccordionTrigger>What are the limitations of this model?</AccordionTrigger>
          <AccordionContent>
            The model makes a few simplifying assumptions. First off, it simulates a <strong>constant,
            average race power</strong>, so it doesn't capture
            natural changes in power that would occur if you were going up a hill, passing
            someone, or coasting downhill. In addition, it assumes that your <strong><Code>CdA</Code> remains
            constant</strong>, and that you aren't switching between different aerodynamic positions.
            The simulator assumes <strong>no wind</strong> on the course, which could obviously have a significant impact on
            your time. Temperature, humidity, and your weight are assumed to stay constant for the duration of your race, although in
            practice this is not the case, especially for a 4+ hour Ironman bike split.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="model-features">
          <AccordionTrigger>What does the model consider?</AccordionTrigger>
          <AccordionContent>
            <Text className="mb-2">
              The simulator models the following:
            </Text>
            <ul>
              <li>
                ✅ The exact elevation profile of the bike course
              </li>
              <li>
                ✅ Constant pedaling power and % drivetrain losses
              </li>
              <li>
                ✅ Air density as a function of altitude, temperature, and relative humidity
              </li>
              <li>
                ✅ Drag forces as a function of your <Code>CdA</Code>
              </li>
              <li>
                ✅ Rolling resistance as a function of weight and <Code>Crr</Code>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Grid>
    </Flex>
  );
}