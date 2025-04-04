import React from "react"
import Image from "next/image"
import { Section } from "../../Section"
import { useTranslations } from "next-intl"

import { Text } from "~/src/ui/text"

import Perfil from "~/public/perfil.png"
import "./index.styles.css"

export function AboutSection() {
  const tAbout = useTranslations("sections.About")
  const tProfile = useTranslations("Profile")

  return (
    <Section className="section-about" title={tAbout("display")} id="about">
      <div className="section-about-container">
        <div className="section-about-content">
          {tAbout.rich("content", {
            p: (chunks) => (
              <Text as="p" variants={{ lineHeight: "md" }}>
                {chunks}
              </Text>
            ),
            bold: (chunks) => (
              <Text variants={{ weight: "bold", color: "heading" }} asChild>
                <strong>{chunks}</strong>
              </Text>
            ),
          })}

          <div className="section-about-user">
            <Image
              className="section-about-user-image"
              src={Perfil.src}
              width={36}
              height={36}
              alt="Felipe Vaz"
            />
            <div className="section-about-user-profile">
              <Text
                as="p"
                variants={{
                  lineHeight: "md",
                  weight: "medium",
                  color: "heading",
                }}
                className="section-about-user-name"
              >
                Felipe Vaz
              </Text>
              <Text
                as="span"
                variants={{ size: "sm", color: "muted" }}
                className="section-about-user-role"
              >
                {tProfile("role")}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
