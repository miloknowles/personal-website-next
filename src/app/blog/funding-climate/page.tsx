import { Text, Heading, Flex, Code, Container, Section, Strong, Blockquote } from "@radix-ui/themes";
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
            <ul className="list-disc pl-4">
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

            <Text>
              The median Climate Neutral company paid <Code>$10/ton</Code> to offset their emissions, with many
              companies below <Code>$5/ton</Code> (looking at you, REI and Athletic Greens).
            </Text>
            <Text>
              In an FAQ that really didn’t age well, Climate Neutral says:
            </Text>
            <Blockquote>
              “People are often surprised to learn that some carbon credits can be purchased for as
              little as $7 USD per metric ton… Considering the magnitude of the climate challenge
              and the confusion many people feel about what to do about it, it's refreshing to
              know that something meaningful can be done about it for so little.”<Ref id="ref-3-blockquote">3</Ref>
            </Blockquote>

            <Text>
              At a glance, most of the offsets purchased are REDD+ or renewable energy. I don’t have
              the serial numbers, so I can’t say whether these offsets were implicated in any scandals.
              But in the words of Nan Ransohoff: “We’ve trained ourselves to think that we can solve
              climate change at $2 a ton or $10 a ton. And if that were true, we would have done it by now.”<Ref id="ref-4-ransohoff">4</Ref>
            </Text>

            <Heading size="7" mt="4">
              Prioritize emission reductions 
            </Heading>
            <Text>
              I think this point is obvious, so I’ll keep it short. The world needs to get to net zero,
              and there's no other way than for all sectors of society to stop producing emissions.
              Trading emissions in the form of credits and contracts can be helpful in some cases <RadixLink href="https://www.mckinsey.com/industries/electric-power-and-natural-gas/our-insights/decarbonizing-the-grid-with-24-7-clean-power-purchase-agreements">(e.g., 24/7 clean energy)</RadixLink>, but
              can be a distracting bookkeeping exercise for others.
              Companies must make credible net zero commitments and follow through on them, which
              is what the <RadixLink href="https://sciencebasedtargets.org/">Science Based Targets Initiative</RadixLink> (SBTi) was set up for.
            </Text>
            <Text>
              I think we all agree that reducing emissions is priority #1, but for many companies,
              full decarbonization isn’t possible. If your emissions are mostly Scope 3 (meaning
              upstream or downstream) they could simply be out of your control. Furthermore, many
              “hard-to-abate” industries may not have access to zero carbon technology yet. Things
              like green cement and sustainable aviation fuel are on their way, but not widely
              available yet. In
              a <RadixLink href="https://www.technologyreview.com/2021/05/18/1025027/half-of-emissions-cuts-require-tech-innovation-climate-change-net-zero/">report</RadixLink>, the
              IEA found that half of the world’s emission reductions
              will come from technologies that aren’t commercially available yet. <strong>Many companies may
              hit a practical limit on emission reductions, but still have money they want to spend
              on avoiding a climate catastrophe. What should they do with that money?</strong>
            </Text>

            <Heading size="7" mt="4">
              Is offsetting the best way to fund climate action?
            </Heading>

            <Text>
              Let’s assume, for a moment, that voluntary carbon market’s quality issues are truly
              solved and that each credit represents 1 ton of avoided or removed CO₂-eq emissions<Ref id="ref-5-players">5</Ref>.
              {" "}<strong>Is purchasing offsets really the best way to spend money on climate mitigation? Or
              could the ~$2B spent on offsets each year be leveraged in more impactful ways? I think so.</strong>
            </Text>

            <Heading size="7" mt="4">
              Catalytic climate solutions
            </Heading>

            <Text>
              If you had $2 billion to spend on solving climate change, what would you do? There are
              a vast number of ways to spend or invest the money. And if you rank-ordered them from
              most effective to least effective, I’d argue that the best investments have
              astronomically higher climate-ROI than the worst.
            </Text>

            <Text>
              Here are a few options to consider:
            </Text>
            <ul className="list-disc pl-4">
              <li>
                You could purchase 40M high-quality reforestation credits at $50/ton, causing 40M
                tons of CO2 to be removed from the atmosphere as the trees grow.
              </li>
              <li>
                You could donate $20M each to 100 nonprofits advocating for better climate policy
                around the world.
              </li>
              <li>
                You could establish climate research centers at a few universities (and get the
                buildings named after you)<Ref id="ref-6-mit">6</Ref>. Or you could pay for the
                Ivy league education of ~6,200 new students going into clean tech.
              </li>
              <li>
                You could loan the money to renewable energy developers, building about 1.3 GW of
                solar or wind capacity, avoiding roughly 1-2M tons of CO₂ each year, and getting your money back<Ref id="ref-7-renewables">7</Ref>.
              </li>
              <li>
                You could start an advance market commitment for carbon removal, creating an entirely new market and causing dozens of new startups to develop novel solutions for pulling CO₂ out of the air. This is what Frontier did with only $925M.
              </li>
              <li>
                You could invest all the money in a nuclear fusion company such as Commonwealth Fusion Systems, which has raised around $2B so far. While I can only speculate about the likelihood of fusion succeeding, the mitigation potential is obviously huge and in the 10s of gigatons of CO₂ each year.
              </li>
            </ul>

            <Text>
              The list could go on and on, and that’s the point. There are so many creative and
              useful ways to make an impact, and offsets only fund a narrow band of activities
              where carbon can be neatly measured, verified, and attributed. It would be a mistake
              to limit your climate spending to just those solutions. Many actions, like donating,
              investing, or <RadixLink href="https://80000hours.org/articles/is-voting-important/">voting</RadixLink>,
              have such a high impact because their returns are nonlinear<Ref id="ref-8-linear">8</Ref> and
              hard to predict ahead of time. A nonprofit could be the reason an important public
              policy is enacted, and a company might grow exponentially and disrupt an entire
              polluting industry.
            </Text>

            <Heading size="7" mt="4">
              How should companies and individuals choose where to give?
            </Heading>
            <Text>
              If there are much better climate investments than offsets<Ref id="ref-9-removal">9</Ref>, how do you identify them?
              The point of this blog is not to make my own recommendations. In general, though, I
              believe that funding should go to things with leverage, like policy, R&D, technology,
              prizes, startups, and nonprofits. In other words, things that change the trajectory of
              climate change, not just briefly perturb it.
            </Text>
            <Text>
              As a starting point, I’d encourage you to check out Giving Green, which does a lot of
              research on effective climate giving and makes recommendations. As of January 2024,
              they’re <RadixLink href="https://www.givinggreen.earth/give">recommending</RadixLink> The
              Good Food Institute, Industrious Labs, Good Energy Collective,
              Project Innerspace, Opportunity Green, and the Clean Air Task Force.
            </Text>

            <Heading size="7" mt="4">
              What is a “fair” contribution?
            </Heading>
            <Text>
              How much should a company pay towards mitigating climate change? At what point should
              we applaud their efforts? There are 3 main approaches for determining what a “fair”
              contribution should be:
            </Text>
            <ul className="list-disc pl-4">
              <li>
                <strong>Ton-for-ton</strong>: For every ton you emit, fund one ton of mitigation.
                This is the principle behind offsetting. Unfortunately, ton-for-ton limits your
                contributions to solutions where the carbon accounting is easy.
              </li>
              <li>
                <strong>Money-for-money</strong>: Set aside a percentage of profits (or personal income) to contribute
                to climate change. This is how <RadixLink href="https://www.onepercentfortheplanet.org/">1% for the Planet</RadixLink> works, although they do not set
                many guidelines around effectiveness. Most critics of “money-for-money” point out
                that it doesn’t penalize companies based on their pollution, which feels unfair.
              </li>
              <li>
                <strong>Money-for-ton</strong>: Set a carbon price (e.g $100/ton), and tax yourself that much per ton
                that you emit. Then contribute the money to climate mitigation. The problem here is
                setting the carbon price, since some companies have <RadixLink href="https://carbongap.org/who-can-pay-for-carbon-removal/">way higher profits per ton</RadixLink> than
                others. A tech company can easily afford to pay $100/ton, while this carbon price
                would bankrupt an airline. The workaround is to set a different carbon price for
                different industries or Scope 1/2/3, but then you’ve effectively created a
                money-for-money approach with more steps<Ref id="ref-10-mft">10</Ref>.
              </li>
            </ul>
            <Text>
              In my opinion, money-for-money is the best approach. It’s simple to implement, and
              simple for a consumer to understand. While money-for-money does not have the
              “polluter-pays” principle, in practice this is taken care of by net zero commitments
              like SBTi, where companies have to get their own emissions as close to zero as possible.
              I’m not sure what percentage of profits should go to climate, but 1% would be an
              incredible place to start. The Fortune 500 had <RadixLink href="https://www.growandconvert.com/research/most-profitable-fortune-500-companies-in-2023/#:~:text=In%20the%20fiscal%20year%20ending,to%20the%20global%20profit%20pool.">$2.9 trillion in profits</RadixLink> in FY2023,
              so 1% of that would be $29B, or ~15X the size of the voluntary carbon market today.
            </Text>

            <Heading size="7" mt="4">
              A new label for climate action
            </Heading>
            <Text>
              I'll end with an idea that I think should exist.
            </Text>
            <Text>
              There should be a new climate label for companies that are investing money
              (e.g 1% of their profits) into transformative climate solutions. The Science Based
              Targets Initiative encourages companies to contribute to “beyond value chain mitigation”
              (BVCM), but this is not a requirement and guidance is forthcoming. Companies who
              reduce their emissions in line with net zero and contribute to climate mitigation
              elsewhere should get extra credit, in my opinion.
            </Text>
            <Text>
              This is quite similar to 1% for the Planet, but should involve more rigor in how
              solutions are selected. This is also <span className="underline">not</span> a carbon neutral label: it’s about spending
              a meaningful amount of profits on a public good, rather than spending a paltry sum
              on a climate marketing expense.
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

              <Sidenote refId="ref-3-blockquote" refTag="3">
                Climate Neutral has updated their name to Change Climate, though the label bears the
                same name. I can only imagine that the backlash against indefensible neutrality claims
                is the reason for this.
              </Sidenote>

              <Sidenote refId="ref-4-ransohoff" refTag="4">
                See <RadixLink href="https://a16z.com/podcast/the-economics-of-carbon-removal-with-nan-ransohoff/">The Economics of Carbon Removal</RadixLink> on the a16z podcast, around 9 minutes in.
              </Sidenote>

              <Sidenote refId="ref-5-players" refTag="5">
                Many players are working to improve quality standards and make carbon markets
                work as promised: the Integrity Council, ratings companies like Sylvera, tech-enabled
                verification platforms like Pachama.
              </Sidenote>

              <Sidenote refId="ref-6-mit" refTag="6">
                The MIT Schwarzman College of Computing cost about <RadixLink href="https://news.mit.edu/2018/faq-mit-stephen-schwarzman-college-of-computing-1015">$1B total</RadixLink>. I’m assuming that an
                undergrad tuition in the US costs $80k/year with housing and other expenses included.
              </Sidenote>

              <Sidenote refId="ref-7-renewables" refTag="7">
                Based on this <RadixLink href="https://www.eia.gov/todayinenergy/detail.php?id=60562">EIA article</RadixLink>, I’m
                assuming that solar and wind cost roughly <Code>~$1,500/kWh</Code> to build. Avoided emissions depend
                on what fossil fuel sources you’re displaying, and the IEA reports estimates <RadixLink href="">here</RadixLink>.
                Conservatively, if you’re only displacing natural gas (and not coal) you’d avoid
                <Code>0.7-1.6M tCO₂</Code> per 1 GW renewables. So avoided emissions would be around <Code>0.8-2.1M tCO₂</Code> per year.
              </Sidenote>

              <Sidenote refId="ref-8-linear" refTag="8">
                In contrast, carbon offsets have a quite linear effect. You put $X in and get $Y tons of CO₂ out.
              </Sidenote>

              <Sidenote refId="ref-9-removal" refTag="9">
                I want to emphasize that durable carbon removal credits are an exception. Purchasing
                these offsets in 2024, at extremely high prices (e.g $500/ton), is effectively an investment
                into the underlying technologies. Early buyers are needed to help novel technologies
                scale and bring down costs.
              </Sidenote>

              <Sidenote refId="ref-10-mft" refTag="10">
                This is a slight oversimplification. Industry-specific carbon prices (e.g., $200/ton for fintech)
                would create an incentive for companies to improve their profitability per ton of emissions.
                For example, if you are way more carbon intensive than your competitor, a larger share of
                your profits would be carbon-taxed, so you’d be at a disadvantage. But then again, the climate
                contribution model I’m describing is voluntary, so a heavy polluter might just not participate
                if the rules put them at a disadvantage. Also, some companies might not fit neatly into the
                industry definitions you choose.
              </Sidenote>
            </SidenoteColumn>
          </div>
        </Flex>
      </Container>
    </Section>
  )
}