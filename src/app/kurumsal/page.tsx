import * as React from "react";
import { Building2, HardHat, ShieldAlert, Truck, Users, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Kurumsal Sigortalar</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            İşletmenizin sürdürülebilirliğini sağlamak ve risklerini profesyonelce yönetmek için özelleştirilmiş kurumsal paketler.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateServices.map((service, i) => (
              <Card key={i} className="rounded-none border-navy/10 hover:border-gold transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 bg-navy/5 flex items-center justify-center text-navy mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{service.desc}</p>
                  <Button variant="link" className="p-0 h-auto text-gold font-bold">Kurumsal Teklif Al &rarr;</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Kurumsal Risk Analizi Mi İstiyorsunuz?</h2>
              <p className="text-white/60">İşletmenize özel risk raporu ve sigorta planlaması için uzmanlarımızla görüşün.</p>
            </div>
            <Button className="bg-gold text-navy font-bold px-8 py-6 h-auto text-lg rounded-none whitespace-nowrap">Randevu Al</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
