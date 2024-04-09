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
              Hi, I'm <span style={{color: "var(--indigo-10)"}}>Milo</span> – a software engineer
              interested in climate change, AI, and the food system.
            </Heading>
            </Flex>
            <Grid columns={{initial: "1", md: "2"}} gap="6" width="auto" className="text-lg">
              <Flex direction="column" gap="3">
                <Text className="fade-order-2">
                  I studied CS and AI at MIT, where my research focused on vision for autonomous robots.
                  I've worked on autonomous cars/drones, ocean farming, data science for the energy grid,
                  carbon crediting for sustainable food, and a lot of different software projects. I’m a
                  rational optimist, and like to spend my free time thinking about how the world should
                  and could get even better.
                </Text>
                <Text className="fade-order-3">
                  My main focus so far is climate change and the food system – in particular, the ecological
                  implications of eating 70+ billion animals each year. I believe that a sustainable food
                  system is the most important lever for addressing climate change, and that we need more
                  attention, speed, and scale there.
                </Text>
                <Text className="fade-order-4">
                  Right now, I'm exploring jobs, especially in alternative proteins, biomanufacturing,
                  beneficial AI, and climate-tech more broadly. I'm also taking some time to learn about
                  these problem spaces and improve my worldview. Stay tuned!
                </Text>
                <Text className="fade-order-5">
                  Outside of work, I love training and geeking out about endurance sports.
                  You'll usually find me biking, running, or at the pool.
                </Text>
                <CalloutRoot color="gray" className="fade-order-6 mt-4">
                  <CalloutIcon>
                    <RocketIcon/>
                  </CalloutIcon>
                  <CalloutText>
                    If you're working on a project that's good for the world and it seems
                    like I could help, please have a low bar for reaching out.
                  </CalloutText>
                </CalloutRoot>
              </Flex>
              <ResponsiveImage
                src="/munich.jpg"
                alt="Visiting Munich"
                style={{minHeight: "500px"}}
                className="fade-order-7"
              />
            </Grid>
          </Flex>
        </Container>
      </Section>
    </main>
  )
}
