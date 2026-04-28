import * as React from "react";
import { Search, FileText, CreditCard, Truck, HeartPulse, HelpCircle, Shield, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://ilerigrupsigorta.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'online' });

  const languages = routing.locales.reduce((acc, loc) => {
    acc[loc === "tr" ? "tr-TR" : "en-US"] = `${BASE_URL}/${loc}/online-islemler`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/online-islemler`,
      languages,
    },
    openGraph: {
      title: `${t('title')} | İleri Grup Sigorta`,
      description: t('description'),
      url: `/${locale}/online-islemler`,
    },
  };
}

export default async function OnlineIslemlerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('online');
  const tNav = await getTranslations('nav');

  return (
    <div className="flex flex-col">
      <BreadcrumbSchema 
        locale={locale}
        items={[
          { name: tNav('home'), item: "/" },
          { name: t('title'), item: "/online-islemler" },
        ]}
      />
      <section className="bg-navy py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 skew-y-3 translate-y-20" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">{t('title')}</h1>
          <p className="text-white/60 text-base sm:text-lg max-w-3xl">
            {t('description')}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-6 sm:space-y-8 md:space-y-12 max-w-4xl mx-auto">
            <div className="bg-muted/30 p-4 sm:p-6 md:p-8 border-l-4 border-gold">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold flex items-center justify-center text-navy shrink-0">
                  <FileText className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <div className="space-y-3 sm:space-y-4 flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-navy dark:text-white">{t('quote.title')}</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {t('quote.desc')}
                  </p>
                  <Button asChild className="bg-navy dark:bg-gold text-white dark:text-navy rounded-none w-full sm:w-auto">
                    <Link href="/iletisim">{t('quote.button')}</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-4 sm:p-6 md:p-8 border-l-4 border-gold">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold flex items-center justify-center text-navy shrink-0">
                  <Search className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <div className="space-y-3 sm:space-y-4 flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-navy dark:text-white">{t('search.title')}</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {t('search.desc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-4 sm:p-6 md:p-8 border-l-4 border-gold">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold flex items-center justify-center text-navy shrink-0">
                  <Truck className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <div className="space-y-3 sm:space-y-4 flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-navy dark:text-white">{t('logistics.title')}</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {t('logistics.desc')}
                  </p>
                  <Button className="bg-navy dark:bg-gold text-white dark:text-navy rounded-none w-full sm:w-auto">
                    {t('logistics.button')}
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-4 sm:p-6 md:p-8 border-l-4 border-gold">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold flex items-center justify-center text-navy shrink-0">
                  <HeartPulse className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <div className="space-y-3 sm:space-y-4 flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-navy dark:text-white">{t('health.title')}</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {t('health.desc')}
                  </p>
                  <Button asChild className="bg-navy dark:bg-gold text-white dark:text-navy rounded-none w-full sm:w-auto">
                    <Link href="/saglik-turizmi">{t('health.button')}</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-4 sm:p-6 md:p-8 border-l-4 border-gold">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold flex items-center justify-center text-navy shrink-0">
                  <CreditCard className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <div className="space-y-3 sm:space-y-4 flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-navy dark:text-white">{t('payment.title')}</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {t('payment.desc')}
                  </p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>{t('payment.secure')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-card p-4 sm:p-6 md:p-8 shadow-lg border-t-4 border-gold">
            <h3 className="text-xl sm:text-2xl font-bold text-navy dark:text-white mb-4 sm:mb-6 flex items-center">
              <HelpCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-gold" />
              {t('quickSearch.title')}
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t('quickSearch.idLabel')}</label>
                <Input placeholder={t('quickSearch.placeholder')} className="rounded-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t('quickSearch.policyLabel')}</label>
                <Input placeholder={t('quickSearch.placeholder')} className="rounded-none" />
              </div>
              <Button className="w-full bg-gold text-navy font-bold py-5 sm:py-6 h-auto text-base sm:text-lg rounded-none mt-4">{t('quickSearch.button')}</Button>
              <p className="text-center text-xs text-muted-foreground mt-4 italic">
                {t('quickSearch.note')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-6 bg-white/5 border border-white/10">
              <BookOpen className="h-6 w-6 text-gold shrink-0" />
              <div className="space-y-2">
                <h4 className="text-white font-bold">{t('howTo.title')}</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t('howTo.desc')}
                </p>
                <Button asChild variant="link" className="text-gold p-0 h-auto text-sm">
                  <Link href="/online-islemler/rehber">{t('howTo.button')} →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
