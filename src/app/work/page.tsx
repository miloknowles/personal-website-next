import VisualSection from "@/components/Visual/section";
import { CalloutIcon, CalloutRoot, CalloutText, Container, Flex, Heading, Section, Text } from "@radix-ui/themes";
import { IconAlertCircleFilled } from "@tabler/icons-react";


export default function Page() {
  return (
    <main>
      <Section size="3">
        <Container size="4">
          <Flex direction="column" gap="3">
            <Heading size="9">Work</Heading>
            <CalloutRoot color="indigo">
              <CalloutIcon>
                <IconAlertCircleFilled/>
              </CalloutIcon>
              <CalloutText>
                This page is still under development.
              </CalloutText>
            </CalloutRoot>
          </Flex>
        </Container>
      </Section>
      <Section size="2">
        <VisualSection/>
      </Section>

      <Section size="2">
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
      </Section>
    </main>
  );
}