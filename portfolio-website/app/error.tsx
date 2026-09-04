"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-base px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-accent-soft">
        Something went wrong
      </p>
      <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
        Unexpected error
      </h1>
      <p className="mt-4 max-w-md text-sm text-muted">
        An error occurred while rendering this page. You can try again, or head
        back to the homepage.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-deep"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl border border-hairline bg-elevated px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-muted"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
