import { useEffect, useState } from "react";
import { COMPANY } from "@/data/megatron";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { cn } from "@/lib/utils";

export function FloatingContactBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;

    const updateVisibility = () => {
      const rect = hero.getBoundingClientRect();
      // Show floating CTA only after the user scrolls past the first fold of the hero
      setVisible(rect.bottom <= window.innerHeight * 0.35 || window.scrollY > 520);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <div
      aria-label="Contato rápido"
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-primary/30 bg-surface-black/95 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-sm transition-all duration-300 md:hidden",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <div className="mx-auto max-w-md">
        <a
          href={COMPANY.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="btn-brand w-full py-3.5 text-xs uppercase"
        >
          <WhatsAppIcon className="h-4 w-4" />
          CHAMAR NO WHATSAPP
        </a>
      </div>
    </div>
  );
}