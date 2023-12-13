import { RocketIcon } from '@radix-ui/react-icons';
import { CalloutIcon, CalloutRoot, CalloutText, Container, Flex, Grid, Heading, Link, Section, Text } from '@radix-ui/themes';
import Image from 'next/image';


const ResponsiveImage = (props: { src: string, alt: string, style: any, className?: string }) => (
  <div
    className={`shadow-lg ${props.className}`}
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
            <Heading size="9" style={{maxWidth: "800px"}} className="fade-order-1">
              Hi, I'm <span style={{color: "var(--indigo-10)"}}>Milo</span> – a software engineer focused on climate and the food system.
            </Heading>
            </Flex>
            <Grid columns={{initial: "1", md: "2"}} gap="6" width="auto">
              <Flex direction="column" gap="3">
                <Text className="fade-order-2">
                  I studied computer science and artifical intelligence at MIT, where my research focused
                  on computer vision for autonomous robotics. I've worked on self-driving cars and drones,
                  data science for the energy grid, carbon crediting for plant-based foods, and a
                  variety of full-stack web projects.
                </Text>
                <Text className="fade-order-3">
                  After leaving college, I started to spend more and more of my time thinking about the connections
                  between climate change and the food system – in particular, the ecological implications
                  of eating 70+ billion animals each year.
                </Text>
              </Flex>
              <Flex direction="column" gap="3">
                <Text className="fade-order-4">
                  Right now, I'm working on launching an advance market commitment initiative for
                  alternative proteins called <Link href="https://foodforthefuture.earth" target="_blank">Food for the Future</Link>. Stay tuned for updates!
                </Text>
                <Text className="fade-order-5">
                  Outside of work, I love training and geeking out about endurance sports.
                  You'll usually find me biking, running, or at the pool.
                </Text>
                <CalloutRoot color="gray" className="fade-order-6">
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
          </Flex>
        </Container>
      </Section>
      <Section size={{initial: "1", lg: "2"}} pl="3" pr="3">
        <Container size="3">
          <Grid columns={{initial: "1", sm: "3"}} gap={{initial: "3", sm: "4", md: "6"}}>
            <ResponsiveImage src="/color.jpg" alt="A picture of me" style={{minHeight: "400px"}} className="fade-order-7"/>
            <ResponsiveImage src="/redwoods.jpg" alt="A picture of me" style={{minHeight: "400px"}} className="fade-order-8"/>
            <ResponsiveImage src="/triathlon_color.jpg" alt="Finishing 70.3 Timberman" style={{minHeight: "400px"}} className="fade-order-9"/>
          </Grid>
        </Container>
      </Section>
    </main>
  )
}
