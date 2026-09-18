import { siteConfig } from "@/config/site";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
  /** Visual tone for footer (dark) vs contact page (light) */
  tone?: "light" | "dark";
  /** When true, show all platforms even if URLs are still empty */
  showEmpty?: boolean;
};

type IconProps = { className?: string };

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.6 12 4.6 12 4.6s-7.5 0-9.4.5A3 3 0 0 0 .5 7.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-4.8zM9.8 15.5v-7l6.3 3.5-6.3 3.5z" />
    </svg>
  );
}

function TwitterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.2 2H21l-6.6 7.5L22 22h-6.2l-4.9-6.4L5.3 22H2.5l7-8L2 2h6.3l4.4 5.8L18.2 2zm-1.1 18h1.7L7 3.9H5.2L17.1 20z" />
    </svg>
  );
}

const socialItems = [
  {
    key: "instagram" as const,
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    key: "facebook" as const,
    label: "Facebook",
    Icon: FacebookIcon,
  },
  {
    key: "youtube" as const,
    label: "YouTube",
    Icon: YoutubeIcon,
  },
  {
    key: "twitter" as const,
    label: "Twitter / X",
    Icon: TwitterIcon,
  },
] as const;

export function getConfiguredSocialLinks() {
  return socialItems
    .map((item) => ({
      ...item,
      href: siteConfig.social[item.key].trim(),
    }))
    .filter((item) => Boolean(item.href));
}

export function hasAnySocialLinks() {
  return getConfiguredSocialLinks().length > 0;
}

export function SocialLinks({
  className,
  tone = "light",
  showEmpty = false,
}: SocialLinksProps) {
  const items = showEmpty
    ? socialItems.map((item) => ({
        ...item,
        href: siteConfig.social[item.key].trim(),
      }))
    : getConfiguredSocialLinks();

  if (items.length === 0) return null;

  const pending = showEmpty && !hasAnySocialLinks();

  return (
    <div className={cn("space-y-3", className)}>
      {pending ? <PlaceholderBadge label="Link bekleniyor" /> : null}
      <ul className="flex flex-wrap items-center gap-2">
        {items.map(({ key, label, href, Icon }) => {
          const itemClassName = cn(
            "inline-flex size-10 items-center justify-center rounded-xl transition-colors",
            tone === "dark"
              ? href
                ? "bg-white/10 text-white hover:bg-brand hover:text-white"
                : "cursor-not-allowed bg-white/5 text-white/35"
              : href
                ? "bg-accent text-brand hover:bg-brand hover:text-white"
                : "cursor-not-allowed bg-muted text-muted-foreground/50",
          );

          if (!href) {
            return (
              <li key={key}>
                <span
                  className={itemClassName}
                  aria-label={`${label} (yakında)`}
                  title={label}
                >
                  <Icon className="size-5" />
                </span>
              </li>
            );
          }

          return (
            <li key={key}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={itemClassName}
              >
                <Icon className="size-5" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
