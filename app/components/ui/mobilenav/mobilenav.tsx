import styles from "./mobilenav.module.scss";
import { useLenis } from "@studio-freight/react-lenis";
import React from "react";
import { useLang } from "../../i18n";
import { LangToggle } from "../langtoggle/langtoggle";

export const MobileNav = () => {
  const lenis = useLenis();
  const { t } = useLang();

  const scrollToSection = (sectionId: string, defaultOffset = 0) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section && lenis) {
        const offset = sectionId === "contact" ? 1100 : defaultOffset;
        lenis.scrollTo(section, { offset: offset, duration: 0.3 });
      }
    }, 300);
  };

  return (
    <div className={styles.nav__menu__mobile__container}>
      <div
        className={styles.nav__mobile__home__btn}
        onClick={() => scrollToSection("hero")}
      >
        portfolio
      </div>
      <div className={styles.nav__mobile__links}>
        <div onClick={() => scrollToSection("works")}>{t.nav.projects}</div>
        <div onClick={() => scrollToSection("about")}>{t.nav.about}</div>
        <div onClick={() => scrollToSection("skills")}>{t.nav.skills}</div>
        <div onClick={() => scrollToSection("contact")}>{t.nav.contact}</div>
        <LangToggle />
      </div>
    </div>
  );
};
