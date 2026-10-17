"use client";

interface Props {
  seoTitle: string;
  seoDescription: string;
}

export default function MetadataProvider({ seoTitle, seoDescription }: Props) {
  return (
    <>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="author" content="Ali Lekhal Hanifi" />
      <meta
        name="keywords"
        content="Ali Lekhal, Desarrollador Web, Web Developer, Valencia, Vue.js, Laravel, Node.js, Full-Stack, Portfolio"
      />
      {/* Open Graph / LinkedIn / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://alilekhal.com" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content="https://alilekhal.com/images/ali.webp" />
      <meta property="og:site_name" content="Ali Lekhal Hanifi Portfolio" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://alilekhal.com" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content="https://alilekhal.com/images/ali.webp" />
      <meta name="theme-color" content="#171717" />
    </>
  );
}
