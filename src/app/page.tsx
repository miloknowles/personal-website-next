import { Box, Container, Flex, Grid, Heading, Section, Text } from '@radix-ui/themes';
import Image from 'next/image';


const ResponsiveImage = (props: { src: string, alt: string }) => (
  <div
    style={{
      position: "relative",
      objectPosition: "top",
      height: "100%",
      width: "100%",
      overflow: "hidden",
    }}
  >
    <Image
      src={props.src}
      alt={props.alt || ""}
      style={{objectFit: "cover"}}
      fill={true}
    />   
  </div>
);


export default function Home() {
  return (
    <main className="">
      <Section size="3">
        <Container size="4">
          <Flex direction="column" gap="9">

            <Grid columns="2" gap="6" width="auto">
              <Flex direction="column" gap="3">
                <Heading size="9">
                  Hi, I'm Milo – a software engineer focused on climate and the food system.
                </Heading>
                <Text>
                  I studied computer science and artifical intelligence at MIT, where I did research on computer vision for autonomous robots. I've worked autonomous cars/drones, seaweed-farming robots, data science for the energy grid, and full-stack web.
                </Text>
                <Text>
                  After leaving college, I started to spend more and more of my time thinking about the connections between climate change and the food system – in particular, the ethical and ecological implications of eating 70+ billion animals each year.
                </Text>
                <Text>
                  Outside of work, I love training, and you'll usually find me biking, running, or at the pool.
                </Text>
              </Flex>
              <Flex direction="column">
              </Flex>
            </Grid>

            <Grid columns="4" gap="4" style={{minHeight: 400}}>
              <ResponsiveImage src="/tall.jpg" alt="A picture of me"/>
              <ResponsiveImage src="/redwoods.jpg" alt="A picture of me"/>
              {/* <ResponsiveImage src="/running4.jpg" alt="A picture of me"/> */}
              <ResponsiveImage src="/timberman.jpg" alt="A picture of me"/>
            </Grid>

          </Flex>
        </Container>
      </Section>
    </main>
  )
}
