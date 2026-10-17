import { createPortal } from "react-dom";
import styles from "./navoverlay.module.scss";

interface OverlayProps {
  isActive: boolean;
}

export const Overlay: React.FC<OverlayProps> = ({ isActive }) => {
  if (typeof window === "undefined" || !isActive) return null;

  return createPortal(
    <div className={`${styles.overlay} ${isActive ? styles.active : ""}`} />,
    document.body
  );
};
