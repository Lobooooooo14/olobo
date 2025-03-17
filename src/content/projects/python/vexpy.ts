import {
  SiDiscord,
  SiDiscordHex,
  SiPython,
  SiPythonHex
} from "@icons-pack/react-simple-icons"

import { ProjectType } from ".."

const vexpy: ProjectType = {
  slug: "vexpy",
  title: "Vex.py",
  shortDescription: "vexpy.shortDescription",
  description: "vexpy.description",
  github: "https://github.com/BotVex/Vex.py/",
  poster: {
    dark: "https://b-portifolio.olobo.xyz/vexpy/vexpy-dark-poster.webp",
    light: "https://b-portifolio.olobo.xyz/vexpy/vexpy-light-poster.webp"
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
