import VisualSection from "@/components/Visual/section";
import { Container, Flex, Heading, Section, Text } from "@radix-ui/themes";


export default function Page() {
  return (
    <main>
    <Section size="3">
      <Container size="4">
        <Flex direction="column" gap="3">
          <Heading size="9">Portfolio</Heading>
          <Text>
            These are some samples of work I've done.
          </Text>
        </Flex>
      </Container>
    </Section>
    <Section size="2">
      <VisualSection/>
    </Section>

    <Section size="2">
      <Container size="4">
        <Flex direction="column" gap="3">
          <Heading size="8">Web development</Heading>
          <Text>
            These are some samples of work I've done.
          </Text>
        </Flex>
      </Container>
    </Section>

    <Section size="2">
      <Container size="4">
        <Flex direction="column" gap="3">
          <Heading size="8">Design</Heading>
          <Text>
            These are some samples of work I've done.
          </Text>
        </Flex>
      </Container>
    </Section>

    <Section size="2">
      <Container size="4">
        <Flex direction="column" gap="3">
          <Heading size="8">Computer vision & machine learning</Heading>
          <Text>
            These are some samples of work I've done.
          </Text>
        </Flex>
      </Container>
    </Section>
    </main>
  );
}