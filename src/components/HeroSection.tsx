import { Clock, MapPin, MessageCircle, Package, Phone, Truck } from "lucide-react";
import heroTowTruck from "@/assets/hero-tow-truck.jpg";
import { COMPANY, HERO_SERVICES } from "@/data/megatron";

const SERVICE_ICONS = {
  truck: Truck,
  clock: Clock,
  package: Package,
} as const;

export function HeroSection() {
  return (
    <>
      <section id="inicio" className="w-full overflow-hidden bg-surface-black">
        <div className="grid min-h-[540px] grid-cols-1 lg:grid-cols-10">
          {/* Left ~70%: Full-bleed tow truck photography + dark overlay + headline */}
          <div className="relative flex items-center lg:col-span-7">
            <img
              src={heroTowTruck}
              alt="Imagem ilustrativa de caminhão guincho plataforma transportando veículo em avenida"
              className="animate-hero-zoom absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="hero-overlay absolute inset-0" aria-hidden="true" />

            <div className="relative z-10 w-full px-6 py-16 sm:px-10 md:py-24 lg:px-14 xl:px-20">
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-surface-black/65 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase backdrop-blur-xs">
                  <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                  Atendimento 24 horas
                </div>

                <div className="border-l-4 border-primary pl-4 sm:pl-5">
                  <h1 className="text-3xl font-extrabold tracking-tight text-secondary-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                    GUINCHO 24 HORAS EM BLUMENAU
                  </h1>
                </div>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary-foreground/90 sm:text-lg">
                  Precisou de um guincho? Conte com atendimento 24 horas para remoção e transporte
                  do seu veículo.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <a
                    href={COMPANY.phoneHref}
                    className="btn-brand px-7 py-3.5 text-sm uppercase sm:text-base"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    CHAMAR AGORA
                  </a>

                  <a
                    href={COMPANY.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-brand rounded-full px-6 py-3 text-sm uppercase sm:text-base"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WHATSAPP
                  </a>
                </div>

                <p className="mt-6 flex items-center gap-2 text-xs font-medium text-secondary-foreground/80 sm:text-sm">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{COMPANY.addressShort}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right ~30%: Solid yellow services sidebar panel */}
          <aside
            aria-label="Nossos serviços em destaque"
            className="flex flex-col justify-center bg-primary px-7 py-10 text-primary-foreground sm:px-10 lg:col-span-3 lg:px-8 xl:px-10"
          >
            <h2 className="text-xl font-extrabold tracking-wide uppercase sm:text-2xl">
              NOSSOS SERVIÇOS
            </h2>
            <div className="mt-2.5 h-1 w-12 bg-surface-black" aria-hidden="true" />

            <ul className="mt-7 space-y-6">
              {HERO_SERVICES.map((service) => {
                const Icon = SERVICE_ICONS[service.icon];
                return (
                  <li key={service.id} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-surface-black text-primary shadow-sm">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold leading-snug text-primary-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-0.5 text-sm leading-snug text-primary-foreground/85">
                        {service.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </section>

      {/* Section 3: White horizontal presentation & contact strip */}
      <section
        aria-label="Contato rápido"
        className="border-b border-border bg-background shadow-xs"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-base font-bold tracking-tight text-foreground sm:text-left sm:text-lg lg:text-xl">
            MEGATRON GUINCHOS: REBOQUE E ATENDIMENTO 24 HORAS
          </p>
          <a
            href={COMPANY.phoneHref}
            className="btn-brand shrink-0 px-6 py-2.5 text-xs uppercase sm:text-sm"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            CHAMAR GUINCHO
          </a>
        </div>
      </section>
    </>
  );
}