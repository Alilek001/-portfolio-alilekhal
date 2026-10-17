"use client";
import React, { useEffect, useRef } from "react";
import styles from "./selectedwork.module.scss";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import { SelectedCard } from "../../components/ui";
import { projects } from "../../components/project/projectData";
import { BlurReveal, TransitionLink } from "../../components/effects/index";
import { useLang } from "../../components/i18n";

interface SelectedWorkProps {
  id: string;
  isInView: boolean;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ id }) => {
  const ref = useRef(null);
  const selectedRef = useRef(null);
  const { t } = useLang();
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <motion.section id={id} className={styles.selected__container}>
      <div className={styles.noise__container}></div>
      <div className={styles.selected__content__container}>
        <BlurReveal isInView={isInView} duration={1} delay={0}>
          <motion.h1
            className={styles.selected__h1}
            ref={ref}
            aria-label={t.selected.aria}
          >
            <span>{t.selected.top}</span>
            <div className={styles.flex}>
              <span className={styles.selected__work}>{t.selected.bottom}</span>
              <span className={styles.selected__amount}>(02)</span>
            </div>
          </motion.h1>
        </BlurReveal>
        <motion.div className={styles.selected__projects__container}>
          {projects.slice(0, 2).map((project, index) => (
            <div
              key={project.id}
              className={styles[`card__group__${index + 1}`]}
            >
              <TransitionLink
                key={project.id}
                href={`/project/${project.id}`}
                className={styles.transition__link}
              >
                <SelectedCard
                  key={project.id}
                  className={styles[`selected__card__${index + 1}`]}
                  videoSrc={project.videoSrc}
                  imageSrc={project.imageSrc}
                  imageAlt={t.projects[project.id].imageAlt}
                  projectTitle={project.projectTitle}
                  projectNumber={`00${index + 1}`}
                  projectType={t.projects[project.id].cardType}
                  description={t.projects[project.id].cardDescription}
                />
              </TransitionLink>
            </div>
          ))}
        </motion.div>
        <div ref={selectedRef}></div>
      </div>
    </motion.section>
  );
};
