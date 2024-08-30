import { useState } from "react"
import { useMediaQuery } from "react-responsive"

import { IconType } from "@icons-pack/react-simple-icons"
import { ExpandIcon, ExternalLinkIcon, TriangleAlertIcon } from "lucide-react"
import { transparentize } from "polished"

import { useTheme } from "@/components/theme-provider"
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

import { projectsList } from "@/constants/projects-list"

type BadgeType = {
  id: number
  name: string
  icon: IconType
  iconColor: string
}

export type ProjectListType = {
  id: number
  invertColorsInTheme?: "light" | "dark"
  video?: {
    src?: string
    dark?: string
    light?: string
  }
  badges: BadgeType[]
  poster: {
    src?: string
    dark?: string
    light?: string
  }
  title: string
  description: string
  url: string
}[]

export default function Projects() {
  const theme = useTheme()
  const [disableReverseColors, setDisableReverseColors] = useState(false)

  const isMedium = useMediaQuery({ query: "(max-width: 768px)" })

  return (
    <section id="projects" className="min-h-screen py-16">
      <div className="mb-6 flex w-full flex-col items-center">
        <h2 className="mb-2 mt-4 text-center text-4xl font-bold">Projetos</h2>
        <Separator className="w-1/3" />
      </div>
      <div className="flex justify-center">
        <Carousel
          className="w-full max-w-5xl"
          opts={{
            loop: true,
            align: "center"
          }}
        >
          <CarouselContent className="items-center">
            {projectsList.map((project) => (
              <CarouselItem key={project.id} className="basis-[90%]">
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

                    <div className="absolute inset-0 hidden flex-col items-center justify-center rounded-lg bg-gradient-to-t from-white/80 to-white/20 opacity-0 backdrop-blur-md transition-opacity hover:opacity-100 dark:from-black/80 dark:to-black/20 md:flex">
                      <div className="absolute right-1 top-1">
                        {project.invertColorsInTheme === theme.themeName && (
                          <Button
                            className="text-xs"
                            onClick={() =>
                              setDisableReverseColors(!disableReverseColors)
                            }
                          >
                            <TriangleAlertIcon
                              size={16}
                              color="orange"
                              className="my-[0.2rem] mr-1"
                            />
                            {!disableReverseColors
                              ? "Cores inversas. Toque para desativar"
                              : "Cores originais. Toque para inverter"}
                          </Button>
                        )}
                      </div>
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

                      <h3 className="mb-4 overflow-hidden text-ellipsis text-nowrap text-center text-3xl font-bold tracking-tight text-primary">
                        {project.title}
                      </h3>
                      <p className="mb-4 overflow-hidden text-ellipsis text-nowrap text-center text-sm text-primary/80">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <Button variant="default" className="gap-2">
                          <ExpandIcon size={24} />
                          Ver mais
                        </Button>
                        <Button
                          variant="link"
                          className="gap-2"
                          onClick={() => window.open(project.url, "_blank")}
                        >
                          Abrir
                          <ExternalLinkIcon size={24} />
                        </Button>
                      </div>
                    </div>
                  </AspectRatio>
                  <CardContent className="mt-4 md:hidden">
                    <h3 className="mb-4 overflow-hidden text-ellipsis text-nowrap text-center text-3xl font-bold tracking-tight text-primary">
                      {project.title}
                    </h3>
                    <p className="overflow-hidden text-ellipsis text-nowrap text-center text-sm text-primary/80">
                      {project.description}
                    </p>
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
                  <CardFooter className="flex justify-between md:hidden">
                    <Button variant="default" className="gap-2">
                      <ExpandIcon size={24} />
                      Ver mais
                    </Button>
                    <Button
                      variant="link"
                      className="gap-2"
                      onClick={() => window.open(project.url, "_blank")}
                    >
                      Abrir
                      <ExternalLinkIcon size={24} />
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[2rem] opacity-50" />
          <CarouselNext className="right-[2rem] opacity-50" />
        </Carousel>
      </div>
    </section>
  )
}
