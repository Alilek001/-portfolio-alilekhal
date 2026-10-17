"use client";
import styles from "./skills.module.scss";
import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { rowData } from "./data";
import { motion } from "framer-motion";
import { containerReveal } from "./data";
import { useLang } from "../../components/i18n";

interface SkillsProps {
  id: string;
  scrollYProgress: any;
}

export const Skills: React.FC<SkillsProps> = ({ id }) => {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const [activeButton, setActiveButton] = useState("chaos");
  const { t } = useLang();

  const handleButtonClick = useCallback(
    (buttonType: string) => {
      if (activeButton !== buttonType) {
        setActiveButton(buttonType);
      }
    },
    [activeButton]
  );

  const animate = () => {
    rowRefs.current.forEach((ref, index) => {
      if (ref) {
        const row = rowData[Math.floor(index / 2)];
        let xPercent = gsap.getProperty(ref, "xPercent") as number | string;
        xPercent =
          typeof xPercent === "string" ? parseFloat(xPercent) : xPercent;
        xPercent += 0.09 * row.direction;
        if (xPercent <= -100) xPercent = 0;
        if (xPercent >= 100) xPercent = 0;
        gsap.set(ref, { xPercent });
      }
    });
    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (activeButton === "chaos") {
      animationFrameId.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [activeButton]);

  return (
    <motion.section className={styles.skills__section} id={id}>
      <div className={styles.noise__container__white}></div>
      <h1 className={styles.skills__h1}>{t.skills.title}</h1>
      <div className={styles.skills__btn__container}>
        <div className={styles.view}>{t.skills.view}</div>
        <div>{t.skills.chaos}</div>
        <div
          aria-label={t.skills.chaosAria}
          className={`${styles.checkbox__btn} ${
            activeButton === "chaos" ? styles.activeClass : ""
          }`}
          onClick={() => handleButtonClick("chaos")}
        ></div>
        <div>{t.skills.readable}</div>
        <div
          aria-label={t.skills.readableAria}
          className={`${styles.checkbox__btn} ${
            activeButton === "readable" ? styles.activeClass : ""
          }`}
          onClick={() => handleButtonClick("readable")}
        ></div>
      </div>
      <motion.div
        className={styles.marquee__container}
        initial="initial"
        animate={activeButton === "chaos" ? "animate" : "initial"}
        variants={containerReveal}
      >
        {rowData.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.rowWrapper}>
            {[0, 1].map((duplicateIndex) => (
              <div
                key={duplicateIndex}
                className={`${styles.row__container} ${
                  row.direction === 1 && duplicateIndex === 1
                    ? styles.leftNegative
                    : ""
                }`}
                ref={(el) => {
                  if (el && !rowRefs.current[rowIndex * 2 + duplicateIndex]) {
                    rowRefs.current[rowIndex * 2 + duplicateIndex] = el;
                  }
                }}
              >
                {row.skills.map((skill, colIndex) => (
                  <div
                    key={colIndex}
                    className={`${styles.column} ${
                      styles[row.colors[colIndex]]
                    }`}
                    style={{
                      width: `${row.widths[colIndex]}%`,
                      color: ["black", "dark-grey", "dark-blue"].includes(
                        row.colors[colIndex]
                      )
                        ? "#FFF"
                        : "#171717",
                    }}
                  >
                    {skill && (
                      <div className={styles.centered__word}>{skill}</div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </motion.div>
      <motion.div
        className={styles.readable__container}
        initial="initial"
        animate={activeButton === "readable" ? "animate" : "initial"}
        variants={containerReveal}
      >
        <div className={styles.readable__flex}>
          <div>
            <div className={styles.readable__category}>{t.skills.frontend}</div>
            <div className={styles.list__skills}>
              <div>HTML5</div>
              <div>CSS3</div>
              <div>JavaScript</div>
              <div>Vue.js</div>
              <div>Tailwind CSS</div>
              <div>Bootstrap</div>
              <div>{t.skills.reactBasics}</div>
            </div>
          </div>
          <div>
            <div className={styles.readable__category}>{t.skills.backend}</div>
            <div className={styles.list__skills}>
              <div>PHP</div>
              <div>Laravel</div>
              <div>Node.js</div>
              <div>Java</div>
              <div>MySQL</div>
            </div>
          </div>
          <div>
            <div className={styles.readable__category}>{t.skills.tools}</div>
            <div className={styles.list__skills}>
              <div>Git</div>
              <div>GitHub</div>
              <div>Docker</div>
              <div>Linux</div>
              <div>VS Code</div>
              <div>XAMPP / Apache</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
