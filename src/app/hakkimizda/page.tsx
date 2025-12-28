import * as React from "react";
import { Shield, Target, Eye, Users2, Award, Lightbulb, Heart, HandshakeIcon, TrendingUp, Building, Hospital, Truck, Factory } from "lucide-react";

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

      {/* Tarihçemiz ve Misyonumuz */}
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
                  <div className="text-5xl font-bold mb-2">1995</div>
                  <div className="text-sm font-bold uppercase tracking-widest">Kuruluş Yılı</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-navy">Tarihçemiz ve Misyonumuz</h2>
                <div className="h-1 w-20 bg-gold" />
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                İleri Grup Sigorta Aracılık Hizmetleri Ltd. Şti., 1995 yılında İstanbul'da kurulmuş, köklü ve saygın bir sigorta acentesidir. Kurulduğumuz günden bu yana müşteri odaklı ve güvenilir hizmet anlayışımızla sektörümüzde örnek teşkil ediyoruz. 30 yılı aşkın süredir bireysel ve kurumsal binlerce müşterimizin risklerini üstlendik, onlara zor günlerinde güvence sağladık.
              </p>
              
              <div className="p-6 bg-navy/5 border-l-4 border-gold">
                <p className="text-navy font-medium italic">
                  Misyonumuz, "her koşulda müşterilerimizin yanında olmak ve onların en uygun sigorta çözümlerine erişimini sağlamak"tır.
                </p>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Bu misyonla, müşterilerimizin ihtiyaçlarını doğru analiz ederek geniş ürün yelpazemiz içinden en uygun teminatları sunuyoruz. Sigorta gibi güvene dayalı bir sektörde, ismimizden de aldığımız ilhamla daima ileriyi gören, proaktif bir yaklaşım benimsiyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vizyon ve Değerlerimiz */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Vizyon ve Değerlerimiz</h2>
            <div className="h-1 w-20 bg-gold mx-auto" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Vizyonumuz, yenilikçi çözümler ve uzman kadromuz sayesinde Türkiye'de sigorta denince akla gelen ilk adres olmaktır. Son yıllarda özellikle sağlık turizmi sigortası alanında yaptığımız yatırımlarla bu alanda öncü konuma gelmeyi hedefliyoruz.
            </p>
            <div className="inline-block p-4 bg-gold/10 border border-gold/20 text-gold font-bold text-xl">
              "İleri Grup – Sağlık Turizminde Güvencenin Adresi"
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-navy/5 flex items-center justify-center text-navy mb-6">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Güvenilirlik</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dürüstlük ve şeffaflık, ilişkilerimizin temelidir. Müşterilerimize verdiğimiz sözleri tutar, onların güvenini sarsmamak için azami gayret gösteririz.
              </p>
            </div>

            <div className="bg-white p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-navy/5 flex items-center justify-center text-navy mb-6">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Uzmanlık</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kadromuza sürekli yatırım yaparız. Ekibimizde 30 yılı aşkın tecrübeye sahip sigorta uzmanları, risk mühendisleri ve sektör spesifik danışmanlar bulunur. Bu sayede müşterilerimize her zaman en doğru bilgiyi ve rehberliği sunarız.
              </p>
            </div>

            <div className="bg-white p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-navy/5 flex items-center justify-center text-navy mb-6">
                <Lightbulb className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Yenilikçilik</h3>
              <p className="text-muted-foreground leading-relaxed">
                Teknolojiyi yakından takip eder, hizmetlerimize entegre ederiz. Ülkemizde ilk defa hayata geçirilen online komplikasyon sigortası platformu bunun bir örneğidir. Sürekli olarak yeni ürünler geliştirmeye, mevcut ürünleri müşteriler için daha pratik hale getirmeye çalışırız.
              </p>
            </div>

            <div className="bg-white p-8 border-t-4 border-gold hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-navy/5 flex items-center justify-center text-navy mb-6">
                <Heart className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Müşteri Memnuniyeti</h3>
              <p className="text-muted-foreground leading-relaxed">
                Her şeyden önce müşteri memnuniyetini gözetiriz. Poliçe satışı sonrasında da müşterilerimizle ilgilenir, onların soru ve sorunlarına çözüm üretiriz. Bizden aldığınız her hizmetin içinize sinmesi en büyük önceliğimizdir.
              </p>
            </div>

            <div className="bg-white p-8 border-t-4 border-gold hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-2">
              <div className="w-14 h-14 bg-navy/5 flex items-center justify-center text-navy mb-6">
                <HandshakeIcon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Toplumsal Sorumluluk</h3>
              <p className="text-muted-foreground leading-relaxed">
                İleri Grup Sigorta olarak sadece ticari faaliyetlerle değil, içinde bulunduğumuz topluma katkı sağlamakla da yükümlüyüz. Bu kapsamda, sosyal sorumluluk projelerine destek oluyor, sektörde etik standartların yükselmesi için çalışıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ekibimiz */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Ekibimiz</h2>
                <div className="h-1 w-20 bg-gold" />
              </div>
              
              <p className="text-white/70 text-lg leading-relaxed">
                İleri Grup Sigorta'nın gücü, nitelikli insan kaynağından gelir. Bünyemizde sigorta brokerları, teknik uzmanlar, aktüerya danışmanları, sağlık danışmanları ve daha pek çok alanda profesyonel bulunmaktadır.
              </p>

              <p className="text-white/70 text-lg leading-relaxed">
                Özellikle sağlık turizmi ve komplikasyon sigortası konusunda ayrı bir uzman ekibimiz mevcuttur. Bu ekibimiz, hastane yönetimi, uluslararası hasta ilişkileri ve sigortacılık gibi disiplinlerde deneyimli kişilerden oluşur. Böylece hem sigorta şirketleriyle sağlam ilişkiler kurabiliyor, hem de sağlık sektörü dinamiklerine hakim bir hizmet sunabiliyoruz.
              </p>

              <p className="text-white/70 text-lg leading-relaxed">
                Çalışanlarımıza düzenli eğitimler vererek güncel gelişmeleri ve en iyi uygulamaları takip etmelerini sağlıyoruz. Dijital pazarlama departmanımız, web sitemizin SEO uyumlu içeriklerle donatılmasını ve online görünürlüğümüzün artmasını sağlamak için 30 yıllık deneyime sahip bir uzman tarafından yönetilmektedir.
              </p>

              <div className="p-6 bg-white/5 border-l-4 border-gold">
                <p className="text-white/90 italic">
                  Sigorta alanındaki birikimimizi, dijital dünyanın imkanlarıyla birleştirerek müşterilerimize çok yönlü bir deneyim sunuyoruz.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 border border-white/10 text-center">
                <Users2 className="h-10 w-10 text-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-gold mb-2">50+</div>
                <div className="text-sm text-white/60">Uzman Personel</div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 text-center">
                <Award className="h-10 w-10 text-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-gold mb-2">30+</div>
                <div className="text-sm text-white/60">Yıllık Deneyim</div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 text-center">
                <Target className="h-10 w-10 text-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-gold mb-2">15+</div>
                <div className="text-sm text-white/60">Sigorta Partneri</div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 text-center">
                <Eye className="h-10 w-10 text-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-gold mb-2">7/24</div>
                <div className="text-sm text-white/60">Destek Hizmeti</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referanslar ve Başarılarımız */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Referanslar ve Başarılarımız</h2>
            <div className="h-1 w-20 bg-gold mx-auto" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Kurulduğumuz günden bu yana sayısız başarı hikayesine imza attık. Bireysel müşterilerimizin yanı sıra, Türkiye genelinde pek çok kurumsal müşteriyle uzun soluklu iş ortaklıklarımız bulunuyor.
            </p>
          </div>

          {/* Sektörler */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="p-6 bg-muted/30 text-center group hover:bg-gold/10 transition-colors">
              <Hospital className="h-10 w-10 text-navy mx-auto mb-4 group-hover:text-gold transition-colors" />
              <div className="text-sm font-medium text-navy">Hastaneler & Klinikler</div>
            </div>
            <div className="p-6 bg-muted/30 text-center group hover:bg-gold/10 transition-colors">
              <Building className="h-10 w-10 text-navy mx-auto mb-4 group-hover:text-gold transition-colors" />
              <div className="text-sm font-medium text-navy">Sağlık Turizmi Şirketleri</div>
            </div>
            <div className="p-6 bg-muted/30 text-center group hover:bg-gold/10 transition-colors">
              <Truck className="h-10 w-10 text-navy mx-auto mb-4 group-hover:text-gold transition-colors" />
              <div className="text-sm font-medium text-navy">Lojistik Firmaları</div>
            </div>
            <div className="p-6 bg-muted/30 text-center group hover:bg-gold/10 transition-colors">
              <Factory className="h-10 w-10 text-navy mx-auto mb-4 group-hover:text-gold transition-colors" />
              <div className="text-sm font-medium text-navy">Üretim & İnşaat</div>
            </div>
          </div>

          {/* Başarı İstatistikleri */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-navy text-white text-center">
              <TrendingUp className="h-10 w-10 text-gold mx-auto mb-4" />
              <div className="text-4xl font-bold text-gold mb-2">15+</div>
              <div className="text-sm text-white/60">Yıldır Sektör Lideri</div>
              <p className="text-xs text-white/40 mt-2">Elementer ve sağlık branşlarında</p>
            </div>
            <div className="p-8 bg-navy text-white text-center">
              <Heart className="h-10 w-10 text-gold mx-auto mb-4" />
              <div className="text-4xl font-bold text-gold mb-2">%98</div>
              <div className="text-sm text-white/60">Müşteri Memnuniyeti</div>
              <p className="text-xs text-white/40 mt-2">2022 geri bildirim sonuçları</p>
            </div>
            <div className="p-8 bg-navy text-white text-center">
              <Users2 className="h-10 w-10 text-gold mx-auto mb-4" />
              <div className="text-4xl font-bold text-gold mb-2">5000+</div>
              <div className="text-sm text-white/60">Yeni Müşteri</div>
              <p className="text-xs text-white/40 mt-2">Son 5 yılda portföye eklenen</p>
            </div>
            <div className="p-8 bg-navy text-white text-center">
              <Hospital className="h-10 w-10 text-gold mx-auto mb-4" />
              <div className="text-4xl font-bold text-gold mb-2">100+</div>
              <div className="text-sm text-white/60">Hastane & Klinik</div>
              <p className="text-xs text-white/40 mt-2">Komplikasyon sigortası partneri</p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-muted/30 border-l-4 border-gold max-w-4xl mx-auto">
            <p className="text-lg text-navy leading-relaxed">
              Bizimle çalışan müşteriler, sadece bir sigorta satın almadıklarını; aynı zamanda bir <strong>risk yönetimi partnerine</strong> sahip olduklarını bilirler. Başarılarımızın arkasındaki en büyük güç, müşterilerimizin bize duyduğu güvendir. Bu güveni korumak ve geliştirmek için aynı azimle çalışmaya devam ediyoruz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
