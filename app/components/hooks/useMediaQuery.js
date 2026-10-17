"use client";
import { useState, useEffect } from "react";

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e) => setMatches(e.matches);
    if (media.addEventListener) {
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    } else {
      const resizeListener = () => setMatches(media.matches);
      window.addEventListener("resize", resizeListener);
      return () => window.removeEventListener("resize", resizeListener);
    }
  }, [query]);

  return mounted ? matches : false;
};
