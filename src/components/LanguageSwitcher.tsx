"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Locale = "tr" | "en";

const locales: Locale[] = ["tr", "en"];

const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
};

const localeFlags: Record<Locale, string> = {
  tr: "🇹🇷",
  en: "🇬🇧",
};

export function LanguageSwitcher({ variant = "default" }: { variant?: "default" | "minimal" }) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  if (variant === "minimal") {
    return (
      <div className="flex w-full items-center justify-around p-1">
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => switchLocale(loc)}
            className={cn(
              "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl transition-all active:scale-95",
              locale === loc 
                ? "bg-navy text-white dark:bg-gold dark:text-navy font-bold shadow-sm" 
                : "text-muted-foreground hover:bg-gray-100 dark:hover:bg-white/5"
            )}
          >
            <span className="text-sm">{localeFlags[loc]}</span>
            <span className="text-xs uppercase font-bold tracking-wider">{loc}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Dil değiştir</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => switchLocale(loc)}
            className={locale === loc ? "bg-accent" : ""}
          >
            <span className="mr-2">{localeFlags[loc]}</span>
            {localeNames[loc]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
