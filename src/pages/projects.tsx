import { HTMLAttributes } from "react"
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

import ProjectCard from "@/components/project-card"
import { H1, H2 } from "@/components/typography"

import { projects, ProjectType } from "@/constants"
import { cn } from "@/lib/utils"

export default function Projects() {
  const { t } = useTranslation()

  return (
    <main className="flex flex-col items-center p-4 lg:p-8">
      <div className="w-full max-w-6xl">
        <H1 className="m-0 mb-4 w-full">{t("projects.title")}</H1>
        <Separator className="mb-4" />
        {projects.sections.map((section) => (
          <ProjectSection
            name={t(section.name)}
            sectionProjects={section.items}
          />
        ))}
      </div>
    </main>
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
      <H2 className="m-0 mb-4">{name}</H2>
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true
        }}
      >
        <CarouselContent className="items-center">
          {sectionProjects.map((project) => (
            <CarouselItem key={project.id} className="basis-full md:basis-1/2">
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
