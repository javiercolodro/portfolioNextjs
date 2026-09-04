import React from "react";

/**
 * Encabezado de sección reutilizable para mantener la misma jerarquía
 * visual en About, Projects y Contact.
 *
 * @param label       Etiqueta corta que va arriba del título
 * @param title       Título principal
 * @param highlight   Parte del título que se resalta con el degradado
 * @param description Texto opcional debajo del título
 */
const SectionHeading = ({ label, title, highlight, description }) => (
  <div className="flex flex-col items-center text-center">
    {/* Etiqueta */}
    <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-elevated/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      {label}
    </span>

    <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
      {title}
      {highlight && (
        <>
          {" "}
          <span className="text-gradient">{highlight}</span>
        </>
      )}
    </h2>

    {/* Barra decorativa */}
    <div
      className="mt-7 h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent"
      aria-hidden="true"
    />

    {description && (
      <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
