// data.jsx
export const createNavItems = (
  isWorkHovered,
  setIsWorkHovered,
  isAboutHovered,
  setIsAboutHovered,
  isSkillsHovered,
  setIsSkillsHovered,
  isContactHovered,
  setIsContactHovered
) => [
  {
    id: "works",
    text: "proyectos",
    hoverState: isWorkHovered,
    setHoverState: setIsWorkHovered,
  },
  {
    id: "about",
    text: "sobre mí",
    hoverState: isAboutHovered,
    setHoverState: setIsAboutHovered,
  },
  {
    id: "skills",
    text: "habilidades",
    hoverState: isSkillsHovered,
    setHoverState: setIsSkillsHovered,
  },
  {
    id: "contact",
    text: "contacto",
    hoverState: isContactHovered,
    setHoverState: setIsContactHovered,
  },
];
