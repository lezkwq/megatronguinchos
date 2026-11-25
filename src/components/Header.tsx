import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { COMPANY, NAV_ITEMS } from "@/data/megatron";
import { MegatronLogo } from "@/components/MegatronLogo";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { cn } from "@/lib/utils";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-surface-black transition-shadow duration-300",
        scrolled
          ? "border-b border-primary/25 shadow-lg shadow-surface-black/30"
          : "border-b border-secondary-foreground/10",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          aria-label="Megatron Guinchos - Ir para o início"
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <MegatronLogo size="sm" />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-1 text-sm font-medium text-secondary-foreground/90 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
          <a
            href={COMPANY.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand px-4 py-2 text-xs uppercase"
            aria-label={`Chamar no WhatsApp ${COMPANY.phoneDisplay}`}
          >
            <WhatsAppIcon className="h-4 w-4" />
            {COMPANY.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-secondary-foreground transition-colors hover:bg-surface-charcoal hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden bg-surface-black transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden",
          menuOpen ? "grid-rows-[1fr] border-t border-primary/20 opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <nav aria-label="Menu móvel" className="min-h-0 overflow-hidden px-4">
          <ul className="flex flex-col gap-1 py-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-surface-charcoal hover:text-primary"
                >
                  <span>{item.label}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <div className="border-t border-secondary-foreground/10 py-3">
            <a
              href={COMPANY.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-brand w-full px-4 py-3 text-sm uppercase"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp {COMPANY.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}