"use client";
import styles from "./slidemenu.module.scss";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";
import {
  showMobileNav,
  scaleSpan,
  itemSlide,
  itemReveal,
  revealBoxes,
  smallTextLeftReveal,
  smallTextReveal,
} from "./anim.jsx";
import Link from "next/link";
import { createNavItems } from "./data.jsx";
import { useLang } from "../../i18n";
import { LangToggle } from "../langtoggle/langtoggle";

export const SlideMenu = ({ isActive, setIsActive }) => {
  const { t } = useLang();
  const navLabels = {
    works: t.nav.projects,
    about: t.nav.about,
    skills: t.nav.skills,
    contact: t.nav.contact,
  };
  const [isWorkHovered, setIsWorkHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isSkillsHovered, setIsSkillsHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  const lenis = useLenis();

  const scrollToSection = (sectionId, defaultOffset = 0) => {
    setIsActive(false);

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section && lenis) {
        const offset = sectionId === "contact" ? 1100 : defaultOffset;
        lenis.scrollTo(section, { offset: offset, duration: 0.3 });
      }
    }, 300);
  };

  const scrollToWork = (sectionId, offset = 0) => {
    const section = document.getElementById(sectionId);
    setIsActive(false);

    setTimeout(() => {
      if (section) {
        const sectionTop = section.offsetHeight - offset;

        window.scroll({
          top: sectionTop,
          left: 0,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  const navItems = createNavItems(
    isWorkHovered,
    setIsWorkHovered,
    isAboutHovered,
    setIsAboutHovered,
    isSkillsHovered,
    setIsSkillsHovered,
    isContactHovered,
    setIsContactHovered
  );

  const rectangles = [
    { className: `${styles.deco__rectangel} ${styles.deco__rectangel__blue}` },
    { className: `${styles.deco__rectangel} ${styles.deco__rectangel__red}` },
    { className: `${styles.deco__rectangel} ${styles.deco__rectangel__green}` },
  ];

  return (
    <AnimatePresence>
      <div className={styles.slide__menu__container}>
        <motion.menu
          key="mobile-menu"
          variants={showMobileNav}
          initial="closed"
          animate={isActive ? "open" : "closed"}
          exit="closed"
          className={styles.nav__menu__mobile}
        >
          <div className={styles.left__container}>
            <motion.div
              variants={smallTextLeftReveal}
              initial="initial"
              animate={isActive ? "revealed" : ""}
              className={styles.left__text}
            >
              {t.menu.portfolio}
            </motion.div>
            <motion.div
              variants={smallTextLeftReveal}
              initial="initial"
              animate={isActive ? "revealed" : ""}
              className={styles.left__text}
            >
              {t.menu.surname}
            </motion.div>
            <motion.div
              variants={revealBoxes}
              initial="initial"
              animate={isActive ? "revealed" : ""}
              className={styles.rectangles__container}
            >
              {rectangles.map((rect, index) => (
                <motion.div
                  variants={{
                    initial: { opacity: 0.1 },
                    revealed: { opacity: 1 },
                  }}
                  key={index}
                  className={rect.className}
                ></motion.div>
              ))}
            </motion.div>
          </div>
          <div className={styles.nav__menu__flex}>
            <motion.div
              variants={smallTextReveal}
              initial="initial"
              animate={isActive ? "revealed" : ""}
              className={styles.menu__header}
            >
              {t.menu.title}
            </motion.div>
            <motion.div
              variants={itemReveal}
              initial="initial"
              animate={isActive ? "revealed" : ""}
              className={styles.menu__list__items}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.list__flex}
                  variants={{
                    initial: { x: "60px", opacity: 0.5 },
                    revealed: { x: "0px", opacity: 1 },
                  }}
                >
                  <motion.span
                    className={styles.hover__dot}
                    variants={scaleSpan}
                    animate={item.hoverState ? "hovered" : "initial"}
                  />
                  <motion.li
                    variants={itemSlide}
                    onClick={() => {
                      if (item.id === "works") {
                        scrollToWork("works", 850);
                      } else {
                        scrollToSection(item.id, 0);
                      }
                    }}
                    whileHover="hovered"
                    onHoverStart={() => item.setHoverState(true)}
                    onHoverEnd={() => item.setHoverState(false)}
                    className={styles.menu__item}
                    initial="initial"
                  >
                    {navLabels[item.id]}
                  </motion.li>
                </motion.div>
              ))}
            </motion.div>
            <div className={styles.nav__contacts}>
              <motion.div
                variants={smallTextReveal}
                initial="initial"
                animate={isActive ? "revealed" : ""}
              >
                <a
                  href="mailto:lekhalali56@gmail.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  lekhalali56@gmail.com
                </a>
              </motion.div>
              <motion.div
                variants={smallTextReveal}
                initial="initial"
                animate={isActive ? "revealed" : ""}
              >
                <LangToggle />
              </motion.div>
            </div>
          </div>
          <div className={styles.right__container}>
            <Link
              href="https://www.linkedin.com/in/ali-lekhal-hanifi-528680437/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/Alilek001"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              GitHub
            </Link>
          </div>
        </motion.menu>
      </div>
    </AnimatePresence>
  );
};
