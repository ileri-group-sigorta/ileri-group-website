import * as React from "react";
import { Activity, Car, Home, Plane, Heart, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: Heart,
    title: "Özel Sağlık Sigortası",
    desc: "Sizin ve ailenizin sağlığını Türkiye'nin en iyi hastanelerinde güvence altına alıyoruz.",
  },
  {
    icon: Car,
    title: "Kasko & Trafik",
    desc: "Aracınızı kaza, hırsızlık ve doğal afetlere karşı geniş teminatlarla koruyoruz.",
  },
  {
    icon: Home,
    title: "Konut Sigortası",
    desc: "Evinizi ve eşyalarınızı yangından su baskınına kadar her türlü riske karşı sigortalıyoruz.",
  },
  {
    icon: Plane,
    title: "Seyahat Sağlık",
    desc: "Yurt içi ve yurt dışı seyahatlerinizde beklenmedik sağlık sorunlarına karşı yanınızdayız.",
  },
  {
    icon: Activity,
    title: "Tamamlayıcı Sağlık",
    desc: "SGK anlaşmalı özel hastanelerde fark ücreti ödemeden tedavi olmanızı sağlıyoruz.",
  },
  {
    icon: ShieldCheck,
    title: "DASK",
    desc: "Zorunlu deprem sigortası ile evinizi deprem ve deprem kaynaklı risklere karşı koruyun.",
  },
];

export default function BireyselPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">Bireysel Sigortalar</h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl">
            Sizin ve sevdiklerinizin geleceğini, yaşam kalitenizi ve varlıklarınızı korumak için tasarlanmış kişiye özel sigorta çözümleri.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, i) => (
              <Card key={i} className="rounded-none border-navy/10 hover:border-gold transition-colors group">
                <CardHeader className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-navy/5 flex items-center justify-center text-navy mb-3 sm:mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground">{service.desc}</p>
                  <Button asChild variant="link" className="p-0 h-auto text-gold font-bold text-sm sm:text-base">
                    <Link href="/iletisim">Teklif Al &rarr;</Link>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">Size En Uygun Poliçeyi Birlikte Belirleyelim</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Uzman danışmanlarımız ihtiyacınız olan teminatları analiz eder ve en uygun fiyatlı seçenekleri sunar.</p>
            <Button asChild className="bg-navy text-white px-6 sm:px-8 py-5 sm:py-6 h-auto text-base sm:text-lg rounded-none w-full sm:w-auto">
              <Link href="/iletisim">Danışmanımız Sizi Arasın</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
