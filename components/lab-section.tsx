import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"

export function LabSection() {
  return (
    <section id="lab" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-4 text-center">The Lab</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
            Experiments at the frontier. Each informs the services and products. None is subordinate to a single thesis.
          </p>

          <div className="space-y-6">
            <Card className="p-8">
              <div className="flex items-start gap-4">
                <span className="text-xs uppercase tracking-widest text-primary font-medium bg-primary/10 px-2 py-1 rounded">Experiment</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mt-4 mb-3">Xenota</h3>
              <p className="text-muted-foreground leading-relaxed">
                A platform for human-AI collaboration in small business and collective building — for those who want to ride the AI curve without being captured by it. Surplus from successful Xenotas is reinvested into the Lab, funding mechanisms for recognising and distributing value to work that markets consistently undervalue.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <span className="text-xs uppercase tracking-widest text-primary font-medium bg-primary/10 px-2 py-1 rounded">Experiment</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mt-4 mb-3">The Undercommons</h3>
              <p className="text-muted-foreground leading-relaxed">
                Designing systems for recognising and rewarding value outside boundaried spaces. Care labour. Artistic contribution. Community stewardship. Network catalysing.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Multiple distribution mechanisms, tested iteratively, building toward something more durable. A design space, not yet a product.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <span className="text-xs uppercase tracking-widest text-accent font-medium bg-accent/10 px-2 py-1 rounded">Active</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mt-4 mb-3">Running now</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <span className="text-foreground font-medium">Ship It</span> — an accountability accelerator for builders in the age of AI.
                </li>
                <li>
                  <span className="text-foreground font-medium">Gravity and Grace</span> — an immersive residency exploring embodied wisdom and what it means to be fully human in the age of hyperintelligence.
                </li>
                <li>
                  <span className="text-foreground font-medium">Code with JV</span> — teaching people to work fluently with agentic AI.
                </li>
              </ul>
            </Card>
          </div>

          
        </div>
      </div>
    </section>
  )
}
