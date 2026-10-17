"use client";
import styles from "./contact.module.scss";
import { useCursor } from "../../components/context/cursorcontext";
import React, { useRef, useEffect, useState } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { useScrollProvider } from "../../components/context";
import { useLang } from "../../components/i18n";

const notificationAnimation = {
  initial: {
    opacity: 0,
    y: "20px",
  },
  animate: {
    opacity: 1,
    y: "0",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    y: "20px",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export const Contact = ({ id }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const { handleHoverStart, handleHoverEnd } = useCursor();
  const ref = useRef(null);
  const contactInView = useInView(ref, { threshold: 1 });
  const { resetNavStyle } = useScrollProvider();
  const { t } = useLang();

  useEffect(() => {
    if (contactInView) {
      resetNavStyle();
    }
  }, [contactInView, resetNavStyle]);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitMessage(t.contact.sent);
        setFormState({ name: "", email: "", message: "" });
      } else if (response.status === 429) {
        setSubmitMessage(t.contact.tooMany);
      } else {
        setSubmitMessage(t.contact.error);
      }

      setShowNotification(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage(t.contact.error);
    }
    setIsSubmitting(false);
  };

  const handleNotificationComplete = () => {
    if (showNotification) {
      setTimeout(() => setShowNotification(false), 4000);
    }
  };

  return (
    <section className={styles.contact__section} id={id}>
      <div className={styles.noise__container}></div>
      <h1 className={styles.contact__h1}>{t.contact.title}</h1>
      <div className={styles.contact__content}>
        <form onSubmit={handleSubmit} className={styles.contact__form}>
          <label htmlFor="name">{t.contact.name}</label>
          <input
            type="text"
            id="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">{t.contact.email}</label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">{t.contact.message}</label>
          <textarea
            name="message"
            id="message"
            value={formState.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className={styles.send__btn}
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
            ref={ref}
            disabled={isSubmitting}
          >
            {isSubmitting ? <span className={styles.spinner}></span> : t.contact.send}
          </button>
          <AnimatePresence>
            {showNotification && (
              <motion.div
                key="notification"
                variants={notificationAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationComplete={handleNotificationComplete}
                className={styles.notification}
              >
                {submitMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </form>
        <div className={styles.contact__info}>
          <div>{t.contact.orEmail}</div>
          <div>
            <a
              href="mailto:lekhalali56@gmail.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              lekhalali56@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
