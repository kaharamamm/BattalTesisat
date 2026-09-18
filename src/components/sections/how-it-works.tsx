import { Phone, ClipboardList, CalendarCheck } from "lucide-react";
import { processSteps } from "@/data/benefits";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";

const icons = [Phone, ClipboardList, CalendarCheck];

export function HowItWorksSection() {
  return (
    <Section
      title="Nasıl Çalışıyoruz?"
      description="Süreç adımları genel bir çerçevedir; kesin iş akışı müşteri onayı sonrası netleştirilecektir."
      headerAlign="center"
    >
      <div className="relative grid gap-6 md:grid-cols-3">
        <div
          className="pointer-events-none absolute top-12 right-[16%] left-[16%] hidden h-px bg-border md:block"
          aria-hidden
        />
        {processSteps.map((step, index) => {
          const Icon = icons[index] ?? Phone;
          return (
            <Reveal key={step.id} delay={index * 0.06}>
              <div className="relative rounded-2xl border border-border bg-white p-6 text-center md:text-left">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-navy text-white md:mx-0">
                  <Icon className="size-5" aria-hidden />
                </div>
                <p className="text-sm font-semibold tracking-wide text-brand">
                  {step.step}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
