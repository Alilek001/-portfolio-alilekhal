import styles from "./projectnav.module.scss";
import React from "react";
import { TransitionLink } from "../../effects";
import { useCursor } from "../../context";
import { useLang } from "../../i18n";
import { LangToggle } from "../langtoggle/langtoggle";

export const ProjectNav = () => {
  const { handleHoverStart, handleHoverEnd } = useCursor();
  const { t } = useLang();

  return (
    <nav className={styles.project__nav}>
      <TransitionLink href="/#works" className={styles.project__link}>
        <div onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
          {t.home}
        </div>
      </TransitionLink>
      <LangToggle />
    </nav>
  );
};
