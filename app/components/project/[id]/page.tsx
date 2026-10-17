"use client";
import styles from "./project.module.scss";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { projects, ProjectData } from "../projectData";
import { BlurReveal } from "../../effects";
import { useInView } from "framer-motion";
import { useMediaQuery } from "../../hooks";
import { useRef } from "react";
import { useLang } from "../../i18n";

const getProjectById = (id: string): ProjectData | undefined => {
  return projects.find((project) => project.id === id);
};

const Project = () => {
  const params = useParams();
  const id = params?.id;
  const titleRef = useRef(null);
  const botLinkRef = useRef(null);
  const isBotLinkInView = useInView(botLinkRef, { once: true });
  const isMobile = useMediaQuery("(max-width: 500px)");
  const { t } = useLang();

  if (!id) {
    return <div>Loading...</div>;
  }

  const project = getProjectById(id as string);

  if (!project) {
    notFound();
  }

  const text = t.projects[project.id];

  return (
    <main className={styles.project__container}>
      <div className={styles.noise__container}></div>
      <div className={styles.project__content}>
        <div className={styles.project__landing}>
          <h1
            ref={titleRef}
            className={
              id === "proreformas" ? styles.fse__h1 : styles.project__h1
            }
          >
            {project.projectTitle}
          </h1>

          <p className={styles.project__desc__1}>{text.description}</p>

          <div className={styles.project__details}>
            {isMobile ? null : (
              <div className={styles.details__header}>
                {text.projectType}
              </div>
            )}

            <div>
              <div className={styles.details__header}>{t.project.technologies}</div>
              {project.languages.map((lang, i) => (
                <div key={i}>{lang}</div>
              ))}
            </div>

            {isMobile ? (
              <div>
                <div className={styles.details__header}>
                  {text.projectType}
                </div>
                {project.projectDate ? (
                  <div className={styles.details__header}>
                    {project.projectDate}
                  </div>
                ) : null}
              </div>
            ) : (
              <div className={styles.details__header}>
                {project.projectDate ?? ""}
              </div>
            )}
          </div>
        </div>
        <div className={styles.project__content__two}>
          <img
            src={project.imageSrc}
            alt={text.imageAlt}
            className={styles.project__img1}
          />
          {text.descriptionTwo ? <p>{text.descriptionTwo}</p> : null}
          {project.videoSrc ? (
            <video
              src={project.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className={styles.video__two}
            ></video>
          ) : project.imageSrcTwo ? (
            <img
              src={project.imageSrcTwo}
              alt=""
              className={styles.project__img2}
            />
          ) : null}

          {text.descriptionThree ? <p>{text.descriptionThree}</p> : null}
          {!project.projectLink ? null : (
            <BlurReveal isInView={isBotLinkInView} delay={0} duration={1}>
              <div className={styles.visit__here}>{t.project.visit}</div>
              <Link
                href={project.projectLink ?? ""}
                target="_blank"
                className={styles.project__link}
                ref={botLinkRef}
              >
                {project.projectLinkName}
              </Link>
            </BlurReveal>
          )}
        </div>
      </div>
    </main>
  );
};

export default Project;
