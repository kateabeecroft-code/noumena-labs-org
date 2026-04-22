import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">Noumena Labs</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#idea"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              The Idea
            </Link>
            <Link
              href="#how-we-work"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How We Work
            </Link>
            <Link
              href="#lab"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              The Lab
            </Link>
            <Button variant="outline" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </nav>

          <button className="md:hidden flex flex-col gap-1.5 w-6">
            <span className="h-0.5 w-full bg-foreground" />
            <span className="h-0.5 w-full bg-foreground" />
            <span className="h-0.5 w-full bg-foreground" />
          </button>
        </div>
      </div>
    </header>
  )
}
