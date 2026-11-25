import { Phone } from "lucide-react";
import ctaTowTruckGarage from "@/assets/cta-tow-truck-garage.jpg";
import { COMPANY } from "@/data/megatron";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function CtaBannerSection() {
  return (
    <section aria-label="Solicitar guincho agora" className="w-full overflow-hidden bg-surface-charcoal">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left dark callout panel */}
        <div className="flex flex-col justify-center bg-surface-charcoal px-6 py-14 text-secondary-foreground sm:px-10 lg:col-span-4 lg:px-12 xl:px-14">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase sm:text-4xl">
              PRECISOU DE GUINCHO?
            </h2>
            <div className="mt-4 h-1 w-14 bg-primary" aria-hidden="true" />
            <p className="mt-5 text-sm leading-relaxed text-secondary-foreground/85 sm:text-base">
              Estamos disponíveis 24 horas, de segunda a segunda, em Blumenau e região. Entre em
              contato pelo WhatsApp!
            </p>
            <div className="mt-8">
              <a
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-brand px-6 py-3 text-xs uppercase sm:text-sm"
              >
                <WhatsAppIcon className="h-4 w-4" />
                SOLICITAR AGORA
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right photo + bottom yellow contact strip */}
        <div className="flex flex-col lg:col-span-8">
          <div className="relative min-h-[260px] flex-1 overflow-hidden bg-surface-black sm:min-h-[340px]">
            <img
              src={ctaTowTruckGarage}
              alt="Imagem ilustrativa de caminhão guincho plataforma pronto para atendimento"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 items-center bg-primary text-primary-foreground sm:grid-cols-12">
            <div className="px-6 py-6 sm:col-span-7 sm:px-8">
              <p className="text-xs font-bold tracking-wider uppercase sm:text-sm">
                FALE COM A MEGATRON GUINCHOS
              </p>
              <p className="mt-1 inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight text-primary-foreground sm:text-3xl">
                <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                {COMPANY.phoneDisplay}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 bg-background px-6 py-5 sm:col-span-5 sm:justify-center sm:py-7">
              <a
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-surface-black bg-surface-black px-6 py-3 text-xs font-bold tracking-wider text-primary uppercase transition-colors hover:bg-surface-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <WhatsAppIcon className="h-4 w-4" />
                CHAMAR NO WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}