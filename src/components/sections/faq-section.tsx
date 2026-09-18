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

export function FaqSection({ spacing = "page" }: { spacing?: "section" | "page" }) {
  return (
    <Section
      spacing={spacing}
      tone="cyan"
      intensity="strong"
      title="Sıkça Sorulan Sorular"
      description="Yanıtlar müşteri politikaları onaylanana kadar yer tutucu niteliktedir."
    >
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
    </Section>
  );
}
