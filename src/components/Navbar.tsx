"use client";

import * as React from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Shield, ChevronDown, Home, Info, Briefcase, FileText, Phone, Sun, Moon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggleMinimal } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

const navItems = [
  { name: "nav.home", href: "/", icon: Home },
  { name: "nav.about", href: "/hakkimizda", icon: Info },
  {
    name: "nav.insurance",
    href: "#",
    icon: Briefcase,
    children: [
      { name: "nav.individual", href: "/bireysel" },
      { name: "nav.corporate", href: "/kurumsal" },
      { name: "nav.healthTourism", href: "/saglik-turizmi" },
    ],
  },
  { name: "nav.online", href: "/online-islemler", icon: FileText },
  { name: "nav.contact", href: "/iletisim", icon: Phone },
];

export function Navbar() {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <>
      <nav className="sticky top-0 z-50 w-full glass border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 md:h-20 items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <Shield className="h-7 w-7 md:h-8 md:w-8 text-gold" />
                <span className="text-lg md:text-xl font-bold tracking-tight text-navy dark:text-gold uppercase">
                  {t('common.companyTitle')} <span className="font-light hidden sm:inline">{t('common.companySubtitle')}</span>
                </span>
              </Link>

            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                item.children ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-gold focus:outline-none">
                      <span>{t(item.name)}</span>
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link href={child.href as any} className="w-full cursor-pointer">
                            {t(child.name)}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href as any}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-gold",
                      pathname === item.href ? "text-gold" : "text-navy/80 dark:text-white/80"
                    )}
                  >
                    {t(item.name)}
                  </Link>
                )
              ))}
              <ThemeToggleMinimal />
              <LanguageSwitcher />
              <Button asChild className="bg-navy hover:bg-navy-light text-white dark:bg-gold dark:text-navy dark:hover:bg-gold/90">
                <Link href="/online-islemler">{t('nav.getQuote')}</Link>
              </Button>
            </div>

            <div className="lg:hidden flex items-center space-x-1">
              <LanguageSwitcher />
              <a 
                href="tel:+905334046051" 
                className="flex items-center gap-2 px-3 py-2 bg-gold text-navy font-bold text-sm rounded-none"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">{t('nav.contact')}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <MobileBottomNav pathname={pathname} />
    </>
  );
}

function MobileBottomNav({ pathname }: { pathname: string }) {
  const [showInsuranceMenu, setShowInsuranceMenu] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const t = useTranslations();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isInsurancePath = pathname === "/bireysel" || pathname === "/kurumsal" || pathname === "/saglik-turizmi";

  React.useEffect(() => {
    if (showInsuranceMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showInsuranceMenu]);

  return (
    <>
      <div 
        className={cn(
          "lg:hidden fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          showInsuranceMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setShowInsuranceMenu(false)}
      />

      <div 
        className={cn(
          "lg:hidden fixed inset-x-0 bottom-0 z-[70] bg-white dark:bg-slate-900 rounded-t-3xl shadow-2xl transition-transform duration-300 ease-out",
          showInsuranceMenu ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full" />
        </div>

        <div className="px-6 pb-2">
          <h3 className="text-lg font-bold text-navy dark:text-white">{t('nav.insurance')}</h3>
          <p className="text-sm text-muted-foreground">{t('home.productsDesc')}</p>
        </div>

        <div className="px-4 pb-8 grid grid-cols-3 gap-3">
          <Link
            href="/bireysel"
            className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl hover:scale-105 active:scale-95 transition-transform"
            onClick={() => setShowInsuranceMenu(false)}
          >
            <div className="w-14 h-14 bg-blue-500 flex items-center justify-center rounded-2xl mb-3 shadow-lg shadow-blue-500/30">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-navy dark:text-white text-center">{t('nav.individual')}</span>
            <span className="text-[10px] text-muted-foreground text-center mt-1">{t('individual.services.health.title')}, {t('individual.services.car.title')}</span>
          </Link>

          <Link
            href="/kurumsal"
            className="flex flex-col items-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl hover:scale-105 active:scale-95 transition-transform"
            onClick={() => setShowInsuranceMenu(false)}
          >
            <div className="w-14 h-14 bg-purple-500 flex items-center justify-center rounded-2xl mb-3 shadow-lg shadow-purple-500/30">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-sm font-bold text-navy dark:text-white text-center">{t('nav.corporate')}</span>
            <span className="text-[10px] text-muted-foreground text-center mt-1">{t('corporate.services.workplace.title')}, {t('corporate.services.transport.title')}</span>
          </Link>

          <Link
            href="/saglik-turizmi"
            className="flex flex-col items-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-2xl hover:scale-105 active:scale-95 transition-transform"
            onClick={() => setShowInsuranceMenu(false)}
          >
            <div className="w-14 h-14 bg-emerald-500 flex items-center justify-center rounded-2xl mb-3 shadow-lg shadow-emerald-500/30">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-navy dark:text-white text-center">{t('nav.healthTourism')}</span>
            <span className="text-[10px] text-muted-foreground text-center mt-1">{t('healthTourism.title')}</span>
          </Link>
        </div>

          <div className="px-4 pb-6 flex gap-3 items-center">
              <div className="flex-1">
                <LanguageSwitcher />
              </div>
              <button
                onClick={() => {
                  setTheme(resolvedTheme === "dark" ? "light" : "dark");
                }}
                className="flex-[2] py-3 bg-gray-100 dark:bg-slate-800 text-navy dark:text-white font-medium rounded-xl flex items-center justify-center gap-2"
              >
              {mounted && resolvedTheme === "dark" ? (
                <>
                  <Sun className="h-4 w-4 text-amber-400" />
                  {t('common.themeLight')}
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" />
                  {t('common.themeDark')}
                </>
              )}
            </button>
            <button
              onClick={() => setShowInsuranceMenu(false)}
              className="flex-1 py-3 bg-navy dark:bg-gold text-white dark:text-navy font-medium rounded-xl"
            >
              {t('common.close')}
            </button>
          </div>
      </div>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-navy border-t border-gray-200 dark:border-white/10 safe-area-inset-bottom">
        <div className="grid grid-cols-5 h-16">
          <Link
            href="/"
            className={cn(
              "flex flex-col items-center justify-center gap-1 transition-colors",
              pathname === "/" ? "text-gold" : "text-navy/60 dark:text-white/60"
            )}
          >
            <Home className="h-5 w-5" />
            <span className="text-[10px] font-medium">{t('nav.home')}</span>
          </Link>

          <Link
            href="/hakkimizda"
            className={cn(
              "flex flex-col items-center justify-center gap-1 transition-colors",
              pathname === "/hakkimizda" ? "text-gold" : "text-navy/60 dark:text-white/60"
            )}
          >
            <Info className="h-5 w-5" />
            <span className="text-[10px] font-medium">{t('nav.about')}</span>
          </Link>

          <button
            onClick={() => setShowInsuranceMenu(!showInsuranceMenu)}
            className={cn(
              "flex flex-col items-center justify-center gap-1 transition-colors relative",
              isInsurancePath || showInsuranceMenu ? "text-gold" : "text-navy/60 dark:text-white/60"
            )}
          >
            <div className={cn(
              "absolute -top-5 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors",
              isInsurancePath || showInsuranceMenu ? "bg-gold" : "bg-navy"
            )}>
              <Briefcase className={cn(
                "h-6 w-6",
                isInsurancePath || showInsuranceMenu ? "text-navy" : "text-white"
              )} />
            </div>
            <span className="text-[10px] font-medium mt-6">{t('nav.insurance')}</span>
          </button>

          <Link
            href="/online-islemler"
            className={cn(
              "flex flex-col items-center justify-center gap-1 transition-colors",
              pathname === "/online-islemler" ? "text-gold" : "text-navy/60 dark:text-white/60"
            )}
          >
            <FileText className="h-5 w-5" />
            <span className="text-[10px] font-medium">{t('nav.online')}</span>
          </Link>

          <Link
            href="/iletisim"
            className={cn(
              "flex flex-col items-center justify-center gap-1 transition-colors",
              pathname === "/iletisim" ? "text-gold" : "text-navy/60 dark:text-white/60"
            )}
          >
            <Phone className="h-5 w-5" />
            <span className="text-[10px] font-medium">{t('nav.contact')}</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
