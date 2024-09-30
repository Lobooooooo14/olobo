import { IconType } from "@icons-pack/react-simple-icons"

import python from "./python"
import websites from "./websites"

type BadgeType = {
  name: string
  icon: IconType
  iconColor: string
}

type ProjectType = {
  slug: string
  title: string
  shortDescription: string
  description: string
  github?: string
  url?: string
  top?: boolean
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

type ProjectsType = Record<string, { name: string; items: ProjectType[] }>

const projects: ProjectsType = {
  websites: { name: "sections.websites", items: websites },
  python: { name: "sections.python", items: python },
  other: { name: "sections.other", items: [] }
}

export default projects
export type { BadgeType, ProjectType, ProjectsType }
