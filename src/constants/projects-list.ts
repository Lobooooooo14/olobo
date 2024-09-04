import {
  IconType,
  SiDiscord,
  SiDiscordHex,
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
import VexpyDarkPoster from "@/assets/vexpy/vexpy-dark-poster.png"
import VexpyLightPoster from "@/assets/vexpy/vexpy-light-poster.png"

type BadgeType = {
  id: number
  name: string
  icon: IconType
  iconColor: string
}

export type ProjectListType = {
  id: number
  title: string
  description: string
  url: string
  invertColorsInTheme?: "light" | "dark"
  video?: {
    src?: string
    dark?: string
    light?: string
  }
  badges: BadgeType[]
  poster: {
    src?: string
    dark?: string
    light?: string
  }
}

export type projectsListType = ProjectListType[]

export const projectsList: projectsListType = [
  {
    id: 1,
    title: "Short Stats",
    description: "projectsList.shortStats.description",
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
    description: "projectsList.bibliotecaPocket.description",
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
    description: "projectsList.arrozChat.description",
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
    title: "Tempyrature",
    description: "projectsList.tempyrature.description",
    url: "https://tempyrature.readthedocs.io/en/latest/",
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
    ]
  },
  {
    id: 5,
    title: "Vex.py",
    description: "projectsList.vexpy.description",
    url: "https://github.com/BotVex/Vex.py/",
    poster: {
      dark: VexpyDarkPoster,
      light: VexpyLightPoster
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
        name: "Disnake",
        icon: SiDiscord,
        iconColor: SiDiscordHex
      }
    ]
  }
]
