import {
  SiFirebase,
  SiFirebaseHex,
  SiIonic,
  SiIonicHex,
  SiMui,
  SiMuiHex,
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

import ArrozChatPoster from "@/assets/arroz-chat/arroz-chat-poster.png"
import BibliotecaPocketPoster from "@/assets/biblioteca-pocket/biblioteca-pocket-poster.png"
import BibliotecaPocketVideo from "@/assets/biblioteca-pocket/biblioteca-pocket-video.mp4"
import OloboDarkPoster from "@/assets/olobo/olobo-dark-poster.png"
import OloboLightPoster from "@/assets/olobo/olobo-light-poster.png"
import ShortStatsDarkPoster from "@/assets/short-stats/short-stats-dark-poster.png"
import ShortStatsDarkVideo from "@/assets/short-stats/short-stats-dark-video.mp4"
import ShortStatsLightPoster from "@/assets/short-stats/short-stats-light-poster.png"
import ShortStatsLightVideo from "@/assets/short-stats/short-stats-light-video.mp4"

import { ProjectType } from "."

const website: ProjectType[] = [
  {
    id: 1,
    title: "Short Stats",
    description: "projects.sections.websites.shortStats.shortDescription",
    url: "https://s.olobo.xyz/short",
    video: {
      dark: ShortStatsDarkVideo,
      light: ShortStatsLightVideo
    },
    poster: {
      dark: ShortStatsDarkPoster,
      light: ShortStatsLightPoster
    },
    badges: [
      {
        id: 1,
        name: "React",
        icon: SiReact,
        iconColor: SiReactHex
      },
      {
        id: 2,
        name: "Ionic Framework",
        icon: SiIonic,
        iconColor: SiIonicHex
      },
      {
        id: 3,
        name: "TypeScript",
        icon: SiTypescript,
        iconColor: SiTypescriptHex
      },
      {
        id: 4,
        name: "MUI",
        icon: SiMui,
        iconColor: SiMuiHex
      },
      {
        id: 5,
        name: "Vite",
        icon: SiVite,
        iconColor: SiViteHex
      },
      {
        id: 6,
        name: "Firebase",
        icon: SiFirebase,
        iconColor: SiFirebaseHex
      }
    ]
  },
  {
    id: 2,
    title: "Biblioteca Pocket",
    description: "projects.sections.websites.bibliotecaPocket.shortDescription",
    url: "https://bpocket-about.vercel.app/",
    invertColorsInTheme: "light",
    video: {
      src: BibliotecaPocketVideo
    },
    poster: {
      src: BibliotecaPocketPoster
    },
    badges: [
      {
        id: 1,
        name: "React",
        icon: SiReact,
        iconColor: SiReactHex
      },
      {
        id: 2,
        name: "TypeScript",
        icon: SiTypescript,
        iconColor: SiTypescriptHex
      },
      {
        id: 3,
        name: "Vite",
        icon: SiVite,
        iconColor: SiViteHex
      },
      {
        id: 4,
        name: "Tailwind",
        icon: SiTailwindcss,
        iconColor: SiTailwindcssHex
      }
    ]
  },
  {
    id: 3,
    title: "Arroz Chat",
    description: "projects.sections.websites.arrozChat.shortDescription",
    url: "https://arroz-chat.vercel.app/",
    invertColorsInTheme: "light",
    poster: {
      src: ArrozChatPoster
    },
    badges: [
      {
        id: 1,
        name: "React",
        icon: SiReact,
        iconColor: SiReactHex
      },
      {
        id: 2,
        name: "TypeScript",
        icon: SiTypescript,
        iconColor: SiTypescriptHex
      },
      {
        id: 3,
        name: "Vite",
        icon: SiVite,
        iconColor: SiViteHex
      },
      {
        id: 4,
        name: "Firebase",
        icon: SiFirebase,
        iconColor: SiFirebaseHex
      }
    ]
  },
  {
    id: 4,
    title: "O Lobo",
    description: "projects.sections.websites.olobo.shortDescription",
    url: "https://olobo.xyz",
    poster: {
      dark: OloboDarkPoster,
      light: OloboLightPoster
    },
    badges: [
      {
        id: 1,
        name: "React",
        icon: SiReact,
        iconColor: SiReactHex
      },
      {
        id: 2,
        name: "TypeScript",
        icon: SiTypescript,
        iconColor: SiTypescriptHex
      },
      {
        id: 3,
        name: "Tailwind",
        icon: SiTailwindcss,
        iconColor: SiTailwindcssHex
      },
      {
        id: 4,
        name: "Shadcn/ui",
        icon: SiShadcnui,
        iconColor: "#4e4e4e"
      },
      {
        id: 5,
        name: "Vite",
        icon: SiVite,
        iconColor: SiViteHex
      }
    ]
  }
]

export default website
