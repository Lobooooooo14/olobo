import { HTMLAttributes, useState } from "react"
import { useTranslation } from "react-i18next"
import { useMediaQuery } from "react-responsive"
import { Link, redirect } from "react-router-dom"

import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { ExpandIcon, ExternalLinkIcon, TriangleAlertIcon } from "lucide-react"

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
import TechBadge from "@/components/tech-badge"
import { useTheme } from "@/components/theme-provider"

import { projects, ProjectType } from "@/constants"

export default function Projects() {
  const { t } = useTranslation()
  const isMedium = useMediaQuery({ query: "(max-width: 768px)" })

  return (
    <section id="projects" className="min-h-screen py-16">
      <div className="mb-6 flex w-full flex-col items-center">
        <h2>{t("home.projects.title")}</h2>
        <Separator className="w-1/3" />
      </div>

      <div className="flex justify-center">
        <Carousel
          className="w-full max-w-4xl"
          opts={{
            loop: true,
            align: "center"
          }}
        >
          <CarouselContent className="items-center">
            {projects.top.map((project) => (
              <CarouselItem
                key={project.id}
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
          {projects.top.length > 1 && (
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
          <Link to="/projects">{t("home.projects.viewAll")}</Link>
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
  const { t } = useTranslation()
  const isMedium = useMediaQuery({ query: "(max-width: 768px)" })

  const [disableReverseColors, setDisableReverseColors] = useState(false)

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
            style={{
              filter:
                project.invertColorsInTheme === theme.themeName &&
                !disableReverseColors &&
                !isMedium
                  ? "invert(1)"
                  : "invert(0)"
            }}
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
            style={{
              filter:
                project.invertColorsInTheme === theme.themeName &&
                !disableReverseColors &&
                !isMedium
                  ? "invert(1)"
                  : "invert(0)"
            }}
            className="h-full w-full rounded-lg object-cover transition-all"
          />
        )}

        {/* overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-gradient-to-t from-white/80 to-white/20 opacity-0 backdrop-blur-md transition-opacity hover:opacity-100 dark:from-black/80 dark:to-black/20">
          {/* Invert colors button */}
          <div className="absolute right-1 top-1">
            {project.invertColorsInTheme === theme.themeName && (
              <Button
                className="text-xs"
                onClick={() => setDisableReverseColors(!disableReverseColors)}
              >
                <TriangleAlertIcon
                  size={16}
                  color="orange"
                  className="my-[0.2rem] mr-1"
                />
                {t(
                  !disableReverseColors
                    ? "home.projects.card.invertColors"
                    : "home.projects.card.originalColors"
                )}
              </Button>
            )}
          </div>

          {/* Badges */}
          <div className="absolute bottom-1 left-1 flex flex-wrap gap-2">
            {project.badges.map((badge) => (
              <TechBadge
                key={badge.id}
                _icon={badge.icon}
                color={badge.iconColor}
                name={badge.name}
              />
            ))}
          </div>

          <h3 className="my-0 overflow-hidden text-ellipsis text-nowrap text-center">
            {project.title}
          </h3>
          <p className="overflow-hidden text-ellipsis text-nowrap text-center text-sm">
            {t(project.description)}
          </p>

          {/* Buttons */}
          <div className="mt-4 flex items-center justify-center gap-4">
            <Button variant="default" className="gap-2">
              <ExpandIcon size={24} />
              {t("home.projects.card.seeMore")}
            </Button>

            <Button
              variant="link"
              className="gap-2"
              onClick={() => window.open(project.url, "_blank")}
            >
              {t("home.projects.card.openProject")}
              <ExternalLinkIcon size={24} />
            </Button>
          </div>
        </div>
      </AspectRatio>
    </Card>
  )
}
