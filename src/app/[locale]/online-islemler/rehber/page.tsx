import * as React from "react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { RehberClient } from "@/components/RehberClient";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://ilerigrupsigorta.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guide' });

  const languages = routing.locales.reduce((acc, loc) => {
    acc[loc === "tr" ? "tr-TR" : "en-US"] = `${BASE_URL}/${loc}/online-islemler/rehber`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/online-islemler/rehber`,
      languages,
    },
    openGraph: {
      title: `${t('title')} | İleri Grup Sigorta`,
      description: t('description'),
      url: `/${locale}/online-islemler/rehber`,
    },
  };
}

export default async function RehberPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('guide');
  const tNav = await getTranslations('nav');
  const tOnline = await getTranslations('online');

  return (
    <>
      <BreadcrumbSchema 
        locale={locale}
        items={[
          { name: tNav('home'), item: "/" },
          { name: tOnline('title'), item: "/online-islemler" },
          { name: t('title'), item: "/online-islemler/rehber" },
        ]}
      />
      <RehberClient />
    </>
  );
}
