// Todos los textos visibles de la web, en español (por defecto) e inglés.
// Para cambiar un texto o añadir un idioma, edita solo este archivo.

export type Lang = "es" | "en";

export interface ProjectText {
  imageAlt: string;
  projectType: string;
  description: string;
  descriptionTwo?: string;
  descriptionThree?: string;
  cardType: string;
  cardDescription: string;
  moreType: string;
  moreDescription: string;
  pageTitle: string;
  pageDescription: string;
}

export interface Dict {
  htmlLang: string;
  metaTitle: string;
  metaDescription: string;
  toggleLabel: string; // texto del botón (idioma al que se cambia)
  toggleAria: string;
  nav: { projects: string; about: string; skills: string; contact: string };
  menu: { title: string; portfolio: string; surname: string };
  home: string;
  preloader: string;
  viewMore: string;
  hero: {
    available: string;
    location: string;
    tagline: string;
    role: string;
    city: string;
    scroll: string;
  };
  selected: { top: string; bottom: string; aria: string };
  more: { top: string; bottom: string; aria: string };
  about: {
    top: string;
    bottom: string;
    imageAlt: string;
    quote: [string, string, string];
    p1: string;
    p2: [string, string, string];
    p3: [string, string, string];
    downloadCv: string;
  };
  skills: {
    title: string;
    view: string;
    chaos: string;
    readable: string;
    chaosAria: string;
    readableAria: string;
    frontend: string;
    backend: string;
    tools: string;
    reactBasics: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sent: string;
    tooMany: string;
    error: string;
    orEmail: string;
  };
  footer: { line1: string; line2: string; line3: string; by: string };
  project: { technologies: string; visit: string };
  projects: Record<string, ProjectText>;
}

export const dictionary: Record<Lang, Dict> = {
  es: {
    htmlLang: "es",
    metaTitle: "Ali Lekhal Hanifi | Desarrollador web",
    metaDescription:
      "Portfolio de Ali Lekhal Hanifi, desarrollador web en Valencia: Vue, Laravel, Node.js y MySQL.",
    toggleLabel: "EN",
    toggleAria: "Cambiar el idioma a inglés",
    nav: {
      projects: "proyectos",
      about: "sobre mí",
      skills: "habilidades",
      contact: "contacto",
    },
    menu: { title: "Menú", portfolio: "Portfolio 2026", surname: "Lekhal Hanifi" },
    home: "Inicio",
    preloader: "¡Hola!",
    viewMore: "Ver más",
    hero: {
      available: "Disponible para incorporarme como desarrollador web",
      location: "Torrent, Valencia",
      tagline: "Desarrollador web full-stack",
      role: "Desarrollador web",
      city: "Valencia",
      scroll: "(desliza para ver más)",
    },
    selected: {
      top: "Proyectos",
      bottom: "destacados",
      aria: "Proyectos destacados (02)",
    },
    more: { top: "Otros", bottom: "proyectos", aria: "Otros proyectos (01)" },
    about: {
      top: "Un poco",
      bottom: "sobre mí",
      imageAlt: "Retrato de Ali Lekhal Hanifi",
      quote: [
        "¡Hola! Soy Ali, desarrollador web de Torrent (Valencia) y me gusta ",
        "resolver problemas",
        " reales con soluciones sencillas, útiles y bien pensadas.",
      ],
      p1: "Cuento con formación en Desarrollo de Aplicaciones Web (DAW) en el IES Serra Perenxisa y Sistemas Microinformáticos y Redes (SMR). He desarrollado proyectos reales en equipo, como la web corporativa, panel de administración y módulo de presupuestos para ProReformasValencia, además de contar con experiencia en soporte y redes.",
      p2: [
        "Me enfoco en el ",
        "desarrollo limpio y funcional,",
        " aprendiendo de forma continua y autónoma para crear aplicaciones web eficientes y bien estructuradas.",
      ],
      p3: [
        "Disponible para incorporarme a un ",
        "equipo de desarrollo",
        " donde aportar valor y seguir evolucionando profesionalmente. Me comunico con fluidez tanto en español como en inglés.",
      ],
      downloadCv: "Descargar CV",
    },
    skills: {
      title: "Habilidades",
      view: "Ver",
      chaos: "Caos",
      readable: "Legible",
      chaosAria: "Vista caos",
      readableAria: "Vista legible",
      frontend: "Frontend:",
      backend: "Backend:",
      tools: "Herramientas:",
      reactBasics: "React (nociones)",
    },
    contact: {
      title: "Contacto",
      name: "Nombre*",
      email: "Correo electrónico*",
      message: "Tu mensaje*",
      send: "Enviar",
      sent: "Mensaje enviado correctamente.",
      tooMany: "Demasiadas solicitudes. Inténtalo de nuevo más tarde.",
      error: "Ha ocurrido un error. Inténtalo de nuevo.",
      orEmail: "O escríbeme a:",
    },
    footer: {
      line1: "Disponible para incorporarme como ",
      line2: "desarrollador web",
      line3: "No dudes en escribirme",
      by: "Desarrollo y diseño:",
    },
    project: { technologies: "Tecnologías", visit: "Visitar:" },
    projects: {
      proreformas: {
        imageAlt: "Portada del proyecto ProReformasValencia",
        projectType: "Prácticas",
        description:
          "Desarrollo en equipo de una web corporativa completa para ProReformasValencia, desde el diseño hasta el panel de administración.",
        descriptionTwo:
          "Diseñé y maqueté la interfaz con HTML, Tailwind CSS y Vue, logrando una web clara, moderna y adaptable. Implementé el panel de administración con Laravel, Node.js y MySQL para gestionar contenidos y solicitudes de clientes.",
        descriptionThree:
          "Desarrollé y presenté un módulo de presupuestos que mejoró la gestión de solicitudes y recibió una valoración muy positiva del cliente.",
        cardType: "Prácticas",
        cardDescription:
          "Web corporativa completa desarrollada en equipo, con panel de administración y un módulo de presupuestos valorado muy positivamente por el cliente.",
        moreType: "Prácticas",
        moreDescription: "Web corporativa con panel de administración.",
        pageTitle: "ProReformasValencia - Web corporativa | Ali Lekhal",
        pageDescription:
          "Web corporativa con panel de administración y módulo de presupuestos, desarrollada en equipo durante mis prácticas como desarrollador web.",
      },
      pulsefit: {
        imageAlt: "Portada del proyecto PulseFit",
        projectType: "Full-stack (En desarrollo)",
        description:
          "PulseFit es una aplicación web full-stack en desarrollo, orientada a la gestión fitness y entrenamientos, con frontend en Vue 3 y Tailwind CSS y backend en Laravel (Laravel Breeze) sobre MySQL.",
        cardType: "En desarrollo",
        cardDescription:
          "Aplicación web full-stack con Vue 3 y Tailwind CSS en el frontend, y Laravel con MySQL en el backend (en desarrollo).",
        moreType: "En desarrollo",
        moreDescription: "Aplicación web full-stack con Vue 3 y Laravel.",
        pageTitle: "PulseFit - Aplicación web full-stack | Ali Lekhal",
        pageDescription:
          "Aplicación web full-stack con Vue 3, Tailwind CSS, Laravel y MySQL, desarrollada por Ali Lekhal.",
      },
      "hotel-api": {
        imageAlt: "Portada del proyecto API Hotel",
        projectType: "Backend (En desarrollo)",
        description:
          "API REST de un hotel desarrollada con Laravel y PHP. Arquitectura backend modular para gestión de reservas, actualmente en desarrollo en local.",
        cardType: "En desarrollo",
        cardDescription: "API REST de reservas y gestión hotelera desarrollada con Laravel.",
        moreType: "En desarrollo",
        moreDescription: "API REST con Laravel y PHP.",
        pageTitle: "API Hotel - API REST con Laravel | Ali Lekhal",
        pageDescription:
          "API REST de un hotel desarrollada con Laravel por Ali Lekhal.",
      },
    },
  },

  en: {
    htmlLang: "en",
    metaTitle: "Ali Lekhal Hanifi | Web Developer",
    metaDescription:
      "Portfolio of Ali Lekhal Hanifi, web developer in Valencia, Spain: Vue, Laravel, Node.js and MySQL.",
    toggleLabel: "ES",
    toggleAria: "Switch the language to Spanish",
    nav: {
      projects: "projects",
      about: "about",
      skills: "skills",
      contact: "contact",
    },
    menu: { title: "Menu", portfolio: "Portfolio 2026", surname: "Lekhal Hanifi" },
    home: "Home",
    preloader: "Hello!",
    viewMore: "View more",
    hero: {
      available: "Available to join as a web developer",
      location: "Torrent, Valencia",
      tagline: "Full-stack Web Developer",
      role: "Web developer",
      city: "Valencia",
      scroll: "(scroll down for more)",
    },
    selected: {
      top: "Featured",
      bottom: "projects",
      aria: "Featured projects (02)",
    },
    more: { top: "More", bottom: "projects", aria: "More projects (01)" },
    about: {
      top: "A little",
      bottom: "about me",
      imageAlt: "Portrait of Ali Lekhal Hanifi",
      quote: [
        "Hi! I'm Ali, a web developer from Torrent (Valencia) and I like ",
        "solving real problems",
        " with simple, useful, and well-thought-out solutions.",
      ],
      p1: "I have a solid background in Web Application Development (DAW) and IT Systems and Networks (SMR). I have collaborated on real-world projects, including a full corporate platform, admin panel, and quotation module for ProReformasValencia, alongside practical IT systems experience.",
      p2: [
        "I focus on ",
        "clean, functional development,",
        " continuously expanding my knowledge to build efficient, well-architected web applications.",
      ],
      p3: [
        "Available to join a ",
        "development team",
        " where I can contribute and continue evolving professionally. I communicate fluently in both English and Spanish.",
      ],
      downloadCv: "Download CV",
    },
    skills: {
      title: "Skills",
      view: "View",
      chaos: "Chaos",
      readable: "Readable",
      chaosAria: "Chaos view",
      readableAria: "Readable view",
      frontend: "Frontend:",
      backend: "Backend:",
      tools: "Tools:",
      reactBasics: "React (basics)",
    },
    contact: {
      title: "Contact",
      name: "Name*",
      email: "Email*",
      message: "Your message*",
      send: "Send",
      sent: "Message sent successfully.",
      tooMany: "Too many requests. Please try again later.",
      error: "An error occurred. Please try again.",
      orEmail: "Or email me at:",
    },
    footer: {
      line1: "Available to join as a ",
      line2: "web developer",
      line3: "Feel free to send me a message",
      by: "Developed & designed by:",
    },
    project: { technologies: "Technologies", visit: "Visit:" },
    projects: {
      proreformas: {
        imageAlt: "Cover of the ProReformasValencia project",
        projectType: "Internship",
        description:
          "Team development of a complete corporate website for ProReformasValencia, from the design to the admin panel.",
        descriptionTwo:
          "I designed and built the interface with HTML, Tailwind CSS and Vue, delivering a clear, modern and responsive website. I implemented the admin panel with Laravel, Node.js and MySQL to manage content and client requests.",
        descriptionThree:
          "I developed and presented a quotation module that improved request management and received very positive feedback from the client.",
        cardType: "Internship",
        cardDescription:
          "Complete corporate website built as a team, with an admin panel and a quotation module the client rated very highly.",
        moreType: "Internship",
        moreDescription: "Corporate website with an admin panel.",
        pageTitle: "ProReformasValencia - Corporate website | Ali Lekhal",
        pageDescription:
          "Corporate website with an admin panel and quotation module, built as a team during my internship as a web developer.",
      },
      pulsefit: {
        imageAlt: "Cover of the PulseFit project",
        projectType: "Full-stack (In progress)",
        description:
          "PulseFit is a full-stack web application currently in development, focused on fitness tracking, with a Vue 3 and Tailwind CSS frontend and a Laravel backend (with Laravel Breeze) on MySQL.",
        cardType: "In progress",
        cardDescription:
          "Full-stack web application with Vue 3 and Tailwind CSS on the frontend, and Laravel with MySQL on the backend (in development).",
        moreType: "In progress",
        moreDescription: "Full-stack web application with Vue 3 and Laravel.",
        pageTitle: "PulseFit - Full-stack web application | Ali Lekhal",
        pageDescription:
          "Full-stack web application with Vue 3, Tailwind CSS, Laravel and MySQL, built by Ali Lekhal.",
      },
      "hotel-api": {
        imageAlt: "Cover of the Hotel API project",
        projectType: "Backend (In progress)",
        description:
          "REST API for hotel reservation management, built with PHP and Laravel. Modular backend architecture currently in local development.",
        cardType: "In progress",
        cardDescription: "REST API for hotel management, built with Laravel and PHP.",
        moreType: "In progress",
        moreDescription: "REST API with Laravel and PHP.",
        pageTitle: "Hotel API - REST API with Laravel | Ali Lekhal",
        pageDescription: "REST API for a hotel, built with Laravel by Ali Lekhal.",
      },
    },
  },
};
