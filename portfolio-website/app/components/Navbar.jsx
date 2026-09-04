"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

// Versiones del CV disponibles para descargar
const RESUMES = [
  { label: "English", code: "EN", href: "/LorenzoJavierColodroEng.pdf" },
  { label: "Spanish", code: "ES", href: "/LorenzoJavierColodroEsp.pdf" },
];

const SOCIALS = [
  {
    label: "GitHub profile",
    href: "https://github.com/javiercolodro",
    // Icono de GitHub inline para evitar cargar imágenes externas
    icon: (
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.09 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.42.36.78 1.06.78 2.14v3.17c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    ),
  },
  {
    label: "LinkedIn profile",
    href: "https://www.linkedin.com/in/lorenzojaviercolodro/",
    icon: (
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    ),
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef(null);

  // Cierra el dropdown del CV al hacer clic fuera o al presionar Escape
  useEffect(() => {
    if (!resumeOpen) return;

    const handleClickOutside = (event) => {
      if (resumeRef.current && !resumeRef.current.contains(event.target)) {
        setResumeOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") setResumeOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [resumeOpen]);

  // Cierra el menú mobile si la ventana pasa a tamaño desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setNavbar(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Agrega fondo translúcido a la navbar una vez que el usuario scrollea
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Resalta el link de la sección visible en pantalla
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.path))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Bloquea el scroll del body mientras el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navbarOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth ${
        scrolled
          ? "bg-base/80 backdrop-blur-xl border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12 h-16 lg:h-20">
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label="Lorenzo Javier Colodro — home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-deep text-sm font-bold text-white shadow-lg shadow-accent/20">
            LJ
          </span>
          <span className="hidden sm:block text-sm font-semibold text-white">
            Lorenzo Javier Colodro
            <span className="block text-xs font-normal text-muted">
              Full Stack Developer
            </span>
          </span>
        </Link>

        {/* Navegación desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                aria-current={isActive ? "true" : undefined}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-muted hover:text-white hover:bg-white/5"
                }`}
              >
                {link.title}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}

          <span className="mx-3 h-5 w-px bg-hairline" aria-hidden="true" />

          {SOCIALS.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2 text-muted hover:text-white transition-colors duration-200"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                {social.icon}
              </svg>
            </a>
          ))}

          {/* Descarga de CV con selección de idioma */}
          <div ref={resumeRef} className="relative ml-2">
            <button
              type="button"
              onClick={() => setResumeOpen(!resumeOpen)}
              aria-expanded={resumeOpen}
              aria-haspopup="menu"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-deep"
            >
              Resume
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-200 ${
                  resumeOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {resumeOpen && (
              <div
                role="menu"
                aria-label="Choose resume language"
                className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-hairline bg-elevated shadow-xl shadow-black/50 animate-fade-in"
              >
                {RESUMES.map((resume) => (
                  <a
                    key={resume.code}
                    role="menuitem"
                    href={resume.href}
                    download
                    onClick={() => setResumeOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-300 transition-colors duration-150 hover:bg-white/5 hover:text-white"
                  >
                    {resume.label}
                    <span className="font-mono text-xs text-slate-500">
                      {resume.code}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Botón del menú mobile */}
        <button
          onClick={() => setNavbar(!navbarOpen)}
          aria-expanded={navbarOpen}
          aria-controls="mobile-menu"
          aria-label={navbarOpen ? "Close menu" : "Open menu"}
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg border border-hairline text-slate-200 hover:text-white hover:border-muted transition-colors duration-200"
        >
          {navbarOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </div>

      {navbarOpen && (
        <MenuOverlay
          links={navLinks}
          socials={SOCIALS}
          resumes={RESUMES}
          activeSection={activeSection}
          onLinkClick={() => setNavbar(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
