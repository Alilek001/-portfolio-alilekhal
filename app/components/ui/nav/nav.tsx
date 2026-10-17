"use client";
import styles from "./nav.module.scss";
import { motion } from "framer-motion";
import { navReveal } from "./anim.jsx";
import React from "react";
import { useCursor } from "../../context";
import { useLenis } from "@studio-freight/react-lenis";
import { useLang } from "../../i18n";
import { LangToggle } from "../langtoggle/langtoggle";

export const Navigation = () => {
  const { handleHoverEnd, handleHoverNavItem } = useCursor();

  const lenis = useLenis();
  const { t } = useLang();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section && lenis) {
      lenis.scrollTo(section);
    }
  };

  const scrollToContactSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section && lenis) {
      lenis.scrollTo(section, { offset: 1100 });
    }
  };

  return (
    <motion.nav
      variants={navReveal}
      initial="initial"
      animate="animate"
      className={styles.nav}
    >
      <div
        className={styles.nav__left}
        onMouseEnter={() => handleHoverNavItem("#19aad1")}
        onMouseLeave={handleHoverEnd}
        onClick={() => scrollToSection("hero")}
      >
        alilekhal_portfolio
      </div>

      <menu className={styles.nav__menu}>
        <li
          onMouseEnter={() => handleHoverNavItem("#ff8788")}
          onMouseLeave={handleHoverEnd}
          onClick={() => scrollToSection("works")}
        >
          {t.nav.projects}
        </li>
        <li
          onMouseEnter={() => handleHoverNavItem("#aee0bc")}
          onMouseLeave={handleHoverEnd}
          onClick={() => scrollToSection("about")}
        >
          {t.nav.about}
        </li>
        <li
          onMouseEnter={() => handleHoverNavItem("#f0cf61")}
          onMouseLeave={handleHoverEnd}
          onClick={() => scrollToSection("skills")}
        >
          {t.nav.skills}
        </li>
        <li
          onMouseEnter={() => handleHoverNavItem("#19aad1")}
          onMouseLeave={handleHoverEnd}
          onClick={() => scrollToContactSection("contact")}
        >
          {t.nav.contact}
        </li>
        <li>
          <LangToggle />
        </li>
      </menu>
    </motion.nav>
  );
};
