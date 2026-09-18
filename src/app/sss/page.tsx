import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Battal Tesisat hakkında sıkça sorulan sorular — hizmetler, çalışma saatleri ve iletişim.",
  alternates: { canonical: "/sss" },
};

export default function FaqPage() {
  return (
    <>
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
