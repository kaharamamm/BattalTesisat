import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import {
  ToneBackdrop,
  type SectionTone,
} from "@/components/shared/tone";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  headerAlign?: "left" | "center";
  spacing?: "section" | "page";
  tone?: SectionTone;
  blendTo?: Exclude<SectionTone, "none">;
  /** `strong` for page tops; `soft` for mid Ana Sayfa sections. */
  intensity?: "strong" | "soft";
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  eyebrow,
  title,
  description,
  headerAlign = "left",
  spacing = "section",
  tone = "none",
  blendTo,
  intensity = "soft",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden bg-white",
        spacing === "page" ? "page-space" : "section-space",
        className,
      )}
    >
      <ToneBackdrop tone={tone} blendTo={blendTo} intensity={intensity} />
      <Container className={cn("relative", containerClassName)}>
        {(eyebrow || title || description) && (
          <div
            className={cn(
              "mb-10 max-w-3xl md:mb-14",
              headerAlign === "center" && "mx-auto text-center",
            )}
          >
            {eyebrow ? (
              <p className="mb-3 text-sm font-medium tracking-wide text-brand uppercase">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-[1.75rem] text-balance sm:text-4xl lg:text-[2.5rem]">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

export type { SectionTone };
