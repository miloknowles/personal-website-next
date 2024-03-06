"use client";

import { Metadata } from "next";
import { Container, Link as RadixLink, Section } from "@radix-ui/themes";

import Header from "@/components/Blog/Header";
import Feedback from "@/components/Blog/Feedback";

import MathJax from "react-mathjax";


export const metadata: Metadata = {
  title: 'Part 1: Making food with air, water, and sunlight',
  description: "At a first principles level, all of the food we eat is stored sunlight, assembled from air and water.",
}

const L = (props: { href: string, children: any }) => {
  return <RadixLink href={props.href} target="_blank">{props.children}</RadixLink>
}


const Content = () => (
<div className="flex flex-col flex-grow gap-4 relative text-lg pb-8">

<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2"
id="all-food-comes-from-air-water-and-sunlight">All food comes from air,
water, and sunlight</h3>
<p>At a first principles level, all of the food we eat is stored
sunlight, assembled from air and water. Using photons as an energy
source, plants absorb CO₂ from the air, strip the carbon atom off and
combine it with water to produce stored carbohydrates.</p>
<p><MathJax.Node formula={"CO_2 + 2H_2O + photons \\implies [C_xH_yO_z] + O_2 + H_2O\\tag{Equation 1}"}/></p>
<p>Depending on the plant, the carbohydrates could be a mix of glucose,
cellulose, etc, although the details aren't that important for our sake.
Light energy is stored in chemical bonds that we can break to release
it. Plants also need nitrogen and some minerals, which is why they’ve
evolved to exchange sugar with symbiotic bacteria for other
compounds.</p>
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2"
id="photosynthesis-isnt-very-efficient">Photosynthesis isn't very
efficient</h3>
<p>How efficient are plants at turning light energy into chemical
energy, in the form of carbohydrates? Not very. While the theoretical
efficiency of photosynthesis (energy stored per unit of solar energy
received) is <a
href="https://www.britannica.com/science/photosynthesis/Energy-efficiency-of-photosynthesis"><u>about
26%</u></a>, plants have a practical efficiency of less than {" "}<code
className="text-indigo-200 font-bold">1%</code>{" "} on an annual areawide
basis. Some of the most "light-efficient" crops we farm are maize and <a
href="https://www.canarymedia.com/articles/air-travel/this-new-factory-will-turn-co2-into-sustainable-jet-fuel"><u>sugar
beets</u></a>, which can capture about {" "}<code
className="text-indigo-200 font-bold">0.3%</code>{" "} and {" "}<code
className="text-indigo-200 font-bold">0.4%</code>{" "} of the light energy
that falls on a given patch of land, respectively<a href="#fn1"
id="fnref1" className="footnote-ref"
role="doc-noteref"><sup>1</sup></a>.</p>
<p>So when you eat a plant and metabolize its carbohydrates for energy,
{" "}<code className="text-indigo-200 font-bold">&gt;99%</code>{" "} of the
original solar energy has already been lost. This seems terribly
inefficient, but you could argue that energy from sunlight is incredibly
<a
href="https://blogs.ucl.ac.uk/energy/2015/05/21/fact-checking-elon-musks-blue-square-how-much-solar-to-power-the-us/"><u>abundant</u></a>
so maybe it's not that big of a deal.</p>
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2"
id="trophic-levels">Trophic levels</h3>
<p>Energy efficiency losses start to become a real problem when we move
further up the food chain. <strong>I like to think about the food system
in terms of <a
href="https://en.wikipedia.org/wiki/Trophic_level"><u>trophic
levels</u></a>, which are 1-indexed tiers that indicate how many steps
removed a food source is from sunlight.</strong> Primary producers
(plants) have a trophic level of $[1]$, herbivores $[2]$, carnivores
that eat herbivores $[3]$, carnivores that eat other carnivores $[4]$,
and so on<a href="#fn2" id="fnref2" className="footnote-ref"
role="doc-noteref"><sup>2</sup></a>. Omnivores (e.g., most humans) might
eat from many different trophic levels on a daily basis.</p>
<p>As you move to higher trophic levels, energy is inevitably lost as
heat due to the fact that organisms do a lot more than just eat and
grow. An animal who eats {" "}<code
className="text-indigo-200 font-bold">1000{" "} kcal</code>{" "} of
vegetation doesn't actually gain {" "}<code
className="text-indigo-200 font-bold">1000{" "} kcal</code>{" "} of edible
body mass, since they do lots of other energy-consuming things for
survival (or just for fun). The feed conversion efficiency of animals
might be <a
href="https://cbey.yale.edu/our-stories/disrupting-meat"><u>10%</u></a>
under "ideal" (read: highly confined) conditions.</p>
<p>Using the {" "}<code className="text-indigo-200 font-bold">1%</code>{" "}
efficiency bound on photosynthesis and the {" "}<code
className="text-indigo-200 font-bold">10%</code>{" "} upper bound on feed
conversion, the fraction of the sun's energy available at level $[L]$
is:</p>
<p><MathJax.Node formula={"E(L) = \\frac{1}{100} \\enspace \\times \\enspace \\frac{1}{10^{L-1}} =\\frac{1}{10^{L+1}} \\tag{Equation 2}"}/></p>
<p>So herbivores have &lt;1% of the sun's energy available to eat,
$[L=2]$ carnivores have &lt;0.1%, $[L=3]$ carnivores &lt;0.01%, and so
on. Another way to think about this is that each additional trophic
level has an order of magnitude less available energy or <a
href="https://en.wikipedia.org/wiki/Carrying_capacity"><u>carrying
capacity</u></a> to sustain life<a href="#fn3" id="fnref3"
className="footnote-ref" role="doc-noteref"><sup>3</sup></a>.</p>
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2"
id="the-land-footprint-of-food">The land footprint of food</h3>
<p>Because virtually all food energy originates from sunlight hitting a
leaf, energy requirements and land requirements are effectively
interchangeable. Due to the upper bound on photosynthetic efficiency,
there is a minimum amount of land required to produce one calorie.
Because of efficiency losses, a calorie consumed from level $[L + 1]$
requires 10x more land to product than a calorie consumed from level
$[L]$<a href="#fn4" id="fnref4" className="footnote-ref"
role="doc-noteref"><sup>4</sup></a>.</p>
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2"
id="the-carbon-footprint-of-food">The carbon footprint of food</h3>
<p>You're probably aware that animal products, like meat, dairy, and
eggs, tend to have <a
href="https://ourworldindata.org/food-choice-vs-eating-local"><u>high
carbon footprints</u></a>. That's not a coincidence, and can be largely
explained by trophic levels. A chicken with a 9:1 caloric efficiency
wastes 8 out of 9 units of feed, including the emissions that went into
producing that feed. Cows are even less efficient (<a
href="https://en.wikipedia.org/wiki/Carrying_capacity"><u>25:1</u></a>),
which would suggest that cows<a href="#fn5" id="fnref5"
className="footnote-ref" role="doc-noteref"><sup>5</sup></a> require <a
href="https://ourworldindata.org/deforestation"><u>a lot of
land</u></a>, which is indeed the case. In sum, thermodynamics dictates
that livestock must be more carbon intensive than the food they eat.</p>
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2"
id="implications-for-climate-change">Implications for climate
change</h3>
<p><strong>What I'm building towards is an <em>amoral</em>,
<em>mathematical</em> intuition for why food choices matter for climate
change. Because of Equation 2, the world can support at least an order
of magnitude more herbivores ($[L=1]$) than carnivores
($[L=2]$).</strong> Equivalently, we could support the same number of
herbivores using an order of magnitude less land, emissions, and other
resources.</p>
<p>We are already running into the practical limitations of inefficient
food production, simply because there are a lot of people and finite
arable land. Most people are unaware that <a
href="https://ourworldindata.org/global-land-for-agriculture"><u>half of
Earth's land</u></a> is used for agriculture, that 80% of agricultural
land is dedicated to livestock farming<a href="#fn6" id="fnref6"
className="footnote-ref" role="doc-noteref"><sup>6</sup></a>. Flying over
the midwestern United States actually provides a pretty accurate picture
of how Earth’s surface has been terraformed. As the world's population
grows and more people improve their quality of life (to be clear: a very
good thing), we'll need more land to produce more calories. That land
comes from somewhere, and historically it has <a
href="https://ourworldindata.org/deforestation"><u>cost</u></a> us
valuable carbon storing ecosystems, like grasslands and forests.</p>
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2"
id="eating-closer-to-the-sun">Eating closer to the sun</h3>
<p><strong>In my view, the math implies only one plausible direction for
decarbonizing the food system: eating lower on the food
pyramid</strong><a href="#fn7" id="fnref7" className="footnote-ref"
role="doc-noteref"><sup>7</sup></a><strong>.</strong> In 2018, Poore
&amp; Nemecek published <a
href="https://www.science.org/doi/10.1126/science.aaq0216"><u>an
important paper</u></a> which showed that shifting to plant-based diets
would cut emission in half, and reduce land use by three-quarters.
Reforesting that land, by the way, would <a
href="https://ourworldindata.org/carbon-opportunity-costs-food"><u>remove
an estimated 800 gigatons of CO2</u></a> from the atmosphere! Another
important <a
href="https://journals.plos.org/climate/article?id=10.1371/journal.pclm.0000010"><u>study</u></a>
by Eisen &amp; Brown found that phasing out animal agriculture, over a
period of 15 years, would effectively pause global warming for 30
years.</p>
<p>We should be very skeptical of any climate solution that promises
decarbonization without any material change to how food is produced.
Examples abound, like carbon neutral milk, regenerative grazing<a
href="#fn8" id="fnref8" className="footnote-ref"
role="doc-noteref"><sup>8</sup></a>, and feed supplements. These are
solutions that partially help, partially confuse consumers, but will
never scale to fully address climate change due to the basic rules of
thermodynamics.</p>
<p>Eating lower on the food pyramid doesn’t mean eating grass, as the
straw-man counterargument often goes. Some of us might voluntarily
change our diets, but most people probably won’t have to make many
sacrifices at all. Alternative proteins (meat, dairy, and eggs, produced
without animals) recombine plant ingredients from $[L=1]$ to mimic foods
from $[L \geq 2]$. As alternative proteins approach price and taste
parity, we’ll be able to eat many of the foods we already enjoy for a
fraction of the environmental cost.</p>
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2"
id="outperforming-photosynthesis">Outperforming photosynthesis</h3>
<p>A plant-based diet is much more energy- and land-efficient than an
omnivorous diet, but it still runs up against the poor efficiency of
photosynthesis (well below 1%, as we saw above). <strong>Is
photosynthetic efficiency a hard upper bound on the efficiency of food
production? Short answer: no!</strong> In the next post, I’ll explore a
NASA-inspired food production technology that can outperform the
efficiency of photosynthesis.</p>
<section id="footnotes"
className="footnotes footnotes-end-of-document pt-8 text-sm"
role="doc-endnotes">
<div className="pb-8">
<hr />
</div>
<ol className="list-decimal pl-4 flex flex-col gap-3">
<li><div id="fn1" className="pl-2">
<p>See the supplemental data from this <a
href="https://www.pnas.org/doi/suppl/10.1073/pnas.2015025118"><u>paper</u></a>.
For comparison, a modern <a
href="https://en.wikipedia.org/wiki/Solar-cell_efficiency%2020%%20efficiency%20of%20solar%20panels"><u>solar
panel</u></a> has a <a
href="https://en.wikipedia.org/wiki/Shockley%E2%80%93Queisser_limit"><u>theoretical
efficiency of ~32%</u></a>, a ~20% efficiency under ideal conditions,
and more like a 5% efficiency if you factor in cloudy days, suboptimal
sun angles, etc. At 5% efficiency, solar panels are still more than 10x
more efficient than the most efficient plants.<a href="#fnref1"
className="footnote-back" role="doc-backlink">↩︎</a></p>
</div></li>
<li><div id="fn2" className="pl-2">
<p>Decomposers like mushrooms make the picture slightly more
complicated, since they can recycle energy from higher trophic levels
down to lower levels.<a href="#fnref2" className="footnote-back"
role="doc-backlink">↩︎</a></p>
</div></li>
<li><div id="fn3" className="pl-2">
<p>Carrying capacity is why you’d probably find far fewer carnivores in
a given area of land, and maybe why they tend to be more solitary than
herbivores?<a href="#fnref3" className="footnote-back"
role="doc-backlink">↩︎</a></p>
</div></li>
<li><div id="fn4" className="pl-2">
<p>The “food pyramid” is actually an apt metaphor, as you need a very
wide area of the base (photosynthesis) to support the increasingly
narrow levels above.<a href="#fnref4" className="footnote-back"
role="doc-backlink">↩︎</a></p>
</div></li>
<li><div id="fn5" className="pl-2">
<p>Cows and other ruminant animals are infamous for their methane
emissions, which is more due to the idiosyncrasies of their digestive
biology than a consequence of trophic levels.<a href="#fnref5"
className="footnote-back" role="doc-backlink">↩︎</a></p>
</div></li>
<li><div id="fn6" className="pl-2">
<p>Despite using the majority of farmland, livestock only supply `17%`
of the world's calories and `38%` of its protein.<a href="#fnref6"
className="footnote-back" role="doc-backlink">↩︎</a></p>
</div></li>
<li><div id="fn7" className="pl-2">
<p>Reducing food waste is critical too, of course, since about one-third
of food is wasted. However, I want to re-emphasize the point that
livestock are the largest source of food waste by far, since most of the
calories they eat are lost from the human food supply as heat.
Counterintuitively, reducing the number of farmed animals actually leads
to a net increase in food, since feed crops become available for direct
human consumption.<a href="#fnref7" className="footnote-back"
role="doc-backlink">↩︎</a></p>
</div></li>
<li><div id="fn8" className="pl-2">
<p><a
href="https://newrepublic.com/article/163735/myth-regenerative-ranching"><u>Regenerative
grazing</u></a> may promote soil carbon, but proponents fail to
acknowledge the fine print: it requires way more land, and the cows grow
more slowly, which means they’ll produce more methane in their lifetime.
The push for regenerative grazing also implies a false choice between
factory-farmed beef and sustainable beef. There is a third option, where
we turn pastureland back into its natural state and eat something
else.<a href="#fnref8" className="footnote-back"
role="doc-backlink">↩︎</a></p>
</div></li>
</ol>
</section>

</div>
)


export default function Page() {
  return (
    <MathJax.Provider options={
      {
        asciimath2jax: {
          delimiters: [['$$', '$$']],
          inlineMath: [['$[', ']$']]
        },
        tex2jax: {
          delimiters: [['$$', '$$']],
          inlineMath: [['$[', ']$']]
        },
        mathml2jax: {
          delimiters: [['$$', '$$']],
          inlineMath: [['$[', ']$']]
        }
      }
    }>
      <Section
        size={{initial: "1", md: "3"}}
        pl={{initial: "3"}}
        pr={{initial: "3"}}
        id="blog-wrapper"
      >
        <Container size="3">
          <Header
            title="Part 1: Making food with air, water, and sunlight"
            publishDate="March 5, 2024"
            sidenoteWarning
          />
          <Content/>
          <Feedback/>
        </Container>
      </Section>
    </MathJax.Provider>
  );
}