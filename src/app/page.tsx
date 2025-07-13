import { Navigation } from "@/components/layout"
import { Hero, Introduction, Features } from "@/components/home"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Introduction />
        <Features />
      </main>
    </>
  )
}