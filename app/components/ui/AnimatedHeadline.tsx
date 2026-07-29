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
 * Splits text on \n so each line animates as a separate word-by-word reveal.
 */
export default function AnimatedHeadline({ text, className = "" }: AnimatedHeadlineProps) {
  const lines = text.split("\n").filter((l) => l.trim().length > 0);

  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="block">
          <TextReveal text={line} className={className} />
        </span>
      ))}
    </>
  );
}
