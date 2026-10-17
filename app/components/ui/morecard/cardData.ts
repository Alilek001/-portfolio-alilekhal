import { projects } from "../../project/projectData";

// Imágenes de los proyectos que aparecen en "Otros proyectos" (el resto de
// los textos de la tarjeta se leen del diccionario de idiomas).
export const moreCard = projects.slice(2).map((p) => ({
  id: p.id,
  imageSrc: p.imageSrc,
  imageAlt: p.projectTitle,
  cardNumber: p.cardNumber,
  projectTitle: p.projectTitle,
}));
