import { Container } from "@/components/shared/container";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/config/site";

export function FinalCtaSection() {
  return (
    <section className="bg-white pt-4 pb-10 md:pt-6 md:pb-12 lg:pb-14">
      <Container>
        <Reveal>
          <div className="rounded-2xl bg-navy px-6 py-12 text-center text-white md:px-12 md:py-16">
            <h2 className="mx-auto max-w-3xl text-2xl text-balance text-white sm:text-3xl lg:text-4xl">
              Tesisat ihtiyacınız için {siteConfig.company.name} ile iletişime
              geçin.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 sm:text-base">
              {siteConfig.company.ownerName} ile WhatsApp üzerinden hemen
              iletişime geçin.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton
                placement="final_cta"
                label="WhatsApp'tan Yaz"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
