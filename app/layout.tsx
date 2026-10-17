"use client";
import "./scss/reset.scss";
import { usePathname } from "next/navigation";
import {
  Navigation,
  BlurOverlay,
  ProjectNav,
  MobileNav,
} from "./components/ui";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  LenisSmoothScroll,
  Cursor,
  Preloader,
  PageTransition,
} from "./components/effects/";
import {
  CursorProvider,
  ScrollProvider,
  TransitionContextProvider,
} from "./components/context/";
import { useMediaQuery, useScrollLock } from "./components/hooks/";
import MetadataProvider from "./meta/metaprovider";
import { LanguageProvider, useLang } from "./components/i18n";

function AppShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/project");
  const isTablet = useMediaQuery("(max-width: 768px)");
  const { t } = useLang();

  // Título y descripción: los de la web, o los del proyecto si estamos en uno
  const projectId = pathname.split("/").pop() ?? "";
  const projectText = Object.prototype.hasOwnProperty.call(t.projects, projectId)
    ? t.projects[projectId]
    : null;
  const metadata = projectText
    ? { title: projectText.pageTitle, description: projectText.pageDescription }
    : { title: t.metaTitle, description: t.metaDescription };

  useScrollLock(isLoading, 0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  return (
    <html lang="es" suppressHydrationWarning>
      <MetadataProvider
        seoTitle={metadata.title}
        seoDescription={metadata.description}
      />
      <body suppressHydrationWarning>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <CursorProvider>
          <ScrollProvider>
            <TransitionContextProvider>
              <AnimatePresence mode="wait">
                <PageTransition />
              </AnimatePresence>
              {isTablet ? "" : <Cursor />}

              {isProjectPage ? (
                <ProjectNav />
              ) : isTablet ? (
                <MobileNav />
              ) : (
                <Navigation />
              )}
              <BlurOverlay />
              <LenisSmoothScroll>{children}</LenisSmoothScroll>
            </TransitionContextProvider>
          </ScrollProvider>
        </CursorProvider>
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <AppShell>{children}</AppShell>
    </LanguageProvider>
  );
}
