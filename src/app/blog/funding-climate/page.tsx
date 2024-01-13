import { Text, Heading, Flex, Code, Container, Section, Strong } from "@radix-ui/themes";
import { Metadata } from "next";
import { Link as RadixLink } from "@radix-ui/themes";
import { Ref, Sidenote, SidenoteColumn } from "@/components/Blog/Sidenotes";


export const metadata: Metadata = {
  title: 'How should companies and individuals fund climate mitigation?',
  description:
    "I spent about ~18 months working on a carbon offsetting startup. In the process, I\
    learned a lot about the voluntary carbon market and its limitations. The experience\
    has completely changed the way I think about the responsibility of companies and\
    individuals in the climate crisis. The good news is this: if you’re a company or\
    individual with money to contribute, you can have a much bigger impact on climate\
    change than the bad news about carbon markets might suggest.",
}


export default function Page() {
  return (
    <Section size={{initial: "1", md: "3"}} p={{initial: "3", md: "8"}}>
      <Container size="3">
        <Flex direction={{initial: "column", md: "row"}} gap="8">
          {/* MAIN CONTENT */}
          <div className="max-w-[600px] flex flex-col gap-3 relative" id="body-column">
            <Flex direction="column" gap="4" className="pb-4">
              <Text size="2" color="gray">January 12, 2024</Text>
              <Heading size="9">
                How should companies and individuals fund climate mitigation?
              </Heading>
            </Flex>
            <Text>
              I spent about ~18 months working on a carbon offsetting startup. In the process, I
              learned a lot about the voluntary carbon market and its limitations. The experience
              has completely changed the way I think about the responsibility of companies and
              individuals in the climate crisis. The good news is this: if you’re a company or
              individual with money to contribute, you can have a much bigger impact on climate
              change than the bad news about carbon markets might suggest.
            </Text>
            <Text>
              Two years ago, I thought carbon offsets could play a big role in climate change
              mitigation. Now, I’d like to argue the following:
            </Text>
            <ul>
              <li>
              The voluntary carbon market, as it exists now, is an ineffective mechanism for funding meaningful, long-term decarbonization.
              </li>
              <li>
              There are 10-1000x better ways for companies and individuals to spend their money on climate mitigation
              </li>
            </ul>
            <Text>
              To be clear: in this post I’m critiquing the voluntary carbon market as it exists now. My criticisms don’t apply to a potential future market where high-quality, permanent carbon removal becomes the norm.
            </Text>

            <Heading size="7" mt="4">
              Problems with offsetting
            </Heading>

            <Text>
              You’ve probably heard the bad press about carbon offsets. A recent <RadixLink href="https://www.theguardian.com/environment/2023/jan/18/revealed-forest-carbon-offsets-biggest-provider-worthless-verra-aoe">exposé</RadixLink> found that
              over 90% of voluntary offsets (mostly avoided deforestation) did not have the impact
              they claimed. Companies like <RadixLink href="https://www.newyorker.com/magazine/2023/10/23/the-great-cash-for-carbon-hustle">South Pole</RadixLink> sold offsets from projects they knew
              to be fraudulent and/or sold more credits than they knew their projects to be worth.
              In less than a decade, California has literally <RadixLink href="https://www.frontiersin.org/articles/10.3389/ffgc.2022.930426/full">burned through</RadixLink> 20% of its forest
              carbon buffer pool, which was meant to act as insurance for 100 years.
            </Text>
            <Text>
              Many of these problems stem from poor incentives. Carbon registries, which set standards
              and approve projects, get paid by the suppliers. The more credits they approve, the
              more money the registry makes, and even nonprofits want more program revenue.
              Furthermore, registries make it very difficult to judge the relative quality of
              projects: all projects receive a binary pass/fail rather than a quality rating, and
              the carbon accounting is buried in hundreds of pages of boilerplate documentation.
              There is both too little and too much governance at the same time; registries aren’t
              policing project quality (they outsource that to environmental consultants), but
              impose significant delays and third-party verification overhead costs
              on projects.<Ref id="ref-1-registries">1</Ref>
            </Text>

            <Text>
              Carbon registries promise that carbon credits are equivalent in the sense that they
              each neatly represent 1 ton of carbon dioxide equivalent emissions. By marketing
              carbon credits as undifferentiated commodities, buyers are incentivized to buy the
              cheapest possible credits to meet their carbon neutral commitments. This has somewhat
              changed recently, as buyers have been forced to vet their purchases more carefully due
              to the threat of greenwashing backlash or litigation<Ref id="ref-2-litigation">2</Ref>. Suppliers aren’t rewarded for
              quality and must remain price-competitive, so they’re incentivized to cut corners at
              worst, and do the minimum to meet the registry standard, at best. In hindsight,
              this <RadixLink href="https://www.volts.wtf/p/carbon-offsets-arent-working-and">"race-to-the-bottom"</RadixLink> caused by downward pressure on
              quality and prices seems inevitable.
            </Text>
            <Text>
              It’s important to keep in mind that junk offsets don’t just accomplish nothing, they
              can increase emissions. If a company buys 1 offset to justify 1 ton of continued CO₂
              emissions, but then that offset turns out to be worthless, emissions have
              counterfactually gone up by 1 ton.
            </Text>

            <Heading size="7" mt="4">
              Offsetting gives companies and individuals a (deceptively) easy way to help
            </Heading>

            <Text>
              In my view, the voluntary carbon market did accomplish one good thing: getting
              more companies and individuals to contribute money to climate change (mitigation).
              Carbon neutrality was an easy and attractive claim to make (before 2023), bringing
              many brands into the market who might have otherwise been bystanders. It also brought
              thousands of individuals onto offsetting platforms like Wren and The Commons.
            </Text>
            <Text>
              I’ll use the Climate Neutral label as an example of getting brands involved in climate.
              As of September, 2023, there were <Code>325</Code> brands certified under the Climate Neutral label,
              meaning that they had inventoried their emissions, committed to a plan of action,
              and purchased offsets to neutralize ongoing emissions. Most of these companies are
              consumer retail brands that reach a lot of people, and I think it’s awesome that
              Climate Neutral got them to take a visible stance on climate.
            </Text>
            <Text>
              The problem with the “first-generation” wave of carbon neutrality claims is that they
              set the bar too low. I scraped the offset purchases data from Climate Neutral and include
              the results below to illustrate this.
            </Text>
          </div>

          {/* SIDENOTES */}
          <div className="flex-grow max-w-[360px]">
            <SidenoteColumn gap={16}>
              <Sidenote refId="ref-1-registries" refTag="1">
                I can speak from experience here. When our team submitted a new methodology for
                sustainable food procurement to a leading carbon registry, we were told that it
                could take 2-3 years to get it approved. We were also told that these kinds of
                wait times are typical of new methodologies. The governance process within registries
                is agonizingly slow, yet does not seem to produce methodologies or projects that
                can stand the scrutiny of time.
              </Sidenote>

              <Sidenote refId="ref-2-litigation" refTag="2">
                For example, Delta airlines was <RadixLink href="https://www.theguardian.com/environment/2023/may/30/delta-air-lines-lawsuit-carbon-neutrality-aoe">sued</RadixLink> for its carbon neutrality claims.
              </Sidenote>
            </SidenoteColumn>
          </div>
        </Flex>
      </Container>
    </Section>
  )
}