import VisualSection from "@/components/Visual/section";
import { CalloutIcon, CalloutRoot, CalloutText, Container, Flex, Heading, Section, Text } from "@radix-ui/themes";
import { IconAlertCircleFilled } from "@tabler/icons-react";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Milo Knowles | Work',
  description: "Here are some examples of things I've worked on.",
}


export default function Page() {
  return (
    <main>
      <VisualSection/>
      <Section size={{initial: "1", md: "2", lg: "3"}} pl="3" pr="3">
        <Container size="4">
          <Flex direction="column" gap="3">
            <Heading size="9">Work</Heading>
            <CalloutRoot color="gray">
              <CalloutIcon>
                <IconAlertCircleFilled/>
              </CalloutIcon>
              <CalloutText>
                This page is still under development. Check back later...
              </CalloutText>
            </CalloutRoot>
          </Flex>
        </Container>
      </Section>
      
      {/* <Section size="2">
        <Container size="4">
          <Flex direction="column" gap="3">
            <Heading size="8">Web Development</Heading>
            <Text>
            </Text>
          </Flex>
        </Container>
      </Section>

      <Section size="2">
        <Container size="4">
          <Flex direction="column" gap="3">
            <Heading size="8">Computer Vision & Machine Learning</Heading>
            <Text>
            </Text>
          </Flex>
        </Container>
      </Section>

      <Section size="2">
        <Container size="4">
          <Flex direction="column" gap="3">
            <Heading size="8">Design</Heading>
            <Text>
            </Text>
          </Flex>
        </Container>
      </Section> */}
    </main>
  );
}