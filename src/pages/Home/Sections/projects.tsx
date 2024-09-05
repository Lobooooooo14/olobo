import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useMediaQuery } from "react-responsive"
import { Link, redirect } from "react-router-dom"

import { ExpandIcon, ExternalLinkIcon, TriangleAlertIcon } from "lucide-react"
import { transparentize } from "polished"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"

import { useTheme } from "@/components/theme-provider"
import { H2, H3, P } from "@/components/typography"

import { projectsList, ProjectListType } from "@/constants/projects-list"

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="min-h-screen py-16">
      <div className="mb-6 flex w-full flex-col items-center">
        <H2>{t("home.projects.title")}</H2>
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
            {projectsList.map((project) => (
              <CarouselItem
                key={project.id}
                className="basis-[80%] sm:basis-[90%] lg:basis-[100%]"
              >
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[2rem] opacity-50 lg:left-[-2.5rem]" />
          <CarouselNext className="right-[2rem] opacity-50 lg:right-[-2.5rem]" />
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

function ProjectCard({ project }: { project: ProjectListType }) {
  const theme = useTheme()
  const { t } = useTranslation()
  const isMedium = useMediaQuery({ query: "(max-width: 768px)" })

  const [disableReverseColors, setDisableReverseColors] = useState(false)

  return (
    <Card>
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
            className="h-full w-full rounded-t-lg object-cover transition-all md:rounded-lg"
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
            className="h-full w-full rounded-t-lg object-cover transition-all md:rounded-lg"
          />
        )}

        {/* overlay */}
        <div className="absolute inset-0 hidden flex-col items-center justify-center rounded-lg bg-gradient-to-t from-white/80 to-white/20 opacity-0 backdrop-blur-md transition-opacity hover:opacity-100 dark:from-black/80 dark:to-black/20 md:flex">
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
              <Badge
                key={badge.id}
                className="font-mono text-xs text-primary/80 dark:text-primary/80"
                style={{
                  background: transparentize(0.9, badge.iconColor)
                }}
              >
                <badge.icon
                  size={16}
                  color={badge.iconColor}
                  className="my-[0.2rem] mr-1"
                />
                {badge.name}
              </Badge>
            ))}
          </div>

          <H3 className="my-0 overflow-hidden text-ellipsis text-nowrap text-center">
            {project.title}
          </H3>
          <P className="overflow-hidden text-ellipsis text-nowrap text-center text-sm">
            {t(project.description)}
          </P>

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

      {/* Without overlay */}
      <CardContent className="mt-4 md:hidden">
        <H3 className="my-0 overflow-hidden text-ellipsis text-nowrap text-center">
          {project.title}
        </H3>
        <P className="overflow-hidden text-ellipsis text-nowrap text-center text-sm">
          {t(project.description)}
        </P>

        {/* Badges */}
        <div className="mt-4 flex flex-wrap justify-center gap-1">
          {project.badges.map((badge) => (
            <Badge
              key={badge.id}
              className="font-mono text-xs text-primary/80 dark:text-primary/80"
              style={{
                background: transparentize(0.9, badge.iconColor)
              }}
            >
              <badge.icon
                size={16}
                color={badge.iconColor}
                className="my-[0.2rem] mr-1"
              />
              {badge.name}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* Buttons */}
      <CardFooter className="flex justify-between md:hidden">
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
      </CardFooter>
    </Card>
  )
}
