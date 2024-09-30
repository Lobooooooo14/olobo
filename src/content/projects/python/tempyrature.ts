import {
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

import { ProjectType } from ".."

const tempyrature: ProjectType = {
  slug: "tempyrature",
  title: "Tempyrature",
  shortDescription: "tempyrature.shortDescription",
  description: "tempyrature.description",
  url: "https://tempyrature.readthedocs.io/en/latest/",
  github: "https://github.com/Lobooooooo14/tempyrature",
  poster: {
    dark: TempyratureDarkPoster,
    light: TempyratureLightPoster
  },
  badges: [
    {
      name: "Python",
      icon: SiPython,
      iconColor: SiPythonHex
    },
    {
      name: "Pytest",
      icon: SiPytest,
      iconColor: SiPytestHex
    },
    {
      name: "Pypi",
      icon: SiPypi,
      iconColor: SiPypiHex
    },
    {
      name: "Sphinx",
      icon: SiSphinx,
      iconColor: "#4e4e4e"
    }
  ]
}

export default tempyrature
