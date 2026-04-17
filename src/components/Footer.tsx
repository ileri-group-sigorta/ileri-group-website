"use client";

import { Link } from "@/i18n/navigation";
import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer({ version }: { version?: string }) {
  const t = useTranslations();

  return (
    <footer className="bg-navy text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="space-y-4 md:space-y-6 sm:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2">
                <Shield className="h-7 w-7 md:h-8 md:w-8 text-gold" />
                <span className="text-lg md:text-xl font-bold tracking-tight uppercase">
                  {t('common.companyTitle')} <span className="font-light">{t('common.companySubtitle')}</span>
                </span>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed">
                {t('footer.description')}
              </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com/ilerigrupsigorta" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-full hover:bg-gold hover:text-navy transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/ilerigrupsigorta" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-full hover:bg-gold hover:text-navy transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/ilerigrupsigorta" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-full hover:bg-gold hover:text-navy transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/ilerigrupsigorta" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-full hover:bg-gold hover:text-navy transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-base md:text-lg font-bold text-gold">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-white/60">
              <li><Link href="/" className="hover:text-gold transition-colors inline-block py-1">{t('nav.home')}</Link></li>
              <li><Link href="/hakkimizda" className="hover:text-gold transition-colors inline-block py-1">{t('nav.about')}</Link></li>
              <li><Link href="/bireysel" className="hover:text-gold transition-colors inline-block py-1">{t('nav.individual')}</Link></li>
              <li><Link href="/kurumsal" className="hover:text-gold transition-colors inline-block py-1">{t('nav.corporate')}</Link></li>
              <li><Link href="/online-islemler" className="hover:text-gold transition-colors inline-block py-1">{t('nav.online')}</Link></li>
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-base md:text-lg font-bold text-gold">{t('footer.services')}</h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-white/60">
              <li><Link href="/saglik-turizmi" className="hover:text-gold transition-colors inline-block py-1">{t('nav.healthTourism')}</Link></li>
              <li><Link href="/bireysel" className="hover:text-gold transition-colors inline-block py-1">{t('nav.individual')}</Link></li>
              <li><Link href="/kurumsal" className="hover:text-gold transition-colors inline-block py-1">{t('nav.corporate')}</Link></li>
              <li><Link href="/online-islemler" className="hover:text-gold transition-colors inline-block py-1">{t('nav.online')}</Link></li>
            </ul>
          </div>

            <div className="space-y-4 md:space-y-6 sm:col-span-2 lg:col-span-1">
              <h4 className="text-base md:text-lg font-bold text-gold">{t('footer.contact')}</h4>
              <ul className="space-y-3 md:space-y-4 text-sm text-white/60">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span>{t('footer.address')}</span>
                </li>
              <li>
                <a href="tel:+905334046051" className="flex items-center space-x-3 hover:text-gold transition-colors py-1">
                  <Phone className="h-5 w-5 text-gold shrink-0" />
                  <span>+90 (533) 404 60 51</span>
                </a>
              </li>
              <li>
                <a href="tel:+905336872529" className="flex items-center space-x-3 hover:text-gold transition-colors py-1">
                  <Phone className="h-5 w-5 text-gold shrink-0" />
                  <span>+90 (533) 687 25 29</span>
                </a>
              </li>
              <li>
                <a href="mailto:zuleyha@ilerigrupsigorta.com" className="flex items-center space-x-3 hover:text-gold transition-colors py-1">
                  <Mail className="h-5 w-5 text-gold shrink-0" />
                  <span className="break-all">zuleyha@ilerigrupsigorta.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-white/10 text-center text-xs md:text-sm text-white/40">
          <p>
            © 2025 İleri Group Sigorta. {t('footer.allRights')}
            {version && (
              <span className="ml-2 opacity-60">· v{version}</span>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
