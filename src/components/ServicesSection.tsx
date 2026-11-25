import { MessageCircle } from "lucide-react";
import { COMPANY, SPECIALIZED_SERVICES } from "@/data/megatron";
import { Reveal } from "@/components/Reveal";

export function ServicesSection() {
  return (
    <section id="servicos" className="border-t border-border bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground uppercase sm:text-3xl lg:text-4xl">
            NOSSOS SERVIÇOS
          </h2>
          <div className="mx-auto mt-3.5 h-1 w-14 bg-primary" aria-hidden="true" />
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Auto socorro, resgate veicular, guincho, reboque e transporte em Blumenau e região, 24
            horas, de segunda a segunda.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          {SPECIALIZED_SERVICES.map((service, index) => {
            const isSecondRow = index >= 3;
            const spanClass = isSecondRow
              ? index === 4
                ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[calc(50%-1rem)] lg:col-span-3 lg:mx-0 lg:max-w-none"
                : "lg:col-span-3"
              : "lg:col-span-2";

            return (
            <Reveal key={service.id} delayMs={index * 80} className={spanClass}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden bg-surface-light">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-extrabold tracking-wide text-foreground uppercase sm:text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-6">
                    <a
                      href={COMPANY.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brand px-5 py-2.5 text-xs uppercase"
                    >
                      <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      SOLICITAR NO WHATSAPP
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}