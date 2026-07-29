"use client";

import TextReveal from "@/app/components/reactbits/TextReveal";

interface AnimatedHeadlineProps {
  /**
   * The headline text. Supports newlines (\n) to create multi-line reveals —
   * each line is animated independently with TextReveal.
   */
  text: string;
  className?: string;
}

/**
 * Shared animated headline component used by Hero and all NicheLanding pages.
 * Splits text on \n. If there are multiple lines, the last line is highlighted
 * in emerald to match the Dark Studio brand.
 */
export default function AnimatedHeadline({ text, className = "" }: AnimatedHeadlineProps) {
  const lines = text.split("\n").filter((l) => l.trim().length > 0);

  return (
    <>
      {lines.map((line, i) => {
        // Highlight the last line if there are multiple lines
        const isLast = i === lines.length - 1 && lines.length > 1;
        const lineClass = isLast
          ? "text-emerald-400"
          : className || "text-zinc-100";

        return (
          <span key={i} className="block">
            <TextReveal text={line} className={lineClass} />
          </span>
        );
      })}
    </>
  );
}

