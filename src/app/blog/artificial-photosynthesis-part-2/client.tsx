import { Container, Link as RadixLink, Section } from "@radix-ui/themes";

import Header from "@/components/Blog/Header";
import Feedback from "@/components/Blog/Feedback";
import CaptionedImage from "@/components/Blog/CaptionedImage";


const Content = () => (
<div className="flex flex-col flex-grow gap-4 relative text-lg pb-8">
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2" id="agriculture-is-only-0.0125-efficient">Agriculture is only 0.0125%
efficient</h3>
<p>In the last post, I highlighted the inefficiency of plants at turning
solar energy into stored chemical energy that we can eat. Because the
most efficient plants capture &lt; 0.5% of the solar energy that falls
on a patch of ground, and because the total pool of energy drops off
exponentially at higher trophic levels, it takes a huge land area to
produce the human food supply. <strong>While enough solar energy falls
on 0.75 m<sup>2</sup> of land to meet one person’s theoretical energy
needs, we currently farm ~6,000 m<sup>2</sup> of land to feed one
person</strong><a className="footnote-ref" href="#fn1" id="fnref1" role="doc-noteref"><sup>1</sup></a><strong>.</strong> Crudely, this
means that modern agriculture is about 0.0125% efficient at turning
sunlight into food.</p>
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2" id="why-does-land-efficiency-matter">Why does land efficiency
matter?</h3>
<p>The problems of land use only become apparent when you zoom out.</p>
<CaptionedImage
  src="/media/land-use-bloomberg.png"
  alt="Land use in the United States"
  captionUrl="https://www.bloomberg.com/graphics/2018-us-land-use/?terminal=true"
  captionText="Source: Bloomberg"
/>
<p><strong>Food security risks.</strong> The obvious problem is the
amount of space that it already takes to produce food. We do have enough
land to feed a bigger population, but not a significantly bigger one.
Looking at the picture above, we’d have difficulty doubling our food
production capacity under current diets, productivity, and food waste
levels. A more pressing concern is that if one region becomes much less
productive (e.g, due to warmer climates or a <a href="https://e360.yale.edu/features/as-the-climate-warms-could-the-u.s.-face-another-dust-bowl"><u>Dust
Bowl v2</u></a>), we don’t have a large buffer of land where new
agriculture could come from<a className="footnote-ref" href="#fn2" id="fnref2" role="doc-noteref"><sup>2</sup></a>. Arable land
could become more scarce in the future, or migrate across borders. By
the way, this picture is fairly representative of the whole world, which
has about <a href="https://ourworldindata.org/global-land-for-agriculture"><u>half</u></a>
of all habitable land dedicated to agriculture.</p>
<p><strong>Carbon opportunity cost.</strong> The less-obvious problem is
that all agricultural land was once occupied by grasslands, forests, and
other wild ecosystems. Sentimentality aside, we should care about
natural ecosystems for purely selfish reasons: they sequester a lot of
CO₂, much more than pasture or cropland. One mind-blowing finding from{" "}
<a href="https://www.nature.com/articles/s41893-020-00603-4"><u>Hayek et
al.</u></a> is that If we stopped using the land dedicated to livestock
farming (i.e, letting native vegetation regrow), we could remove about
~800 gigatons of CO₂. That’s about half of cumulative anthropogenic
emissions since the industrial revolution<a className="footnote-ref" href="#fn3" id="fnref3" role="doc-noteref"><sup>3</sup></a>. <a href="https://journals.plos.org/climate/article?id=10.1371/journal.pclm.0000010"><u>Eisen
&amp; Brown</u></a> plugged several livestock phaseout<a className="footnote-ref" href="#fn4" id="fnref4" role="doc-noteref"><sup>4</sup></a>{" "}
scenarios like this into a climate model, and found that the negative
emissions would effectively halt global warming for 30 years. Arable
land is a valuable and scalable carbon sink.</p>
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2" id="the-opportunity">The opportunity</h3>
<p>The inefficiency of agriculture suggests a massive opportunity for
improvement. If our efficiency benchmark is 0.0125%, it could be
possible to produce orders of magnitude more food in the same area, or
the same amount of food using orders of magnitude less resources. The
challenge is to find more efficient ways to convert sunlight into
molecules we can eat. I believe we’ll make significant progress on the
“solar-to-food” problem over the next decade because (1) our baseline
agricultural efficiency is so poor, (2) photovoltaic solar energy is
getting really really cheap, and (3) synthetic biology will make us less
reliant on commodity plants/animals. Let me explain.</p>
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2" id="the-solar-industrial-revolution">The solar industrial
revolution</h3>
<p>Several writers, especially <a href="https://caseyhandmer.wordpress.com/"><u>Casey Handmer</u></a> and{" "}
<a href="https://austinvernon.site/"><u>Austin Vernon</u></a>, have
pointed out the imminent solar-industrial revolution. It’s difficult to
overstate the importance and impressiveness of solar energy, so I’ll do
it here briefly.</p>
<p>Solar is already the cheapest source of electricity, and is on track
to get even cheaper (perhaps $10/MWH or $0.01/kWh by 2030). Solar is a
prototypical example of Wright’s Law, meaning that the price goes down
by a predictable percentage (the learning rate) every time cumulative
production doubles. While the law implies that progress gets
exponentially harder as you go, we’re also increasing the rate of solar
production <a href="https://www.statista.com/statistics/668764/annual-solar-module-manufacturing-globally/"><u>exponentially</u></a>,
which nets out to a <a href="https://ourworldindata.org/grapher/solar-pv-prices"><u>roughly
linear</u></a> looking cost decline each year. Even better, it <a href="https://caseyhandmer.wordpress.com/2024/05/22/the-solar-industrial-revolution-is-the-biggest-investment-opportunity-in-history/"><u>appears</u></a>{" "}
that the learning rate for solar sped up around 2009, going from 27% to
44%.</p>
<CaptionedImage
  src="/media/solar-learning.webp"
  alt="The learning rate for solar panels"
  captionUrl="https://caseyhandmer.wordpress.com/2024/05/22/the-solar-industrial-revolution-is-the-biggest-investment-opportunity-in-history/"
  captionText="Source: Casey Handmer's Blog"
/>
<p>Casey Handmer’s essays have convinced me that <strong>for any
commodity X, if we can commercialize a solar-to-X pathway, then X could
become very cheap</strong><a className="footnote-ref" href="#fn5" id="fnref5" role="doc-noteref"><sup>5</sup></a>. His startup,
Terraform Industries, is focused on natural gas and synthetic fuels, but
the <em>solar industrial revolution</em> could also give us cheaper
chemicals, materials, fertilizers, carbon removal, manufacturing,
compute power, etc.</p>
<p>The important caveat is that any solar-to-X process must accept
intermittent DC electricity as input, since that’s what you get from a
solar array. Just converting to AC adds significant cost (<a href="https://austinvernon.site/blog/hydrogen.html"><u>~30%</u></a>{" "}
more). Energy prices from the grid will remain much higher than raw
solar due to transmission, distribution, losses, energy storage, profit
margins between you and the generator, etc. So the most cost-competitive
solar-to-X industries will source their energy off-grid (onsite) and
need to be economically viable under a low utilization factor (e.g
operating perhaps only 25% of the day).</p>
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2" id="the-artificial-photosynthesis-revolution">The artificial
photosynthesis revolution</h3>
<p>My prediction is this: cheap solar and synthetic biology will make it
possible to grow any food anywhere in the world, using electricity, air,
and water. Cheap solar will provide a distributed<a className="footnote-ref" href="#fn6" id="fnref6" role="doc-noteref"><sup>6</sup></a> and
abundant source of energy, and synthetic biology will allow us to turn
energy and simple building blocks into complex configurations of matter
that are enjoyable to eat. This pathway from solar energy to food is
analogous to <em>artificial photosynthesis</em>.</p>
<p>Why should we photosynthesize food in solar-powered bioreactors, when
plants accomplish this feat already?</p>
<p><strong>First, we could decouple farming from arable land.{" "}</strong>
Plants require soil and a relatively narrow range of climates to grow,
but synthetic food could be grown out in the middle of the desert, where
there are no competing uses for land. Places like Nevada could become
the new breadbaskets of the world. Small islands like Singapore could
have domestic food security.</p>
<p><strong>Second, synthetic food would be robust to droughts, natural
disasters, swarms of <a href="https://www.youtube.com/watch?v=kxh2X6NjuhY"><u>cicadas</u></a>,
etc.</strong> The biggest tail risk to worry about would be a
sun-blocking event, but in that scenario we could swap out solar for
another electricity source. The fungibility of electricity is key. In a
disaster scenario, you could imagine France turning nuclear energy into
food, or Iceland turning geothermal energy into food.</p>
<p><strong>Third, synthetic food production should be much less
land-intensive.</strong> As I mentioned earlier, plants are &lt;0.5%
efficient on an annual, areawide, “sun-to-food” basis. Modern solar
panels are about 20% efficient on an areawide, “sun-to-electricity”
basis. So to match plants, we’d need to convert electricity into food
with a mere ~2.5% efficiency. The existing literature and few startups
working on this indicate that we can do much better. For example, Solar
Foods claims that they’re ~20% efficient at converting electricity into
Solein, a protein powder.</p>
<p><strong>Finally, synthetic food is programmable.</strong> In
principle, biomanufacturing could produce any molecule we want,
including foods, chemicals, or materials that haven’t been made before.
There’s a long way to go before it will be economically viable or easy
to produce any molecule, of course. Priority #1 should be to bring back
those <a href="https://www.atlasobscura.com/articles/gros-michel-bananas"><u>legendary
bananas</u></a>.</p>
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2" id="connecting-solar-panels-to-biology">Connecting solar panels to
biology</h3>
<p>So far I’ve ignored the central challenge of synthetic food
production, which is the conversion step from electricity to food. The
most basic electricity-to-food pathways are already being
commercialized, while others are still in the lab. I’ll introduce some
of the pathways that I believe are promising for proteins and
carbohydrates, and expand on them in future posts.</p>
<p><strong>Biomass Fermentation using Hydrogen Oxidizing
Bacteria</strong></p>
<p>A subset of autotrophs, called <a href="https://en.wikipedia.org/wiki/Hydrogen-oxidizing_bacteria"><u>hydrogen
oxidizing bacteria</u></a> (HOBs), can grow off of an H₂/CO₂ gas
mixture<a className="footnote-ref" href="#fn7" id="fnref7" role="doc-noteref"><sup>7</sup></a>. The hydrogen acts as an electron
donor (providing energy), and CO₂ provides a carbon source. The CO₂ is
assimilated directly through the Calvin-Benson-Bassham cycle, which is
basically the same “dark reaction” that plants use for photosynthesis.
The <a href="https://www.sciencedirect.com/science/article/pii/S2352550920305534"><u>easiest</u></a>{" "}
thing to make with <a href="https://pubmed.ncbi.nlm.nih.gov/36970394/"><u>HOBs</u></a> is
protein-rich biomass, which is probably why Solar Foods, Air Protein,
Farmless, and a few other companies are doing that first. Precision
fermentation (manufacturing specific target proteins) is harder, and has
not been commercially demonstrated using hydrogen to my knowledge. The
EU’s <a href="https://www.hydrocow.eu/"><u>HYDROCOW</u></a> project is
attempting a demo.</p>
<p>My main concern around using hydrogen feedstock is intermittency and
storage. Fed-batch or continuous fermentation requires a steady supply
of feedstock, but cheap solar is only available for electrolysis during
the day<a className="footnote-ref" href="#fn8" id="fnref8" role="doc-noteref"><sup>8</sup></a>. You could produce and store excess
hydrogen during the day, but the consensus seems to be that hydrogen is
notoriously expensive and difficult to <a href="https://www.thechemicalengineer.com/features/the-unbearable-lightness-of-hydrogen/"><u>store</u></a>{" "}
and <a href="https://en.wikipedia.org/wiki/Hydrogen_embrittlement"><u>transport</u></a>.</p>
<CaptionedImage
  src="/media/sunlight-to-biomass.png"
  alt="Biomass fermentation using solar energy"
  captionUrl="https://www.pnas.org/doi/10.1073/pnas.2015025118"
  captionText="Source: https://www.pnas.org/doi/10.1073/pnas.2015025118"
/>
<p><strong>Precision/Biomass Fermentation Using C1
Feedstocks</strong></p>
<p>More promising options, in my opinion, are single-carbon (C1) liquid
feedstocks like formate and methanol or methane (gas). Several <a href="https://www.pnas.org/doi/10.1073/pnas.2015025118"><u>great</u></a>{" "}
<a href="https://www.sciencedirect.com/science/article/pii/S0958166919301004?ref=pdf_download&amp;fr=RR-2&amp;rr=86e0d2384b837d24"><u>papers</u></a>{" "}
enumerate the natural metabolic pathways by which autotrophs can consume
these. Most model organisms (e.g E. coli) prefer glucose, so genetic
engineering would be required to get them to grow productively on C1
compounds. There are some notable exceptions like the <em>Pichia
pastoris</em> yeast, which can grow on methanol. In fact,
biomass/precision fermentation on methanol using <em>P. pastoris</em>
seems like the least technologically risky option of the ones I’m
surveying.</p>
<CaptionedImage
  src="/media/c1-cycles.png"
  alt="Conversion efficiencies of various C1 feedstocks and pathways"
  captionUrl="https://www.sciencedirect.com/science/article/pii/S0958166919301004"
  captionText="Source: https://www.sciencedirect.com/science/article/pii/S0958166919301004"
/>
<p>Both methanol and formate are liquid at room temperature, making them
much easier to store, transport, and work with than hydrogen. You can
make renewable <a href="https://pubs.acs.org/doi/10.1021/acsenergylett.3c00489"><u>formate</u></a>{" "}
and methanol through the electrochemical reduction of CO₂, and methanol
can also be made <a href="https://www.youtube.com/watch?v=GzjpmmtGBqU"><u>thermochemically</u></a>.
For this reason, I’ve seen both the “<a href="https://pubmed.ncbi.nlm.nih.gov/27459678/"><u>formate
economy</u></a>” and “<a href="https://en.wikipedia.org/wiki/Methanol_economy"><u>methanol
economy</u></a>” proposed. The main downside of formate and methanol is
their toxicity at high enough concentrations.</p>
<p><strong>Cell-Free Protein Synthesis</strong></p>
<p>The biggest philosophical issue I have with precision fermentation is
that it feels wasteful; you grow a huge mass of cells, but only harvest
a specific target protein of interest<a className="footnote-ref" href="#fn9" id="fnref9" role="doc-noteref"><sup>9</sup></a>. You might be
able to sell the waste biomass, but it feels a bit like you’re growing a
haystack in order to manufacture needles. A lot of the energy input goes
into just building and keeping your microbial cell factories alive, and
the metabolic agenda of natural organisms is not necessarily aligned
with yours.</p>
<p>Avoiding the wasted energy and complexity of cells is the main
motivation for <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6481089/"><u>cell-free
protein synthesis</u></a> (CFPS),which is an alternative to precision
fermentation. In CFPS, you carry out the DNA → RNA → Protein
(transcription/translation) process in an open system (i.e, a bioreactor
instead of a cell). Cell-free systems are closer to a programmable
liquid than an organism. They seem well-positioned to consume
intermittent energy, since there are no cells that could die if the
supply of feedstock is cut off overnight.</p>
<p>I should mention that current CFPS is <u>not</u> actually cell-free,
since you need to produce the TX/TL machinery (e.g, ribosomes, RNA
polymerase, co-factors) in a cell and then extract them<a className="footnote-ref" href="#fn10" id="fnref10" role="doc-noteref"><sup>10</sup></a>.
In theory, one big advantage of cell-free is that you could keep
recycling the TX/TL machinery in a continuous process, since it isn’t
consumed.</p>
<p>Once you have all the building blocks – a DNA template, TX/TL
extract, and amino acids – you still need to provide energy to the
system in the form of ATP. Usually, a consumable like creatine phosphate
must be continually added to the system to regenerate ATP (from
ADP/AMP). However, a <a href="https://www.sciencedirect.com/science/article/pii/S2542435123003100"><u>recent
paper</u></a> showed that it’s possible to regenerate ATP using an
electrochemical cycle (the acid/aldehyde ATP cycle, or AAA cycle for
short). I’m sure the system needs to be made cheaper and more efficient,
but being able to regenerate ATP – the universal energy currency of
biology – from electricity seems like a noteworthy and foundational
achievement. Chemical regeneration of ATP is also possible, for example
through <a href="https://pubs.acs.org/doi/abs/10.1021/acssynbio.3c00172"><u>this</u></a>{" "}
synthetic NAD(P)H cycle. Of course, you could regenerate ATP using
glucose/glycolysis, but then you need sugar crops, defeating the
original purpose of the enterprise.</p>
<p>CFPS is currently more expensive than precision fermentation, and it
appears that the titers (g/L of product) achieved by CFPS systems are
also quite low. Using electricity to regenerate ATP, figuring out how to
recycle the TX/TL machinery, increasing titers, and moving to a
continuous process could all bring down cost, but I don’t know enough to
predict if/when cell-free becomes cheaper. At the end of the day, the
minimalism, energy efficiency, and elegance of CFPS makes it the better
long-term solution for producing proteins in my view.</p>
<p><strong>Cell-Free Carbohydrate Synthesis</strong></p>
<p>Unless you’re the Liver King or Jordan Peterson, the majority of your
calories don’t come from protein. Staple cereal crops, like maize,
wheat, rice, and barley are the foundation of the human food system and
supply <a href="https://www.wri.org/insights/crop-expansion-food-security-trends#:~:text=Just%2010%20global%20crops%20provide,harvested%20for%20direct%20food%20use."><u>most</u></a>
of our calories in the form of carbohydrates. I don’t have anything
against cereals (and happily eat a lot of them), but wanted to explore
how we might create an <a href="https://www.frontiersin.org/articles/10.3389/fsufs.2020.00090/full#:~:text=In%20contrast%2C%20the%20artificial%20synthesis,by%20several%20orders%20of%20magnitude."><u>artificial
carbohydrate supply</u></a> that has all the benefits mentioned
above.</p>
<p>The first possibility is to produce sugars thermochemically. This <a href="https://www.frontiersin.org/articles/10.3389/fsufs.2020.00090/full#:~:text=In%20contrast%2C%20the%20artificial%20synthesis,by%20several%20orders%20of%20magnitude."><u>paper</u></a>
theorizes one possible route: from CO₂, to syngas, to methanol (C1), to
formaldehyde (C3), to sugar (C6). Under assumed efficiencies for each
step, the pathway would be 31% efficient at converting electricity into
sugars. This paper enumerates a few other <a href="https://www.sciencedirect.com/science/article/pii/S2542435122004081"><u>options</u></a>.
In both papers, the final step from formaldehyde to sugar (called the
“<a href="https://en.wikipedia.org/wiki/Formose_reaction"><u>formose
reaction</u></a>”) has a fatal flaw: it produces a racemic mixture of
C1-C8 sugars, of which only the D-glucose (C6) enantiomer is edible.
Despite its sweet taste, the L-glucose molecule cannot be metabolized by
most organisms. I believe the formose reaction, and thermochemical
pathways more generally, are a dead end because of their poor
selectivity. Despite being discovered in <a href="https://www.sciencedirect.com/science/article/abs/pii/S0040403901994870"><u>1959</u></a>,
I was unable to find an example of industrial sugar production using the
formose reaction.</p>
<p>The second approach is to use an <em>enzymatic</em> process. Enzymes
could introduce stereochemistry into the reaction pathway and improve
the specificity of each step. Similar to cell-free protein synthesis,
the idea behind cell-free carbohydrate synthesis is to carry out the
steps of photosynthesis and <a href="https://en.wikipedia.org/wiki/Gluconeogenesis"><u>gluconeogenesis</u></a>{" "}
outside of a cell. An end-to-end example is the <a href="https://www.science.org/doi/10.1126/science.abh4049"><u>ASAP
cycle</u></a>, whose authors produced starch in a cell-free process that
can be fed with either methanol or CO₂. Many other cycles or linear
carbon fixation pathways have been <a href="https://spj.science.org/doi/10.34133/2021/9898316"><u>surveyed</u></a>,
such as the <a href="https://chemistry-europe.onlinelibrary.wiley.com/doi/full/10.1002/cctc.202300746"><u>CBB
Cycle</u></a>, <a href="https://www.frontiersin.org/articles/10.3389/fbioe.2023.1091899/full"><u>Reductive
Glycine (rGly) Pathway</u></a>, <a href="https://www.nature.com/articles/s41929-023-01079-z"><u>THETA
Cycle</u></a>, Serine Cycle, RuMP Cycle, and more<a className="footnote-ref" href="#fn11" id="fnref11" role="doc-noteref"><sup>11</sup></a>.</p>
<p>There are tradeoffs among the cell-free pathways, such as the energy
efficiency, the number of cofactors that must be regenerated, and the
number of enzymes involved, but they all face the same core challenges.
Any cell-free carbohydrate pathway probably requires several dozen
enzymes, as well as an ATP-regeneration system to drive the
reaction/cycle forward. Furthermore, enzyme manufacturing is still
relatively expensive, and enzymes usually require immobilization or
protein engineering to improve their <a href="https://pubmed.ncbi.nlm.nih.gov/33753504/"><u>useful
lifetime</u></a>. Nonetheless, companies like <a href="https://solugen.com/"><u>Solugen</u></a> are an existence proof
that you can make things cheaply and at an industrial scale using
enzymes<a className="footnote-ref" href="#fn12" id="fnref12" role="doc-noteref"><sup>12</sup></a>.</p>
<h3 className="rt-Heading rt-r-size-7 rt-r-weight-bold pt-2" id="food-superabundance">Food superabundance?</h3>
<p>By now, I hope to have convinced you that solar-to-food pathways are
at least worthy of more exploration. If we can turn electricity into
food, I can’t see a first principle reason why supplying cheap and
nutritious food to every person on Earth should be difficult; there is
more than enough energy and carbon to go around. We <a href="https://ourworldindata.org/grapher/global-energy-substitution"><u>produced</u></a>{" "}
~22 MWh of energy per person in 2022, while the food-energy needs of a
person are on the order of 1-2 MWh<a className="footnote-ref" href="#fn13" id="fnref13" role="doc-noteref"><sup>13</sup></a> per year.
There are about ~119 tons of excess CO₂ in the atmosphere per person
alive today<a className="footnote-ref" href="#fn14" id="fnref14" role="doc-noteref"><sup>14</sup></a> – a liability to human
civilization, but a valuable asset if you’re in the business of
photosynthesis.</p>
<section className="footnotes footnotes-end-of-document pt-8 text-sm" id="footnotes" role="doc-endnotes">
<div className="pb-8">
<hr/>
</div>
<ol className="list-decimal pl-4 flex flex-col gap-3">
<li><div className="pl-2" id="fn1">
<p>The 0.75 m<sup>2</sup> figure is based on calculations in this
paper’s <a href="https://www.frontiersin.org/articles/10.3389/fsufs.2020.00090/full"><u>introduction</u></a>,
and is the lower bound for how much land you need to feed a person if
they could somehow absorb sunlight with 100% efficiency. Total <a href="https://ourworldindata.org/global-land-for-agriculture"><u>land
use</u></a> for agriculture is 48M km<sup>2</sup>, and there are about
8.1B people, coming out to ~6,000 m<sup>2</sup> per person.<a className="footnote-back" href="#fnref1" role="doc-backlink">↩︎</a></p>
</div></li>
<li><div className="pl-2" id="fn2">
<p>Of course, phasing out animal agriculture would free up a massive
amount of land, as I explained in the previous post. Land scarcity is
driven much more by what we eat than how much we eat, or how many people
there are.<a className="footnote-back" href="#fnref2" role="doc-backlink">↩︎</a></p>
</div></li>
<li><div className="pl-2" id="fn3">
<p><a href="https://ourworldindata.org/grapher/cumulative-co-emissions?tab=table"><u>Our
World in Data</u></a> puts cumulative global emissions around ~1,700
gigatons CO₂.<a className="footnote-back" href="#fnref3" role="doc-backlink">↩︎</a></p>
</div></li>
<li><div className="pl-2" id="fn4">
<p>Rewilding cropland would sequester a lot of carbon too; livestock
isn’t the only culprit. I think livestock should be the focus of land
restoration because (1) they cover the largest fraction of agricultural
land, and (2) they are a much less productive form of food in terms of
kcal/hectare.<a className="footnote-back" href="#fnref4" role="doc-backlink">↩︎</a></p>
</div></li>
<li><div className="pl-2" id="fn5">
<p>As long as CapEx is not the majority of cost. For example, if 90% of
a product’s cost is CapEx, then even free energy will not make it
significantly cheaper.<a className="footnote-back" href="#fnref5" role="doc-backlink">↩︎</a></p>
</div></li>
<li><div className="pl-2" id="fn6">
<p>Renewable energy is very equitable, in the sense that most countries
have at least one option among solar, wind, hydro, or geothermal.
Mineable fossil fuels, on the other hand, are concentrated in relatively
few places.<a className="footnote-back" href="#fnref6" role="doc-backlink">↩︎</a></p>
</div></li>
<li><div className="pl-2" id="fn7">
<p>A nitrogen source, like ammonia, is also required for fermentation.
However, I’m going to sidestep the problem of sourcing green ammonia for
now.<a className="footnote-back" href="#fnref7" role="doc-backlink">↩︎</a></p>
</div></li>
<li><div className="pl-2" id="fn8">
<p>Even if you did draw power from the grid, the cheapest electricity
prices are also intermittent. So you’d still want to be able to ramp
feedstock production up and down, which also creates a need for
temporary feedstock storage.<a className="footnote-back" href="#fnref8" role="doc-backlink">↩︎</a></p>
</div></li>
<li><div className="pl-2" id="fn9">
<p>This complaint applies mainly to batch and fed-batch fermentation. A
few companies (e.g, Cauldron and Pow.bio) are working on <em>continuous
fermentation</em>, where the cells continue expressing the target
protein over many iterations of harvesting. Continuous fermentation
would improve unit economics considerably, because it amortizes the cost
of setup, cleaning/sterilization, growing the cells, etc, over multiple
batches.<a className="footnote-back" href="#fnref9" role="doc-backlink">↩︎</a></p>
</div></li>
<li><div className="pl-2" id="fn10">
<p>One quite cool property of the cell extract is its portability: you
can <a href="https://www.cell.com/fulltext/S0092-8674(16)31246-6"><u>freeze-dry
it</u></a>, ship it, and use it somewhere else when needed.<a className="footnote-back" href="#fnref10" role="doc-backlink">↩︎</a></p>
</div></li>
<li><div className="pl-2" id="fn11">
<p>I would be remiss if I did not acknowledge how much of the existing
research on synthetic carbon fixation pathways was either inspired or
done by <a href="https://en.wikipedia.org/wiki/Arren_Bar-Even"><u>Arren
Bar-Even</u></a>.<a className="footnote-back" href="#fnref11" role="doc-backlink">↩︎</a></p>
</div></li>
<li><div className="pl-2" id="fn12">
<p>Solugen has a slightly easier challenge, since their process starts
from sugar rather than raw CO₂. So the hard work of photosynthesis is
still done by a plant.<a className="footnote-back" href="#fnref12" role="doc-backlink">↩︎</a></p>
</div></li>
<li><div className="pl-2" id="fn13">
<p>To be generous, 3,000 kcal/day * 365 days/year * 1.162 Wh / kcal =
1.27 MWh. If you could eat electricity, your food would cost a few
hundred dollars per year.<a className="footnote-back" href="#fnref13" role="doc-backlink">↩︎</a></p>
</div></li>
<li><div className="pl-2" id="fn14">
<p>An <a href="https://en.wikipedia.org/wiki/Carbon_dioxide_in_Earth%27s_atmosphere#:~:text=It%20has%20been%20estimated%20that,gigatons%20remaining%20in%20the%20atmosphere."><u>estimated</u></a>{" "}
950 gigatons of excess CO₂ are in the atmosphere right now, which does
not include the excess emissions that have been absorbed by the ocean,
forests, soils, etc. 950 gigatons / 8 billion people = 118.8 tons per
person.<a className="footnote-back" href="#fnref14" role="doc-backlink">↩︎</a></p>
</div></li>
</ol>
</section>
</div>
)


export default function Page() {
  return (
    <Section
      size={{initial: "1", md: "3"}}
      pl={{initial: "3"}}
      pr={{initial: "3"}}
      id="blog-wrapper"
    >
      <Container size="3">
        <Header
          title="Part 2: The artificial photosynthesis revolution"
          publishDate="June 9, 2024"
          sidenoteWarning
        />
        <Content/>
        <Feedback/>
      </Container>
    </Section>
  );
}