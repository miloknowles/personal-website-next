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
              Hi, I'm <span style={{color: "var(--indigo-10)"}}>Milo</span> – a software engineer focused on climate.
            </Heading>
            </Flex>
            <Grid columns={{initial: "1", md: "2"}} gap="6" width="auto" className="text-lg">
              <Flex direction="column" gap="3">
                <Text className="fade-order-2">
                  I studied Computer Science and Artificial Intelligence at MIT, where my research focused on vision for autonomous <Link href="https://www.csail.mit.edu/research/robust-robotics-group">robots</Link>.
                  Since then, I've explored a lot of different technical areas: autonomous <Link href="https://www.linkedin.com/company/optimus-ride/">cars</Link>/<Link href="https://www.skydio.com/">drones</Link>,
                  ocean farming, the <Link href="https://singularity.energy/">energy grid</Link>,
                  carbon crediting, alternative proteins, and biomanufacturing. In two words, I'd say I’m a <Link href="https://nav.al/optimism">rational optimist</Link>;
                  I like to spend my time thinking about how the world could
                  and should get even better.
                </Text>
                <Text className="fade-order-3">
                  The problems that I think and <Link href="/blog">write</Link> about the most are climate change and the food system. I believe that a sustainable food
                  system is the most important lever for addressing climate change, and that we need more
                  attention and innovation there.
                </Text>
                <Text className="fade-order-4">
                  Currently, I'm a software engineer at <Link href="https://www.synonym.bio" target="_blank">Synonym</Link>, which
                  develops infrastructure for the emerging bioeconomy. If you're working on biomanufacturing or alternative proteins,
                  I'd love to chat.
                </Text>
                <Text className="fade-order-5">
                  Outside of work, I enjoy <Link href="https://www.strava.com/athletes/6914634">triathlon</Link> and following endurance sports.
                  You'll usually find me biking, running, or at the pool.
                </Text>
              </Flex>
              <ResponsiveImage
                src="/munich.jpg"
                alt="Picture taken while visiting Munich, Germany"
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
