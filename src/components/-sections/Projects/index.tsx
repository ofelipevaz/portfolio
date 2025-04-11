import { useTranslations } from "next-intl"
import { Section } from "../+partials/Section"
import { projects } from "~/src/constants/projects"
import { ProjectCard } from "../+partials/ProjectCard"

import "./index.styles.css"
import { cp } from "~/src/lib/utils"

export function ProjectsSection() {
  const cls = cp("section-projects")
  const tProjects = useTranslations("sections.Projects")
  const tCollection = useTranslations("sections.Projects.collection")

  return (
    <Section className={cls()} title={tProjects("display")} id="projects">
      <ul className={cls("collection")}>
        {projects.map(({ collectionID, ...rest }) => (
          <li key={collectionID}>
            <ProjectCard
              project={{
                name: tCollection(`${collectionID}.name`),
                description: tCollection(`${collectionID}.description`),
                ...rest,
              }}
            />
          </li>
        ))}
      </ul>
    </Section>
  )
}
