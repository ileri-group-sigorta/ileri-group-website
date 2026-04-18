import * as React from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { ContactMailForm } from "@/components/ContactMailForm";

import { routing } from "@/i18n/routing";

const BASE_URL = "https://ilerigroupsigorta.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  const languages = routing.locales.reduce((acc, loc) => {
    acc[loc === "tr" ? "tr-TR" : "en-US"] = `${BASE_URL}/${loc}/iletisim`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/iletisim`,
      languages,
    },
    openGraph: {
      title: `${t('title')} | İleri Grup Sigorta`,
      description: t('description'),
      url: `/${locale}/iletisim`,
    },
  };
}

export default async function IletisimPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');
  const tNav = await getTranslations('nav');

  return (
    <div className="flex flex-col">
      <BreadcrumbSchema 
        locale={locale}
        items={[
          { name: tNav('home'), item: "/" },
          { name: t('title'), item: "/iletisim" },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white">{t('infoTitle')}</h2>
                <div className="h-1 w-16 sm:w-20 bg-gold" />
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2.5 sm:p-3 bg-navy/5 dark:bg-white/10 text-navy dark:text-gold shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-foreground">{t('phone')}</h4>
                    <a href="tel:+905334046051" className="text-sm text-muted-foreground hover:text-gold transition-colors block py-0.5">+90 (533) 404 60 51</a>
                    <a href="tel:+905336872529" className="text-sm text-muted-foreground hover:text-gold transition-colors block py-0.5">+90 (533) 687 25 29</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2.5 sm:p-3 bg-navy/5 dark:bg-white/10 text-navy dark:text-gold shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-foreground">{t('email')}</h4>
                    <a href="mailto:info@ilerigroupsigorta.com" className="text-sm text-muted-foreground hover:text-gold transition-colors block py-0.5 break-all">info@ilerigroupsigorta.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2.5 sm:p-3 bg-navy/5 dark:bg-white/10 text-navy dark:text-gold shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-foreground">{t('address')}</h4>
                    <p className="text-sm text-muted-foreground">Mahmutbey Mahallesi 2416.Sokak Aktem Plaza No:4 K:4 Ofis No:42 Bağcılar - İstanbul</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2.5 sm:p-3 bg-navy/5 dark:bg-white/10 text-navy dark:text-gold shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-foreground">{t('workingHours')}</h4>
                    <p className="text-sm text-muted-foreground">{t('monFri')}</p>
                    <p className="text-sm text-muted-foreground">{t('sat')}</p>
                    <p className="text-sm text-muted-foreground">{t('sun')}</p>
                    <p className="text-sm text-gold font-medium mt-1">{t('emergency')}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-white">{t('social')}</h3>
                <p className="text-sm text-muted-foreground">{t('socialDesc')}</p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <a href="https://facebook.com/ilerigrupsigorta" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-navy text-white hover:bg-gold hover:text-navy transition-colors">
                    <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="https://twitter.com/ilerigrupsigorta" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-navy text-white hover:bg-gold hover:text-navy transition-colors">
                    <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="https://linkedin.com/company/ilerigrupsigorta" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-navy text-white hover:bg-gold hover:text-navy transition-colors">
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="https://instagram.com/ilerigrupsigorta" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-navy text-white hover:bg-gold hover:text-navy transition-colors">
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">@ilerigrupsigorta</p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-white">{t('map')}</h3>
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.4864866737853!2d28.822551676452424!3d41.06771721576198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5cc42269b9b%3A0x27837a1409723607!2sAktem%20Plaza!5e1!3m2!1sen!2str!4v1776461392353!5m2!1sen!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border border-border"
                  />
                </div>
              </div>
            </div>

            <div className="bg-navy p-6 sm:p-8 md:p-10 text-white relative h-fit order-first lg:order-last overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gold/10 -m-4 sm:-m-6 rounded-full" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t('formTitle')}</h3>
              <p className="text-white/60 text-sm mb-6 sm:mb-8">
                {t('formDesc')}
              </p>
              <ContactMailForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            {t('footerNote')}
          </p>
        </div>
      </section>
    </div>
  );
}
