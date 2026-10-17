"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [navStyle, setNavStyle] = useState(false);
  const [bgColor, setBgColor] = useState("#f9f7e8");

  const updateNavStyle = useCallback(() => {
    setNavStyle(true);
  }, []);

  const resetNavStyle = useCallback(() => {
    setNavStyle(false);
  }, []);

  const updateBgColor = useCallback((color) => {
    setBgColor(color);
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        navStyle,
        updateNavStyle,
        resetNavStyle,
        bgColor,
        updateBgColor,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollProvider = () => useContext(ScrollContext);
