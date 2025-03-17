import {
  SiFirebase,
  SiFirebaseHex,
  SiIonic,
  SiIonicHex,
  SiMui,
  SiMuiHex,
  SiReact,
  SiReactHex,
  SiTypescript,
  SiTypescriptHex,
  SiVite,
  SiViteHex
} from "@icons-pack/react-simple-icons"

import { ProjectType } from ".."

const shortStats: ProjectType = {
  slug: "short-stats",
  title: "Short Stats",
  shortDescription: "shortStats.shortDescription",
  description: "shortStats.description",
  url: "https://s.olobo.xyz/short",
  top: true,
  video: {
    dark: "https://b-portifolio.olobo.xyz/short-stats/short-stats-dark-video.mp4",
    light:
      "https://b-portifolio.olobo.xyz/short-stats/short-stats-light-video.mp4"
  },
  poster: {
    dark: "https://b-portifolio.olobo.xyz/short-stats/short-stats-dark-poster.webp",
    light:
      "https://b-portifolio.olobo.xyz/short-stats/short-stats-light-poster.webp"
  },
  badges: [
    {
      name: "React",
      icon: SiReact,
      iconColor: SiReactHex
    },
    {
      name: "Ionic Framework",
      icon: SiIonic,
      iconColor: SiIonicHex
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      iconColor: SiTypescriptHex
    },
    {
      name: "MUI",
      icon: SiMui,
      iconColor: SiMuiHex
    },
    {
      name: "Vite",
      icon: SiVite,
      iconColor: SiViteHex
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      iconColor: SiFirebaseHex
    }
  ]
}

export default shortStats
