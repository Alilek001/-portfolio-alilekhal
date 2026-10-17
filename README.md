# Portfolio de Ali Lekhal Hanifi

Portfolio personal de **Ali Lekhal Hanifi**, desarrollador web (Grado Superior en Desarrollo de Aplicaciones Web) de Torrent, Valencia.

Web: **https://alilekhal.com** (próximamente)

## Contenido

- **Proyectos destacados:** ProReformasValencia (web corporativa con panel de administración y módulo de presupuestos, realizada en prácticas) y PulseFit (aplicación full-stack con Vue 3, Laravel y MySQL).
- **Otros proyectos:** API REST de un hotel con Laravel.
- **Sobre mí, habilidades y contacto.**

## Tecnologías

Next.js 14 | React 18 | TypeScript | SCSS | Framer Motion | GSAP | Lenis

## Desarrollo en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

### Variables de entorno

El formulario de contacto envía el correo con SendGrid (SMTP). Crea un archivo `.env.local` (no se sube a Git):

```
SENDGRID_API_KEY=tu_clave
CONTACT_FROM_EMAIL=remitente_verificado@tudominio.com
CONTACT_TO_EMAIL=lekhalali56@gmail.com
```

## Idiomas

La web está en **español** por defecto y tiene un botón **ES / EN** (en el menú) para cambiar a inglés. La elección se recuerda en el navegador del visitante.

Todos los textos están en un único archivo: `app/components/i18n/translations.ts`. Para cambiar una frase o añadir otro idioma, edita ese archivo.

## Cómo editar el contenido

| Qué | Dónde |
| --- | --- |
| Todos los textos (ES y EN) | `app/components/i18n/translations.ts` |
| Proyectos (imágenes, tecnologías, enlaces, vídeos) | `app/components/project/projectData.tsx` |
| Habilidades de la vista "caos" | `app/pages/skills/data.ts` |
| Imágenes y vídeos | `public/images` y `public/videos` |

## Créditos

El diseño parte de una plantilla de portfolio de código abierto en GitHub. El contenido, los textos y los proyectos son de Ali Lekhal Hanifi.
