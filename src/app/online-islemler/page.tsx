import * as React from "react";
import { Search, FileText, CreditCard, Truck, HeartPulse, HelpCircle, Shield, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function OnlineIslemlerPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 skew-y-3 translate-y-20" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">Online İşlemler</h1>
          <p className="text-white/60 text-base sm:text-lg max-w-3xl">
            Bu bölümde, müşterilerin dijital ortamda yapabilecekleri işlemler listelenir. Örneğin online teklif al, poliçe sorgulama, hasar ihbar vb.
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
                  <h2 className="text-xl sm:text-2xl font-bold text-navy dark:text-white">Online Teklif Al</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Web sitemiz üzerinden dilediğiniz sigorta ürünü için birkaç kısa adımda ücretsiz fiyat teklifi alabilirsiniz.
                  </p>
                  <Button asChild className="bg-navy dark:bg-gold text-white dark:text-navy rounded-none w-full sm:w-auto">
                    <Link href="/iletisim">Hemen Teklif Al</Link>
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
                  <h2 className="text-xl sm:text-2xl font-bold text-navy dark:text-white">Poliçe ve Hasar Sorgulama</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Mevcut poliçelerinizin detaylarını görüntülemek veya bir hasar dosyanızın durumunu öğrenmek ister misiniz?
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
                  <h2 className="text-xl sm:text-2xl font-bold text-navy dark:text-white">Nakliyat Sigortası Online Giriş</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Yük taşıma işleriniz için nakliyat sigortası poliçelerinizi online düzenleyebileceğiniz Nakliyat Giriş Portalımız hizmetinizde.
                  </p>
                  <Button className="bg-navy dark:bg-gold text-white dark:text-navy rounded-none w-full sm:w-auto">
                    Portala Giriş Yap
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
                  <h2 className="text-xl sm:text-2xl font-bold text-navy dark:text-white">Sağlık Turizmi Poliçe Sistemi</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Sağlık turizmi kapsamında hastalarınız için komplikasyon sigortası poliçelerini online kesmek isterseniz, lütfen mikro sitemizdeki &quot;Online Poliçe Kes&quot; bölümüne geçiniz.
                  </p>
                  <Button asChild className="bg-navy dark:bg-gold text-white dark:text-navy rounded-none w-full sm:w-auto">
                    <Link href="/saglik-turizmi">Sağlık Turizmi Platformu</Link>
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
                  <h2 className="text-xl sm:text-2xl font-bold text-navy dark:text-white">Ödeme Kolaylıkları</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Online işlemlerinizde kredi kartı ile güvenli ödeme yapabilirsiniz. SSL güvenlik sertifikalı ödeme altyapımız sayesinde içiniz rahat olsun.
                  </p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>256-bit SSL Güvenlik Sertifikası ile korunmaktadır</span>
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
              Hızlı Poliçe Sorgulama
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">T.C. Kimlik / Vergi No</label>
                <Input placeholder="Giriş yapın..." className="rounded-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Plaka veya Poliçe No</label>
                <Input placeholder="Örn: 34ABC123" className="rounded-none" />
              </div>
              <Button className="w-full bg-gold text-navy font-bold py-5 sm:py-6 h-auto text-base sm:text-lg rounded-none mt-4">Sorgula</Button>
              <p className="text-center text-xs text-muted-foreground mt-4 italic">
                * Bilgileriniz SSL sertifikası ile korunmaktadır.
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
                <h4 className="text-white font-bold">Nasıl Kullanılır?</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Online İşlemler sayfasında ayrıca rehber dokümanlar ve videolar bulunabilir.
                </p>
                <Button variant="link" className="text-gold p-0 h-auto text-sm">
                  Rehberlere Göz At →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
