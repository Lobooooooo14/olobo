import {
  SiPypi,
  SiPypiHex,
  SiPytest,
  SiPytestHex,
  SiPython,
  SiPythonHex,
  SiSphinx
} from "@icons-pack/react-simple-icons"

import { ProjectType } from ".."

const tempyrature: ProjectType = {
  slug: "tempyrature",
  title: "Tempyrature",
  shortDescription: "tempyrature.shortDescription",
  description: "tempyrature.description",
  url: "https://tempyrature.readthedocs.io/en/latest/",
  github: "https://github.com/Lobooooooo14/tempyrature",
  poster: {
    dark: "https://b-portifolio.olobo.xyz/tempyrature/tempyrature-dark-poster.webp",
    light:
      "https://b-portifolio.olobo.xyz/tempyrature/tempyrature-light-poster.webp"
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
