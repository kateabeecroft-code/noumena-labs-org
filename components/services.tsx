import { Card } from "@/components/ui/card"
import { Layers, Shield, Lightbulb, TrendingUp, ArrowRight } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 text-center">IV — The age of organisational artistry is here</p>
          
          <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="text-primary font-medium">Services</span> for organisations that want to act with wisdom, not just speed.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-2">
              <span className="text-primary font-medium">Products</span> that extend human capability without replacing human judgment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-2">
              <span className="text-primary font-medium">Experiments</span> that prototype the future of work before it gets decided for us.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
