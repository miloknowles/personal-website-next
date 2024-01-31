import { Text, Heading, Code, Strong } from "@radix-ui/themes";
import { Metadata } from "next";
import Link from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

import { BlogSection, BlogWrapper, ContentContainer, SidenotesContainer } from "@/components/Blog/Wrappers";
import Header from "@/components/Blog/Header";
import { Ref, Sidenote, SidenoteAutoLayout } from "@/components/Blog/Sidenotes";


export const metadata: Metadata = {
  title: 'Blue Meadow: What I learned from a year as a solo founder',
  description: "Over the past 15 months, I took an unexpected detour in my life to work on a startup.",
}


export default function Post() {
  return (
    <BlogWrapper>
      <BlogSection>
        {/* MAIN CONTENT */}
        <ContentContainer>
          <Header
            title="Blue Meadow: What I learned from a year as a solo founder"
            publishDate="January, 2022"
            sidenoteWarning
          />

          <Text>
            Over the past 15 months, I took an unexpected detour in my life to work on a startup.
          </Text>
          <Text>
            Because I spent most of that time as a solo founder, summarizing my
            thoughts in writing became my proxy for having a co-founder to bounce
            ideas off of. Similar to the <Link href="https://en.wikipedia.org/wiki/Rubber_duck_debugging">rubber duck</Link> that a
            software engineer might be familiar with, writing is my way of forcing myself to examine what I’m doing.
          </Text>
          <Text>
            I’m the kind of person who’s always looking at the <i>next</i> thing I want to do, and I miss a lot of insight as a
            result. It’s really tempting to put the last year of work behind me and move on, but I need to take a snapshot of my perspective first.
          </Text>
          <Text>
            Here are some of the lessons I’ve learned, most of them the hard way.
          </Text>

          {/* --- */}
          <Heading size="6">Without meta-goals, entrepreneurship is a slippery slope</Heading>

          <Text>
            When I went back to MIT for my masters, I knew that I wanted to work on climate-tech. Although I was in a
            robotics lab and had sort of specialized in computer vision by this point, the problems I cared about
            were all environmental. Through a little bit of cognitive dissonance, I wrote a thesis and paper on
            uncertainty learning and stereo vision while planning my pivot towards something more meaningful.
          </Text>

          <Text>
            I finished my degree during the first summer of COVID, and started looking for my way into climate-tech. At
            the time, it felt like there was very little for a roboticist to work on within the space. (In retrospect, there were many opportunities, and I just wasn’t looking hard enough). Then I learned about seaweed farming and was immediately hooked.
          </Text>

          <Text>
            If scaled, seaweed can be a sustainable, drop-in replacement for terrestrial sources of biomass like
            corn and soy. There are a ton of cool startups making food, animal feed, plastics, fertilizers, biofuels,
            and more out of it.<Ref id="ref-1-seaweed">1</Ref> I became convinced that, like terrestrial agriculture, seaweed aquaculture
            needed <i>automation</i> to scale and become cost-competitive.
          </Text>

          <Text>
            Thus began Blue Meadow, with the mission of automating large offshore seaweed farms with robots. To deal with some of the permitting and space constraints of near-shore aquaculture, we would even site the farms at decommissioned, offshore oil platforms.
          </Text>

          <Text>
          I want to emphasize that I hadn’t even considered starting a company until this idea came along. My thinking at the time was something like: “COVID is happening... what a great opportunity for me to explore this idea I’m excited about.”
          </Text>

          <Text>
            <Strong>The hard questions I hadn’t asked myself were:</Strong>
          </Text>

          <ul style={{listStyleType: "circle", paddingLeft: "1.5rem"}}>
            <li>
              What is the opportunity cost of starting a company?
            </li>
            <li>
              If this idea doesn’t work, will you find a new idea or go get a job?
            </li>
            <li>
              What are your criteria for giving up?
            </li>
          </ul>

          <Text>
          Since then, I changed ideas two more times and joined a blue-tech accelerator in between Blue Meadow V2 and V3. I went from ocean farming robots to an environmental monitoring system for seaweed and oyster farms, and then finally landed on a software platform that would streamline the carbon crediting process for environmental restoration projects with remote sensing.
          </Text>

          <Text>
          I’ve discovered that I love the early ideation process of startups. When it came time to pivot, I always had more enthusiasm for the next idea than the one before. Since I hadn’t established a stopping criterion, I kept going and going, without questioning the opportunity cost of doing so.
          </Text>

          <Text>
          Ultimately, opportunity cost caught up with me. Working on Blue Meadow had turned up so many cool climate-tech companies that I was no longer convinced that I would maximize my impact (or wellbeing) by continuing alone.
          </Text>

          <Heading size="6">Be objective about founder-product fit</Heading>

          <Text>
          During Blue Meadow (V2), I was developing a sensor package that would be deployed on
          seaweed and oyster farms to collect environmental data. I should note that I
          have minimal hardware experience. I knew enough to <i>start</i> - I can do CAD, 3d print and laser cut parts, and
          connect sensors to a Raspberry Pi - but also knew that I would eventually be blocked by my
          lack of a hardware co-founder. That should’ve been an obvious red flag indicating poor founder-product fit.
          </Text>
          <Text>
          I’m the kind of person who, for the most part, doesn’t let a lack of experience prevent them from diving into something new. But I’ve learned to (reluctantly) let an idea go if my skillset doesn’t overlap with some core part of it.
          </Text>

          {/* --- */}
          <Heading size="6">Team {'>'} Idea {'>'} Hard Work</Heading>
          <Text>I had this ordering reversed when I started out.</Text>

          {/* --- */}
          <Heading size="6">Co-founders filter out personal noise</Heading>
          <Text>If I had to model my instantaneous level of optimism in pseudocode, it would be something like:</Text>
          <Code size="3">
            Optimism(t) = RationalSignal(t) + PersonalBias(t) + PersonalNoise(t)
          </Code>
          <Text>
          The rational signal is how “good” an idea actually is on paper, based on the data you have so far: feedback
          from customers, market size, progress on the product, etc. Added to that is some amount of personal bias.
          I tend to be biased toward optimism (i.e, that term is positive), although this bias term occasionally wen
          negative after a few weeks of consistent setbacks or frustration in other areas of life.
          </Text>
          <Text>
            Finally, there is a noise term, which includes things like day-to-day mood, how much sleep
            you got last night, reading a news article about your competitor, drinking too much coffee,
            spending hours trying to re-calibrate a 3D printer, or talking to someone who’s excited about
            your idea. All of these factors influence outlook, but are uncorrelated with how good an
            idea is; they are noise.<Ref id="ref-2-noise">2</Ref>
          </Text>
          <Text>
            Assuming your co-founder’s life noise is independent from your own, then averaging together
            your levels of optimism should neutralize that term. I often wished that I had someone else in
            the loop to help pull me through the tough days, and keep me grounded when I was being naive
            or unrealistically optimistic.
          </Text>

          {/* --- */}
          <Heading size="6">Confidence is a practice (for me)</Heading>
          <Text>
          Pitches, customer interviews, and networking events were all anxiety-inducing to me in
          the beginning. In general, I’m introverted and great at underselling myself; I was
          the CEO by default and not by choice.
          </Text>
          <Text>
          All of these shortcomings improved with practice, but not permanently. If it had been a while
          since I’d pitched or done an interview, then I found the need to “warm up” again. My takeaway
          is that confidence can absolutely be learned, but if you’re like me, you have to keeping using it or lose it.
          </Text>

          {/* --- */}
          <Heading size="6">Personal life downsides</Heading>
          <ul style={{listStyleType: "circle", paddingLeft: "1.5rem"}}>
            <li>
              It’s hard to decouple your personality from your startup. For better or for worse, I became the seaweed guy.
            </li>
            <li>
              It becomes hard to justify technical exploration that doesn’t benefit
              the startup. When I was doing my masters, I still had the mental bandwidth
              for side projects (e.g building an indoor hydroponic lettuce garden), but
              not while working on Blue Meadow. That’s partly a personal choice that I made.
            </li>
            <li>
            You can’t train quite as hard. I trained for two marathons during 2021, and had a lot
            of nagging minor injuries that wouldn’t seem to go away. I also felt a little
            “flat” on more of my weekly runs than usual. I can't blame all of this
            on doing a startup, but I’ve come to appreciate the impact of stress
            (multiplied by 3-4 coffees per day) on physical recovery.
            </li>
          </ul>

          {/* --- */}
          <Heading size="6">Collect enough information, and it all cancels out to zero</Heading>
          <Text>
          I first heard the above maxim on the Naval podcast, and encountered it a lot in practice. I’ll give a seaweed-related example.
          </Text>
          <Text>
          There are two simultaneous ideologies within the emerging US kelp industry:
          </Text>
          <ol>
            <li>
            The industry should be made up of small, locally-run farms. Automation and consolidation ruined terrestrial agriculture, and are the enemy. GreenWave and Bren Smith’s book exemplify this point of view.
            </li>
            <li>
            Seaweed farming is a promising climate solution that needs to be quickly and massively scaled. In order to reduce the $/ton production cost, we need selective breeding, automation, data-driven farming, and massive offshore sites that benefit from economies of scale. The ARPA-E MARINER program is a good example.
            </li>
          </ol>
          <Text>
          Although small farms and industrial seaweed production can coexist, these two directions have different sets of problems to solve and require different roadmaps. Many of the articles, podcasts, and companies that evangelize seaweed farming cherry-pick the advantages of both. I think it’s unfair to appeal to the environmental benefits of seaweed farming while opposing the technological advances needed for it to reach a meaningful scale (and price point).
          </Text>
          <Text>
          These seemingly contradictory points of view confused me a lot early on. I started working
          on seaweed farming robots because of <i>#2</i>, and then got discouraged because I did
          the majority of my customer interviews with people in the <i>#1</i> bucket.
          </Text>
          <Text>
          Now that I think about it, Blue Meadow V2’s product (an IoT environmental
          monitoring system) was an attempt to satisfy <i>both</i> points of view. It didn’t automate
          a kelp farmer’s job, but it was a technological step towards improving farm productivity.
          I basically took the average of all the information and opinions I had collected
          and tried to turn that into a product (bad idea).
          </Text>
          <Text>
          By choosing to solve one problem, you are necessarily choosing not to solve others.
          Being clear about which problems and opinions you’re <i>not</i> going to worry about
          is important for making progress.
          </Text>

          {/* --- */}
          <Heading size="6">Work on the problem(s) that give you the most FOMO</Heading>
          <Text>
          Towards the end of Blue Meadow (early December 2021), I started discovering all kinds of cool companies involved in carbon removal (e.g, NCX, sHYp, Phykos) and animal welfare (e.g, Transfarmation, and a multitude of alt-protein companies). I realized that if I didn’t contribute in one of those two domains, a huge amount of progress would pass me by over the next decade and I’d regret it.
          </Text>
          <Text>
          I’ve been using FOMO as a thought experiment to help myself figure out what I want to work
          on next. For example: “If I pursue problem X, and some other company <i>solves</i> problem Y, would I be disappointed?”
          </Text>

          {/* --- */}
          <Heading size="6">Time spent exploring an important problem is never wasted</Heading>
          <Text>
          The initial idea for Blue Meadow and the subsequent pivots were the result of open-ended
          exploration into problems that I thought were interesting or important. I’m certain that
          some of the obscure information I’ve dug up over the past year will become relevant
          in some unexpected way in the future. It always seems to.
          </Text>

          {/* --- */}
          <Heading size="6">Sources of optimism</Heading>
          <Text>
            <ul style={{listStyleType: "lower-roman", paddingLeft: "2rem"}}>
              <li>
                How to Get Rich: Every Episode (The Naval Podcast)
              </li>
              <li>
                Skin in the Game (Nassim Nicholas Taleb)
              </li>
              <li>
                Any of Paul Graham’s essays
              </li>
            </ul>
          </Text>
        </ContentContainer>

        {/* SIDENOTES */}
        <SidenotesContainer>
          <SidenoteAutoLayout gapPx={16}>
            <Sidenote refId="ref-1-seaweed" refTag="1">
              Check out Akua, Symbrosia, Notpla, Sway, and C-Combinator.
            </Sidenote>

            <Sidenote refId="ref-2-noise" refTag="2">
              "Life noise" reminds me of the <Link href="https://www.scientificamerican.com/article/lunchtime-leniency/">"lunchtime leniency"</Link> example from
              Thinking Fast and Slow, where judges are more likely to grant parole after a snack break.
            </Sidenote>
          </SidenoteAutoLayout>
        </SidenotesContainer>
      </BlogSection>
    </BlogWrapper>
  );
}
