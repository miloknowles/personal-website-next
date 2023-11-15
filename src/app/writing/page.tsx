import { Container, Flex, Heading, Section, Separator, Text } from "@radix-ui/themes";


export default function Page() {
  return (
    <main>
      <Section size={{initial: "1", md: "3"}}>
        <Container size="3">
          <Flex direction="column" gap="5">
            <Heading size="9">
              Writing
            </Heading>
            <Separator size="4"/>
            <Heading size="7">
              Blog Posts
            </Heading>
            <Heading size="7">
              Other Stuff
            </Heading>
          </Flex>
        </Container>
      </Section>
    </main>
  );
}