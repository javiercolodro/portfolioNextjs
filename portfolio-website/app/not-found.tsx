import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-base px-6 text-center">
      <p className="font-mono text-6xl font-bold text-accent">404</p>
      <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-deep"
      >
        Back to portfolio
      </Link>
    </main>
  );
}
