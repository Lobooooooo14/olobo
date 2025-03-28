import { HTMLAttributes } from "react"
import { useTranslation } from "react-i18next"
import { useMediaQuery } from "react-responsive"
import { Link, redirect, useNavigate } from "react-router-dom"

import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import Autoplay from "embla-carousel-autoplay"
import { ExpandIcon, ExternalLinkIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"

import ProjectCard from "@/components/project-card"
import { useTheme } from "@/components/theme-provider"

import projects from "@/content/projects"
import { ProjectType } from "@/content/projects"

export default function Projects() {
  const { t } = useTranslation("pages/home")
  const isMedium = useMediaQuery({ query: "(max-width: 768px)" })

  const topProjects = Object.values(projects)
    .flatMap(({ items }) => items)
    .filter((project) => project.top)

  if (topProjects.length === 0) return

  return (
    <section id="projects" className="py-4">
      <div className="mb-6 flex w-full flex-col items-center">
        <h2>{t("projects.title")}</h2>
        <Separator className="w-1/3" />
      </div>

      <div className="flex justify-center">
        <Carousel
          className="w-full max-w-4xl"
          opts={{
            loop: true,
            align: "center"
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
              stopOnMouseEnter: true
            }) as any
          ]}
        >
          <CarouselContent className="items-center">
            {topProjects.map((project) => (
              <CarouselItem
                key={project.slug}
                className="basis-[80%] sm:basis-[90%] lg:basis-[100%]"
              >
                {isMedium ? (
                  <ProjectCard project={project} />
                ) : (
                  <CustomProjectCard project={project} />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          {topProjects.length > 1 && (
            <>
              <CarouselPrevious className="left-[1rem] opacity-50 xl:left-[-2.5rem]" />
              <CarouselNext className="right-[1rem] opacity-50 xl:right-[-2.5rem]" />
            </>
          )}
        </Carousel>
      </div>

      <div className="mt-6 flex w-full justify-center">
        <Button
          variant="default"
          className="gap-2"
          onClick={() => redirect("/projects")}
        >
          <Link to="/projects">{t("projects.viewAll")}</Link>
        </Button>
      </div>
    </section>
  )
}

function CustomProjectCard({
  project,
  ...rest
}: { project: ProjectType } & HTMLAttributes<HTMLDivElement>) {
  const theme = useTheme()
  const { t } = useTranslation(["pages/home", "projects", "common"])
  const navigate = useNavigate()

  return (
    <Card {...rest}>
      <AspectRatio ratio={16 / 9}>
        {project.video ? (
          <video
            src={
              theme.themeName === "dark"
                ? (project.video.dark ?? project.video.src)
                : (project.video.light ?? project.video.src)
            }
            poster={
              theme.themeName === "dark"
                ? (project.poster.dark ?? project.poster.src)
                : (project.poster.light ?? project.poster.src)
            }
            className="h-full w-full rounded-lg rounded-t-lg object-cover transition-all"
            autoPlay
            loop
            muted
            preload="none"
          />
        ) : (
          <img
            src={
              theme.themeName === "dark"
                ? (project.poster.dark ?? project.poster.src)
                : (project.poster.light ?? project.poster.src)
            }
            className="h-full w-full rounded-lg object-cover transition-all"
          />
        )}

        {/* overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-gradient-to-t from-black/80 to-black/40 opacity-0 backdrop-blur-sm transition-opacity hover:opacity-100">
          <h3 className="my-0 overflow-hidden text-ellipsis text-nowrap text-center text-white">
            {project.title}
          </h3>
          <p className="overflow-hidden text-ellipsis text-nowrap text-center text-sm text-white/80">
            {t(project.shortDescription, { ns: "projects" })}
          </p>

          {/* Buttons */}
          <div className="mt-4 flex items-center justify-center gap-4">
            <Button
              variant="default"
              className="gap-2"
              onClick={() => navigate(`/projects/${project.slug}`)}
            >
              <ExpandIcon size={24} />
              {t("seeMore", { ns: "common" })}
            </Button>

            <Button
              variant="link"
              className="gap-2 text-white"
              onClick={() => window.open(project.url, "_blank")}
            >
              {t("open", { ns: "common" })}
              <ExternalLinkIcon size={24} />
            </Button>
          </div>
        </div>
      </AspectRatio>
    </Card>
  )
}
