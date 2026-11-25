import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { COMPANY } from "@/data/megatron";
import { MegatronLogo } from "@/components/MegatronLogo";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const FOOTER_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Perguntas Frequentes", href: "#perguntas-frequentes" },
  { label: "Contato", href: "#contato" },
] as const;

export function Footer() {
  return (
    <footer id="contato" className="border-t-4 border-primary bg-surface-black pb-20 text-secondary-foreground md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-14">
          {/* Column 1: Visual identity */}
          <div>
            <MegatronLogo size="lg" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary-foreground/75">
              Atendimento 24 horas, de segunda a segunda, em Blumenau e região. Conte com a
              Megatron Guinchos quando precisar.
            </p>
            <p className="mt-3 text-xs font-medium text-secondary-foreground/60">
              CNPJ: {COMPANY.cnpj}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar pelo WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-surface-charcoal text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <a
                href={COMPANY.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver localização no Google Maps"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-surface-charcoal text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase">Navegação</h2>
            <div className="mt-2 h-0.5 w-10 bg-primary/60" aria-hidden="true" />
            <ul className="mt-5 space-y-2.5 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase">Contato</h2>
            <div className="mt-2 h-0.5 w-10 bg-primary/60" aria-hidden="true" />
            <ul className="mt-5 space-y-3.5 text-sm text-secondary-foreground/85">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="font-semibold">{COMPANY.phoneDisplay}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{COMPANY.addressShort}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>Funcionamento: 24 horas, de segunda a segunda</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand px-5 py-2.5 text-xs uppercase"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WHATSAPP
              </a>
              <a
                href={COMPANY.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-brand rounded-full px-5 py-2.5 text-xs uppercase"
              >
                <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                COMO CHEGAR
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-secondary-foreground/60 sm:px-6 lg:px-8">
          © 2026 Megatron Guinchos • CNPJ: {COMPANY.cnpj} • Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}