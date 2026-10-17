"use client";
import React, {
  useState,
  useCallback,
  useContext,
  createContext,
  ReactNode,
} from "react";

interface TransitionContextType {
  transitionStage: string;
  startAnimation: () => void;
  endAnimation: () => void;
  completeAnimation: () => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined
);

export const TransitionContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [transitionStage, setTransitionStage] = useState("initial");

  const startAnimation = useCallback(() => {
    setTransitionStage("animate");
  }, []);

  const endAnimation = useCallback(() => {
    setTransitionStage("exit");
  }, []);

  const completeAnimation = useCallback(() => {
    setTransitionStage("initial");
  }, []);

  return (
    <TransitionContext.Provider
      value={{
        transitionStage,
        startAnimation,
        endAnimation,
        completeAnimation,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransitionProvider = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error(
      "useTransitionProvider must be used within a TransitionContextProvider"
    );
  }
  return context;
};
