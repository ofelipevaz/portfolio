import PortfolioLogotype from "~/public/projects/portfolio.png"

// Project collection list from lib/i18n/messages
export const collections = ["portfolio"] as const

export type CollectionType = (typeof collections)[number]

export type Project = {
  collectionID: CollectionType
  tags: string[]

  githubRepository?: string
  deploy?: string
  logotypeURL: string
}

export const projects: Project[] = [
  {
    collectionID: "portfolio",
    tags: ["Showcase", "Web Design"],
    logotypeURL: PortfolioLogotype.src,
    deploy: "https://google.com",
    githubRepository: "https://github.com",
  },
]
