import { COMPANY } from "@/data/megatron";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function FloatingContactBar() {
  return (
    <div
      aria-label="Contato rápido"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/30 bg-surface-black/95 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-sm md:hidden"
    >
      <div className="mx-auto max-w-md">
        <a
          href={COMPANY.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-brand w-full py-3.5 text-xs uppercase"
        >
          <WhatsAppIcon className="h-4 w-4" />
          CHAMAR NO WHATSAPP
        </a>
      </div>
    </div>
  );
}