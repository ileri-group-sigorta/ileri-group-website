import * as React from "react";
import { Globe2, Laptop, ShieldPlus, UserCheck, Zap, Files } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'healthTourism' });
  
  const BASE_URL = "https://www.ilerisigorta.com";
  const languages = {
    "tr-TR": `${BASE_URL}/saglik-turizmi`,
    "en-US": `${BASE_URL}/en/saglik-turizmi`,
  };

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: locale === "tr" ? "/saglik-turizmi" : `/${locale}/saglik-turizmi`,
      languages,
    },
  };
}

export default async function SaglikTurizmiPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('healthTourism');
  const tNav = await getTranslations('nav');

  return (
    <div className="flex flex-col">
      <BreadcrumbSchema 
        locale={locale}
        items={[
          { name: tNav('home'), item: "/" },
          { name: t('title'), item: "/saglik-turizmi" },
        ]}
      />
      <section className="bg-navy py-12 sm:py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/10 -skew-x-12 translate-x-1/2 hidden sm:block" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center space-x-2 text-gold font-bold uppercase tracking-widest text-xs sm:text-sm">
              <Globe2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>{t('badge')}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">{t('title')}</h1>
            <p className="text-white/60 text-base sm:text-lg">
              {t('heroDesc')}
            </p>
            <Button asChild size="lg" className="bg-gold text-navy font-bold rounded-none px-6 sm:px-8 py-5 sm:py-6 h-auto text-base sm:text-lg w-full sm:w-auto">
              <Link href="/iletisim">{t('heroButton')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy dark:text-white">{t('platformTitle')}</h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                {t('platformDesc')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-navy dark:text-white">{t('features.approval.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('features.approval.desc')}</p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Laptop className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-navy dark:text-white">{t('features.automation.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('features.automation.desc')}</p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <ShieldPlus className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-navy dark:text-white">{t('features.coverage.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('features.coverage.desc')}</p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-navy dark:text-white">{t('features.support.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('features.support.desc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-navy p-6 sm:p-8 md:p-12 text-white relative">
              <div className="absolute top-0 left-0 w-1 sm:w-2 h-full bg-gold" />
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">{t('whoTitle')}</h3>
              <ul className="space-y-4 sm:space-y-6">
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="mt-1 p-1 bg-white/10 rounded shrink-0">
                    <Files className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-base sm:text-lg">{t('who.clinics.title')}</p>
                    <p className="text-white/50 text-sm">{t('who.clinics.desc')}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="mt-1 p-1 bg-white/10 rounded shrink-0">
                    <Files className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-base sm:text-lg">{t('who.agencies.title')}</p>
                    <p className="text-white/50 text-sm">{t('who.agencies.desc')}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3 sm:space-x-4">
                  <div className="mt-1 p-1 bg-white/10 rounded shrink-0">
                    <Files className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-base sm:text-lg">{t('who.individuals.title')}</p>
                    <p className="text-white/50 text-sm">{t('who.individuals.desc')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
