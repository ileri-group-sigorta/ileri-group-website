import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Clock, Users, Briefcase, Monitor, HeadphonesIcon, Heart } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";

const BASE_URL = "https://www.ilerisigorta.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  
  const languages = routing.locales.reduce((acc, loc) => {
    acc[loc === "tr" ? "tr-TR" : "en-US"] = loc === "tr" ? BASE_URL : `${BASE_URL}/${loc}`;
    return acc;
  }, {} as Record<string, string>);

  const description = isEn 
    ? "İleri Group Insurance - Individual and corporate insurance solutions with over 30 years of experience. Health, motor, home, cargo and health tourism insurance services."
    : "İleri Grup Sigorta - 30 yılı aşkın tecrübeyle bireysel ve kurumsal sigorta çözümleri. Sağlık, kasko, konut, nakliyat ve sağlık turizmi sigortası hizmetleri.";

  return {
    title: isEn ? "Home" : "Ana Sayfa",
    description,
    alternates: {
      canonical: locale === "tr" ? "/" : `/${locale}`,
      languages,
    },
    openGraph: {
      title: isEn ? "Home | İleri Group Insurance" : "Ana Sayfa | İleri Grup Sigorta",
      description,
      url: locale === "tr" ? "/" : `/${locale}`,
    },
  };
}

export default async function HomePage() {
  const t = await getTranslations("home");
  const tNav = await getTranslations("nav");

  return (
    <div className="flex flex-col">
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/10 skew-x-[-20deg] translate-x-1/4 hidden sm:block" />
        <div className="absolute -bottom-24 -left-24 w-64 sm:w-96 h-64 sm:h-96 bg-gold/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
          <div className="max-w-4xl space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs sm:text-sm font-medium">
              <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>{t("badge")}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t("title")} <span className="text-gold">{t("titleHighlight")}</span>
            </h1>
            
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
              {t("description")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button size="lg" asChild className="bg-gold hover:bg-gold/90 text-navy font-bold px-6 sm:px-8 py-5 sm:py-6 h-auto text-base sm:text-lg rounded-none w-full sm:w-auto">
                <Link href="/online-islemler">
                  {t("getQuote")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild className="border border-white/30 text-white hover:bg-white/10 hover:text-white px-6 sm:px-8 py-5 sm:py-6 h-auto text-base sm:text-lg rounded-none bg-transparent w-full sm:w-auto">
                <Link href="/iletisim">{t("contactUs")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t("intro")}
            </p>
            
            <div className="p-6 sm:p-8 bg-navy/5 dark:bg-gold/10 border-l-4 border-gold">
              <p className="text-base sm:text-lg font-medium text-navy dark:text-white italic leading-relaxed">
                {t("quote")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy dark:text-white">{t("whyUs")}</h2>
            <div className="h-1 w-16 sm:w-20 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-card p-6 sm:p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy/5 dark:bg-white/10 flex items-center justify-center text-navy dark:text-gold mb-4 sm:mb-6">
                <Clock className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-white mb-3 sm:mb-4">{t("experience")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("experienceDesc")}
              </p>
            </div>

            <div className="bg-card p-6 sm:p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy/5 dark:bg-white/10 flex items-center justify-center text-navy dark:text-gold mb-4 sm:mb-6">
                <Users className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-white mb-3 sm:mb-4">{t("experts")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("expertsDesc")}
              </p>
            </div>

            <div className="bg-card p-6 sm:p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy/5 dark:bg-white/10 flex items-center justify-center text-navy dark:text-gold mb-4 sm:mb-6">
                <Briefcase className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-white mb-3 sm:mb-4">{t("products")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("productsDesc")}
              </p>
            </div>

            <div className="bg-card p-6 sm:p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy/5 dark:bg-white/10 flex items-center justify-center text-navy dark:text-gold mb-4 sm:mb-6">
                <Monitor className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-white mb-3 sm:mb-4">{t("digital")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("digitalDesc")}
              </p>
            </div>

            <div className="bg-card p-6 sm:p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy/5 dark:bg-white/10 flex items-center justify-center text-navy dark:text-gold mb-4 sm:mb-6">
                <HeadphonesIcon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-white mb-3 sm:mb-4">{t("support")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("supportDesc")}
              </p>
            </div>

            <div className="bg-card p-6 sm:p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy/5 dark:bg-white/10 flex items-center justify-center text-navy dark:text-gold mb-4 sm:mb-6">
                <Heart className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-white mb-3 sm:mb-4">{t("customerFocus")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("customerFocusDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              {t("ctaIntro")}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
              {t("cta")} <span className="text-gold">{t("ctaHighlight")}</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button size="lg" asChild className="bg-gold hover:bg-gold/90 text-navy font-bold px-8 sm:px-12 py-5 sm:py-6 h-auto text-base sm:text-lg rounded-none w-full sm:w-auto">
                <Link href="/online-islemler">{t("getQuote")}</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild className="border border-white/30 text-white hover:bg-white/10 hover:text-white px-8 sm:px-12 py-5 sm:py-6 h-auto text-base sm:text-lg rounded-none bg-transparent w-full sm:w-auto">
                <Link href="/iletisim">{t("contactUs")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
