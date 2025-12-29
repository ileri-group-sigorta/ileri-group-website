"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const locales = routing.locales;

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
  const t = useTranslations('common');

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
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-10 px-3 flex items-center gap-2 rounded-full hover:bg-gold/10 transition-all group"
        >
          <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-navy/5 dark:bg-white/10 text-navy dark:text-gold group-hover:bg-gold group-hover:text-white transition-colors">
            <Globe className="h-3.5 w-3.5" />
          </div>
          <span className="text-sm font-semibold text-navy/80 dark:text-white/80 uppercase tracking-wide">
            {locale}
          </span>
          <div className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-[280px] p-2 rounded-2xl shadow-2xl border-border/50 bg-background/95 backdrop-blur-md animate-in fade-in zoom-in duration-200"
      >
        <div className="px-3 py-2 mb-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-60">
            {t('language')}
          </p>
        </div>
        <div className="grid gap-1">
          {locales.map((loc) => (
            <DropdownMenuItem
              key={loc}
              onClick={() => switchLocale(loc)}
              className={cn(
                "flex items-start gap-3 p-3 rounded-xl transition-all cursor-pointer focus:bg-gold/10",
                locale === loc ? "bg-gold/5" : ""
              )}
            >
              <div className={cn(
                "mt-0.5 w-10 h-10 flex items-center justify-center rounded-lg text-xl transition-all duration-300",
                locale === loc ? "bg-gold text-white" : "bg-navy/5 dark:bg-white/5"
              )}>
                {localeFlags[loc]}
              </div>
              <div className="flex-1 space-y-0.5">
                <div className="flex items-center justify-between">
                    <p className={cn(
                      "text-sm font-bold leading-none transition-colors",
                      locale === loc ? "text-gold" : "text-navy dark:text-white"
                    )}>
                      {localeNames[loc]}
                    </p>
                  {locale === loc && <Check className="h-3.5 w-3.5 text-gold" />}
                </div>
                <p className="text-[11px] leading-snug text-muted-foreground font-medium opacity-80">
                  {t(`${loc}Desc`)}
                </p>
              </div>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
