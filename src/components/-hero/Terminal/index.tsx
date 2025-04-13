"use client"

import Link from "next/link"
import { Option, useHeroTerminal } from "./index.hooks"
import { useTranslations } from "next-intl"
import { GiCoffeeCup } from "react-icons/gi"

import "./index.styles.css"
import React from "react"
import { IoMdArrowUp } from "react-icons/io"
import { ScreenViewOnly } from "~/src/ui/screen-view-only"

export function HeroTerminal() {
  const {
    option,
    appendOptionRef,
    terminalContainerRef,
    canSelectOption,
    backToTerminal,
  } = useHeroTerminal()
  const tTerminal = useTranslations("sections.Header.terminal")

  return (
    <React.Fragment>
      <div ref={terminalContainerRef} className="hero-terminal" tabIndex={0}>
        <p>{JSON.stringify(canSelectOption)}</p>
        <div className="hero-terminal-buttons">
          <div className="close"></div>
          <div className="minimize"></div>
          <div className="maximize"></div>
        </div>
        <div className="hero-terminal-content">
          <p className="hero-terminal-command">
            F:\felipevaz.dev&gt; <span className="highlight">node</span>{" "}
            ./portfolio.js
          </p>
          <p>
            {tTerminal("lines.1st")}{" "}
            <GiCoffeeCup className="hero-terminal-icon" size={22} /> <br />
            {tTerminal("lines.2nd")}
          </p>
          <ul className="hero-terminal-options">
            <li>
              <Link
                className="hero-terminal-option"
                href="#about-section"
                ref={(current) => {
                  appendOptionRef(current)
                }}
                data-selected={option == "about"}
                data-option-key={"about" as Option}
              >
                &gt; {tTerminal("options.1st")}
              </Link>
            </li>
            <li>
              <Link
                className="hero-terminal-option"
                href="#stack-section"
                ref={(current) => {
                  appendOptionRef(current)
                }}
                data-option-key={"stack" as Option}
                data-selected={option == "stack"}
              >
                &gt; {tTerminal("options.2nd")}
              </Link>
            </li>
            <li>
              <Link
                className="hero-terminal-option"
                href="#projects-section"
                ref={(current) => {
                  appendOptionRef(current)
                }}
                data-option-key={"projects" as Option}
                data-selected={option == "projects"}
              >
                &gt; {tTerminal("options.3rd")}
              </Link>
            </li>
            <li>
              <Link
                className="hero-terminal-option"
                href="#contact-section"
                ref={(current) => {
                  appendOptionRef(current)
                }}
                data-option-key={"contact" as Option}
                data-selected={option == "contact"}
              >
                &gt; {tTerminal("options.4th")}
              </Link>
            </li>
          </ul>
          <span className="cursor" />
        </div>
      </div>
      {!canSelectOption && (
        <button
          onClick={backToTerminal}
          className="hero-terminal-float-back-button"
        >
          <ScreenViewOnly asChild>
            <IoMdArrowUp className="hero-terminal-arrow-up-icon" size={16} />
          </ScreenViewOnly>
          {tTerminal("display")}
        </button>
      )}
    </React.Fragment>
  )
}
