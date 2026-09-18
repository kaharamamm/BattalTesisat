import { CheckCircle2 } from "lucide-react";
import { benefits } from "@/data/benefits";
import { Section } from "@/components/shared/section";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { Reveal } from "@/components/shared/reveal";

export function WhyUsSection() {
  return (
    <Section title="Neden Battal Tesisat?">
      <Reveal>
        <p className="mb-8 max-w-3xl text-base text-muted-foreground sm:text-lg">
          Aşağıdaki maddeler müşteri tarafından onaylanacak avantaj başlıklarıdır.
          Gerçek iddialar eklenene kadar yer tutucu olarak gösterilmektedir.
        </p>
        <ul className="grid gap-4 md:grid-cols-2">
          {benefits.map((benefit) => (
            <li
              key={benefit.id}
              className="flex gap-3 rounded-xl border border-border bg-white p-4"
            >
              <CheckCircle2
                className="mt-0.5 size-5 shrink-0 text-brand"
                aria-hidden
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold text-navy">
                    {benefit.title}
                  </h3>
                  {benefit.isPlaceholder ? <PlaceholderBadge /> : null}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
