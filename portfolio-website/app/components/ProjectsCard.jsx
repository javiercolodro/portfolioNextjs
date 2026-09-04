import React from "react";
import Image from "next/image";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.09 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.42.36.78 1.06.78 2.14v3.17c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg>
);

const ProjectsCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  web,
  inDevelopment,
  tag,
  imageFit = "cover",
}) => {
  // Construye la lista de enlaces a repos evitando duplicados: algunos
  // proyectos usan la misma URL en gitUrl y previewUrl, y en ese caso
  // mostrarlo dos veces como "Frontend"/"Backend" sería engañoso.
  const uniqueRepos = [...new Set([gitUrl, previewUrl].filter(Boolean))];
  const repoLinks =
    uniqueRepos.length > 1
      ? [
          { href: uniqueRepos[0], label: "Frontend" },
          { href: uniqueRepos[1], label: "Backend" },
        ]
      : uniqueRepos.map((href) => ({ href, label: "Repository" }));

  const visibleTags = tag.filter((t) => t !== "All");

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-elevated transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/40">
      {/* Vista previa */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-hairline bg-surface">
        <Image
          src={imgUrl}
          alt={`${title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`transition-transform duration-500 ease-smooth group-hover:scale-105 ${
            imageFit === "contain" ? "object-contain p-3" : "object-cover object-top"
          }`}
        />
        {inDevelopment && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-amber-400/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-black">
            In development
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-6">
        {visibleTags.length > 0 && (
          <ul className="mb-3.5 flex flex-wrap gap-2">
            {visibleTags.map((t) => (
              <li
                key={t}
                className="rounded-md border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent-soft"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        <h3 className="text-lg font-semibold leading-snug text-white">{title}</h3>

        <p className="mt-2.5 mb-6 line-clamp-4 text-sm leading-relaxed text-muted">
          {description}
        </p>

        {/* Enlaces en una sola fila, siempre visibles (no dependen de hover) */}
        <div className="mt-auto flex flex-nowrap items-center gap-2 border-t border-hairline pt-5">
          {inDevelopment ? (
            <span className="font-mono text-xs text-muted">
              Repositories coming soon
            </span>
          ) : (
            <>
              {repoLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 whitespace-nowrap rounded-lg border border-hairline px-2 py-1.5 text-[11px] font-medium text-slate-300 transition-colors duration-200 hover:border-muted hover:text-white"
                >
                  <GithubIcon />
                  {link.label}
                </a>
              ))}
              {web && (
                <a
                  href={web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 whitespace-nowrap rounded-lg bg-accent/15 px-2 py-1.5 text-[11px] font-semibold text-accent-soft transition-colors duration-200 hover:bg-accent hover:text-white"
                >
                  <ExternalIcon />
                  Live demo
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
