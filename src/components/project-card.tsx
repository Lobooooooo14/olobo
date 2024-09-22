import { HTMLAttributes } from "react"
import { useTranslation } from "react-i18next"

import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { DialogTrigger } from "@radix-ui/react-dialog"
import { ExpandIcon, ExternalLinkIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"

import TechBadge from "@/components/tech-badge"
import { useTheme } from "@/components/theme-provider"

import { ProjectType } from "@/constants/projects"
import { cn } from "@/lib/utils"

export default function ProjectCard({
  project,
  className,
  ...rest
}: { project: ProjectType } & HTMLAttributes<HTMLDivElement>) {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <Dialog>
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
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{t(project.description)}</CardDescription>

          {/* Badges */}
          <div className="relative flex flex-nowrap gap-2 overflow-hidden">
            <div className="absolute h-full w-full bg-gradient-to-l from-background to-transparent to-20%"></div>
            {project.badges.map((badge) => (
              <TechBadge
                key={badge.id}
                _icon={badge.icon}
                color={badge.iconColor}
                name={badge.name}
              />
            ))}
          </div>

          <div className="flex justify-between gap-2">
            <DialogTrigger asChild>
              <Button variant="default" className="w-full gap-2">
                <ExpandIcon size={22} />
                Ver mais
              </Button>
            </DialogTrigger>
            <Button
              variant="default"
              className="gap-2"
              onClick={() => window.open(project.url, "_blank")}
            >
              Abrir
              <ExternalLinkIcon size={22} />
            </Button>
          </div>
        </CardContent>
      </Card>

      <DialogContent className="p-2">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{t(project.description)}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-wrap gap-2">
          {project.badges.map((badge) => (
            <TechBadge
              key={badge.id}
              _icon={badge.icon}
              color={badge.iconColor}
              name={badge.name}
            />
          ))}
        </div>

        <div className="mt-4 text-center text-amber-400">
          {t("projects.inDevelopment")}
        </div>
      </DialogContent>
    </Dialog>
  )
}
