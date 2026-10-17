"use client";
import { useState, useEffect } from "react";

// Hora actual de Madrid en formato España (24 h), p. ej. "18:05".
export function useLocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("es-ES", {
        timeZone: "Europe/Madrid",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
      });
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return time;
}
