import Contact from "../Contact"
import About from "./Sections/About"
import Hero from "./Sections/Hero"
import Projects from "./Sections/Projects"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
