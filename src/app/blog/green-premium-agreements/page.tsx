import { Text, Heading, Code, Strong } from "@radix-ui/themes";
import { Metadata } from "next";
import { Link as RadixLink } from "@radix-ui/themes";

import { BlogSection, BlogWrapper, ContentContainer, SidenotesContainer } from "@/components/Blog/Wrappers";
import Header from "@/components/Blog/Header";
import { Ref, Sidenote, SidenoteAutoLayout } from "@/components/Blog/Sidenotes";
import Image from "next/image";
import Feedback from "@/components/Blog/Feedback";


export const metadata: Metadata = {
  title: 'Green premium agreements',
  description: "Power purchase agreements (PPAs) play a huge role in bringing new renewable capacity online, and helping companies reduce their Scope 2 emissions. Could this idea be generalized to industries besides energy?  ",
}


export default function Post() {
  return (
    <BlogWrapper>
      <BlogSection>
        {/* MAIN CONTENT */}
        <ContentContainer>
          <Header
            title="Green premium agreements"
            publishDate="February 1, 2024"
            sidenoteWarning
          />
          <Text>
            Power purchase agreements (PPAs) play a huge role in bringing new renewable capacity
            online, and helping companies reduce their Scope 2 emissions. Could this idea be
            generalized to industries besides energy?
          </Text>

          <Heading size="7">Background: valuing a green product</Heading>

          <Text>
            There are many products that are both economically useful and beneficial to the environment,
            such as green steel, green cement, sustainable aviation fuel, and alternative proteins,
            to name a few. These products serve the same functional role as an existing product
            while producing far fewer GHG emissions and bringing other environmental and social co-benefits.
          </Text>
          
          <Text>
            <strong>
            The value of a green product can be broken down into two parts:
            </strong>
          </Text>

          <Code size="3" className="p-3">
            V = P<sub>market</sub> + P<sub>premium</sub>
          </Code>

          <Text>
            Where the value <Code>V</Code> is the sum of the market price <Code>P<sub>market</sub></Code> and
            a green premium <Code>P<sub>premium</sub></Code>. The market price is the intrinsic value of the product,
            and is what buyers currently pay for its functional properties. The green premium captures
            the environmental benefits of the green product, and could extend beyond GHG emissions to
            include aspects like land use, water use, biodiversity, etc.
          </Text>

          <Text>
            You could look at a green premium from both the supply side and demand side. On the supply
            side, it is driven by the higher cost of producing immature technologies that have not yet
            achieved economies of scale. On the demand side, it is driven by the amount that consumers
            or businesses are willing to pay<Ref id="ref-1-starbucks">1</Ref> for the environmental and social benefits.
          </Text>

          <Heading size="7">Market failures</Heading>

          <Text>
            <strong>A key barrier for green products is that different entities may be interested in the
            functional and environmental value of the product.</strong> This market failure hinders decarbonization,
            because the physical buyer of a product may not be willing to pay a high green premium
            for it. Similarly, an organization interested in the environmental or social benefits
            of a product may not directly purchase that product.
          </Text>

          <Text>
            For example, a construction company acting out of purely economic interests may not be
            willing to pay above market price for green cement. At the same time, a tech company
            like Stripe may be very interested in decarbonizing heavy industry, but does not directly
            procure any cement. Even if Stripe does happen to be procuring cement for a new building,
            green cement may not be commercially available in that region yet due to supply chain constraints<Ref id="ref-2-cement">2</Ref>.
          </Text>

          <Heading size="7">Physical vs. contractual buyer</Heading>

          <Text>
            One interesting solution is to coordinate a <strong>physical buyer</strong>, who procures the green product
            at the market price, and a <strong>contractual buyer</strong>, who pays the green premium and gets to claim
            the environmental benefits. The physical buyer receives the functional value of the product,
            while the contractual buyer receives the environmental value.
          </Text>

          <Text>
            The separation of physical and contractual delivery is commonly implemented in the renewable
            energy industry through <RadixLink href="https://rmi.org/wp-content/uploads/2018/12/rmi-brc-intro-vppa.pdf">virtual power purchase agreements (vPPAs)</RadixLink>. vPPAs allow a contractual
            buyer to procure zero-carbon energy from a generator, even if the electrons from the generator
            are delivered to a different physical region of the grid. Decoupling the physical delivery of
            energy from its environmental attributes is useful because it allows buyers from a wider
            geographical area to fund renewable energy projects.
          </Text>

          <div className="relative w-full min-h-[520px] bg-white rounded-xl">
            <Image
              src="/media/ppa.png"
              alt=""
              style={{objectFit: "contain"}}
              fill
            />
          </div>
          <RadixLink href="https://rmi.org/wp-content/uploads/2018/12/rmi-brc-intro-vppa.pdf" className="text-center text-xs">Source: The Rocky Mountain Institute</RadixLink>

          <Heading size="7">Idea: Green premium agreements</Heading>

          <Text>
            <strong>Green premium agreements (GPAs) are a generalization of virtual power purchase agreements
            (vPPAs) to arbitrary green products</strong>. Like vPPAs, GPAs are designed to reduce the commercial
            risk of an infrastructure project, helping it attract institutional investors and reduce
            the cost of capital.
          </Text>

          <Text>
            The GPA is a fixed length “contract-for-difference” (e.g 10 years) between a supplier and a
            contractual buyer. During this time, the supplier sells its product to physical buyers on
            the open market, who are not involved in the contract. Under the GPA, the contractual
            buyer will pay the supplier a green premium plus a fixed profit margin for each unit
            that is sold, and receive decarbonization credits in return. Like a VPPA, this is a
            contract-for-difference because the contractual buyer pays the difference between a
            floating market price and a guaranteed strike price for the supplier.
          </Text>

          <Heading size="6">Benefits to the supplier</Heading>

          <Text>
            The green premium agreement (GPA) reduces commercialization risk by (1) guaranteeing that
            a project will achieve a minimum profit margin while (2) also guaranteeing that the project
            can compete with market prices.
          </Text>

          <Text>
            The GPA is <strong>not</strong> a guaranteed offtake agreement for the product itself, since the firm must
            still find physical buyers. However, the GPA does guarantee a price floor for all units
            that are sold, ensuring that the project will recoup its investment. As long as the project
            is within a serviceable geographic area of enough physical buyers, investors can be
            confident that the project is financially viable.
          </Text>

          <Heading size="6">Benefits to the buyer</Heading>

          <ul className="list-disc pl-4">
            <li>
              Green premium agreements could have a more <RadixLink href="/blog/funding-climate">catalytic climate impact</RadixLink> than
              purchasing offsets, since they help move critical technologies down the <RadixLink href="https://www.orbuch.com/learning-curves-reading-list/">learning curve</RadixLink>
            </li>
            <li>
              GPAs are suitable for ton-for-ton, <RadixLink href="https://sciencebasedtargets.org/beyond-value-chain-mitigation">beyond value chain mitigation (BVCM)</RadixLink>. Some companies
              may prefer to make climate contributions to these kinds of quantifiable projects.
            </li>
            <li>
              Currently, the <RadixLink href="https://ghgprotocol.org/sites/default/files/standards/Corporate-Value-Chain-Accounting-Reporing-Standard_041613_2.pdf">GHG Protocol</RadixLink> rules
              allow companies to include avoided emissions as a separate
              metric in their reporting. GPAs could be counted towards a company’s official avoided emissions figure.
            </li>
          </ul>

          <Heading size="6">Setting the strike price</Heading>

          <Text>
            The supplier sells their product to physical buyers at a floating price that is dictated by
            the market. When the market price is below an agreed-upon strike price, the contractual
            buyer will pay the difference, guaranteeing that the supplier makes a profit. The strike
            price should be at least the expected cost of goods sold (COGS) from the project, plus
            debt servicing costs, plus a minimum return required by the project’s equity investors.
            This guarantees a financially viable price floor for the project.
          </Text>

          <Text>
            If the product’s COGS is expected to decline over the lifetime of the project, the strike
            price may need to be adjusted annually. For most novel green products, it is likely that
            the COGS will decline due to technological and operational improvements, or “learning by doing”.
          </Text>

          <Text>
            Eventually, the green product may reach price parity with the incumbent product, or even
            become cheaper. At this point, the green premium is zero or, technically, negative. As a
            result, financial assistance from the contractual buyer of the GPA may no longer be needed.
            If the fixed duration of the GPA is not reached yet, how should ongoing avoided emissions be allocated?
          </Text>

          <Text>
            It might make sense for the contractual buyer to be allowed to claim avoided emissions
            credits for the duration of the GPA, even after the product reaches price parity.
            Essentially, the contractual buyer may receive “free” avoided emission credits as a
            reward for being an early supporter of the project. This benefit incentivizes more
            contractual buyers to participate in GPAs by bringing down the levelized cost of
            avoided emissions. Even if the green premium for a product is initially very high,
            this is offset as the product approaches or surpasses price parity. Contractual buyers
            should view the GPA as an investment in future emission reductions, and think about the
            levelized cost of avoided emissions rather than the initial cost. Indeed, earlier
            investors in clean technology play an outsized role in bringing them to market.
          </Text>

          <Heading size="6">Other considerations</Heading>

          <Text>
            <strong>Demonstrating displacement:</strong> The supplier must demonstrate that the green
            product is displacing an incumbent product with higher emissions<Ref id="ref-3-displacement">3</Ref>. Generally, this is true
            of green products sold B2B that are 1:1 replacements (e.g., cement, steel, fuel). If the
            product is sold directly to consumers, identifying their counterfactual behavior may be
            more difficult.
          </Text>

          <Text>
            <strong>No double counting:</strong> The physical buyer cannot count the avoided emissions against their own inventory, since these avoided emissions have been sold to the contractual buyer.
          </Text>

          <Feedback/>

        </ContentContainer>

        {/* SIDENOTES */}
        <SidenotesContainer>
          <SidenoteAutoLayout gapPx={16}>
            <Sidenote refId="ref-1-starbucks" refTag="1">
              Unfortunately, the green premium may remain high even if production costs have declined,
              since companies can exploit a higher willigness-to-pay. The so-called "vegan tax" on plant milks at
              coffee shops like Starbucks is an example of a demand-side green premium that might be
              worth <RadixLink href="https://www.npr.org/2022/05/11/1098162254/succession-actor-james-cromwell-glues-hand-starbucks-counter-protest">gluing your hands over</RadixLink>.
            </Sidenote>

            <Sidenote refId="ref-2-cement" refTag="2">
              The regional fragmentation of the cement industry makes geographic constraints particularly
              important. Once cement is shipped to a ready-mix facility, it must be delivered to the
              construction site within 60 to 90 minutes before it cures. Even if a construction company
              wanted to use green cement, they would have to be close to a ready-mix facility that is
              also close to a green cement production facility. Given that green cement is currently
              being demonstrated at a very small scale, buyers in many geographic locations will be
              unable to procure green cement in the near future.
            </Sidenote>

            <Sidenote refId="ref-3-displacement" refTag="3">
              Currently, many novel green products have virtually zero market share, making displacement a
              safe assumption. However, as the green product gains market share and reaches price
              parity, proving displacement may become more difficult. Over time, it may make sense
              to assume that each unit of the green product is displacing an average “mix” of products
              according to their market share.
            </Sidenote>
          </SidenoteAutoLayout>
        </SidenotesContainer>
      </BlogSection>
    </BlogWrapper>
  );
}
