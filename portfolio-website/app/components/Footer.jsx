import React from "react";
import Link from "next/link";

const NAV = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-hairline bg-base">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-5 py-12 sm:px-8 lg:flex-row lg:justify-between lg:px-12">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-deep text-sm font-bold text-white">
            LJ
          </span>
          <div>
            <p className="text-sm font-semibold text-white">
              Lorenzo Javier Colodro
            </p>
            <p className="text-xs text-muted">Full Stack Developer</p>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6">
            {NAV.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="text-sm text-muted transition-colors duration-200 hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-mono text-xs text-slate-500">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
