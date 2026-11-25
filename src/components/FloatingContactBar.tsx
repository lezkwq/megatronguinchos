import { MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "@/data/megatron";

export function FloatingContactBar() {
  return (
    <div
      aria-label="Contato rápido"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/30 bg-surface-black/95 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-sm md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
        <a
          href={COMPANY.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-brand py-3 text-xs uppercase"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
        <a href={COMPANY.phoneHref} className="btn-outline-brand rounded-full py-3 text-xs uppercase">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Ligar Agora
        </a>
      </div>
    </div>
  );
}