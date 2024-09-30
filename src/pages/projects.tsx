import { HTMLAttributes, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useMediaQuery } from "react-responsive"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"

import Loading from "@/components/loading"
import MainWrapper from "@/components/main-wrapper"
import ProjectCard from "@/components/project-card"

import { ProjectType, ProjectsType } from "@/content/projects"
import { cn } from "@/lib/utils"

export default function Projects() {
  const { t } = useTranslation("pages/projects")
  const [projects, setProjects] = useState<ProjectsType | null>(null)

  useEffect(() => {
    const loadProjects = async () => {
      const projectsInstance = await import("@/content/projects")
      setProjects(projectsInstance.default)
    }

    loadProjects()
  }, [])

  if (!projects) return <Loading expand />

  return (
    <MainWrapper>
      <div className="flex flex-col items-center p-4 lg:p-8">
        <div className="w-full max-w-6xl">
          <h1 className="m-0 mb-4 w-full">{t("title")}</h1>
          <Separator className="mb-4" />
          {Object.entries(projects).map(([sectionKey, sectionData]) => (
            <ProjectSection
              key={sectionKey}
              name={t(sectionData.name)}
              sectionProjects={sectionData.items}
            />
          ))}
        </div>
      </div>
    </MainWrapper>
  )
}

export function ProjectSection({
  name,
  sectionProjects,
  children,
  className,
  ...rest
}: {
  name: string
  sectionProjects: ProjectType[]
} & HTMLAttributes<HTMLElement>) {
  const isMedium = useMediaQuery({ query: "(max-width: 768px)" })

  if (!sectionProjects.length) return null

  return (
    <section className={cn("mb-12", className)} {...rest}>
      <h2 className="m-0 mb-4">{name}</h2>
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true
        }}
      >
        <CarouselContent className="items-center">
          {sectionProjects.map((project) => (
            <CarouselItem
              key={project.slug}
              className="basis-full md:basis-1/2"
            >
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {sectionProjects.length > (isMedium ? 1 : 2) && (
          <>
            <CarouselPrevious className="left-[1rem] opacity-50 xl:left-[-2.5rem]" />
            <CarouselNext className="right-[1rem] opacity-50 xl:right-[-2.5rem]" />
          </>
        )}
      </Carousel>
    </section>
  )
}
