import { cn } from "@/lib/utils";

interface MegatronLogoProps {
  size?: "sm" | "lg";
  className?: string;
}

export function MegatronLogo({ size = "sm", className }: MegatronLogoProps) {
  const isLarge = size === "lg";

  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <svg
        viewBox="0 0 56 36"
        fill="none"
        aria-hidden="true"
        className={cn(isLarge ? "h-11 w-16" : "h-8 w-12", "shrink-0")}
      >
        <path
          d="M4 25H34V16H45L51 21.5V25H53"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-secondary-foreground"
        />
        <path
          d="M5 20L32 13V16H5V20Z"
          fill="currentColor"
          className="text-primary"
        />
        <path
          d="M35 16L39 10H45.5L49 16"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
          className="text-primary"
        />
        <circle cx="15" cy="26.5" r="4" fill="currentColor" className="text-primary" />
        <circle cx="15" cy="26.5" r="1.6" fill="currentColor" className="text-surface-black" />
        <circle cx="43" cy="26.5" r="4" fill="currentColor" className="text-primary" />
        <circle cx="43" cy="26.5" r="1.6" fill="currentColor" className="text-surface-black" />
      </svg>

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