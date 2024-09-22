import {
  SiDiscord,
  SiDiscordHex,
  SiPypi,
  SiPypiHex,
  SiPytest,
  SiPytestHex,
  SiPython,
  SiPythonHex,
  SiSphinx
} from "@icons-pack/react-simple-icons"

import TempyratureDarkPoster from "@/assets/tempyrature/tempyrature-dark-poster.png"
import TempyratureLightPoster from "@/assets/tempyrature/tempyrature-light-poster.png"
import VexpyDarkPoster from "@/assets/vexpy/vexpy-dark-poster.png"
import VexpyLightPoster from "@/assets/vexpy/vexpy-light-poster.png"

import { ProjectType } from "."

const python: ProjectType[] = [
  {
    id: 1,
    title: "Tempyrature",
    description: "projects.sections.python.tempyrature.shortDescription",
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
    id: 2,
    title: "Vex.py",
    description: "projects.sections.python.vexpy.shortDescription",
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

export default python
