import * as React from "react";
import { Shield, Target, Eye, Users2, Award } from "lucide-react";

export default function HakkimizdaPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 skew-y-3 translate-y-20" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Hakkımızda</h1>
          <nav className="flex text-white/60 text-sm space-x-2">
            <span>Ana Sayfa</span>
            <span>/</span>
            <span className="text-gold">Hakkımızda</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-none overflow-hidden border-8 border-navy/5">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800" 
                  alt="Ofisimiz"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold hidden md:flex items-center justify-center p-8 text-navy">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">30+</div>
                  <div className="text-sm font-bold uppercase tracking-widest">Yıllık Güven</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-navy">Geleceğe Güvenle İlerliyoruz</h2>
                <div className="h-1 w-20 bg-gold" />
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                1995 yılında temelleri atılan İleri Group Sigorta, kuruluşundan bu yana dürüstlük, şeffaflık ve müşteri odaklılık prensiplerinden ödün vermeden yoluna devam etmektedir. 
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sigorta sektöründeki 30 yılı aşkın tecrübemizle, değişen dünya koşullarına ve dijitalleşen sürece hızla adapte olarak, müşterilerimize en modern ve güvenilir risk yönetimi çözümlerini sunuyoruz. Bugün Türkiye'nin önde gelen sigorta acentelerinden biri olarak, bireysel ve kurumsal binlerce müşterimize hizmet vermenin gururunu yaşıyoruz.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-muted/50 border-l-4 border-gold">
                  <h4 className="font-bold text-navy mb-2">Vizyonumuz</h4>
                  <p className="text-sm text-muted-foreground">Sigorta sektöründe dijital dönüşümün öncüsü olarak, küresel standartlarda butik ve kaliteli hizmet sunan lider kuruluş olmak.</p>
                </div>
                <div className="p-6 bg-muted/50 border-l-4 border-gold">
                  <h4 className="font-bold text-navy mb-2">Misyonumuz</h4>
                  <p className="text-sm text-muted-foreground">Müşterilerimizin tüm varlıklarını ve geleceklerini en doğru teminatlarla güvence altına alarak, hayatlarını huzurla sürdürmelerine katkıda bulunmak.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Bizi Biz Yapan Değerlerimiz</h2>
            <div className="h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Güven", desc: "Tüm süreçlerimizde karşılıklı güven esastır." },
              { icon: Target, title: "Uzmanlık", desc: "Sektörel derinlik ve teknik bilgi birikimi." },
              { icon: Users2, title: "Müşteri Odaklılık", desc: "Sizin ihtiyacınız bizim önceliğimizdir." },
              { icon: Award, title: "Yenilikçilik", desc: "Dijital çözümlerle geleceği bugüne taşıyoruz." }
            ].map((value, i) => (
              <div key={i} className="p-8 border border-white/10 hover:border-gold/50 transition-colors text-center group">
                <value.icon className="h-12 w-12 text-gold mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
