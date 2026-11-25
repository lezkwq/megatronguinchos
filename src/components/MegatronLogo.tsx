import megatronLogo from "@/assets/megatron-logo.png";
import { cn } from "@/lib/utils";

interface MegatronLogoProps {
  size?: "sm" | "lg";
  className?: string;
}

export function MegatronLogo({ size = "sm", className }: MegatronLogoProps) {
  const isLarge = size === "lg";

  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <img
        src={megatronLogo}
        alt="Logotipo Megatron Guinchos"
        className={cn(
          isLarge ? "h-12 w-12" : "h-9 w-9",
          "shrink-0 rounded-sm object-contain",
        )}
      />

      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-extrabold tracking-tight text-secondary-foreground",
            isLarge ? "text-xl" : "text-base",
          )}
        >
          MEGATRON
        </span>
        <span
          className={cn(
            "font-bold tracking-[0.22em] text-primary",
            isLarge ? "mt-0.5 text-xs" : "mt-0.5 text-[10px]",
          )}
        >
          GUINCHOS
        </span>
      </div>
    </div>
  );
}