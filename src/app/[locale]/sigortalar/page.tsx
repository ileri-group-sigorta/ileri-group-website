import * as React from "react";
import { 
  Heart, 
  Activity, 
  Globe, 
  Plane, 
  Car, 
  ShieldCheck, 
  Home, 
  AlertTriangle, 
  ShieldAlert, 
  PiggyBank, 
  Users, 
  Briefcase, 
  Building2, 
  Factory, 
  HardHat, 
  Truck, 
  CheckCircle, 
  ArrowRight 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

const BASE_URL = "https://ilerigroupsigorta.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "insurance" });

  const languages = routing.locales.reduce((acc, loc) => {
    acc[loc === "tr" ? "tr-TR" : "en-US"] = `${BASE_URL}/${loc}/sigortalar`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(", "),
    alternates: {
      canonical: `/${locale}/sigortalar`,
      languages,
    },
    openGraph: {
      title: `${t("title")} | İleri Grup Sigorta`,
      description: t("description"),
      url: `/${locale}/sigortalar`,
    },
  };
}

export default async function SigortalarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("insurance");
  const tc = await getTranslations("common");
  const tNav = await getTranslations("nav");

  return (
    <div className="flex flex-col">
      <BreadcrumbSchema 
        locale={locale}
        items={[
          { name: tNav('home'), item: "/" },
          { name: t('title'), item: "/sigortalar" },
        ]}
      />
      <section className="bg-navy py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 skew-y-3 translate-y-20" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">{t("heroTitle")}</h1>
          <nav className="flex text-white/60 text-sm space-x-2">
            <span>{tc("home")}</span>
            <span>/</span>
            <span className="text-gold">{t("title")}</span>
          </nav>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t("heroDesc")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy dark:text-white">{t("individualTitle")}</h2>
            <div className="h-1 w-16 sm:w-20 bg-gold mb-4 sm:mb-6" />
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t("individualDesc")}
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            {[
              { id: "privateHealth", icon: Heart },
              { id: "compHealth", icon: Activity },
              { id: "foreignHealth", icon: Globe },
              { id: "travel", icon: Plane },
              { id: "kasko", icon: Car },
              { id: "traffic", icon: ShieldCheck },
              { id: "home", icon: Home },
              { id: "dask", icon: AlertTriangle },
              { id: "accident", icon: ShieldAlert },
              { id: "bes", icon: PiggyBank },
            ].map((service) => (
              <div key={service.id} className="bg-card p-6 sm:p-8 border-l-4 border-gold">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 bg-navy/5 dark:bg-white/10 flex items-center justify-center text-navy dark:text-gold shrink-0">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-xl font-bold text-navy dark:text-white">{t(`services.${service.id}.title`)}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t(`services.${service.id}.desc`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy dark:text-white">{t("corporateTitle")}</h2>
            <div className="h-1 w-16 sm:w-20 bg-gold mb-4 sm:mb-6" />
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t("corporateDesc")}
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            {[
              { id: "groupHealth", icon: Users },
              { id: "employer", icon: Briefcase },
              { id: "thirdParty", icon: ShieldAlert },
              { id: "professional", icon: Building2 },
              { id: "commercial", icon: Factory },
              { id: "engineering", icon: HardHat },
              { id: "logistics", icon: Truck },
              { id: "cyber", icon: ShieldAlert },
            ].map((service) => (
              <div key={service.id} className="bg-muted/30 p-6 sm:p-8 border-l-4 border-navy">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 bg-navy flex items-center justify-center text-white shrink-0">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-xl font-bold text-navy dark:text-white">{t(`services.${service.id}.title`)}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t(`services.${service.id}.desc`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-gold/20 text-gold text-xs sm:text-sm font-bold mb-4">
              {t("specialEmphasis")}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t("healthTourismTitle")}</h2>
            <div className="h-1 w-16 sm:w-20 bg-gold mb-4 sm:mb-6" />
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              {t("healthTourismDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto mb-10 sm:mb-12">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl font-bold text-gold">{t("whyImportant")}</h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                {t("whyImportantDesc")}
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl font-bold text-gold">{t("whoFor")}</h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                {t("whoForDesc")}
              </p>
            </div>
          </div>

          <div className="bg-white/5 p-6 sm:p-8 max-w-4xl mx-auto mb-10 sm:mb-12">
            <h3 className="text-xl font-bold text-gold mb-4 sm:mb-6">{t("coverageTitle")}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {Object.entries(t.raw("coverages")).map(([key, value]) => (
                <div key={key} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm sm:text-base">{value as string}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <h3 className="text-xl font-bold text-gold">{t("digitalTitle")}</h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              {t("digitalDesc")}
            </p>

            <div className="p-4 sm:p-6 bg-gold/10 border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                <span className="text-white font-medium text-sm sm:text-base">{t("platformInfo")}</span>
              </div>
              <Button asChild className="bg-gold text-navy font-bold px-6 sm:px-8 py-4 sm:py-5 h-auto rounded-none w-full md:w-auto text-sm sm:text-base">
                <Link href="/saglik-turizmi">Detaylı Bilgi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gold">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">{t("ctaTitle")}</h2>
            <p className="text-navy/70 text-base sm:text-lg">
              {t("ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
              <Button asChild className="bg-navy text-white hover:bg-navy/90 px-8 py-5 sm:py-6 h-auto text-base sm:text-lg rounded-none w-full sm:w-auto font-bold">
                <Link href="/online-islemler">{t("ctaButton")}</Link>
              </Button>
              <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-5 sm:py-6 h-auto text-base sm:text-lg rounded-none w-full sm:w-auto font-bold bg-transparent">
                <Link href="/iletisim">{t("ctaCall")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
