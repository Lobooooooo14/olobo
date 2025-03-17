import {
  SiDrizzle,
  SiDrizzleHex,
  SiFastify,
  SiPostgresql,
  SiPostgresqlHex,
  SiReact,
  SiReactHex,
  SiTypescript,
  SiTypescriptHex,
  SiVite,
  SiViteHex
} from "@icons-pack/react-simple-icons"

import { ProjectType } from ".."

const nlwPocketJavascriptInorbit: ProjectType = {
  slug: "nlw-pocket-inorbit",
  title: "NLW Pocket Inorbit",
  shortDescription: "nlwPocketInorbit.shortDescription",
  description: "nlwPocketInorbit.description",
  github: "https://github.com/Lobooooooo14/nlw-pocket-js-inorbit",
  poster: {
    src: "https://b-portifolio.olobo.xyz/nlw-pocket-inorbit/nlw-pocket-inorbit-poster.webp"
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
      name: "Vite",
      icon: SiVite,
      iconColor: SiViteHex
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      iconColor: SiPostgresqlHex
    },
    {
      name: "Fastify",
      icon: SiFastify,
      iconColor: "#757575"
    },
    {
      name: "Drizzle-kit",
      icon: SiDrizzle,
      iconColor: SiDrizzleHex
    }
  ]
}

export default nlwPocketJavascriptInorbit
