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
      <Section size={{initial: "1", md: "2", lg: "3"}} pl="3" pr="3" pb="9">
        <Container size="4">
          <Flex direction="column" gap="6">
            <Flex gap="6"> 
            <Heading size="9" style={{maxWidth: "800px"}} className="fade-order-1">
              Hi, I'm <span style={{color: "var(--indigo-10)"}}>Milo</span> – a software engineer
              working on climate.
            </Heading>
            </Flex>
            <Grid columns={{initial: "1", md: "2"}} gap="6" width="auto" className="text-lg">
              <Flex direction="column" gap="3">
                <Text className="fade-order-2">
                  I studied Computer Science and Artificial Intelligence at MIT, where my research focused on vision for autonomous robots.
                  Since then, I've explored a lot of different technical areas: autonomous cars/drones, ocean farming, the energy grid,
                  carbon crediting, alternative proteins, and biomanufacturing. In two words, I'd say I’m a
                  rational optimist; I like to spend my time thinking about how the world could
                  and should get even better.
                </Text>
                <Text className="fade-order-3">
                  The problems I work and write on the most are climate change and the food system. I believe that a sustainable food
                  system is the most important lever for addressing climate change, and that we need more
                  attention and innovation there.
                </Text>
                <Text className="fade-order-4">
                  Currently, I'm a software engineer at <Link href="https://www.indigoag.com" target="_blank">Synonym</Link>, which
                  develops infrastructure for the emerging bioeconomy. If you're working on biomanufacturing or alternative proteins,
                  I'd love to chat.
                </Text>
                <Text className="fade-order-5">
                  Outside of work, I love training and geeking out about endurance sports.
                  You'll usually find me biking, running, or at the pool.
                </Text>
                {/* <CalloutRoot color="gray" className="fade-order-6 mt-4">
                  <CalloutIcon>
                    <RocketIcon/>
                  </CalloutIcon>
                  <CalloutText>
                    If you're working on a project that's good for the world and it seems
                    like I could help, please have a low bar for reaching out.
                  </CalloutText>
                </CalloutRoot> */}
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
