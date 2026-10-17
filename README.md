# alilekhal.com

Repositorio oficial del portfolio personal de **Ali Lekhal Hanifi**, desarrollador web full-stack.

- **Producción:** [https://www.alilekhal.com](https://www.alilekhal.com)
- **LinkedIn:** [linkedin.com/in/ali-lekhal-hanifi-528680437](https://www.linkedin.com/in/ali-lekhal-hanifi-528680437/)
- **Contacto:** contacto@alilekhal.com / lekhalali56@gmail.com

---

## Resumen técnico

Aplicación web desarrollada sobre Next.js 14 con App Router, diseñada con un enfoque orientado a rendimiento, interactividad y mantenibilidad. Incluye internacionalización completa (ES/EN), animaciones fluidas y un sistema de contacto serverless con autenticación de dominio.

### Puntos clave

- **Rendimiento:** Carga inicial ligera (~189 kB First Load JS) mediante generación estática (SSG) y división de código por rutas.
- **Internacionalización:** Soporte nativo para Español e Inglés con persistencia de selección en el cliente (`localStorage`).
- **Animaciones e interfaz:** Integración de Lenis para scroll suave, Framer Motion y GSAP para transiciones de página y microinteracciones, y SCSS modular para el diseño de componentes.
- **Servicio de correo:** Endpoint `/api/email` en entorno serverless conectado a Resend API. Autenticación mediante registros SPF y DKIM en Cloudflare para entrega directa sin intermediarios, junto a sanitización de entradas con DOMPurify y control de tasa (rate limiting).
- **SEO y metadatos:** Configuración de OpenGraph, Twitter Cards y metadatos semánticos para optimización en motores de búsqueda y previsualizaciones en redes profesionales.

---

## Tecnologías utilizadas

- **Framework principal:** Next.js 14.2 (App Router)
- **Librería de interfaz:** React 18
- **Lenguaje:** TypeScript 5
- **Estilos:** SCSS Modules
- **Librerías de animación:** Framer Motion, GSAP, Lenis Scroll
- **Servicio de correo y API:** Resend SDK, isomorphic-dompurify
- **Despliegue e infraestructura:** Vercel (Edge Network) y Cloudflare (Gestión de DNS y SSL)

---

## Estructura del repositorio

```text
portfolio-ali/
├── app/
│   ├── api/
│   │   └── email/              # Endpoint de envío de correo (Resend)
│   ├── components/
│   │   ├── context/            # Contextos de React (Cursor, Scroll, Idioma)
│   │   ├── effects/            # Efectos visuales y scroll suave (Lenis)
│   │   ├── hooks/              # Custom hooks (useMediaQuery, useLocalTime)
│   │   ├── i18n/               # Diccionario de traducciones (translations.ts)
│   │   ├── project/            # Vistas dinámicas y datos de proyectos
│   │   └── ui/                 # Componentes de navegación, menús y tarjetas
│   ├── meta/                   # Proveedor de metadatos SEO y OpenGraph
│   ├── pages/                  # Secciones de la landing (Hero, About, Skills, Contact)
│   ├── scss/                   # Variables globales, mixins y reset
│   ├── layout.tsx              # Layout raíz de la aplicación
│   └── page.jsx                # Página de inicio
├── public/
│   ├── assets/                 # Tipografías y recursos vectoriales
│   ├── images/                 # Imágenes de proyectos y recursos WebP
│   └── cv-ali-lekhal.pdf       # Archivo del currículum para descarga
├── next.config.mjs             # Configuración de Next.js
└── package.json                # Scripts y dependencias
```

---

## Puesta en marcha local

### Requisitos previos

- Node.js 18.17 o superior
- npm 9 o superior

### Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Alilek001/-portfolio-alilekhal.git
   cd -portfolio-alilekhal
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Variables de entorno:
   Crear un archivo `.env.local` en la raíz con la siguiente configuración:
   ```env
   RESEND_API_KEY=tu_api_key_de_resend
   CONTACT_FROM_EMAIL=Ali Lekhal <contacto@alilekhal.com>
   CONTACT_TO_EMAIL=lekhalali56@gmail.com
   ```

4. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Disponible en `http://localhost:3000`.

5. Comandos de compilación:
   ```bash
   npm run build   # Compila la versión de producción optimizada
   npm run start   # Inicia el servidor de producción local
   npm run lint    # Ejecuta el análisis de código con ESLint
   ```

---

## Despliegue y flujo de trabajo

- **CI/CD:** Cada integración en la rama `main` despliega automáticamente una nueva versión en producción a través de Vercel.
- **Red:** El tráfico del dominio `alilekhal.com` se resuelve a través de Cloudflare hacia la red de distribución de Vercel con certificados TLS/HTTPS gestionados automáticamente.

---

## Licencia y autoría

Desarrollado y mantenido por **Ali Lekhal Hanifi**. Todos los derechos reservados.
