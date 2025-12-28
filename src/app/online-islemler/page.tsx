import * as React from "react";
import { Search, FileText, CreditCard, Truck, HeartPulse, HelpCircle, Shield, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function OnlineIslemlerPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 skew-y-3 translate-y-20" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Online İşlemler</h1>
          <p className="text-white/60 text-lg max-w-3xl">
            Bu bölümde, müşterilerin dijital ortamda yapabilecekleri işlemler listelenir. Örneğin online teklif al, poliçe sorgulama, hasar ihbar vb. İleri Grup Sigorta'nın dijital servislerine vurgu yapılır.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="bg-muted/30 p-8 border-l-4 border-gold">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gold flex items-center justify-center text-navy shrink-0">
                  <FileText className="h-8 w-8" />
                </div>
                <div className="space-y-4 flex-1">
                  <h2 className="text-2xl font-bold text-navy">Online Teklif Al</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Web sitemiz üzerinden dilediğiniz sigorta ürünü için birkaç kısa adımda ücretsiz fiyat teklifi alabilirsiniz. Teklif formunu doldurun, uzmanlarımız size en kısa sürede en iyi fiyatları ve teminatları içeren seçenekleri sunsun.
                  </p>
                  <Button asChild className="bg-navy text-white rounded-none">
                    <Link href="/iletisim">Hemen Teklif Al</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 border-l-4 border-gold">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gold flex items-center justify-center text-navy shrink-0">
                  <Search className="h-8 w-8" />
                </div>
                <div className="space-y-4 flex-1">
                  <h2 className="text-2xl font-bold text-navy">Poliçe ve Hasar Sorgulama</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Mevcut poliçelerinizin detaylarını görüntülemek veya bir hasar dosyanızın durumunu öğrenmek ister misiniz? Online sorgulama modülümüz ile poliçe numaranızı veya TC kimlik numaranızı girerek aktif poliçelerinizi ve teminat detaylarını inceleyebilirsiniz. Aynı şekilde, hasar dosya numaranız ile tazminat sürecinizi adım adım takip edebilirsiniz.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 border-l-4 border-gold">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gold flex items-center justify-center text-navy shrink-0">
                  <Truck className="h-8 w-8" />
                </div>
                <div className="space-y-4 flex-1">
                  <h2 className="text-2xl font-bold text-navy">Nakliyat Sigortası Online Giriş</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Yük taşıma işleriniz için nakliyat sigortası poliçelerinizi online düzenleyebileceğiniz Nakliyat Giriş Portalımız hizmetinizde. Size verdiğimiz kullanıcı adı ile giriş yaparak sevkiyat detaylarınızı girin ve anında poliçe oluşturun. Geleneksel süreçleri hızlandıran bu sistemle, taşımacılık operasyonlarınız aksamadan gerekli sigortaları yapabilirsiniz.
                  </p>
                  <Button className="bg-navy text-white rounded-none">
                    Portala Giriş Yap
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 border-l-4 border-gold">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gold flex items-center justify-center text-navy shrink-0">
                  <HeartPulse className="h-8 w-8" />
                </div>
                <div className="space-y-4 flex-1">
                  <h2 className="text-2xl font-bold text-navy">Sağlık Turizmi Poliçe Sistemi</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Sağlık turizmi kapsamında hastalarınız için komplikasyon sigortası poliçelerini online kesmek isterseniz, lütfen Komplikasyon Sigortası mikro sitemizdeki "Online Poliçe Kes" bölümüne geçiniz. Orada size özel tanımlanan kullanıcı hesabıyla giriş yaparak işlemlerinizi 7/24 gerçekleştirebilirsiniz. Bu sistem, hastanelere ve aracı kurumlara büyük kolaylık sağlamaktadır. İlk kullanımda eğitim ve destek için ekibimiz yanınızda olacaktır.
                  </p>
                  <Button asChild className="bg-navy text-white rounded-none">
                    <Link href="/saglik-turizmi">Sağlık Turizmi Platformu</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 border-l-4 border-gold">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gold flex items-center justify-center text-navy shrink-0">
                  <CreditCard className="h-8 w-8" />
                </div>
                <div className="space-y-4 flex-1">
                  <h2 className="text-2xl font-bold text-navy">Ödeme Kolaylıkları</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Online işlemlerinizde kredi kartı ile güvenli ödeme yapabilirsiniz. SSL güvenlik sertifikalı ödeme altyapımız sayesinde içiniz rahat olsun. Dilerseniz anlaşmalı bankaların 9 taksite varan taksit imkanlarından faydalanabilirsiniz.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-navy/60">
                    <Shield className="h-4 w-4" />
                    <span>256-bit SSL Güvenlik Sertifikası ile korunmaktadır</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-white p-8 shadow-lg border-t-4 border-gold">
            <h3 className="text-2xl font-bold text-navy mb-6 flex items-center">
              <HelpCircle className="mr-2 h-6 w-6 text-gold" />
              Hızlı Poliçe Sorgulama
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">T.C. Kimlik / Vergi No</label>
                <Input placeholder="Giriş yapın..." className="rounded-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Plaka veya Poliçe No</label>
                <Input placeholder="Örn: 34ABC123" className="rounded-none" />
              </div>
              <Button className="w-full bg-gold text-navy font-bold py-6 h-auto text-lg rounded-none mt-4">Sorgula</Button>
              <p className="text-center text-xs text-muted-foreground mt-4 italic">
                * Bilgileriniz SSL sertifikası ile korunmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10">
              <BookOpen className="h-6 w-6 text-gold shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="text-white font-bold">Nasıl Kullanılır?</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Online İşlemler sayfasında ayrıca rehber dokümanlar ve videolar bulunabilir. Örneğin, "Online teklif nasıl alınır?" veya "Nakliyat portalı kullanma kılavuzu" gibi detaylı rehberlerimizi inceleyebilirsiniz.
                </p>
                <Button variant="link" className="text-gold p-0 h-auto">
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
