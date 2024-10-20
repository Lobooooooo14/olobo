import { HTMLAttributes } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { ExpandIcon, ExternalLinkIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from "@/components/ui/card"

import TechBadge from "@/components/tech-badge"
import { useTheme } from "@/components/theme-provider"

import { ProjectType } from "@/content/projects"
import { cn } from "@/lib/utils"

export default function ProjectCard({
  project,
  className,
  ...rest
}: { project: ProjectType } & HTMLAttributes<HTMLDivElement>) {
  const theme = useTheme()
  const { t } = useTranslation(["common", "projects"])
  const navigate = useNavigate()

  return (
    <Card className={cn("w-full", className)} {...rest}>
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
            className="h-full w-full rounded-t-lg object-cover"
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
            className="h-full w-full rounded-t-lg object-cover"
          />
        )}
      </AspectRatio>

      <CardContent className="space-y-3 p-4">
        <div className="text-center sm:text-left">
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>
            {t(project.shortDescription, { ns: "projects" })}
          </CardDescription>
        </div>

        {/* Badges */}
        <div className="relative flex flex-nowrap gap-2 overflow-hidden">
          <div className="pointer-events-none absolute h-full w-full bg-gradient-to-l from-background to-transparent to-20%"></div>
          {project.badges.map((badge) => (
            <TechBadge
              key={badge.name}
              _icon={badge.icon}
              color={badge.iconColor}
              name={badge.name}
            />
          ))}
        </div>

        <div className="flex justify-between gap-2">
          <Button
            variant="default"
            className="w-full gap-2"
            onClick={() => navigate(`/projects/${project.slug}`)}
          >
            <ExpandIcon size={22} />
            {t("seeMore")}
          </Button>

          <Button
            variant="default"
            className="gap-2"
            onClick={() => window.open(project.url, "_blank")}
          >
            {t("open")}
            <ExternalLinkIcon size={22} />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
