import styles from "./footer.module.scss";
import Link from "next/link";
import React from "react";
import { useLang } from "../../components/i18n";

export const Footer = () => {
  const { t } = useLang();

  return (
    <footer className={styles.footer__container}>
      <div className={styles.noise__container}></div>
      <div className={styles.footer__content}>
        <div>
          <div>{t.footer.line1}</div>
          <div>{t.footer.line2}</div>
          <div>{t.footer.line3}</div>
        </div>
        <div className={styles.footer__left__tablet}>
          <div>{t.hero.location}</div>
          <div>
            <a
              href="mailto:lekhalali56@gmail.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              lekhalali56@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.footer__links}>
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
        <div className={styles.footer__left__tablet}>
          <div>{t.footer.by}</div>
          <div>Ali Lekhal Hanifi</div>
          <div>&copy;2026</div>
        </div>
      </div>
    </footer>
  );
};
