import Image from "next/image"
import { ReactNode } from "react"
import { FaNodeJs, FaSass } from "react-icons/fa"

import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri"
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiRadixui,
  SiTypescript,
  SiVercel,
  SiZod,
} from "react-icons/si"
import { IoLogoElectron } from "react-icons/io5"
import StyledComponents from "~/public/stack/styled-components.svg"
import Figma from "~/public/stack/figma.svg"

type Stack = {
  display: string
  icon: ReactNode
}

export const stacks: Stack[] = [
  {
    display: "React JS",
    icon: <RiReactjsFill className="text-cyan-600 dark:text-cyan-400" />,
  },
  {
    display: "Next JS",
    icon: <SiNextdotjs className="text-heading" />,
  },
  {
    display: "Styled Components",
    icon: (
      <Image
        src={StyledComponents.src}
        width={20}
        height={20}
        alt="Styled Components"
      />
    ),
  },
  {
    display: "Tailwind CSS",
    icon: (
      <RiTailwindCssFill className="text-cyan-500 bg-cyan-200/60 dark:bg-cyan-200 dark:text-cyan-700 p-0.5 rounded-xs" />
    ),
  },
  {
    display: "Typescript",
    icon: <SiTypescript className="text-sky-600 bg-white rounded-xs" />,
  },
  {
    display: "Javascript",
    icon: <SiJavascript className="text-yellow-300  bg-black" />,
  },
  {
    display: "HTML",
    icon: <SiHtml5 className="text-orange-500 rounded-xs" />,
  },
  {
    display: "CSS",
    icon: <SiCss3 className="text-sky-600" />,
  },
  {
    display: "SASS",
    icon: <FaSass className="text-pink-600" />,
  },
  {
    display: "Radix UI",
    icon: <SiRadixui className="text-heading" />,
  },
  {
    display: "ZOD",
    icon: <SiZod className="text-sky-600" />,
  },
  {
    display: "Figma",
    icon: <Image src={Figma.src} width={12} height={12} alt="Figma" />,
  },
  {
    display: "Node JS",
    icon: <FaNodeJs className="text-lime-700 dark:text-lime-500" />,
  },
  {
    display: "Electron JS",
    icon: (
      <IoLogoElectron className="text-sky-600 dark:text-sky-300" size={22} />
    ),
  },
  {
    display: "Vercel",
    icon: <SiVercel className="text-heading" size={16} />,
  },
  {
    display: "Git",
    icon: <SiGit className="text-orange-600" size={16} />,
  },
]
