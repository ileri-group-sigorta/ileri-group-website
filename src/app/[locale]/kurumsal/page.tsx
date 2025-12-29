import * as React from "react";
import { Building2, HardHat, ShieldAlert, Truck, Users, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurumsal Sigortalar",
  description: "İşletmeniz için kurumsal sigorta çözümleri: Grup sağlık, işveren sorumluluk, mühendislik, nakliyat, siber sorumluluk ve yönetici sorumluluk sigortaları.",
  keywords: ["kurumsal sigorta", "grup sağlık sigortası", "işveren sorumluluk", "mühendislik sigortası", "nakliyat sigortası", "siber sigorta"],
  alternates: {
    canonical: "/kurumsal",
  },
  openGraph: {
    title: "Kurumsal Sigortalar | İleri Grup Sigorta",
    description: "İşletmenizin sürdürülebilirliği için özelleştirilmiş kurumsal sigorta paketleri.",
    url: "/kurumsal",
  },
};

const corporateServices = [
  {
    icon: Users,
    title: "Grup Sağlık Sigortası",
    desc: "Çalışanlarınızın sağlığını en kapsamlı teminatlarla güvence altına alın, verimliliği artırın.",
  },
  {
    icon: HardHat,
    title: "Mühendislik Sigortaları",
    desc: "İnşaat, montaj ve makine kırılması gibi risklere karşı projelerinizi koruyoruz.",
  },
  {
    icon: ShieldAlert,
    title: "Siber Sorumluluk",
    desc: "Dijital dünyadaki veri ihlalleri ve siber saldırılara karşı işletmenizi güvenceye alın.",
  },
  {
    icon: Truck,
    title: "Nakliyat Sigortası",
    desc: "Emtiadan tekneye kadar tüm sevkiyat süreçlerinizi uluslararası standartlarda koruyoruz.",
  },
  {
    icon: Briefcase,
    title: "İşyeri Paket",
    desc: "İşyerinizi yangın, hırsızlık ve iş durması gibi risklere karşı tek poliçeyle koruyun.",
  },
  {
    icon: Building2,
    title: "Yönetici Sorumluluk",
    desc: "Yöneticilerin karar ve uygulamalarından doğabilecek hukuki riskleri teminat altına alıyoruz.",
  },
];

export default function KurumsalPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">Kurumsal Sigortalar</h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl">
            İşletmenizin sürdürülebilirliğini sağlamak ve risklerini profesyonelce yönetmek için özelleştirilmiş kurumsal paketler.
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
                    <Link href="/iletisim">Kurumsal Teklif Al &rarr;</Link>
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
              <h2 className="text-2xl sm:text-3xl font-bold">Kurumsal Risk Analizi Mi İstiyorsunuz?</h2>
              <p className="text-white/60 text-sm sm:text-base">İşletmenize özel risk raporu ve sigorta planlaması için uzmanlarımızla görüşün.</p>
            </div>
            <Button asChild className="bg-gold text-navy font-bold px-6 sm:px-8 py-5 sm:py-6 h-auto text-base sm:text-lg rounded-none w-full md:w-auto whitespace-nowrap">
              <Link href="/iletisim">Randevu Al</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
