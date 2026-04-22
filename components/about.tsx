import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-serif text-primary">01</span>
                <h3 className="font-serif text-xl font-medium text-foreground">Organisational attunement</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Organisation design", "Governance", "People & culture", "Strategy", "Leadership coaching"].map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                Working with organisations on the structural and relational questions that AI makes urgent. Always from the premise that the relational layer is primary, and that sustainable performance depends on coherence rather than control.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We work across the full stack: from the individual leader finding their ground, to the organisation redesigning its operating model, to the network figuring out how to govern itself at scale.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-serif text-primary">02</span>
                <h3 className="font-serif text-xl font-medium text-foreground">AI adoption strategy</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Path dependency", "AI strategy", "Geopolitics", "Systems thinking"].map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                Our strategists are not generalist consultants who evaluate your cost model — your bot can do that. They are innovation engineers who move fluently between technical depth and systems-level thinking, translating future risks and tradeoffs into decisions organisations can actually act on.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                This is strategy bigger than competitive positioning. Which AI choices, made now, will constrain or enable what is possible in three years. Tooling and culture are not separate levers. We work them together.
              </p>
            </Card>
          </div>

          <div className="p-6 bg-background rounded-lg border border-border">
            <p className="text-lg text-center text-foreground font-medium">
              The red thread through both: <span className="text-primary">humanness as the differentiating variable</span> in a world where everything else is being automated.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
