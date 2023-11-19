import { RocketIcon } from '@radix-ui/react-icons';
import { CalloutIcon, CalloutRoot, CalloutText, Container, Flex, Grid, Heading, Section, Text } from '@radix-ui/themes';
import Image from 'next/image';


const ResponsiveImage = (props: { src: string, alt: string, style: any }) => (
  <div
    style={{
      position: "relative",
      objectPosition: "top",
      height: "100%",
      width: "100%",
      overflow: "hidden",
      borderRadius: "4px",
      ...props.style
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
      <Section size={{initial: "1", lg: "2"}} pl="3" pr="3">
        <Container size="3">
          <Flex direction="column" gap="6">
            <Flex gap="6"> 
            <Heading size="9" style={{maxWidth: "800px"}}>
              Hi, I'm <span style={{color: "var(--jade-10)"}}>Milo</span> – a software engineer focused on climate and the food system.
            </Heading>
            </Flex>
            <Grid columns={{initial: "1", md: "2"}} gap="6" width="auto">
              <Flex direction="column" gap="3">
                <Text>
                  I studied computer science and artifical intelligence at MIT, where my research focused
                  on computer vision for autonomous robotics. I've worked on self-driving cars and drones,
                  data science for the energy grid, carbon crediting for plant-based foods, and a
                  variety of full-stack web projects.
                </Text>
                <Text>
                  After leaving college, I started to spend more and more of my time thinking about the connections
                  between climate change and the food system – in particular, the ecological implications
                  of eating 70+ billion animals each year.
                </Text>
              </Flex>
              <Flex direction="column" gap="3">
                <Text>
                  Right now, I'm working on launching an advance market commitment initiative for
                  alternative proteins. Stay tuned for updates!
                </Text>
                <Text>
                  Outside of work, I love training and geeking out about endurance sports.
                  You'll usually find me biking, running, or at the pool.
                </Text>
                <CalloutRoot color="jade">
                  <CalloutIcon>
                    <RocketIcon/>
                  </CalloutIcon>
                  <CalloutText>
                    If you're working on a something that benefits the climate or farmed animals and it seems
                    like I could help, please have a low bar for reaching out.
                  </CalloutText>
                </CalloutRoot>
              </Flex>
            </Grid>
            <Grid columns={{initial: "1", sm: "2"}} gap={{initial: "3", sm: "4", md: "6"}}>
              <ResponsiveImage src="/gray.jpg" alt="A picture of me" style={{minHeight: "500px"}}/>
              <ResponsiveImage src="/triathlon_gray.jpg" alt="Finishing 70.3 Timberman" style={{minHeight: "500px"}}/>
            </Grid>
          </Flex>
        </Container>
      </Section>
    </main>
  )
}
