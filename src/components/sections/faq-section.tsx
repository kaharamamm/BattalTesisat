"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { Section } from "@/components/shared/section";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { Reveal } from "@/components/shared/reveal";

function FaqAccordion() {
  return (
    <Reveal>
      <Accordion className="rounded-2xl border border-border bg-white px-2 md:px-4">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className="min-h-12 text-left text-base font-semibold text-navy hover:no-underline">
              <span className="flex flex-wrap items-center gap-2 pr-4">
                {faq.question}
                {faq.isPlaceholder ? <PlaceholderBadge /> : null}
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  );
}

export function FaqSection({
  spacing = "section",
  showHeader = true,
  /** Render accordion only — use inside PageShell/Container like Hizmetler. */
  bare = false,
}: {
  spacing?: "section" | "page";
  showHeader?: boolean;
  bare?: boolean;
}) {
  if (bare) {
    return <div className="mt-10"><FaqAccordion /></div>;
  }

  return (
    <Section
      spacing={spacing}
      tone="none"
      title={showHeader ? "Sıkça Sorulan Sorular" : undefined}
      description={
        showHeader
          ? "Yanıtlar müşteri politikaları onaylanana kadar yer tutucu niteliktedir."
          : undefined
      }
    >
      <FaqAccordion />
    </Section>
  );
}
