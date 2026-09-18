import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Section } from "@/components/shared/section";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { Reveal } from "@/components/shared/reveal";

function ProjectsGrid({
  items,
  limit,
}: {
  items: typeof projects;
  limit?: number;
}) {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.04}>
            <article className="group min-w-0 overflow-hidden rounded-2xl border border-border bg-white transition-transform hover:-translate-y-0.5">
              <div className="relative aspect-[4/3] bg-surface">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
                {project.isPlaceholder ? (
                  <div className="absolute top-3 left-3">
                    <PlaceholderBadge />
                  </div>
                ) : null}
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-brand">
                  <span>{project.serviceType}</span>
                  <span className="text-border">•</span>
                  <span className="text-muted-foreground">{project.location}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-navy">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      {limit ? (
        <div className="mt-8 text-center">
          <Link
            href="/projeler"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border bg-white px-5 text-sm font-semibold text-navy hover:bg-surface"
          >
            Tüm Projeleri Gör
          </Link>
        </div>
      ) : null}
    </>
  );
}

export function ProjectsSection({
  limit,
  spacing = "section",
  showHeader = true,
  /** Render grid only — use inside PageShell/Container like Hizmetler. */
  bare = false,
}: {
  limit?: number;
  spacing?: "section" | "page";
  showHeader?: boolean;
  bare?: boolean;
}) {
  const items = typeof limit === "number" ? projects.slice(0, limit) : projects;
  const grid = <ProjectsGrid items={items} limit={limit} />;

  if (bare) {
    return <div className="mt-8 md:mt-10">{grid}</div>;
  }

  return (
    <Section
      spacing={spacing}
      tone="none"
      title={showHeader ? "Yaptığımız İşlerden" : undefined}
      description={
        showHeader
          ? "Proje görselleri ve açıklamaları müşteri tarafından sağlandığında burada yayınlanacaktır."
          : undefined
      }
    >
      {grid}
    </Section>
  );
}
