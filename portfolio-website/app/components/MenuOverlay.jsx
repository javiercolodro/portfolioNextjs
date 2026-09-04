"use client";
import React from "react";

const MenuOverlay = ({
  links,
  socials = [],
  resumes = [],
  activeSection,
  onLinkClick,
}) => {
  const handleLinkClick = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    if (onLinkClick) onLinkClick();
  };

  return (
    <div
      id="mobile-menu"
      className="md:hidden bg-base/95 backdrop-blur-xl border-b border-hairline animate-fade-in"
    >
      <ul className="flex flex-col px-4 py-4 gap-1">
        {links.map((link) => {
          const isActive = activeSection === link.path;
          return (
            <li key={link.path}>
              <button
                onClick={() => handleLinkClick(link.path)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-accent/10 text-white"
                    : "text-muted hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.title}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Descarga de CV: en mobile mostramos los dos idiomas directamente */}
      {resumes.length > 0 && (
        <div className="px-8 pb-5">
          <p className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Download resume
          </p>
          <div className="flex gap-2.5">
            {resumes.map((resume) => (
              <a
                key={resume.code}
                href={resume.href}
                download
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-deep"
              >
                {resume.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 px-8 pb-6">
        {socials.map((social) => (
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
      </div>
    </div>
  );
};

export default MenuOverlay;
