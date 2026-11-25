import { Star } from "lucide-react";
import aboutFlatbedTruck from "@/assets/about-flatbed-truck.jpg";
import { COMPANY } from "@/data/megatron";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section id="sobre" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground uppercase sm:text-3xl lg:text-4xl">
            SOBRE A MEGATRON GUINCHOS
          </h2>
          <div className="mx-auto mt-3.5 h-1 w-14 bg-primary" aria-hidden="true" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p className="font-medium text-foreground">
              Precisando de guincho em Blumenau e região? A Megatron Guinchos trabalha com auto
              socorro, resgate veicular, guinchos, reboques, transporte de veículos e transporte
              local de cargas.
            </p>
            <p>
              Com atendimento 24 horas, de segunda a segunda, estamos disponíveis para atender sua
              solicitação nos momentos mais inesperados, buscando oferecer um atendimento atencioso,
              ágil e cuidadoso.
            </p>
            <p>
              Nosso compromisso é atender cada solicitação com responsabilidade, cuidado no
              transporte e respeito ao cliente em Blumenau e região.
            </p>
          </Reveal>

          <Reveal delayMs={100}>
            <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-md">
              <div className="aspect-video w-full overflow-hidden bg-surface-light">
                <img
                  src={aboutFlatbedTruck}
                  alt="Imagem ilustrativa de caminhão guincho plataforma"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
              <figcaption className="border-t border-border bg-card px-5 py-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Atendimento focado em cuidado durante o embarque, transporte seguro do veículo e
                clareza em cada etapa do serviço. <span className="italic">(Imagem ilustrativa.)</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Section 5: Trust Indicators (split yellow / dark charcoal block matching reference) */}
        <Reveal delayMs={150} className="mt-14">
          <div className="grid grid-cols-1 overflow-hidden rounded-lg shadow-md sm:grid-cols-2">
            <div className="flex flex-col items-center justify-center bg-primary px-6 py-9 text-center text-primary-foreground sm:py-10">
              <span className="text-4xl font-extrabold tracking-tight sm:text-5xl">24 HORAS</span>
              <span className="mt-2 text-xs font-semibold tracking-wider uppercase sm:text-sm">
                Atendimento 24 horas • De segunda a segunda
              </span>
            </div>

            <div className="flex flex-col items-center justify-center bg-surface-charcoal px-6 py-9 text-center text-secondary-foreground sm:py-10">
              <div className="mb-2 flex items-center gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                {COMPANY.rating} ESTRELAS
              </span>
              <span className="mt-2 text-xs font-medium text-secondary-foreground/85 sm:text-sm">
                Avaliação no Google • {COMPANY.reviewCount} avaliações de clientes
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}