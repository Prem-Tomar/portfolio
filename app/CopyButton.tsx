import { Check, Copy, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function CopyButton({ text, label }: { text: string; label: string }) {
  const [status, setStatus] = useState<"idle" | "copying" | "copied" | "error">("idle");
  const resetRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetRef.current) clearTimeout(resetRef.current);
  }, []);

  async function copy() {
    if (resetRef.current) clearTimeout(resetRef.current);
    setStatus("copying");
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    resetRef.current = setTimeout(() => setStatus("idle"), 3000);
  }

  const feedback = status === "copied" ? `Copied ${label}`
    : status === "error" ? `Could not copy ${label}. Select and copy it manually.`
    : `Copy ${label}`;
  const Icon = status === "copied" ? Check : status === "error" ? X : Copy;

  return <span className="copy-control">
    <button className="copy-button" type="button" onClick={copy} disabled={status === "copying"}
      aria-label={feedback} title={feedback} data-status={status}>
      <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
    </button>
    <span className="copy-feedback" role="status" aria-live="polite" aria-atomic="true">
      {status === "copied" ? "Copied" : status === "error" ? "Copy failed" : ""}
    </span>
  </span>;
}
