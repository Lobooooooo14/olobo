import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import Markdown from "react-markdown"
import { useParams, useNavigate } from "react-router-dom"

import { SiGithub } from "@icons-pack/react-simple-icons"
import { ChevronDown, ExternalLinkIcon } from "lucide-react"
import { z } from "zod"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

import Loading from "@/components/loading"
import MainWrapper from "@/components/main-wrapper"
import TechBadge from "@/components/tech-badge"
import { useTheme } from "@/components/theme-provider"

import { ProjectType } from "@/content/projects"

const projectIdSchema = z.object({
  projectId: z
    .string()
    .min(1)
    .regex(/^[a-z]+(-[a-z]+)*$/)
})

export default function ProjectPage() {
  const { projectId } = useParams()
  const { t } = useTranslation(["pages/project", "projects", "common"])
  const theme = useTheme()
  const navigate = useNavigate()
  const [allProjects, setAllProjects] = useState<ProjectType[] | null>(null)

  useEffect(() => {
    const loadAllProjects = async () => {
      const projects = await import("@/content/projects")
      const allProjects = Object.values(projects.default).flatMap(
        ({ items }) => items
      )

      setAllProjects(allProjects)
    }

    loadAllProjects()
  }, [])

  if (!projectIdSchema.safeParse({ projectId }).success) {
    navigate(-1)
    return
  }

  if (!allProjects) return <Loading expand />

  const project = allProjects.find(({ slug }) => slug === projectId)

  if (!project) {
    navigate(-1)
    return
  }

  return (
    <MainWrapper>
      <div className="flex flex-col items-center p-4 lg:p-8">
        <div className="w-full max-w-6xl space-y-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/projects">
                  {t("navbar.projects", { ns: "common" })}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    {project.title}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {allProjects.map(({ slug, title }) => (
                      <DropdownMenuItem
                        key={slug}
                        onClick={() => navigate(`/projects/${slug}`)}
                        disabled={slug === projectId}
                      >
                        {title}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1>{project.title}</h1>
          <p>{t(project.shortDescription, { ns: "projects" })}</p>

          <div className="flex max-w-md flex-wrap gap-2">
            {project.badges.map((badge) => (
              <TechBadge
                key={badge.name}
                _icon={badge.icon}
                color={badge.iconColor}
                name={badge.name}
              />
            ))}
          </div>

          <div className="flex gap-2">
            {project.github && (
              <Button
                variant="secondary"
                className="gap-2"
                onClick={() => window.open(project.github, "_blank")}
              >
                {t("project-page.github")}
                <SiGithub size={22} />
              </Button>
            )}

            {project.url && (
              <Button
                variant="default"
                className="gap-2"
                onClick={() => window.open(project.url, "_blank")}
              >
                {t("open", { ns: "common" })}
                <ExternalLinkIcon size={22} />
              </Button>
            )}
          </div>

          <Separator />

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
                className="h-full w-full rounded-lg border-[1px] object-cover"
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
                className="h-full w-full rounded-lg border-[1px] object-cover"
              />
            )}
          </AspectRatio>
          <div>
            <Markdown className="[&>*>a]:underline [&>p]:text-pretty">
              {t(project.description, { ns: "projects", name: project.title })}
            </Markdown>
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}
