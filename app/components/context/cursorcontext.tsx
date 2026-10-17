"use client";
import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  ReactNode,
} from "react";

interface CursorContextType {
  cursorSize: number;
  cursorText: string;
  cursorColor: string;
  isBlending: boolean;
  cursorTextColor: string;
  handleHoverNavItem: (color: string) => void;
  handleHoverStart: () => void;
  handleHoverEnd: () => void;
  handleHoverCard: () => void;
  handleSelectedHoverCard: () => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

interface CursorProviderProps {
  children: ReactNode;
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [cursorSize, setCursorSize] = useState<number>(12);
  const [cursorText, setCursorText] = useState<string>("");
  const [cursorColor, setCursorColor] = useState<string>("white");
  const [isBlending, setIsBlending] = useState<boolean>(true);
  const [cursorTextColor, setCursorTextColor] = useState<string>("white");

  const handleHoverStart = useCallback(() => {
    setCursorSize(64);
  }, []);

  const handleHoverEnd = useCallback(() => {
    setCursorSize(12);
    setCursorText("");
    setIsBlending(true);
    setCursorColor("white");
  }, []);

  const handleHoverCard = useCallback(() => {
    setCursorText("View");
    setCursorSize(64);
    setCursorColor("white");
    setIsBlending(false);
    setCursorTextColor("black");
  }, []);

  const handleSelectedHoverCard = useCallback(() => {
    setCursorText("View");
    setCursorSize(64);
    setCursorColor("black");
    setIsBlending(false);
    setCursorTextColor("white");
  }, []);

  const handleHoverNavItem = useCallback((color: string) => {
    setCursorColor(color);
    setIsBlending(false);
    setCursorSize(64);
  }, []);

  return (
    <CursorContext.Provider
      value={{
        cursorSize,
        cursorText,
        cursorColor,
        isBlending,
        cursorTextColor,
        handleHoverNavItem,
        handleHoverStart,
        handleHoverEnd,
        handleHoverCard,
        handleSelectedHoverCard,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
