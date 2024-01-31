import { Text, Heading, Code, Strong, Blockquote, Callout, CalloutRoot, CalloutText } from "@radix-ui/themes";
import { Metadata } from "next";
import Link from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

import { BlogSection, BlogWrapper, ContentContainer, SidenotesContainer } from "@/components/Blog/Wrappers";
import Header from "@/components/Blog/Header";
import { Ref, Sidenote, SidenoteAutoLayout } from "@/components/Blog/Sidenotes";
import Image from "next/image";
import Feedback from "@/components/Blog/Feedback";


export const metadata: Metadata = {
  title: 'Some startups should be nonprofit startups',
  description: "For every Apple or Microsoft, it’s worth considering whether the world would benefit from a Linux.",
}

export default function Page() {
  return (
    <BlogWrapper>
      <BlogSection>

        <ContentContainer>
          <Header
            title="Some types of startups should be nonprofit startups"
            publishDate="January 31, 2022"
            sidenoteWarning
          />

          <Heading size="7">Focused research organizations (FROs)</Heading>

          <Text>
            Among the many tools for innovation
            on <RadixLink href="https://www.leversforprogress.com/collection?lever=Focused%2520Research%2520Organizations">Levers for Progress</RadixLink>, one that
            I’ve been particularly fascinated by is the <strong>focused research
            organization (FRO)</strong>. According to Levers for Progress: 
          </Text>

          <Blockquote>
            “A Focused Research Organization (FRO) is a specialized non-profit
            research entity that seeks to advance a specific scientific topic or
            technology that cannot be efficiently addressed by standard
            organizational structures in academia or industry.”
          </Blockquote>

          <Text>
            In their <RadixLink href="https://fas.org/publication/focused-research-organizations-to-accelerate-science-technology-and-medicine/">piece</RadixLink> for the Federation of American Scientists, Sam Rodriquez<Ref id="ref-1-rodriquez">1</Ref> and Adam Marblestone elaborate:
          </Text>

          <Blockquote>
            “FROs would be independent from existing universities or labs, focused
            on a single basic science or technology problem, and organized similarly
            to a startup. FROs would fill a key structural gap in our nation’s
            research and development (R&D) system, enabling major advances in
            areas that (i) require levels of coordinated engineering or
            system-building inaccessible to academia, (ii) benefit society
            broadly in ways that industry cannot rapidly monetize, and (iii)
            harbor opportunities for acceleration through innovative new
            technologies and processes.” 
          </Blockquote>

          <Text>
            There are a few other important features, like a 5-7 year expiration date, but you can
            think of an FRO as simply a mission-driven, nonprofit startup. They fill in a gap in
            the innovation ecosystem where problems are too big or not “publishable” enough for an
            academic lab, but may not be easy to monetize or get VC funding for.
          </Text>

          <div className="relative w-full min-h-[350px] bg-white rounded-xl">
            <Image src="/media/fro.png" alt="The Venn diagram for focused research organizations" objectFit="contain" fill/>
          </div>
          <Text className="text-center text-xs">Source: Convergent Research</Text>

          <Heading size="7">Thesis: Some types of startups should be nonprofit startups</Heading>

          <Text>
            FROs are defined <i>via negativa</i>: technologies that are <strong>not</strong> a good fit for academic labs or
            startups are potential candidates for an FRO. Indeed, in Convergent Research’s <RadixLink href="https://docs.google.com/document/d/1_7TXxKCoGz4gvRIxIepaZ4BppC8KMCBwNUdXLFXWXGE/edit#heading=h.o3v1paomg1vs">application</RadixLink> for
            FROs, they ask you to explain why a startup/VC wouldn’t address the problem, and
            why an academic lab can’t. <strong>A key assumption is that if a technology could be funded
            by venture capital, then it is, by definition, a bad fit for an FRO.</strong>
          </Text>

          <Text>
            As I started to brainstorm ideas for FROs, I started to question that assumption.
            Many ideas could feasibly be addressed by both startups and FROs. In fact, many
            seemingly FRO-shaped problems are already being tackled by venture-backed
            startups with a lot of funding. If I didn’t know there was a startup already working on
            the problem, I would have thought it should be solved by an FRO.
          </Text>

          <Text>
            My question is this: if a problem could be addressed by a startup, does that automatically
            disqualify an FRO from working on it? I’d like to explore some of the nuances between
            <i>could</i> and <i>should</i>, and argue that there are certain classes of problems that we want
            might want an FROs working on even if they are easy to monetize.
          </Text>

          <Heading size="7">Example 1: Problems where incentives and trust matter</Heading>

          <Text>
            There are some public goods that could be easily monetized, but risk being corrupted by profit-maximizing motives.
          </Text>

          <Heading size="6">Monitoring and verification of carbon credits</Heading>

          <Text>
            In climate-tech, a salient example is monitoring, reporting, and verification (MRV)
            technologies for carbon credits. Accurate and scalable MRV is essential for nature-based
            solutions like reforestation or regenerative farming, where carbon is stored organically
            (and non-permanently) in soil or vegetation. It is expensive to routinely collect soil
            samples or measure trees by hand, which has led to the emergence of dozens of startups
            working on machine learning, model-based approaches for estimating carbon stocks from
            satellite imagery.<Ref id="ref-2-mrv">2</Ref>
          </Text>

          <Text>
            There are a few reasons why I believe that MRV <i>should</i> be developed by an FRO, even if
            VCs are spending $100M+ to fill this gap already. The first is that MRV is predicated
            on trust. For obvious reasons, startups don’t want to provide open access to their
            proprietary datasets or trained models, since this is the secret intellectual sauce.
            But how can we trust the answers that come from a black box verifier without the ability
            to audit it? Even worse, if there are multiple MRV companies with competing black-box
            offerings, a project developer could “shop around” for whoever tells them they’ve
            sequestered the most carbon. There needs to be an industry-standard model so that
            projects can’t game the system<Ref id="ref-3-gaming">3</Ref>. Worse still, the business
            model of some startups is to be the developers, trusted verifiers, <i>and</i> sellers of
            credits, such as Pachama<Ref id="ref-4-pachama">4</Ref>.
            This creates an obvious conflict of interest, since the business becomes more profitable
            if the AI models are biased towards overestimating the amount of carbon that a project
            stores, or exaggerating the amount of counterfactual deforestation.
          </Text>

          <Heading size="6">FROs can align incentives</Heading>

          <Text>
            An FRO is well-suited to build MRV systems without misaligned incentives. The hard work
            of collecting ground truth samples, training large models, and validating results requires
            the agility, multidisciplinary talent, and funding of a startup. An FRO could open-source
            everything, creating a trusted industry standard for MRV and benefitting the entire carbon
            crediting ecosystem. Open-sourcing the carbon accounting piece of the puzzle would reduce
            project overhead costs, create more trust, and allow everyone to focus on the harder and
            urgent work of actually restoring ecosystems. Startups could continue to provide value-add
            through SaaS products, credit marketplaces, and offering diversified portfolios of carbon
            credits – they just shouldn’t own the verification. One FRO
            called <RadixLink href="https://cworthy.org/join">C-Worthy</RadixLink> is taking on
            the challenge of MRV for ocean CDR, and I would love to see other FROs be created to
            address terrestrial carbon MRV as well.
          </Text>

          <Text>
            Carbon isn’t the only quantity that is worth tracking, and efforts are underway to create
            credits for <RadixLink href="https://www.biodiversitycreditalliance.org/">biodiversity</RadixLink> also.
            An FRO seems promising for monitoring biodiversity as well,
            for example, by developing an open global atlas of environmental DNA (eDNA) and better
            measurement/modeling tools. However, I could easily imagine a world where a for-profit
            startup does this work instead, and finds a way to monetize it.
          </Text>

          <Heading size="7">Example 2: Problems where speed and scale matter</Heading>

          <Text>
            FROs can ensure that public goods end up in the public domain, and are spread as widely
            and equitably as possible. For things like climate solutions, medical interventions,
            resilient crop varieties<Ref id="ref-5-borlaug">5</Ref>, etc, we might want a team of researchers to move quickly
            like a startup, but not hold monopoly rights over the resulting IP.
          </Text>

          <Heading size="6">Decarbonization and climate tech</Heading>

          <Text>
            I’ll continue on with the focus on climate tech. The
            IEA <RadixLink href="https://www.technologyreview.com/2021/05/18/1025027/half-of-emissions-cuts-require-tech-innovation-climate-change-net-zero/">estimates</RadixLink> that
            50% of emission reductions will come from technologies that are not yet commercially available. Products
            like green cement, green steel, sustainable aviation fuel, long duration storage, and
            alternative proteins are just beginning their scale-up journey, and you can’t buy them
            yet in most places. To minimize cumulative emissions<Ref id="ref-6-cumulative">6</Ref>, we need to make these clean technologies
            available as widely as possible, as quickly as possible.
          </Text>

          <Text>
            Is it a good thing that for-profit startups are making scientific discoveries and inventing
            breakthrough climate technologies? From a funding perspective, yes. For-profit startups
            have brought a huge amount of VC investment into climate, which <RadixLink href="https://www.ctvc.co/32bn-and-30-drop-as-market-hits-pause-in-2023/#:~:text=Climate%20tech%20venture%20and%20growth,in%20climate%20tech%20since%202020">totaled $32B in 2023</RadixLink> and
            even more the year prior. However, as I hope to explore below, for-profit startups may
            not always be the best vehicle for spreading a public good widely, quickly, and equitably.
          </Text>

          <Heading size="6">Intellectual property creates a bottleneck to further innovation and deployment</Heading>

          <Text>
            I want to first emphasize that I think patents are important for innovation, and inventors
            {" "}<i>should</i> capture some of the social value of their work. But in my view, patents
            create a tradeoff between incentivizing innovation (good) and creating a subsequent
            bottleneck to spreading the innovation (bad). For urgent problems like climate change,
            we should carefully weigh this tradeoff.
          </Text>

          <Heading size="6">The downside of patents</Heading>
          <Text>
            In <RadixLink href="https://www.nber.org/books-and-chapters/new-directions-market-design/market-shaping-combat-climate-change">Market Shaping to Combat Climate Change</RadixLink>, Will Arnesen writes<Ref id="ref-7-msa">7</Ref>:
          </Text>
          <Blockquote>
            Because patents create temporary monopolies for the patent-holder, that monopoly will generally result in higher prices and lower quantities supplied than under a purely competitive market post-patent.
          </Blockquote>
          <Text>
            Patents have a time limit, which means that inventions should, in theory, end up in the
            public domain (like generic drugs) where competition will drive down costs. Given the
            urgency of climate, however, a possible 20 year monopoly over (certain) planet-saving technologies
            is not a desirable option. Furthermore, tactics like “evergreening” could prolong quasi-monopoly
            rights indefinitely<Ref id="ref-8-evergreening">8</Ref>, so waiting for patents to expire worries me. We want the price of
            green technologies to come down as quickly as possible, and maximize the number of
            units sold, and patents are not designed to do this.
          </Text>

          <Text>
            Startups could spread their technology by licensing it to others, but this adds transaction
            costs and may not be a strategic priority for the team. Furthermore, it makes economic sense
            to prioritize licensing agreements with the highest bidders first, not necessarily those that
            stand to benefit the most. There might be an innovative way to overcome IP licensing
            bottlenecks that I’m not aware of – I would welcome any ideas here.
          </Text>

          <Text>
            In addition to higher prices and lower supply, IP may actually limit <i>further innovation</i>.
            A really interesting <RadixLink href="https://www.journals.uchicago.edu/doi/abs/10.1086/669706">paper</RadixLink> by
            Heidi L. Williams examines efforts to sequence the human genome:
          </Text>

          <Blockquote>
            The public effort [by the Human Genome Project] began in 1990 and required that all sequenced
            genes be placed in the public domain. Celera’s effort began in 1999 and ended in 2001 when
            Celera disclosed an incomplete draft genome. The public effort continued and by 2003 had
            sequenced all genes in Celera’s 2001 draft. Between 2001 and 2003, Celera used a contract
            law–based form of IP to protect genes sequenced by Celera but not yet sequenced by the
            public effort. This IP enabled Celera to sell its data for substantial fees and required
            firms to negotiate licensing agreements with Celera for any resulting commercial discoveries,
            even though it was publicly known at the time that all of Celera’s genes would be sequenced
            by the public effort, and thus be in the public domain, by 2003.
          </Blockquote>

          <Text>
            <strong>
            The result: Williams found that Celera’s IP led to reductions in subsequent scientific research and product development on the order of 20-30 percent.
            </strong>
          </Text>

          <Heading size="6">The upside of patents</Heading>
          <Text>
            Patents are a really good thing if they incentivize private sector innovation in public
            goods that might otherwise be neglected. <strong>A patent benefits society if we believe that
            the relevant scientific discovery and commercialization wouldn’t happen otherwise.</strong> But is
            this always the case for public goods? I’m not convinced that all public goods would be
            neglected in the absence of patents. When it comes to climate change, I think many startups and
            investors have altruistic motives that are not captured by a purely rational model.
            For example, companies gave ~$1B to unproven carbon removal technologies via
            <RadixLink href="https://frontierclimate.com/">Frontier</RadixLink>, even though they don’t
            stand to gain many immediate benefits. That's actually pretty crazy. There are people – like
            the founders of Stripe, for example – who seem to enjoy doing these kinds of side quests.
          </Text>

          <Text>
            The situation might be more like the Celera case study,
            where the public and private sector are pursuing innovation in parallel, and the public sector
            is not far behind. Given the “all-hands-on-deck” attitude toward climate change and increasing
            levels of investment by governments, <strong>I’m not convinced that startups are the only entities
            that could invent climate technologies – they might just be patenting them right before
            everyone else arrives</strong>. Furthermore, the <RadixLink href="https://convergentresearch.org/fro-portfolio">existence of FROs</RadixLink> seems
            to prove that you can get smart and motivated people to work on big problems even if most of the value will be given
            away to others for free.
          </Text>

          <Heading size="6">Startups often distribute technology “top-down”</Heading>
          <Text>
            Many important climate technologies have followed the “Tesla approach” of entering high-value, niche markets
            first, and then moving down the cost curve toward mass market adoption. This is a smart
            business strategy, and it has helped bring about impressive price reductions for technologies
            like solar, wind, and lithium ion batteries. Purchases in high-income countries are a good thing,
            because they can give green technologies a foothold from which to move down the experience
            curve<Ref id="ref-9-experience">9</Ref>.
          </Text>

          <Text>
            The problem with top-down adoption is that low-value markets (e.g, in low and middle income countries)
            may be neglected by new innovation for years or decades. We may not want to wait for technologies
            to trickle down, since it may be most counterfactually impactful to deploy clean innovations in LMICs
            where <RadixLink href="https://www.wri.org/insights/carbon-lock-in-definition">“carbon lock-in”</RadixLink><Ref id="ref-10-lock-in">10</Ref> is imminent.
            Introducing clean technologies in developing countries could allow them to skip past long periods of
            fossil-fueled growth that high income countries went through.
          </Text>

          <Heading size="7">Putting more science and technology in the public domain</Heading>
          <Text>
            For some public goods, we may want to refactor the division of labor between startups,
            nonprofits, and academia. For technologies where speed, scale, and equitable deployment
            matter, we probably want the basic science breakthroughs to be in the public domain where
            everyone can participate and benefit. The private sector can focus on rapid commercialization
            and bringing the science to market building products that people want. For technologies
            where trust and aligned incentives matter (e.g., carbon removal MRV, AI<Ref id="ref-11-ai">11</Ref>, blockchain),
            it makes sense to build the core technology in the open, and let startups provide
            complementary or value-add services.
          </Text>

          <Heading size="6">Would nonprofit startups disincentivize for-profit startups?</Heading>

          <Text>
            Initially, this was my biggest worry about nonprofit startups whose scope overlaps with
            existing, for-profit companies. Would a non-profit working on a technology make it less
            attractive to the private sector?
          </Text>

          <Text>
            I think there are a lot of counterexamples that disprove this hypothesis, especially in
            the world of software. Consider the Ethereum Foundation, which looks a lot like an FRO,
            and built an open-source platform for executing smart contracts on a distributed ledger.
            Ethereum’s breakthrough innovations (e.g, smart contracts and proof-of-stake) aren’t
            proprietary, and they have enabled a huge number of startups to emerge within their
            ecosystem. You can make a lot of money by open-sourcing, as evidenced by unicorns
            like Docker and Hashicorp. I’m inclined to agree with <RadixLink href="https://cdixon.org/2009/09/24/software-patents-should-be-abolished">Chris Dixon</RadixLink>{" "}
            that [for the software/hardware/internet industry],
            “if we got rid of patents tomorrow, innovation wouldn’t be reduced at all.”
          </Text>

          <Text>
            Even if a startup can’t patent the basic science/technology breakthrough, there are
            plenty of advantages to be gained: process improvements, new business models, network
            effects, distribution, branding, etc. I think my initial worry that nonprofit
            startups would drive away investment was a failure of imagination – at worst,
            they displace for-profit startups to a different part of the ecosystem, and at best
            they unlock an entirely new market.
          </Text>

          <Heading size="6">We need more nonprofit startups</Heading>
          
          <Text>
            In sum, I believe that some problems, especially within climate, could be better served
            by nonprofit, <RadixLink href="https://www.convergentresearch.org/">focused research organizations</RadixLink>. I’m aware that funding for FROs is finite,
            so they should be targeted at only the most transformative or impactful problems,
            which are often in commercial whitespaces. But just because a VC will fund an innovation
            doesn’t mean that a for-profit startup is the best tool for the job. If a public good
            has a startup working on it, I don’t think we should consider it accounted for. For every
            Apple or Microsoft, it’s worth considering whether the world would benefit from a Linux.
          </Text>

          <Feedback/>

        </ContentContainer>

        {/* SIDENOTES */}
        <SidenotesContainer>
          <SidenoteAutoLayout gapPx={16}>
            <Sidenote refId="ref-1-rodriquez" refTag="1">
              I find it both really impressive and funny that the FRO was originally conceived in the last
              chapter of Rodriquez’ <RadixLink href="https://dspace.mit.edu/handle/1721.1/123401">thesis</RadixLink> at MIT
              ("Mapping cell types, dynamics, and connections in neural circuits").
            </Sidenote>

            <Sidenote refId="ref-2-mrv" refTag="2">
              For forest carbon, see Pachama, NCX, Overstory, Treefera, Chloris Geospatial.
              For soil carbon, see Perennial and Boomitra.
            </Sidenote>

            <Sidenote refId="ref-3-gaming" refTag="3">
              Having a single source of truth for carbon crediting doesn’t entirely solve the problem,
              however, if the model is overly simplified or exploitable. For example, project developers
              within California’s forest offset program can exploit the program’s coarse regional
              averages through <RadixLink href="https://onlinelibrary.wiley.com/doi/10.1111/gcb.15943">adverse selection</RadixLink> of project boundaries.
            </Sidenote>

            <Sidenote refId="ref-4-pachama" refTag="4">
              I don't mean to single out Pachama here – they're just the most obvious example that
              I'm aware of. I also want to stress that I'm inclined to give most climate startups
              the benefit of the doubt, as I think they're really trying to do the right thing. I'm
              merely pointing out that potentially bad incentives exist, and not that they will
              necessarily lead to bad actions.
            </Sidenote>

            <Sidenote refId="ref-5-borlaug" refTag="5">
              The story of <RadixLink href="https://en.wikipedia.org/wiki/Norman_Borlaug">Norman Borlaug</RadixLink> is one
              great example of an innovation being spread with
              speed and scale. He developed semi-dwarf wheat varieties with higher yields and
              disease resistant properties in Mexico, Pakistan, and India. This nearly doubled wheat
              yields in Pakistan and India in about five years, and made Mexico a net exporter of wheat.
            </Sidenote>

            <Sidenote refId="ref-6-cumulative" refTag="6">
              For stock (long-lived) greenhouse gasses like CO2, our goal should be to minimize <i>cumulative</i>
              emissions. In addition to getting to net zero by 20XX date, it also really matters how much we
              emit each year along the way.
            </Sidenote>

            <Sidenote refId="ref-7-msa" refTag="7">
              Note that patents are not actually the focus of this paper, which explores the potential
              of "pull funding" mechanisms to accelerate progress on climate change.
            </Sidenote>

            <Sidenote refId="ref-8-evergreening" refTag="8">
              This <RadixLink href="https://www.nejm.org/doi/pdf/10.1056/NEJMms1411398?articleTools=true">article</RadixLink> discusses why, after more than a century, we still don’t have generic insulin
              in the United States. This is, in part, due to “evergreening,” where a firm keeps patenting
              incremental improvements to a technology to maintain monopoly rights. One depressing
              fact I learned from this paper is that the original patent for insulin was sold for $1,
              which is much less than the price of a single vial of insulin today.
            </Sidenote>

            <Sidenote refId="ref-9-experience" refTag="9">
              More on <RadixLink href="https://www.scalingcarbonremoval.com/solar.html">solar</RadixLink>,
              <RadixLink href="https://ourworldindata.org/cheap-renewables-growth">renewables</RadixLink>, and
              <RadixLink href="https://www.scalingcarbonremoval.com/">experience curves</RadixLink> more generally.
            </Sidenote>

            <Sidenote refId="ref-10-lock-in" refTag="10">
              Carbon lock-in occurs when a country invests in a fossil-fuel intensive system,
              effectively “locking-in” the emissions from that asset over its useful lifetime (e.g, 30 years).
              As a result, it is imperative to prevent new fossil fuel infrastructure from being built
              by providing viable clean alternatives whenever possible.
            </Sidenote>

            <Sidenote refId="ref-11-ai" refTag="11">
              Artificial intelligence seems like another area where aligned incentives are extremely important.
              Samuel Hammond <RadixLink href="https://www.secondbest.ca/p/openais-lessons-for-science-policy">points out</RadixLink> that OpenAI
              was an “accidental FRO”, since it was founded in 2015 as a nonprofit research organization
              focused on transformative and beneficial AGI. However, the nonprofit motives seem to have been a bit muddled
              when OpenAI switched to a “capped profit” structure in 2019. I'm an outsider with limited insight, but
              it seems suspicious to have some breakthroughs and then decide that
              a <RadixLink href="https://www.economist.com/business/2023/11/21/inside-openais-weird-governance-structure">profit cap of 100x, with a 20% YOY increase starting in 2025</RadixLink> is more
              aligned with your mission than being a nonprofit.
            </Sidenote>
          </SidenoteAutoLayout>
        </SidenotesContainer>
      </BlogSection>
    </BlogWrapper>
  );
}