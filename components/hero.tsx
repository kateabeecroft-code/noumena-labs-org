export function Team() {
  return (
    <section id="team" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 text-center">VI — Who we are</p>
          
          <div className="space-y-8 mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              The team coalescing around Noumena Labs has spent decades inside networked organisations — building them, governing them, watching what works and what doesn't. We have worked at the intersection of organisational theory and practice, engineering and philosophy, strategy and somatics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              The name <span className="text-primary font-medium">Noumena</span> — Kant's thing-in-itself, the reality beneath appearances — points at where we work. Not at the surface phenomena of organisational life, but at the underlying structure: the relational, the systemic, the emergent. The layer most interventions never reach.
            </p>
          </div>

          <div className="p-8 bg-background rounded-lg border border-border text-center">
            <p className="text-xl text-primary font-medium">Coming soon</p>
          </div>
        </div>
      </div>
    </section>
  )
}
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Contact</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-4 text-balance leading-tight">
            <span className="text-primary font-medium">Attunement</span>
            <br />
            is the moat.
          </h1>
          
          <div className="mt-16 space-y-6 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              The choices being made right now about AI will lock in organisational trajectories that are very hard to escape.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              In the age of hyperintelligence, the scarce thing is not information. It is the capacity to know what matters, to sense what is true, to act with integrity under conditions of radical uncertainty.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Services, products and lab experiments at the intersection of human systems, relational depth, and AI adoption.
            </p>
            
            <a href="#services" className="inline-flex items-center gap-2 text-primary font-medium hover:underline mt-4">
              Read the lightpaper
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-16 p-8 bg-secondary/30 rounded-lg border border-border max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Organisations come to Noumena Labs when they are holding two problems at once: something is not working in how their people relate, decide, and act together, and they are adopting new AI tooling fast. These are not separate problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
