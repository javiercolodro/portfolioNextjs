import React from "react";
import Image from "next/image";
import Link from "next/link";
import Picture from "../../public/images/profile.jpeg";
import TypeWriter from "./TypeWriter";

const Header = () => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28">
      {/* Resplandor decorativo de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        {/* Texto */}
        <div className="order-2 lg:order-1 lg:col-span-7 xl:col-span-8 text-center lg:text-left animate-fade-up">
          {/* Badge de disponibilidad */}
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-elevated/60 px-3 py-1.5 text-xs font-medium text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for new opportunities
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl xl:text-5xl font-extrabold leading-[1.15] tracking-tight text-white">
            <span className="block text-gradient">Hello, I&apos;m</span>
            <span className="mt-2 block min-h-[1.3em]">
              <TypeWriter />
            </span>
          </h1>

          <p className="mx-auto lg:mx-0 mt-7 max-w-2xl xl:max-w-3xl text-base sm:text-lg lg:text-xl leading-relaxed text-muted">
            I build scalable web applications end to end — from accessible,
            responsive interfaces in{" "}
            <span className="text-white font-medium">React</span> and{" "}
            <span className="text-white font-medium">TypeScript</span> to
            event-driven backends and{" "}
            <span className="text-white font-medium">
              AWS serverless infrastructure
            </span>{" "}
            defined as code with CDK.
          </p>

          {/* Llamados a la acción */}
          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:bg-accent-deep hover:shadow-accent/30"
            >
              View my work
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-hairline bg-elevated px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-muted hover:bg-white/5"
            >
              Get in touch
            </Link>
          </div>

          {/* Descarga de CV */}
          <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-sm">
            <span className="text-muted">Resume:</span>
            <a
              href="/LorenzoJavierColodroEng.pdf"
              download
              className="inline-flex items-center gap-1.5 font-medium text-accent-soft underline-offset-4 hover:underline"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
              </svg>
              English
            </a>
            <a
              href="/LorenzoJavierColodroEsp.pdf"
              download
              className="inline-flex items-center gap-1.5 font-medium text-accent-soft underline-offset-4 hover:underline"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
              </svg>
              Spanish
            </a>
          </div>
        </div>

        {/* Foto de perfil */}
        <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-4 flex justify-center animate-fade-in">
          <div className="relative">
            {/* Anillo con degradado alrededor del avatar */}
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent via-indigo-500 to-transparent opacity-60 blur-md"
            />
            <div className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 overflow-hidden rounded-full border border-hairline bg-elevated">
              <Image
                src={Picture}
                alt="Lorenzo Javier Colodro, Full Stack Developer"
                fill
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Header;
