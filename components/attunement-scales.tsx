import { User, Building2, Network, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"

const scales = [
  {
    icon: User,
    title: "The individual",
    subtitle: "The capacity to know what is good, instantly.",
    description: "Rick Rubin, asked what he does to produce great music: I know what I like and what I don't like, and I'm decisive about it. A lifetime of deep listening distilled into a moment of recognition. Heidegger called this aletheia — unconcealment — the moment when what is real reveals itself. It arrives through presence. You cannot prompt your way to it.",
  },
  {
    icon: Building2,
    title: "The organisation",
    subtitle: "Design that works with relational reality rather than against it.",
    description: "Governance understood not as compliance but as the ongoing practice of distributed alignment. The formal and informal architectures through which decisions get made, trust gets built, and coherence gets maintained across time and change. The leader who knows when the plan needs to change before the metrics do.",
  },
  {
    icon: Network,
    title: "The network",
    subtitle: "Value creation in systems that no longer route through a centre.",
    description: "How trust flows. How governance works at the level of communities and ecosystems. And the harder question: how to recognise and reward the forms of value that flow through networks but are invisible to markets. Care labour. Artistic contribution. Community stewardship. Network catalysing. These are not edge cases. They are the substrate.",
  },
  {
    icon: Globe,
    title: "Municipal & State level",
    subtitle: "Where path dependency is not an organisational problem but a civilisational one.",
    description: "Its costs will be borne by people who never had a seat at the table. AI governance, local and national strategy, the geopolitics of intelligence infrastructure — these are coherence problems at civilisational scale. The design of institutions that can maintain attunement, make consequential decisions, and remain adaptive is the most important organisational design problem of the next decade.",
  },
]

export function AttunementScales() {
  return (
    <section id="attunement" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-12 text-center">III — Attunement and discernment at every scale</p>

          <div className="grid md:grid-cols-2 gap-6">
            {scales.map((scale, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <scale.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-foreground">{scale.title}</h3>
                  </div>
                  <p className="text-primary font-medium text-sm">{scale.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">{scale.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
