export function Footer() {
  return (
    <footer id="contact" className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Noumena Labs</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Building conditions for human flourishing in the age of hyperintelligence.
          </p>
          <a
            href="mailto:hello@noumena-labs.org"
            className="text-primary hover:underline font-medium"
          >
            hello@noumena-labs.org
          </a>
          <div className="pt-8 mt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Noumena Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
