"use client";
import React from "react";
import styles from "./langtoggle.module.scss";
import { useLang } from "../../i18n";
import { useCursor } from "../../context";

interface LangToggleProps {
  className?: string;
}

export const LangToggle: React.FC<LangToggleProps> = ({ className }) => {
  const { t, toggleLang } = useLang();
  const { handleHoverStart, handleHoverEnd } = useCursor();

  return (
    <button
      type="button"
      className={`${styles.lang__toggle} ${className ?? ""}`}
      onClick={toggleLang}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      aria-label={t.toggleAria}
      title={t.toggleAria}
    >
      {t.toggleLabel}
    </button>
  );
};
