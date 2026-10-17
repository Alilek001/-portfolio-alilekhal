import { Url } from "next/dist/shared/lib/router/router";

// Datos que no dependen del idioma. Los textos (descripciones, tipo, SEO)
// están en app/components/i18n/translations.ts, dentro de "projects".
export interface ProjectData {
  id: string;
  imageSrc: string;
  imageSrcTwo?: string;
  videoSrc?: string;
  cardNumber: string;
  projectTitle: string;
  languages: string[];
  projectDate?: string;
  projectLink?: Url;
  projectLinkName?: string;
}

// Para añadir un vídeo demo: copia el .mp4 a /public/videos y pon aquí
// videoSrc: "/videos/nombre.mp4". Para añadir un enlace a la web o al
// repositorio: projectLink + projectLinkName.
export const projects: ProjectData[] = [
  {
    id: "proreformas",
    imageSrc: "/images/proreformas.webp",
    cardNumber: "01",
    projectTitle: "ProReformasValencia",
    languages: ["HTML", "Tailwind CSS", "Vue.js", "Laravel", "Node.js", "MySQL"],
    projectDate: "2026",
  },
  {
    id: "pulsefit",
    imageSrc: "/images/pulsefit.webp",
    cardNumber: "02",
    projectTitle: "PulseFit",
    languages: ["Vue 3", "Tailwind CSS", "Laravel", "Laravel Breeze", "MySQL"],
  },
  {
    id: "hotel-api",
    imageSrc: "/images/hotel-api.webp",
    cardNumber: "03",
    projectTitle: "API Hotel",
    languages: ["PHP", "Laravel", "API REST"],
  },
];
