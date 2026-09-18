"use client";

import {
  useEffect,
  useRef,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { Star } from "lucide-react";
import type { Review } from "@/data/reviews";
import { cn } from "@/lib/utils";

type ReviewsCarouselProps = {
  reviews: Review[];
};

function ReviewCard({
  author,
  rating,
  text,
  source,
  date,
  isPlaceholder,
}: Review) {
  return (
    <article className="flex h-[17.5rem] w-80 shrink-0 flex-col rounded-2xl border border-border bg-white p-5 shadow-sm select-none">
      <div className="mb-3 flex shrink-0 items-center justify-between gap-2">
        <div className="flex gap-0.5" aria-hidden>
          {Array.from({ length: 5 }).map((_, star) => (
            <Star
              key={star}
              className={cn(
                "size-4",
                rating > star ? "fill-brand text-brand" : "text-border",
              )}
            />
          ))}
        </div>
        {isPlaceholder ? (
          <span className="placeholder-mark">Yer tutucu</span>
        ) : null}
      </div>
      <p className="line-clamp-5 min-h-0 flex-1 text-sm leading-relaxed text-muted-foreground">
        “{text}”
      </p>
      <div className="mt-4 shrink-0 border-t border-border pt-4">
        <p className="truncate text-sm font-semibold text-navy">{author}</p>
        <p className="truncate text-xs text-muted-foreground">
          {source}
          {date ? ` · ${date}` : null}
        </p>
      </div>
    </article>
  );
}

/**
 * Infinite horizontal loop with auto-scroll + mouse/touch drag.
 * Auto-scroll keeps running except while actively dragging.
 */
export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    active: false,
    startX: 0,
    startScroll: 0,
    moved: false,
  });
  const pausedRef = useRef(false);
  const reduceMotion = useRef(false);

  const loopReviews =
    reviews.length > 0 ? [...reviews, ...reviews, ...reviews] : [];

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || loopReviews.length === 0 || reduceMotion.current) return;

    let frame = 0;
    /** Sub-pixel accumulator — browsers truncate scrollLeft to integers. */
    let carry = 0;
    const speed = 0.35;

    const tick = () => {
      if (!pausedRef.current) {
        carry += speed;
        if (carry >= 1) {
          const step = Math.floor(carry);
          el.scrollLeft += step;
          carry -= step;

          const third = el.scrollWidth / 3;
          if (third > 0 && el.scrollLeft >= third * 2) {
            el.scrollLeft -= third;
          }
        }
      }
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [loopReviews.length]);

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    const el = scrollerRef.current;
    if (!el || event.button === 2) return;

    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScroll: el.scrollLeft,
      moved: false,
    };
    pausedRef.current = true;
    el.setPointerCapture(event.pointerId);
    el.classList.add("cursor-grabbing");
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const el = scrollerRef.current;
    const drag = dragRef.current;
    if (!el || !drag.active) return;

    const delta = event.clientX - drag.startX;
    if (Math.abs(delta) > 3) drag.moved = true;
    el.scrollLeft = drag.startScroll - delta;
  }

  function endDrag(event: ReactPointerEvent<HTMLDivElement>) {
    const el = scrollerRef.current;
    const drag = dragRef.current;
    if (!drag.active) return;

    drag.active = false;
    el?.classList.remove("cursor-grabbing");
    try {
      el?.releasePointerCapture(event.pointerId);
    } catch {
      // already released
    }
    window.setTimeout(() => {
      pausedRef.current = false;
    }, drag.moved ? 600 : 0);
  }

  if (loopReviews.length === 0) return null;

  return (
    <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-12"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-12"
        aria-hidden
      />
      <div
        ref={scrollerRef}
        className="flex cursor-grab items-stretch gap-5 overflow-x-auto px-4 py-1 sm:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ touchAction: "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        role="region"
        aria-label="Google müşteri yorumları"
      >
        {loopReviews.map((review, i) => (
          <ReviewCard key={`${review.author}-${i}`} {...review} />
        ))}
      </div>
    </div>
  );
}
