"use client";
import { useEffect, useCallback } from "react";

export function useScrollLock(lock: boolean, delay: number = 300) {
  const lockScroll = useCallback(() => {
    if (typeof document === "undefined" || typeof window === "undefined")
      return;

    const { body } = document;
    const scrollY = window.scrollY;

    // Lock the scroll position
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.paddingRight = "3px";

    // Prevent touch scrolling on mobile devices
    const preventDefault = (e: TouchEvent) => e.preventDefault();
    document.addEventListener("touchmove", preventDefault, { passive: false });

    // Return an unlock function for cleanup
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.paddingRight = "";

      // Restore the scroll position
      window.scrollTo(0, scrollY);

      // Remove the touchmove event listener
      document.removeEventListener("touchmove", preventDefault);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let unlockScroll: (() => void) | undefined;

    if (lock) {
      const timer = setTimeout(() => {
        unlockScroll = lockScroll();
      }, delay);

      return () => {
        clearTimeout(timer);
        if (unlockScroll) {
          unlockScroll();
        }
      };
    }
  }, [lock, lockScroll, delay]);
}
