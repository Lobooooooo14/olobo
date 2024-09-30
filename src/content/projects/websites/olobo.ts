import {
  SiFramer,
  SiFramerHex,
  SiI18next,
  SiI18nextHex,
  SiReact,
  SiReactHex,
  SiShadcnui,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTypescript,
  SiTypescriptHex,
  SiVite,
  SiViteHex
} from "@icons-pack/react-simple-icons"

import OloboDarkPoster from "@/assets/olobo/olobo-dark-poster.png"
import OloboLightPoster from "@/assets/olobo/olobo-light-poster.png"

import { ProjectType } from ".."

const oLobo: ProjectType = {
  slug: "olobo",
  title: "O Lobo",
  shortDescription: "olobo.shortDescription",
  description: "olobo.description",
  github: "https://github.com/Lobooooooo14/olobo",
  url: "https://olobo.xyz",
  poster: {
    dark: OloboDarkPoster,
    light: OloboLightPoster
  },
  badges: [
    {
      name: "React",
      icon: SiReact,
      iconColor: SiReactHex
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      iconColor: SiTypescriptHex
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      iconColor: SiTailwindcssHex
    },
    {
      name: "Shadcn/ui",
      icon: SiShadcnui,
      iconColor: "#4e4e4e"
    },
    {
      name: "Vite",
      icon: SiVite,
      iconColor: SiViteHex
    },
    {
      name: "Framer Motion",
      icon: SiFramer,
      iconColor: SiFramerHex
    },
    {
      name: "i18next",
      icon: SiI18next,
      iconColor: SiI18nextHex
    }
  ]
}

export default oLobo
