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
      <Section size={{initial: "1", md: "2", lg: "3"}} pl="3" pr="3" pb="6">
        <Container size="4">
          <Flex direction="column" gap="6">
            <Flex gap="6"> 
            <Heading size="9" style={{maxWidth: "800px"}} className="fade-order-1">
              Hi, I'm <span style={{color: "var(--indigo-10)"}}>Milo</span> – a software engineer focused on climate change, AI, and the food system.
            </Heading>
            </Flex>
            <Grid columns={{initial: "1", md: "2"}} gap="6" width="auto" className="text-lg">
              <Flex direction="column" gap="3">
                <Text className="fade-order-2">
                  I studied computer science and AI at MIT, where my research focused
                  on vision for autonomous robots. I've worked on self-driving cars and drones,
                  data science for the energy grid, carbon crediting for sustainable foods, and a
                  variety of full-stack web projects.
                </Text>
                <Text className="fade-order-3">
                  My main focus is on climate change and the food system – in particular, the ecological implications
                  of eating 70+ billion animals each year. I believe that a sustainable food system is the most
                  important lever for addressing climate change, and that we need more solutions, speed, and scale there.
                </Text>
              </Flex>
              <Flex direction="column" gap="3">
                <Text className="fade-order-4">
                  Right now, I'm looking for my next role, ideally in alternative proteins,
                  biomanufacturing, beneficial AI, or climate tech more broadly.
                  I'm also taking some time to learn about these problem spaces and write more. Stay tuned!
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
                    If you're working on a project that's good for the world and it seems
                    like I could help, please have a low bar for reaching out.
                  </CalloutText>
                </CalloutRoot>
              </Flex>
            </Grid>
          </Flex>
        </Container>
      </Section>
      <Section size={{initial: "1", md: "2", lg: "3"}} pl="3" pr="3" pt="6">
        <Container size="4">
          <Grid columns={{initial: "1", sm: "3"}} gap={{initial: "3", sm: "4", md: "6"}}>
            <ResponsiveImage
              src="/munich.jpg" alt="Visiting Munich" style={{minHeight: "500px"}} className="fade-order-7"/>
            <ResponsiveImage
              src="/redwoods.jpg" alt="The redwoods in California" style={{minHeight: "500px"}} className="fade-order-8"/>
            <ResponsiveImage
              src="/triathlon_color.jpg" alt="Finishing a half Ironman in Laconia, NH" style={{minHeight: "500px"}} className="fade-order-9"/>
          </Grid>
        </Container>
      </Section>
    </main>
  )
}
