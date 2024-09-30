import MainWrapper from "@/components/main-wrapper"

import About from "./Sections/about"
import Contact from "./Sections/contact"
import Hero from "./Sections/hero"
import Projects from "./Sections/projects"

export default function Home() {
  return (
    <MainWrapper>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </MainWrapper>
  )
}
