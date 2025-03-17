import {
  SiFramer,
  SiFramerHex,
  SiReact,
  SiReactHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTypescript,
  SiTypescriptHex,
  SiVite,
  SiViteHex
} from "@icons-pack/react-simple-icons"

import { ProjectType } from ".."

const bpocket: ProjectType = {
  slug: "biblioteca-pocket",
  title: "Biblioteca Pocket",
  shortDescription: "bibliotecaPocket.shortDescription",
  description: "bibliotecaPocket.description",
  github: "https://github.com/cookieukw/PocketLibraryWebsite",
  url: "https://bpocket-about.vercel.app/",
  invertColorsInTheme: "light",
  top: true,
  video: {
    src: "https://b-portifolio.olobo.xyz/biblioteca-pocket/biblioteca-pocket-video.mp4"
  },
  poster: {
    src: "https://b-portifolio.olobo.xyz/biblioteca-pocket/biblioteca-pocket-poster.webp"
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
      name: "Tailwind",
      icon: SiTailwindcss,
      iconColor: SiTailwindcssHex
    },
    {
      name: "Framer Motion",
      icon: SiFramer,
      iconColor: SiFramerHex
    }
  ]
}

export default bpocket
