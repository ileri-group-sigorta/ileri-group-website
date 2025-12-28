import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, ArrowRight, Clock, Users, Briefcase, Monitor, HeadphonesIcon, Heart } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/10 skew-x-[-20deg] translate-x-1/4" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>30 Yıllık Tecrübe ile Güvence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              İleri Grup Sigorta'ya <span className="text-gold">Hoş Geldiniz</span>
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed">
              İleri Grup Sigorta, Türkiye'nin önde gelen sigorta aracılarından biri olarak 30 yılı aşkın deneyimi ile hem kurumsal müşterilere hem de bireylere kapsamlı sigorta çözümleri sunmaktadır. Finansal güvence ve müşteri memnuniyeti odaklı hizmet anlayışımız sayesinde, üç nesildir süregelen bir güven inşa ettik.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-6 h-auto text-lg rounded-none">
                <Link href="/online-islemler">
                  Online Teklif Al
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/20 text-white hover:bg-white/10 px-8 py-6 h-auto text-lg rounded-none">
                <Link href="/iletisim">Bize Ulaşın</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sigorta ihtiyaçlarınız ne olursa olsun – sağlık sigortasından kasko ve trafik sigortasına, konut sigortasından sorumluluk poliçelerine kadar – İleri Grup Sigorta yanınızda. Geniş ürün yelpazemizi, uzman kadromuzun derin bilgi birikimi ile buluşturuyor; siz değerli müşterilerimizin risklerini güvence altına alıyoruz.
            </p>
            
            <div className="p-8 bg-navy/5 border-l-4 border-gold">
              <p className="text-lg font-medium text-navy italic">
                "Güvenilir, yenilikçi, profesyonel" yaklaşımımızla, müşterilerimizin hayatını kolaylaştıran dijital çözümler geliştiriyoruz. Örneğin, sağlık turizmi için devrim niteliğindeki Komplikasyon Sigortası ürünümüz ile uluslararası hastaların ve sağlık kuruluşlarının yanındayız. Tüm sigorta süreçlerini online platformlarımız üzerinden hızlı ve şeffaf bir şekilde yönetme imkanı sunarak sektörde fark yaratıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Neden Bizi Seçmelisiniz?</h2>
            <div className="h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 30 Yıllık Tecrübe */}
            <div className="bg-white p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-navy/5 flex items-center justify-center text-navy mb-6">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">30 Yıllık Tecrübe</h3>
              <p className="text-muted-foreground leading-relaxed">
                Uzun yıllara dayanan deneyimimiz, her türden sigorta ihtiyacı için en doğru çözümleri sunmamızı sağlar. Piyasayı, ürünleri ve riskleri çok iyi biliyoruz.
              </p>
            </div>

            {/* Uzman Kadro */}
            <div className="bg-white p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-navy/5 flex items-center justify-center text-navy mb-6">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Uzman Kadro</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ekibimizde sigortacılık başta olmak üzere sağlık, mühendislik, lojistik gibi çeşitli sektörlerden uzmanlar bulunmaktadır. Her biri kendi branşında ışıltılı kariyere sahip profesyoneller, sigorta danışmanınız olarak hizmet verir.
              </p>
            </div>

            {/* Geniş Ürün Yelpazesi */}
            <div className="bg-white p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-navy/5 flex items-center justify-center text-navy mb-6">
                <Briefcase className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Geniş Ürün Yelpazesi</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hem bireysel hem kurumsal alanda, 50'nin üzerinde farklı sigorta ürününü portföyümüzde barındırıyoruz. İhtiyaçlarınıza uygun poliçeyi bizde mutlaka bulursunuz.
              </p>
            </div>

            {/* Dijital Kolaylıklar */}
            <div className="bg-white p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-navy/5 flex items-center justify-center text-navy mb-6">
                <Monitor className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Dijital Kolaylıklar</h3>
              <p className="text-muted-foreground leading-relaxed">
                İleri Grup Sigorta, dijital çağa ayak uyduran bir acentedir. Online teklif alma, anında poliçe düzenleme, hasar takibi ve müşteri portalı gibi dijital servislerle işlemlerinizi birkaç tıkla halletmenizi sağlıyoruz. Özellikle B2B müşterilerimiz için geliştirdiğimiz özel platformlar sayesinde (örneğin Online Komplikasyon Poliçe Sistemi), işlemler çok daha hızlı ve hatasız gerçekleşiyor.
              </p>
            </div>

            {/* 7/24 Destek */}
            <div className="bg-white p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-navy/5 flex items-center justify-center text-navy mb-6">
                <HeadphonesIcon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">7/24 Destek ve Hızlı Hasar Yönetimi</h3>
              <p className="text-muted-foreground leading-relaxed">
                Müşterilerimiz, ihtiyaç duydukları her an bize ulaşabilir. Deneyimli müşteri temsilcilerimiz ve teknik ekibimiz, gerek poliçe danışmanlığında gerekse hasar anında 7/24 destek sunar. Hasar bildiriminden tazminat ödemesine kadar tüm süreci şeffaf bir şekilde yönetir, ödemelerin hızlı yapılmasını sağlarız.
              </p>
            </div>

            {/* Müşteri Odaklı Yaklaşım */}
            <div className="bg-white p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-navy/5 flex items-center justify-center text-navy mb-6">
                <Heart className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Müşteri Odaklı Yaklaşım</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bizim için her müşteri özeldir. Poliçe satışından başlayarak poliçe yenileme, risk yönetimi ve hasar sonrası hizmetlere kadar her adımda yanınızdayız. İhtiyaçlarınızı dinleyerek size özel çözümler üretir, uzun soluklu bir iş ortaklığı kurarız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-white/80 leading-relaxed">
              İleri Grup Sigorta olarak hedefimiz, sizleri risklere karşı korurken aynı zamanda sigorta deneyiminizi kolay ve keyifli hale getirmektir. Sitemizde gezinerek sunduğumuz hizmetler hakkında detaylı bilgiler edinebilir, online olarak teklif alabilir veya bize direkt ulaşabilirsiniz.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Gelin, siz de İleri Grup Sigorta güvencesi ile tanışın; <span className="text-gold">geleceğinizi birlikte güvence altına alalım.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" asChild className="bg-gold hover:bg-gold/90 text-navy font-bold px-12 py-6 h-auto text-lg rounded-none">
                <Link href="/online-islemler">Online Teklif Al</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/20 text-white hover:bg-white/10 px-12 py-6 h-auto text-lg rounded-none">
                <Link href="/iletisim">Bize Ulaşın</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
