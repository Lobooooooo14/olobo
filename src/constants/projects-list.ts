import {
  SiFirebase,
  SiFirebaseHex,
  SiIonic,
  SiIonicHex,
  SiMui,
  SiMuiHex,
  SiPypi,
  SiPypiHex,
  SiPytest,
  SiPytestHex,
  SiPython,
  SiPythonHex,
  SiReact,
  SiReactHex,
  SiSphinx,
  SiSphinxHex,
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
import ShortStatsDarkPoster from "@/assets/short-stats/short-stats-dark-poster.png"
import ShortStatsDarkVideo from "@/assets/short-stats/short-stats-dark-video.mp4"
import ShortStatsLightPoster from "@/assets/short-stats/short-stats-light-poster.png"
import ShortStatsLightVideo from "@/assets/short-stats/short-stats-light-video.mp4"
import TempyratureDarkPoster from "@/assets/tempyrature/tempyrature-dark-poster.png"
import TempyratureLightPoster from "@/assets/tempyrature/tempyrature-light-poster.png"
import { ProjectListType } from "@/pages/Home/Projects"

export const projectsList: ProjectListType = [
  {
    id: 1,
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
        id: 2,
        name: "React",
        icon: SiReact,
        iconColor: SiReactHex
      },
      {
        id: 1,
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
        name: "Firebase",
        icon: SiFirebase,
        iconColor: SiFirebaseHex
      }
    ],
    title: "Short Stats",
    description: "Um simples encurtador de URLs.",
    url: "https://s.olobo.xyz/short"
  },
  {
    id: 2,
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
    ],
    title: "Biblioteca Pocket",
    description: "Landing page para um app de livros.",
    url: "https://bpocket-about.vercel.app/"
  },
  {
    id: 3,
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
        name: "Firebase",
        icon: SiFirebase,
        iconColor: SiFirebaseHex
      }
    ],
    title: "Arroz Chat",
    description: "Chat em tempo real usando Firebase.",
    url: "https://arroz-chat.vercel.app/"
  },
  {
    id: 4,
    poster: {
      dark: TempyratureDarkPoster,
      light: TempyratureLightPoster
    },
    badges: [
      {
        id: 1,
        name: "Python",
        icon: SiPython,
        iconColor: SiPythonHex
      },
      {
        id: 2,
        name: "Pytest",
        icon: SiPytest,
        iconColor: SiPytestHex
      },
      {
        id: 3,
        name: "Pypi",
        icon: SiPypi,
        iconColor: SiPypiHex
      },
      {
        id: 4,
        name: "Sphinx",
        icon: SiSphinx,
        iconColor: "#4e4e4e"
      }
    ],
    title: "Tempyrature",
    description: "Biblioteca de conversão de temperatura em Python.",
    url: "https://tempyrature.readthedocs.io/en/latest/"
  }
]
