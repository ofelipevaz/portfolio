import { useTranslations } from "next-intl"
import Image from "next/image"
import { Project } from "~/src/constants/projects"
import { cn, cp } from "~/src/lib/utils"
import { Badge } from "~/src/ui/badge"
import { ScreenReaderOnly } from "~/src/ui/screen-reader-only"

import { Heading } from "~/src/ui/heading"
import { Text } from "~/src/ui/text"
import { Button } from "~/src/ui/button"
import { ScreenViewOnly } from "~/src/ui/screen-view-only"
import { HiOutlineGlobeAlt } from "react-icons/hi"
import { FiExternalLink } from "react-icons/fi"

import { TfiArrowTopRight } from "react-icons/tfi"

import Link from "next/link"

import "./index.styles.css"
import { Separator } from "~/src/ui/separator"

type ProjectCardProps = {
  project: Omit<Project, "collectionID"> & {
    name: string
    description: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    name,
    description,
    tags,
    githubRepository,
    deploy,
    logotypeURL: imagePresentation,
  } = project
  const cls = cp("project-card")
  const tProjects = useTranslations("sections.Projects")
  const tProjectsAcessibility = useTranslations(
    "sections.Projects.acessibility",
  )

  if (!githubRepository && !deploy) {
    throw new Error(
      "You must define at least one: 'githubRepository' or 'deploy'.",
    )
  }

  return (
    <div className={cls()}>
      <div className={cls("logotype")}>
        <Image src={imagePresentation} fill alt={name} />
      </div>
      <div className={cls("content")}>
        <div className={cls("content-info")}>
          <div className={cls("content-name")}>
            <Heading
              as="h3"
              variants={{ size: "lg", color: "heading", weight: "medium" }}
            >
              {name}
            </Heading>
            {deploy && (
              <Link title="Website" target="_blank" href={deploy}>
                <ScreenReaderOnly>Website</ScreenReaderOnly>
                <ScreenViewOnly>
                  <FiExternalLink size={16} />
                </ScreenViewOnly>
              </Link>
            )}
          </div>
          <Text
            as={"p"}
            variants={{ size: "sm", color: "default", lineHeight: "md" }}
          >
            {description}
          </Text>

          <ScreenReaderOnly asChild>
            <h4>{tProjectsAcessibility("tags-display")}</h4>
          </ScreenReaderOnly>
          <ul className={cls("tags")}>
            {tags.map((tag) => (
              <li className={cls("tag-item")} key={tag}>
                <Badge>{tag}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className={cls("buttons")}>
          {deploy && (
            <Button
              className={cn(cls("buttons-view-button"), "gap-2 px-8 py-1.5")}
              variants={{
                background: "contrast",
                centralize: true,
                style: "solid",
                rounded: "md",
              }}
              asChild
            >
              <Link href={deploy} target="_blank">
                <ScreenViewOnly asChild>
                  <HiOutlineGlobeAlt size={18} />
                </ScreenViewOnly>
                {tProjects("viewButtonLabel")}
              </Link>
            </Button>
          )}

          <Separator />

          {githubRepository && (
            <Button
              asChild
              className={cn(cls("buttons-repository-button"), "gap-2 px-0")}
              variants={{
                background: "transparent",
                centralize: true,
                rounded: "sm",
              }}
            >
              <Link href={githubRepository} target="_blank">
                {tProjects("repositoryButtonLabel")}

                <ScreenViewOnly asChild>
                  <TfiArrowTopRight size={16} />
                </ScreenViewOnly>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
