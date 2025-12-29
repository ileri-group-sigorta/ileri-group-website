import * as React from "react";
import { BookOpen, Play, FileText, CheckCircle, ArrowLeft, Monitor, Smartphone, CreditCard, Search, Truck, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RehberPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 skew-y-3 translate-y-20" />
        <div className="container mx-auto px-4 relative z-10">
          <Button asChild variant="ghost" className="text-white/60 hover:text-white mb-4 -ml-2 p-2">
            <Link href="/online-islemler">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Online İşlemler'e Dön
            </Link>
          </Button>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">Nasıl Kullanılır?</h1>
          <p className="text-white/60 text-base sm:text-lg max-w-3xl">
            Online işlemlerimizi kolayca kullanabilmeniz için hazırladığımız rehber ve video içerikler.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="h-6 w-6 text-gold" />
              <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white">Adım Adım Rehberler</h2>
            </div>

            <div className="grid gap-6">
              <div className="bg-muted/30 p-6 border-l-4 border-gold">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                    <FileText className="h-6 w-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy dark:text-white mb-2">Online Teklif Alma</h3>
                    <ol className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                        <span>"Hemen Teklif Al" butonuna tıklayın</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                        <span>İletişim formunu doldurun ve sigorta türünü seçin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                        <span>Uzmanlarımız en kısa sürede size en uygun teklifi iletecektir</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 border-l-4 border-gold">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                    <Search className="h-6 w-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy dark:text-white mb-2">Poliçe Sorgulama</h3>
                    <ol className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                        <span>Hızlı Poliçe Sorgulama bölümüne gidin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                        <span>T.C. Kimlik veya Vergi Numaranızı girin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                        <span>Plaka veya Poliçe numaranızı girin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">4</span>
                        <span>"Sorgula" butonuna tıklayarak poliçe bilgilerinize ulaşın</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 border-l-4 border-gold">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                    <Truck className="h-6 w-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy dark:text-white mb-2">Nakliyat Portalı Kullanımı</h3>
                    <ol className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                        <span>"Portala Giriş Yap" butonuna tıklayın</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                        <span>Kurumsal kullanıcı bilgilerinizle giriş yapın</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                        <span>Yük bilgilerini ve güzergahı girin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">4</span>
                        <span>Poliçenizi anında oluşturun ve indirin</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 border-l-4 border-gold">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                    <HeartPulse className="h-6 w-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy dark:text-white mb-2">Sağlık Turizmi Poliçesi</h3>
                    <ol className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                        <span>Sağlık Turizmi Platformu'na gidin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                        <span>Hasta ve tedavi bilgilerini girin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                        <span>Komplikasyon sigortası poliçenizi online olarak kesin</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Play className="h-6 w-6 text-gold" />
              <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white">Video Rehberler</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card border shadow-sm overflow-hidden">
                <div className="aspect-video bg-navy/10 dark:bg-white/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Play className="h-8 w-8 text-gold" />
                    </div>
                    <p className="text-sm text-muted-foreground">Video yakında eklenecek</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-navy dark:text-white">Online Teklif Alma</h4>
                  <p className="text-sm text-muted-foreground mt-1">2 dakika</p>
                </div>
              </div>

              <div className="bg-card border shadow-sm overflow-hidden">
                <div className="aspect-video bg-navy/10 dark:bg-white/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Play className="h-8 w-8 text-gold" />
                    </div>
                    <p className="text-sm text-muted-foreground">Video yakında eklenecek</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-navy dark:text-white">Poliçe Sorgulama</h4>
                  <p className="text-sm text-muted-foreground mt-1">1 dakika</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="h-6 w-6 text-gold" />
              <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white">Sık Sorulan Sorular</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-muted/30 p-6">
                <h4 className="font-bold text-navy dark:text-white mb-2">Online işlemler güvenli mi?</h4>
                <p className="text-sm text-muted-foreground">
                  Evet, tüm online işlemlerimiz 256-bit SSL sertifikası ile korunmaktadır. Kişisel bilgileriniz şifrelenerek iletilir.
                </p>
              </div>

              <div className="bg-muted/30 p-6">
                <h4 className="font-bold text-navy dark:text-white mb-2">Hangi ödeme yöntemlerini kullanabilirim?</h4>
                <p className="text-sm text-muted-foreground">
                  Kredi kartı ve banka kartı ile güvenli ödeme yapabilirsiniz. Taksit seçenekleri için lütfen bizimle iletişime geçin.
                </p>
              </div>

              <div className="bg-muted/30 p-6">
                <h4 className="font-bold text-navy dark:text-white mb-2">Poliçemi nasıl indirebilirim?</h4>
                <p className="text-sm text-muted-foreground">
                  Poliçe sorgulaması yaptıktan sonra poliçenizin PDF versiyonunu indirebilir veya e-posta adresinize gönderilmesini talep edebilirsiniz.
                </p>
              </div>

              <div className="bg-muted/30 p-6">
                <h4 className="font-bold text-navy dark:text-white mb-2">Mobil cihazlardan işlem yapabilir miyim?</h4>
                <p className="text-sm text-muted-foreground">
                  Evet, web sitemiz tüm mobil cihazlarla uyumludur. Akıllı telefon veya tabletinizden tüm online işlemleri gerçekleştirebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Hala sorunuz mu var?</h3>
          <p className="text-white/60 mb-6">Uzman ekibimiz size yardımcı olmaktan mutluluk duyar.</p>
          <Button asChild className="bg-gold text-navy font-bold rounded-none">
            <Link href="/iletisim">Bize Ulaşın</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
