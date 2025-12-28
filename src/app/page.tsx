import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, ArrowRight, Activity, Building2, Globe2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-navy overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/10 skew-x-[-20deg] translate-x-1/4" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>30 Yıllık Sektör Tecrübesi</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Geleceğinizi <span className="text-gold">Güvenle</span> Sigortalıyoruz
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              30 yılı aşkın tecrübemiz, uzman kadromuz ve dijital çözümlerimizle hem bireysel hem kurumsal müşterilerimize güvenilir ve kapsamlı sigorta koruması sunuyoruz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-6 h-auto text-lg rounded-none">
                Hemen Teklif Al
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 h-auto text-lg rounded-none">
                Hizmetlerimizi İncele
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gold">30+</div>
                <div className="text-sm text-white/50">Yıllık Deneyim</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gold">50K+</div>
                <div className="text-sm text-white/50">Mutlu Müşteri</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gold">15+</div>
                <div className="text-sm text-white/50">Sigorta Partneri</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Kapsamlı Sigorta Çözümleri</h2>
            <div className="h-1 w-20 bg-gold mx-auto" />
            <p className="text-muted-foreground">İhtiyaçlarınıza özel, esnek ve güvenilir sigorta paketlerimizle her an yanınızdayız.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:border-gold transition-all duration-300 shadow-sm rounded-none border-navy/5">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy group-hover:bg-gold group-hover:text-white transition-colors">
                  <Activity className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Bireysel Sigortalar</CardTitle>
                <CardDescription className="text-base">
                  Özel sağlık, kasko, konut ve seyahat gibi geniş bir yelpazede size özel çözümler.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/bireysel" className="inline-flex items-center text-gold font-semibold hover:underline">
                  Detaylı Bilgi <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:border-gold transition-all duration-300 shadow-sm rounded-none border-navy/5">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy group-hover:bg-gold group-hover:text-white transition-colors">
                  <Building2 className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Kurumsal Sigortalar</CardTitle>
                <CardDescription className="text-base">
                  İşletmeniz için grup sağlığı, mühendislik, siber sorumluluk ve nakliyat sigortaları.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/kurumsal" className="inline-flex items-center text-gold font-semibold hover:underline">
                  Detaylı Bilgi <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:border-gold transition-all duration-300 shadow-sm rounded-none border-navy/5">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy group-hover:bg-gold group-hover:text-white transition-colors">
                  <Globe2 className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Sağlık Turizmi</CardTitle>
                <CardDescription className="text-base">
                  Uluslararası hastalar için yenilikçi online komplikasyon sigortası çözümleri.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/saglik-turizmi" className="inline-flex items-center text-gold font-semibold hover:underline">
                  Detaylı Bilgi <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-navy">Neden İleri Group Sigorta?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                1995'ten bu yana güven, uzmanlık ve yenilikçilik değerleriyle ilerleyerek, müşterilerimizin risk yönetimi partneri olmayı hedefliyoruz.
              </p>
              
              <div className="space-y-4">
                {[
                  "30 yılı aşkın sektörel deneyim ve birikim",
                  "Dijital platformlar üzerinden hızlı poliçe kesimi",
                  "7/24 kesintisiz destek ve danışmanlık",
                  "En iyi sigorta şirketleri ile güçlü iş birlikleri",
                  "Kişiye ve kuruma özel esnek çözüm paketleri"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button className="bg-navy text-white px-8 py-6 h-auto text-lg rounded-none">
                Daha Fazla Bilgi
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-navy rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" 
                  alt="Sigorta Uzmanlığı"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 glass text-navy">
                  <p className="font-serif italic text-lg">"Müşterilerimizin risklerini yönetmek değil, onları güvence altına almak bizim temel misyonumuzdur."</p>
                  <p className="mt-4 font-bold">- İleri Group Sigorta Yönetimi</p>
                </div>
              </div>
              {/* Floating element */}
              <div className="absolute -top-6 -right-6 p-6 bg-gold text-navy shadow-xl hidden md:block">
                <div className="text-4xl font-bold">1995</div>
                <div className="text-sm font-semibold uppercase tracking-wider">Kuruluş</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">İhtiyacınız olan güvence bir tık uzağınızda</h2>
            <p className="text-white/60 text-lg">
              Online işlemler merkezimiz üzerinden saniyeler içerisinde teklif alabilir, poliçenizi sorgulayabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-bold px-12 py-6 h-auto text-lg rounded-none">
                Online Teklif Al
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 py-6 h-auto text-lg rounded-none">
                Bize Ulaşın
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
