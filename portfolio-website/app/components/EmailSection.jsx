"use client";
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";

// Completá con tu email para mostrar un enlace directo debajo del texto.
// Si queda vacío, la sección simplemente no lo renderiza.
const EMAIL = "";

const CONTACT_LINKS = [
  {
    label: "GitHub",
    handle: "@javiercolodro",
    href: "https://github.com/javiercolodro",
    icon: (
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.09 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.42.36.78 1.06.78 2.14v3.17c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    ),
  },
  {
    label: "LinkedIn",
    handle: "in/lorenzojaviercolodro",
    href: "https://www.linkedin.com/in/lorenzojaviercolodro/",
    icon: (
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    ),
  },
];

const inputStyles =
  "w-full rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-slate-100 placeholder-slate-500 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

const EmailSection = () => {
  // "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({ email: "", subject: "", message: "" });

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.email || !data.subject || !data.message) {
      setStatus("error");
      setErrorMessage("Please fill in every field before sending.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result?.error) {
        setStatus("error");
        setErrorMessage(
          "Something went wrong sending the message. You can email me directly instead.",
        );
        return;
      }

      setData({ email: "", subject: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please try again or email me directly.",
      );
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
      <div className="mb-16">
        <SectionHeading
          label="Contact"
          title="Let's build something"
          highlight="together"
          description="Open to full time, contract and freelance work. Tell me what you're building."
        />
      </div>

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
        {/* Datos de contacto */}
        <div className="lg:col-span-5">
          <p className="text-base sm:text-lg leading-relaxed text-muted">
            Whether you have a role in mind, a project to build, or just want to
            talk shop — my inbox is always open and I usually reply within a day.
          </p>

          {EMAIL && (
            <a
              href={`mailto:${EMAIL}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-soft underline-offset-4 hover:underline"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {EMAIL}
            </a>
          )}

          <ul className="mt-10 space-y-4">
            {CONTACT_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-4 p-5 transition-colors duration-200 hover:border-accent/40"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface text-slate-300">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      {link.icon}
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-white">
                      {link.label}
                    </span>
                    <span className="block truncate font-mono text-xs text-muted">
                      {link.handle}
                    </span>
                  </span>
                  <svg
                    className="ml-auto h-4 w-4 shrink-0 text-slate-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Formulario */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="card p-7 sm:p-9" noValidate>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  value={data.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                  className={inputStyles}
                  placeholder="name@company.com"
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  value={data.subject}
                  onChange={handleInputChange}
                  className={inputStyles}
                  placeholder="Frontend role at..."
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  value={data.message}
                  onChange={handleInputChange}
                  className={`${inputStyles} resize-y`}
                  placeholder="Tell me about the role, the team or the project..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {/* Mensajes de estado, anunciados a lectores de pantalla */}
            <div aria-live="polite" className="mt-4 min-h-[1.25rem]">
              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-emerald-400">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Message sent. Thanks for reaching out — I&apos;ll get back to
                  you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
