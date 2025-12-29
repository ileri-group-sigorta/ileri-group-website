import * as React from "react";
import { Building2, HardHat, ShieldAlert, Truck, Users, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://www.ilerisigorta.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'corporate' });
  
  const languages = routing.locales.reduce((acc, loc) => {
    acc[loc === "tr" ? "tr-TR" : "en-US"] = loc === "tr" ? `${BASE_URL}/kurumsal` : `${BASE_URL}/${loc}/kurumsal`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: locale === "tr" ? "/kurumsal" : `/${locale}/kurumsal`,
      languages,
    },
    openGraph: {
      title: `${t('title')} | İleri Grup Sigorta`,
      description: t('description'),
      url: locale === "tr" ? "/kurumsal" : `/${locale}/kurumsal`,
    },
  };
}

export default async function KurumsalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('corporate');
  const tNav = await getTranslations('nav');

  const corporateServices = [
    {
      icon: Users,
      title: t('services.groupHealth.title'),
      desc: t('services.groupHealth.desc'),
    },
    {
      icon: HardHat,
      title: t('services.engineering.title'),
      desc: t('services.engineering.desc'),
    },
    {
      icon: ShieldAlert,
      title: t('services.cyber.title'),
      desc: t('services.cyber.desc'),
    },
    {
      icon: Truck,
      title: t('services.transport.title'),
      desc: t('services.transport.desc'),
    },
    {
      icon: Briefcase,
      title: t('services.workplace.title'),
      desc: t('services.workplace.desc'),
    },
    {
      icon: Building2,
      title: t('services.liability.title'),
      desc: t('services.liability.desc'),
    },
  ];

  return (
    <div className="flex flex-col">
      <BreadcrumbSchema 
        locale={locale}
        items={[
          { name: tNav('home'), item: "/" },
          { name: t('title'), item: "/kurumsal" },
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
            {corporateServices.map((service, i) => (
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
                    <Link href="/iletisim">{t('riskButton')} &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold">{t('riskTitle')}</h2>
              <p className="text-white/60 text-sm sm:text-base">{t('riskDesc')}</p>
            </div>
            <Button asChild className="bg-gold text-navy font-bold px-6 sm:px-8 py-5 sm:py-6 h-auto text-base sm:text-lg rounded-none w-full md:w-auto whitespace-nowrap">
              <Link href="/iletisim">{t('riskButton')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
