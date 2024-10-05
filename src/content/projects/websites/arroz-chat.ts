import {
  SiFirebase,
  SiFirebaseHex,
  SiFramer,
  SiFramerHex,
  SiI18next,
  SiI18nextHex,
  SiReact,
  SiReactHex,
  SiTypescript,
  SiTypescriptHex,
  SiVite,
  SiViteHex
} from "@icons-pack/react-simple-icons"

import ArrozChatPoster from "@/assets/arroz-chat/arroz-chat-poster.webp"

import { ProjectType } from ".."

const arrozChat: ProjectType = {
  slug: "arroz-chat",
  title: "Arroz Chat",
  shortDescription: "arrozChat.shortDescription",
  description: "arrozChat.description",
  github: "https://github.com/Lobooooooo14/arroz-Chat",
  url: "https://arroz-chat.vercel.app/",
  invertColorsInTheme: "light",
  top: true,
  poster: {
    src: ArrozChatPoster
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
      name: "Firebase",
      icon: SiFirebase,
      iconColor: SiFirebaseHex
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

export default arrozChat
