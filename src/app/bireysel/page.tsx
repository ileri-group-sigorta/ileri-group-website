import * as React from "react";
import { Activity, Car, Home, Plane, Heart, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Bireysel Sigortalar</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Sizin ve sevdiklerinizin geleceğini, yaşam kalitenizi ve varlıklarınızı korumak için tasarlanmış kişiye özel sigorta çözümleri.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card key={i} className="rounded-none border-navy/10 hover:border-gold transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 bg-navy/5 flex items-center justify-center text-navy mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{service.desc}</p>
                  <Button variant="link" className="p-0 h-auto text-gold font-bold">Teklif Al &rarr;</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-navy">Size En Uygun Poliçeyi Birlikte Belirleyelim</h2>
            <p className="text-muted-foreground">Uzman danışmanlarımız ihtiyacınız olan teminatları analiz eder ve en uygun fiyatlı seçenekleri sunar.</p>
            <Button className="bg-navy text-white px-8 py-6 h-auto text-lg rounded-none">Danışmanımız Sizi Arasın</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
