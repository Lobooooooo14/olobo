import {
  SiDiscord,
  SiDiscordHex,
  SiPython,
  SiPythonHex
} from "@icons-pack/react-simple-icons"

import VexpyDarkPoster from "@/assets/vexpy/vexpy-dark-poster.webp"
import VexpyLightPoster from "@/assets/vexpy/vexpy-light-poster.webp"

import { ProjectType } from ".."

const vexpy: ProjectType = {
  slug: "vexpy",
  title: "Vex.py",
  shortDescription: "vexpy.shortDescription",
  description: "vexpy.description",
  github: "https://github.com/BotVex/Vex.py/",
  poster: {
    dark: VexpyDarkPoster,
    light: VexpyLightPoster
  },
  badges: [
    {
      name: "Python",
      icon: SiPython,
      iconColor: SiPythonHex
    },
    {
      name: "Disnake",
      icon: SiDiscord,
      iconColor: SiDiscordHex
    }
  ]
}

export default vexpy
