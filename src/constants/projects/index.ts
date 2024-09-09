import { IconType } from "@icons-pack/react-simple-icons"

import python from "./python"
import top from "./top"
import website from "./website"

export type BadgeType = {
  id: number
  name: string
  icon: IconType
  iconColor: string
}

export type ProjectType = {
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
  poster: {
    src?: string
    dark?: string
    light?: string
  }
  badges: BadgeType[]
}

export default {
  sections: [
    { name: "projects.sections.websites.title", items: website },
    { name: "projects.sections.python.title", items: python }
  ],
  top
}
