"use client"; // Error components must be Client Components

import { ErrorComponent } from "@/components/ErrorPage";
import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <ErrorComponent home={false} reset={reset} />;
}
