"use client";

import * as React from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Shield, ChevronDown, Home, Info, Briefcase, FileText, Phone, Sun, Moon, User, Building, Stethoscope } from "lucide-react";
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
      { name: "nav.individual", href: "/bireysel", icon: User, desc: "nav.individualDesc" },
      { name: "nav.corporate", href: "/kurumsal", icon: Building, desc: "nav.corporateDesc" },
      { name: "nav.healthTourism", href: "/saglik-turizmi", icon: Stethoscope, desc: "nav.healthTourismDesc" },
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
                      <DropdownMenuTrigger className="flex items-center space-x-1.5 text-sm font-semibold transition-all hover:text-gold focus:outline-none group">
                        <span className="relative">
                          {t(item.name)}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
                        </span>
                        <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        align="start" 
                        className="w-[380px] p-2 rounded-2xl shadow-2xl border-border/50 bg-background/95 backdrop-blur-md animate-in fade-in zoom-in duration-200"
                      >
                        <div className="grid gap-1">
                          {item.children.map((child: any) => (
                            <DropdownMenuItem key={child.name} asChild className="p-0 focus:bg-transparent">
                              <Link 
                                href={child.href as any} 
                                className="flex items-start gap-4 p-3 rounded-xl transition-all hover:bg-gold/10 group/item cursor-pointer"
                              >
                                <div className="mt-0.5 w-10 h-10 flex items-center justify-center rounded-lg bg-navy/5 dark:bg-white/5 text-navy dark:text-gold group-hover/item:bg-gold group-hover/item:text-white transition-all duration-300">
                                  {child.icon && <child.icon className="h-5 w-5" />}
                                </div>
                                <div className="flex-1 space-y-1">
                                  <p className="text-sm font-bold leading-none text-navy dark:text-white group-hover/item:text-gold transition-colors">
                                    {t(child.name)}
                                  </p>
                                  <p className="text-[11px] leading-snug text-muted-foreground line-clamp-2 font-medium opacity-80">
                                    {t(child.desc)}
                                  </p>
                                </div>
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </div>
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
                <Button asChild className="rounded-full px-6 bg-navy hover:bg-navy/90 text-white dark:bg-gold dark:text-navy dark:hover:bg-gold/90 shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                  <Link href="/online-islemler">{t('nav.getQuote')}</Link>
                </Button>
              </div>

            <div className="lg:hidden flex items-center space-x-1">
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
            "lg:hidden fixed inset-x-0 bottom-0 z-[70] bg-white dark:bg-slate-900 rounded-t-[2.5rem] shadow-2xl transition-transform duration-300 ease-out",
            showInsuranceMenu ? "translate-y-0" : "translate-y-full"
          )}
        >
          <button 
            className="w-full flex justify-center pt-4 pb-2 group"
            onClick={() => setShowInsuranceMenu(false)}
          >
            <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full group-hover:bg-gray-300 dark:group-hover:bg-gray-600 transition-colors" />
          </button>

          <div className="px-6 pb-2">
            <h3 className="text-xl font-extrabold text-navy dark:text-white">{t('nav.insurance')}</h3>
            <p className="text-xs text-muted-foreground font-medium opacity-70">{t('home.productsDesc')}</p>
          </div>

          <div className="px-4 pb-6 grid grid-cols-3 gap-3">
            <Link
              href="/bireysel"
              className="flex flex-col items-center p-4 bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-white/5 rounded-3xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all active:scale-95"
              onClick={() => setShowInsuranceMenu(false)}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center rounded-2xl mb-2">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-navy dark:text-white text-center leading-tight">{t('nav.individual')}</span>
            </Link>

            <Link
              href="/kurumsal"
              className="flex flex-col items-center p-4 bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-white/5 rounded-3xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all active:scale-95"
              onClick={() => setShowInsuranceMenu(false)}
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center rounded-2xl mb-2">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-navy dark:text-white text-center leading-tight">{t('nav.corporate')}</span>
            </Link>

            <Link
              href="/saglik-turizmi"
              className="flex flex-col items-center p-4 bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-white/5 rounded-3xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all active:scale-95"
              onClick={() => setShowInsuranceMenu(false)}
            >
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center rounded-2xl mb-2">
                <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-navy dark:text-white text-center leading-tight">{t('nav.healthTourism')}</span>
            </Link>
          </div>

          <div className="px-4 pb-8">
            <div className="bg-gray-50 dark:bg-slate-800/50 rounded-[2rem] p-2 flex gap-2 border border-gray-100 dark:border-white/5">
                <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 flex items-center">
                  <LanguageSwitcher variant="minimal" />
                </div>
                
                <button
                  onClick={() => {
                    setTheme(resolvedTheme === "dark" ? "light" : "dark");
                  }}
                  className="flex-1 py-3 bg-white dark:bg-slate-800 text-navy dark:text-white font-bold rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  {mounted && resolvedTheme === "dark" ? (
                    <>
                      <Sun className="h-4 w-4 text-amber-500" />
                      <span className="text-xs uppercase tracking-wider">{t('common.themeLight')}</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4 text-blue-500" />
                      <span className="text-xs uppercase tracking-wider">{t('common.themeDark')}</span>
                    </>
                  )}
                </button>
            </div>
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
