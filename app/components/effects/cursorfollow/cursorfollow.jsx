"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./cursor.module.scss";
import { useCursor } from "../../context/cursorcontext";

export const Cursor = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const circle = useRef(null);
  const { cursorSize, cursorText, cursorColor, cursorTextColor, isBlending } =
    useCursor();

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const animate = () => {
    if (circle.current) {
      const { x, y } = delayedMouse.current;

      delayedMouse.current = {
        x: lerp(x, mouse.current.x, 0.1),
        y: lerp(y, mouse.current.y, 0.1),
      };

      moveCircle(delayedMouse.current.x, delayedMouse.current.y);

      rafId.current = window.requestAnimationFrame(animate);
    }
  };

  const moveCircle = (x, y) => {
    if (circle.current) {
      gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
    }
  };

  useEffect(() => {
    if (circle.current) {
      animate();
      window.addEventListener("mousemove", manageMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: cursorColor,
        color: cursorTextColor,
        width: cursorSize,
        height: cursorSize,
        transition: `height 0.2s ease-out, width 0.2s ease-out`,
        mixBlendMode: isBlending ? "difference" : "normal",
      }}
      className={styles.cursor}
      ref={circle}
    >
      {cursorText && <div className={styles.cursorText}>{cursorText}</div>}
    </div>
  );
};
