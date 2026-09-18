"use client";

import { useEffect } from "react";
import { builderSignature } from "@/config/signature";

/** Avoids duplicate logs from React Strict Mode remounts in dev. */
let hasLoggedSignature = false;

/**
 * Prints a styled studio signature in the browser console only.
 * Invisible in the normal UI.
 */
export function DevSignature() {
  useEffect(() => {
    if (hasLoggedSignature) return;
    hasLoggedSignature = true;

    const { name, url, message } = builderSignature;
    const linkLine = url ? `\n${url}` : "";

    console.log(
      `%c${name}\n%c${message}${linkLine}`,
      "color:#f97316;font-weight:700;font-size:14px;font-family:system-ui,sans-serif;",
      "color:#64748b;font-size:12px;font-family:system-ui,sans-serif;",
    );
  }, []);

  return null;
}
