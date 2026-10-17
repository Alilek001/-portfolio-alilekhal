# Ali Lekhal Hanifi — Full-Stack Developer Portfolio

<div align="center">

  [![Live Site](https://img.shields.io/badge/Production-alilekhal.com-black?style=for-the-badge&logo=vercel&logoColor=white)](https://www.alilekhal.com)
  [![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![Cloudflare](https://img.shields.io/badge/DNS-Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://www.cloudflare.com/)

  <p align="center">
    <strong>Sitio web oficial y portfolio interactivo de Ali Lekhal Hanifi</strong><br />
    Desarrollador Web Full-Stack · Valencia, España
  </p>

  <p align="center">
    <a href="https://www.alilekhal.com"><strong>Explorar Portfolio en Vivo »</strong></a>
    <br />
    <br />
    <a href="https://www.linkedin.com/in/ali-lekhal-hanifi-528680437/">LinkedIn</a> ·
    <a href="https://github.com/Alilek001">GitHub</a> ·
    <a href="mailto:contacto@alilekhal.com">Contacto</a>
  </p>

</div>

---

## 📌 Descripción

Portfolio web de alto rendimiento diseñado y desarrollado para presentar proyectos full-stack, capacidades técnicas y trayectoria profesional. Construido sobre la arquitectura **Next.js 14 App Router**, combina una experiencia visual inmersiva orientada al diseño contemporáneo con las mejores prácticas de rendimiento web, accesibilidad, SEO y seguridad.

---

## ✨ Características Principales

- **⚡ Rendimiento y Peso Ligero:**
  - Optimizado para tiempos de carga ultrarrápidos (~189 kB First Load JS).
  - Generación estática e incremental (SSG/ISR) para una entrega instantánea a través de Edge CDN.
- **🌍 Arquitectura Bilingüe (i18n):**
  - Soporte nativo para **Español (ES)** e **Inglés (EN)**.
  - Conmutador dinámico con persistencia de preferencia en el navegador del usuario.
- **🎨 Experiencia Visual & Creative Coding:**
  - Desplazamiento suave cinemático con **Lenis**.
  - Animaciones basadas en física y transiciones de estados con **Framer Motion** y **GSAP**.
  - Cursor contextual interactivo y vista dinámica dual para habilidades técnicas (*Vista Caos* interactiva / *Vista Legible* estructurada).
- **📬 Sistema de Contacto Serverless de Alta Fiabilidad:**
  - Endpoint seguro en `/api/email` integrado con **Resend API**.
  - Autenticación criptográfica **SPF** y **DKIM** vinculada a Cloudflare para entrega garantizada sin caer en spam.
  - Sanitización de entradas con `isomorphic-dompurify` para protección total contra inyecciones XSS.
  - Mecanismo de *Rate Limiting* en servidor contra ataques de denegación o saturación por bots.
- **📄 Descarga Directa de Currículum:**
  - Integración directa del CV actualizado en formato PDF accesible en un clic desde la sección de presentación.
- **🔍 SEO y Metadatos OpenGraph:**
  - Metadatos semánticos completos, Twitter Cards y etiquetas OpenGraph optimizadas para compartir en LinkedIn, Twitter y plataformas de reclutamiento.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Frontend Core** | [Next.js 14](https://nextjs.org/) (App Router), [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Estilos & UI** | SCSS Modules, CSS Grid, Flexbox, Diseño Responsive Fluido |
| **Animación & Motion** | [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/), [@studio-freight/lenis](https://github.com/darkroomengineering/lenis) |
| **Backend & Serverless** | Next.js API Routes (Node.js runtime), [Resend](https://resend.com/) SDK |
| **Seguridad & Datos** | `isomorphic-dompurify`, Validación de Esquemas |
| **Infraestructura & CI/CD** | [Vercel](https://vercel.com/) (Edge Hosting & CI/CD), [Cloudflare](https://www.cloudflare.com/) (DNS & SSL/TLS) |

---

## 📂 Estructura del Proyecto

```text
portfolio-ali/
├── app/
│   ├── api/
│   │   └── email/              # Endpoint Serverless para envío de correo (Resend)
│   ├── components/
│   │   ├── context/            # Contextos de React (Cursor, Scroll, Transiciones)
│   │   ├── effects/            # Componentes de efectos visuales (Lenis, Cursor, Preloader)
│   │   ├── hooks/              # Custom Hooks reutilizables
│   │   ├── i18n/               # Sistema de traducción y diccionario de textos (ES/EN)
│   │   ├── project/            # Páginas dinámicas y datos de proyectos
│   │   └── ui/                 # Componentes UI (Navegación, Menús, Cards, LangToggle)
│   ├── meta/                   # Configuración SEO, OpenGraph y Twitter Cards
│   ├── pages/                  # Secciones de la página principal (Hero, About, Skills, Contact, Footer)
│   ├── scss/                   # Estilos globales y reset
│   ├── layout.tsx              # Root Layout de la aplicación
│   └── page.jsx                # Página de inicio principal
├── public/
│   ├── assets/                 # Fuentes tipográficas y texturas SVG
│   ├── images/                 # Imágenes optimizadas en formato WebP
│   └── cv-ali-lekhal.pdf       # Currículum Vitae oficial descargable
├── next.config.mjs             # Configuración de compilación Next.js
└── package.json                # Dependencias y scripts del proyecto
```

---

## 🚀 Instalación y Desarrollo Local

### Prerrequisitos
- **Node.js** >= 18.17.0
- **npm** >= 9.0.0

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Alilek001/portfolio-alilekhal.git
   cd portfolio-alilekhal
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env.local` en la raíz del proyecto:
   ```env
   RESEND_API_KEY=tu_clave_de_resend
   CONTACT_FROM_EMAIL=Ali Lekhal <contacto@alilekhal.com>
   CONTACT_TO_EMAIL=lekhalali56@gmail.com
   ```

4. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

5. **Compilar para producción:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🚢 Despliegue e Infraestructura

El proyecto sigue un flujo de **Integración y Despliegue Continuo (CI/CD)**:

1. **Control de Versiones:** Cada commit en la rama `main` en GitHub activa automáticamente un nuevo despliegue.
2. **Hosting en Vercel:** Se encarga de la compilación, generación estática y distribución global en su red de servidores Edge.
3. **Gestión de Dominio en Cloudflare:** Resuelve el dominio `alilekhal.com` y gestiona los registros de verificación criptográfica (DKIM/SPF) para la entrega de correos.

---

## 👤 Autor

**Ali Lekhal Hanifi**
- **Sitio Web:** [alilekhal.com](https://www.alilekhal.com)
- **LinkedIn:** [linkedin.com/in/ali-lekhal-hanifi-528680437](https://www.linkedin.com/in/ali-lekhal-hanifi-528680437/)
- **GitHub:** [@Alilek001](https://github.com/Alilek001)
- **Correo:** [lekhalali56@gmail.com](mailto:lekhalali56@gmail.com)

---

<div align="center">
  <sub>Diseñado y desarrollado por Ali Lekhal Hanifi · Todos los derechos reservados © 2026</sub>
</div>
