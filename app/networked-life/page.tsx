"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function NetworkedLifePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">Network Effects Research</h1>
          <p className="text-3xl font-serif font-semibold text-primary mb-2">Networked Life</p>
          <p className="text-xl text-muted-foreground">exploring relational networks</p>
        </div>

        {/* What are networks - First paragraph always visible */}
        <section className="mb-8">
          <h2 className="font-serif text-3xl font-semibold text-primary mb-6 text-center">
            What are networks and why do they matter?
          </h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed text-center mb-8">
            <p>
              Networks are systems of nodes (people, organizations, things) connected by relationships. These
              connections, whether through shared values, exchange of resources, communication, or simply knowing each
              other, create patterns that enable coordination beyond what any single node could achieve alone.
            </p>
            <p>
              At Networked Life we research relational networks. We're interested in warm (not instrumental) networks of
              human nodes. We want to see all the ways networks underlie our social, economic, and cultural lives. We
              want to know more about what flows between nodes and what they do together.
            </p>
            <p>
              We visualize close ties, dense hubs, nodes that maximize value. We are collaborating with networks mapping
              softwares that make visible what's already there, where networks break, how (human) nodes function as the
              attractors in a network, and pulse out energy and connections, and how networks grow.
            </p>
            <p>
              This work is not purely theoretical, we are working with and interviewing networks around the world
              ranging from Colombo Sri Lanka, where the dense human connectivity combines with an information sharing
              web to organize how the city operates, to online communities, networked in their infrastructure. We are
              seeing with new eyes what already exists and how this could be enriched.
            </p>
          </div>
        </section>

        <Accordion type="single" collapsible className="mb-16">
          {/* Historical Networks */}
          <AccordionItem value="historical">
            <AccordionTrigger className="font-serif text-xl text-primary hover:text-primary/80">
              A Very Short History of Networks
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 text-foreground/90 leading-relaxed text-center pt-4">
                <p>
                  The language we use for networks comes mostly from web and information technology. The internet was
                  one of the first places we could actually see networks operate at scale, and see their patterns
                  materialize. For example, before the internet, you might have known you had friends, and your friends
                  had friends, but the full extent of how people connected remained mostly hidden. You couldn't see the
                  whole shape of it. The internet made it visible. You could suddenly see who knew who, trace paths
                  between distant people through mutual connections, and watch how information moved from one cluster to
                  another. However, networks are far older and far more differentiated than the internet.
                </p>
                <div className="my-8 rounded-lg overflow-hidden border border-border max-w-2xl mx-auto">
                  <img
                    src="/nodal-network.jpg"
                    alt="Visualization of a nodal network showing interconnected nodes and relationships"
                    className="w-full h-auto"
                  />
                </div>
                <p>
                  Trade routes are archetypal networks; the Silk Road, Mediterranean shipping networks, trans-Saharan
                  trade routes were all networks of merchants, caravansaries, port cities, translators, money changers.
                  Goods and ideas, religions, technologies, diseases all flowed across these networks.
                </p>
                <p>
                  Similarly religious networks account for huge amounts of in and outflows. Monasteries in medieval
                  Europe were networked, sharing texts, practices, and visitors. Pilgrimage routes connected distant
                  places and carried information between them. The hajj was like an annual network pulse. Buddhist
                  monasteries across Asia maintained connections for millennia, spreading between them parts of the
                  dharma and sacred texts, sharing and sharpening stories that became Jātaka tales. Interestingly all
                  religions both used and extended existing network infrastructure like the Silk Road to spread and
                  grow.
                </p>
                <p>
                  Another example is guilds and craft networks - the knowledge of skilled workers flowed across cities
                  and countries; a metalworker in Florence knew techniques that came from Damascus through a chain of
                  apprentices and masters. Knowledge, techniques, tool blueprints traveled through these networks over
                  generations.
                </p>
                <div className="my-8 rounded-lg overflow-hidden border border-border max-w-2xl mx-auto">
                  <img
                    src="/silk-road-map.jpg"
                    alt="Historical map of the Silk Road trade routes connecting East and West"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Markets, States and Networks */}
          <AccordionItem value="markets-states">
            <AccordionTrigger className="font-serif text-xl text-primary hover:text-primary/80">
              Markets, States and Networks
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 text-foreground/90 leading-relaxed text-center pt-4">
                <p>
                  Society is often dichotomised as the State and the Market, yet sitting behind both are networks.
                  Markets themselves are deep networks of signals and transactions. Yet markets signal themselves
                  towards cold, instrumental and predatory behaviours.
                </p>
                <p>
                  States are also networked. They try very hard to formalize and codify everything, to remove the
                  personal element, to make the network operate like a machine. Bureaucracy is an attempt to create a
                  network that runs on rules rather than relationships.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Antidote to Code is Law */}
          <AccordionItem value="code-is-law">
            <AccordionTrigger className="font-serif text-xl text-primary hover:text-primary/80">
              Antidote to Code is Law
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 text-foreground/90 leading-relaxed text-center pt-4">
                <p>
                  Networked life is an antidote to the idea that code is law. Code is not law. Technology is not god.
                </p>
                <p>
                  It is also a reaction to the failure of Decentralized Autonomous Organizations to prove value and
                  efficacy. DAOs failed because they were networks trying to be markets. However, through flaws in their
                  design and implentation, they became much closer to bureaucracies where everything runs on rules,
                  where there is no flexibility, where everything is codified. They became rigid and brittle.
                  Interestingly this was not because the humans inside them were messing things ups and behaving 'too
                  much like humans' and not enough like robots or computers. Instead it was because they did not (and
                  could not) account for the relationality that is omnipresent when human networks operate.
                </p>
                <p>Relationality looks like:</p>
                <ul className="list-disc list-inside space-y-2 text-left max-w-2xl mx-auto">
                  <li>
                    People wanting to vote for the proposal of the people they liked and trusted, rather than evaluating
                    on rational deduction alone
                  </li>
                  <li>Founders of protocols not wanting to release information to a sea of unknown faces</li>
                  <li>People wanting to work in small, trusted groups instead of large, anonymous, cold factions</li>
                </ul>
                <p>
                  This relationality is not bad. Neither is it inherently bureaucratic or corrupt. DAOs were born out of
                  a frustration with the messiness of humans and failed catastrophically because their design could not
                  handle or account for how real networks function, which is relationally.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Working Principles */}
          <AccordionItem value="principles">
            <AccordionTrigger className="font-serif text-xl text-primary hover:text-primary/80">
              Working Principles
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 text-foreground/90 leading-relaxed text-center pt-4">
                <ul className="space-y-3">
                  <li>
                    <strong className="text-primary">Relationality is primary:</strong> Warm, not instrumental. Acting
                    in a networked way is acting in a way that is warm and hopeful, not cold and instrumental
                  </li>
                  <li>
                    <strong className="text-primary">Density matters:</strong> The number and quality of relationships
                    determines network capacity
                  </li>
                  <li>
                    <strong className="text-primary">Three is the minimum:</strong> A network requires at least three
                    nodes
                  </li>
                  <li>
                    <strong className="text-primary">You (all) can just do things:</strong> In networks agency emerges
                    through relationships and coordination and outcomes and spread is far greater than what individual
                    nodes alone could achieve
                  </li>
                  <li>
                    <strong className="text-primary">Boundaries are relational:</strong> A network extends as far as
                    meaningful relationship can be maintained
                  </li>
                  <li>
                    <strong className="text-primary">Seeing requires practice:</strong> Networks become visible through
                    sustained attention to relationship and patterns
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Research Agenda */}
          <AccordionItem value="research">
            <AccordionTrigger className="font-serif text-xl text-primary hover:text-primary/80">
              Research Agenda: Making Networks Visible
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 text-foreground/90 leading-relaxed text-center pt-4">
                <p>
                  <strong className="text-primary">Hypothesis:</strong> Networks constitute more of social, economic,
                  and ecological reality than our current conceptual frameworks can recognize.
                </p>
                <p>
                  Through the support of our partner project Network Effect, at Networked Life we are developing
                  epistemological and practical tools to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Identify networks that exist but go unnamed</li>
                  <li>Map relational density and flow patterns</li>
                  <li>Understand how network dynamics shape outcomes</li>
                  <li>Cultivate network health and agency</li>
                  <li>
                    Distinguish networks from other organizing forms (organizations, communities, markets, platforms)
                  </li>
                </ul>
                <p>
                  <strong className="text-primary">Goal:</strong> We do not want to reduce networks to something
                  controllable, but make them legible enough to participate in consciously while respecting their
                  essential dynamism.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Contact */}
        <section className="mb-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-serif text-3xl font-semibold text-primary mb-4">Interested in collaborating?</h2>
            <p className="text-foreground/90 mb-6">Get in touch to explore how we can work together</p>
            <a
              href="mailto:kate@networkedlife.co"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              kate@networkedlife.co
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
