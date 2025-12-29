import * as React from "react";
import { Activity, Car, Home, Plane, Heart, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'individual' });
  
  const BASE_URL = "https://www.ilerisigorta.com";
  const languages = {
    "tr-TR": `${BASE_URL}/bireysel`,
    "en-US": `${BASE_URL}/en/bireysel`,
  };

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: locale === "tr" ? "/bireysel" : `/${locale}/bireysel`,
      languages,
    },
  };
}

export default async function BireyselPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('individual');
  const tNav = await getTranslations('nav');

  const services = [
    {
      icon: Heart,
      title: t('services.health.title'),
      desc: t('services.health.desc'),
    },
    {
      icon: Car,
      title: t('services.car.title'),
      desc: t('services.car.desc'),
    },
    {
      icon: Home,
      title: t('services.home.title'),
      desc: t('services.home.desc'),
    },
    {
      icon: Plane,
      title: t('services.travel.title'),
      desc: t('services.travel.desc'),
    },
    {
      icon: Activity,
      title: t('services.complementary.title'),
      desc: t('services.complementary.desc'),
    },
    {
      icon: ShieldCheck,
      title: t('services.dask.title'),
      desc: t('services.dask.desc'),
    },
  ];

  return (
    <div className="flex flex-col">
      <BreadcrumbSchema 
        locale={locale}
        items={[
          { name: tNav('home'), item: "/" },
          { name: t('title'), item: "/bireysel" },
        ]}
      />
      <section className="bg-navy py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">{t('title')}</h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl">
            {t('description')}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, i) => (
              <Card key={i} className="rounded-none border-border hover:border-gold transition-colors group">
                <CardHeader className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-navy/5 dark:bg-white/10 flex items-center justify-center text-navy dark:text-gold mb-3 sm:mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground">{service.desc}</p>
                  <Button asChild variant="link" className="p-0 h-auto text-gold font-bold text-sm sm:text-base">
                    <Link href="/iletisim">{t('ctaButton')} &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white">{t('ctaTitle')}</h2>
            <p className="text-sm sm:text-base text-muted-foreground">{t('ctaDesc')}</p>
            <Button asChild className="bg-navy dark:bg-gold text-white dark:text-navy px-6 sm:px-8 py-5 sm:py-6 h-auto text-base sm:text-lg rounded-none w-full sm:w-auto">
              <Link href="/iletisim">{t('ctaButton')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
