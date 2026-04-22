import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { PathDependency } from "@/components/path-dependency"
import { AttunementScales } from "@/components/attunement-scales"
import { Services } from "@/components/services"
import { LabSection } from "@/components/lab-section"
import { Team } from "@/components/team"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <PathDependency />
      <AttunementScales />
      <Services />
      <LabSection />
      <Team />
      <Footer />
    </main>
  )
}
