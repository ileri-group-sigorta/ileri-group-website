import * as React from "react";
import { 
  Heart, 
  Car, 
  Home, 
  Plane, 
  Activity, 
  ShieldCheck, 
  AlertTriangle, 
  PiggyBank, 
  Users, 
  Briefcase, 
  Building2, 
  HardHat, 
  Truck, 
  ShieldAlert, 
  Factory,
  Hospital,
  Globe,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SigortalarPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 skew-y-3 translate-y-20" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Sigorta Çözümlerimiz</h1>
          <nav className="flex text-white/60 text-sm space-x-2">
            <span>Ana Sayfa</span>
            <span>/</span>
            <span className="text-gold">Sigortalar</span>
          </nav>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              30 yılı aşkın tecrübemizle İleri Grup Sigorta, hem bireysel müşteriler hem de işletmeler için çok çeşitli sigorta ürünleri sunmaktadır. Aşağıda, hizmet verdiğimiz başlıca sigorta ürün gruplarını ve kapsamlarını bulabilirsiniz. İhtiyaçlarınıza en uygun sigorta çözümü için sayfanın altındaki formdan online teklif alabilir veya bizi arayabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Bireysel Sigortalar</h2>
            <div className="h-1 w-20 bg-gold mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bireysel müşterilerimizin kendileri, aileleri ve varlıkları için ihtiyaç duyabileceği tüm sigorta ürünlerini tek çatı altında topluyoruz.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 border-l-4 border-gold">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <Heart className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">Özel Sağlık Sigortası</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kendinizi ve ailenizi özel hastanelerde yüksek maliyetli tedavilere karşı güvence altına alın. Özel Sağlık Sigortası ile yatarak ve ayakta tedavi giderleriniz poliçe kapsamınıza göre %100'e varan oranlarda karşılanır. Geniş anlaşmalı kurum ağımız sayesinde Türkiye genelindeki birçok hastanede nakit ödemeden sağlık hizmeti alabilirsiniz. İleri Grup Sigorta, farklı sigorta şirketlerinin planlarını karşılaştırarak size en uygun teminat ve limitleri belirlemenize yardımcı olur. Sağlığınız bizimle emin ellerde.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-gold">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <Activity className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">Tamamlayıcı Sağlık Sigortası</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sosyal Güvenlik Kurumu (SGK) ile anlaşmalı özel hastanelerde fark ücreti ödemeden tedavi olma imkânı sunan uygun maliyetli bir sağlık sigortası çözümüdür. SGK kapsamındaki genel sağlık sigortanıza %100 tamamlayan bu ürün, özellikle SGK'lı çalışanlar ve aileleri için idealdir. Muayene, tahlil, görüntüleme gibi ayakta tedavilerden, ameliyat ve yoğun bakım gibi yatarak tedavilere kadar pek çok masrafı karşılar. Tamamlayıcı Sağlık Sigortası ile kaliteli sağlık hizmetine kolayca erişin.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-gold">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <Globe className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">Yabancı Sağlık Sigortası</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Türkiye'de ikamet eden yabancı uyruklu kişiler için vize/ikamet izni alma aşamasında gerekli olan zorunlu sağlık sigortasıdır. Bu poliçe ile yabancı misafirlerimiz, Türkiye'de karşılaşabilecekleri acil sağlık sorunlarında güvenceye kavuşurlar. Poliçe, anlaşmalı hastanelerde yatışlı/yatışsız acil tedavileri kapsamaktadır. İleri Grup Sigorta olarak, yabancı müşterilerimizin bu süreci hızlıca tamamlaması için online başvuru ve aynı gün poliçe teslimi hizmeti veriyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-gold">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <Plane className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">Seyahat Sağlık Sigortası</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yurt dışına yapacağınız seyahatlerde başınıza gelebilecek ani sağlık sorunları veya kazalara karşı sizi koruyan uluslararası geçerliliği olan sigortadır. Vize başvurularında zorunlu tutulabilen bu poliçe, seyahatiniz sırasında hastalanmanız veya yaralanmanız durumunda tıbbi tedavi masraflarınızı, gerekirse ülkeye hastalık nedeniyle dönüş masraflarınızı karşılar. 30.000 € teminatlı standart planlardan, daha kapsamlı premium planlara kadar ihtiyacınıza uygun seçenekler sunuyoruz. Seyahate çıkmadan önce sağlığınızı bize emanet edin, dünyanın neresinde olursanız olun güvende kalın.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-gold">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <Car className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">Kasko Sigortası (Araç Sigortası)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Aracınızı çarpma, çarpılma, hırsızlık, yangın, doğal afet gibi risklere karşı tam kapsamlı güvence altına alın. Kasko sigortası, kendi aracınızda oluşabilecek maddi hasarları poliçe limitleriniz dahilinde karşılar. Mini onarım hizmetleri, orijinal parça kullanımı, yetkili servis veya tercihen anlaşmalı servis ağları ve isteğe bağlı ferdi kaza koltuk ferdi kaza teminatları ile aracınıza değer katıyoruz. İleri Grup Sigorta, kasko poliçenizi hazırlarken kullanım alışkanlıklarınız ve aracınızın özelliklerine en uygun teminatları seçer; size özel fiyat avantajları sunar.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-gold">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">Zorunlu Trafik Sigortası</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Trafikteki üçüncü şahıslara verebileceğiniz maddi ve bedeni zararları karşılayan, her araç sahibinin yaptırması kanunen zorunlu olan sorumluluk sigortasıdır. Limitleri devlet tarafından belirlenen trafik sigortanızı en uygun primlerle ve taksit seçenekleriyle sunuyoruz. Hasarsızlık indirimi takibi, poliçe vade hatırlatması gibi hizmetlerle trafik sigortası işlemlerinizi sorunsuz yönetiyoruz. Unutmayın, trafik sigortanızı yaptırmak hem yasal bir yükümlülük hem de olası kazalarda mağduriyet yaşamamak için şart.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-gold">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <Home className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">Konut Sigortası</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Eviniz, en değerli yaşam alanınız… Konut Sigortası ile yuvanıza tam koruma sağlıyoruz. Yangın, hırsızlık, su baskını, fırtına, duman, infilak gibi risklerin yanı sıra elektronik cihaz koruması, cam kırılması, komşuya karşı sorumluluk gibi ek teminatlarla evinizi ve eşyalarınızı güvence altına alıyoruz. Deprem ve doğal afetler için dilerseniz poliçenize ek teminatlar koyabiliyoruz (DASK zaten zorunlu olarak ayrıca yapılmaktadır). Konut sigortanız, siz evde yokken de evinizi korur; hasar durumunda hızlı eksper ve onarım desteğiyle yanınızda oluruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-gold">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">DASK – Zorunlu Deprem Sigortası</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ülkemizdeki her konut için zorunlu olan DASK poliçesi, deprem ve deprem kaynaklı yangın, infilak, tsunami, yer kayması gibi afetlerin yol açtığı bina hasarlarını teminat altına alır. İleri Grup Sigorta olarak, DASK poliçenizi en güncel tarifeye göre hızlıca düzenliyoruz. Deprem kuşağında yer alan ülkemizde, DASK poliçenizin sürekliliğini sağlamak hayati öneme sahiptir – biz de her yıl vade hatırlatmalarınızı yaparak yenilemeyi unutmamanızı sağlıyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-gold">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">Ferdi Kaza Sigortası</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Beklenmedik kazalara karşı sizi ve ailenizi finansal olarak koruma altına alan, düşük primlerle yüksek teminatlar sunan bir güvencedir. Ferdi kaza poliçesi ile kaza sonucu vefat veya sürekli sakatlık durumlarında belirlenen teminat tutarı hak sahiplerine ödenir. Ayrıca poliçeye eklenebilen günlük hastane tazminatı, tedavi masrafları, iş göremezlik tazminatı gibi teminatlarla kazaların olası ekonomik etkilerini en aza indiriyoruz. Kendiniz ve sevdikleriniz için ferdi kaza sigortası yaptırarak beklenmedik durumlara karşı hazırlıklı olun.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-gold">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <PiggyBank className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">Bireysel Emeklilik Sistemi (BES)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Aktif çalışma yaşamınız boyunca küçük birikimler yaparak emeklilik döneminde ek bir gelir sağlamanıza imkan veren devlet destekli bir sistemdir. %30 devlet katkısı avantajıyla birikimlerinizi büyütmek ve rahat bir emeklilik dönemi geçirmek için BES'e katılın. İleri Grup Sigorta olarak, çeşitli emeklilik fonlarını ve planlarını karşılaştırarak risk profilinize en uygun BES sözleşmesini seçmenizde yardımcı oluyoruz. Emeklilik planlarınızı ne kadar erken başlatırsanız, geleceğinize o kadar çok yatırım yapmış olursunuz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Kurumsal Sigortalar</h2>
            <div className="h-1 w-20 bg-gold mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              İşletmeler için risk yönetimi ve güvence, sürdürülebilirliğin anahtarıdır. İleri Grup Sigorta, KOBİ'lerden büyük ölçekli şirketlere kadar tüm kurumsal müşterilerine kapsamlı ve özelleştirilmiş sigorta çözümleri sunar. Aşağıda, kurumsal alanda sunduğumuz belli başlı sigorta türlerini bulabilirsiniz:
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-muted/30 p-8 border-l-4 border-navy">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy flex items-center justify-center text-white shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">Grup Sağlık Sigortası</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Şirket çalışanlarınızı ve ailelerini kapsayan özel sağlık sigortası çözümlerimizle, insan kaynağınıza verdiğiniz değeri gösterin. Grup sağlık sigortası poliçeleri, özel anlaşmalı kurumlarda çalışanlarınızın tedavi masraflarını karşılar, böylece daha sağlıklı ve motive bir iş gücüne sahip olmanızı sağlar. İleri Grup Sigorta, firmanızın ihtiyaçlarına göre farklı sigorta şirketlerinden en iyi teklifleri alarak karşılaştırır; geniş teminatlı ve bütçenize uygun grup sağlık planını oluşturmanıza yardımcı olur.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 border-l-4 border-navy">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy flex items-center justify-center text-white shrink-0">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">İşveren Sorumluluk Sigortası</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    İşyerinde meydana gelebilecek iş kazaları veya meslek hastalıkları sonucunda işverenin, çalışanlarına karşı sorumluluğunu teminat altına alan zorunlu bir sigortadır. Olasi bir iş kazasında çalışanın tazminat talepleri, mahkeme masrafları gibi yükümlülükler bu poliçe kapsamında karşılanır. Çalışanlarınızın güvenliği kadar, işveren olarak sizin mali korunmanız da önemlidir. İş Kanunu gereği yaptırılması gereken işveren sorumluluk sigortasını, işyerinizin faaliyet alanına uygun limitlerle en iyi koşullarda sunuyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 border-l-4 border-navy">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy flex items-center justify-center text-white shrink-0">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">Üçüncü Şahıs Mali Sorumluluk Sigortaları</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    İşletme faaliyetleriniz sırasında üçüncü kişilere veya mallarına verebileceğiniz zararlara karşı sizi koruyan poliçelerdir. Örneğin, bir üretim tesisinin komşu bina veya çevreye verebileceği zararlar, bir mağazada müşterinin başına gelebilecek kazalar, bir fuar standında oluşabilecek hasarlar gibi durumlarda üçüncü şahıs sorumluluk sigortanız devreye girer. Her sektöre uygun özel sorumluluk poliçelerimiz ile beklenmedik tazminat taleplerine karşı işletmenizi güvence altına alıyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 border-l-4 border-navy">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy flex items-center justify-center text-white shrink-0">
                  <Building2 className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">Profesyonel Sorumluluk (Mesleki Mali Sorumluluk) Sigortası</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Doktorlar, avukatlar, mali müşavirler, mühendisler, sigorta acenteleri gibi profesyonellerin mesleki faaliyetlerini icra ederken müşterilerine verebilecekleri olası zararlar için koruma sağlar. Örneğin, bir doktorun hatalı tedavi iddiası (malpraktis), bir avukatın dava süreçlerinde yaptığı hata veya bir mühendisin proje hesaplamasında doğan zarar bu kapsamdadır. İleri Grup Sigorta, farklı meslek gruplarına özel mesleki sorumluluk poliçeleri sunmakta; sağlık sektöründe Tıbbi Kötü Uygulama (Malpraktis) Sigortası gibi kritik ürünlerle uzmanların yanında olmaktadır.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 border-l-4 border-navy">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy flex items-center justify-center text-white shrink-0">
                  <Factory className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">Ticari Yangın ve Property (Emtia/Mülk) Sigortaları</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fabrika, ofis, depo, mağaza gibi ticari işletmenizin mülkünü ve içindeki demirbaş, stok, makine-teçhizat gibi varlıkları yangın, sel, fırtına, deprem, hırsızlık gibi risklere karşı koruyoruz. İşletmenizin faaliyet alanına uygun olarak yangın poliçenizi ek teminatlarla zenginleştiriyoruz (örneğin, kar kaybı sigortası ile olası bir hasar sonrası iş durmasından kaynaklı gelir kaybınızı da teminat altına alabiliyoruz). Doğru limitlerle yapılmış bir ticari sigorta poliçesi, olası felaketlerde işletmenizin yeniden ayağa kalkmasını sağlar.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 border-l-4 border-navy">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy flex items-center justify-center text-white shrink-0">
                  <HardHat className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">Mühendislik Sigortaları</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    İnşaat All Risks (Tüm Riskler) Sigortası, Montaj Sigortası, Makine Kırılması Sigortası, Elektronik Cihaz Sigortası gibi mühendislik branşındaki ürünlerle, projelerinizi ve ekipmanlarınızı beklenmedik teknik risklere karşı güvence altına alıyoruz. Örneğin, bir inşaat projesinde şantiye sahasında meydana gelebilecek hasarlar İnşaat All Risks ile teminat altındayken; fabrikanızdaki üretim makinelerinin ani ve beklenmedik arızaları Makine Kırılması Sigortası ile güvence altına alınır. Projelerinizin kesintisiz yürümesi için mühendislik poliçelerimiz yanınızda.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 border-l-4 border-navy">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy flex items-center justify-center text-white shrink-0">
                  <Truck className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">Nakliyat ve Lojistik Sigortaları</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ticari faaliyetleriniz kapsamında taşınan ürünlerinizi veya hammaddelerinizi, sevkiyat esnasında oluşabilecek zararlara karşı koruma altına alıyoruz. Emtia Nakliyat Sigortası ile kara, deniz, hava veya demiryolu fark etmeksizin mallarınızın taşınması sırasında doğabilecek hasarları (kaza, çarpma, devrilme, hırsızlık, su hasarı vb.) poliçe şartlarınıza göre tazmin ediyoruz. Ayrıca uluslararası taşımacılıkta CMR sigortası, Kıymet Sigortası, Nakliyat Sorumluluk Sigortası gibi özel ürünlerle lojistik sektörünün risklerini yönetmenize yardımcı oluyoruz. İleri Grup Sigorta, online nakliyat poliçe giriş sistemi (Nakliyat Giriş portalı) ile yük taşıyan firmalara hızlı ve pratik sigortalama imkânı da sağlamaktadır.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 border-l-4 border-navy">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy flex items-center justify-center text-white shrink-0">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-navy">Siber Sigorta</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dijital çağda şirketinizin karşılaşabileceği siber risklere (veri ihlalleri, hacker saldırıları, sistem kesintileri, fidye yazılımı saldırıları vb.) karşı hazırlanmanız için Siber Sorumluluk Sigortası sunuyoruz. Bu poliçe, olası bir siber saldırı sonucunda şirketinizin uğrayacağı maddi zararları, üçüncü şahıs taleplerini, itibar yönetimi masraflarını ve hatta uzmanlık desteği giderlerini karşılar. Özellikle müşteri verisi tutan, online platformları aktif kullanan işletmeler için siber sigorta artık lüks değil bir ihtiyaçtır. Siber dünyadaki tehditlere karşı da İleri Grup Sigorta yanınızda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="inline-block px-4 py-2 bg-gold/20 text-gold text-sm font-bold mb-4">
              Özel Vurgu - Hem Bireysel hem Kurumsal için
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sağlık Turizmi Komplikasyon Sigortası</h2>
            <div className="h-1 w-20 bg-gold mb-6" />
            <p className="text-white/70 text-lg leading-relaxed">
              İleri Grup Sigorta, Türkiye'de hızla büyüyen Sağlık Turizmi sektörünün ihtiyaçlarına yönelik yenilikçi bir ürün olan Komplikasyon Sigortasını sunmaktadır. Bu ürün, yurt dışından ülkemize tedavi için gelen hastaların operasyon sonrası yaşayabileceği komplikasyon risklerini güvence altına alan özel bir sigortadır.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto mb-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gold">Neden Önemli?</h3>
              <p className="text-white/70 leading-relaxed">
                Türkiye, sağlık turizminde dünya çapında bir cazibe merkezi haline gelmiştir. 2023 yılında ülkemize 1,4 milyon sağlık turisti gelmiş ve yaklaşık 2,3 milyar USD gelir elde edilmiştir. Hedef, önümüzdeki birkaç yıl içinde yıllık 2 milyon sağlık turisti barajını aşmaktır. Bu büyük hacimli sektörde, Komplikasyon Sigortası zorunlu bir standart haline gelmektedir. 2024 itibarıyla birçok sağlık kuruluşu, yabancı hastalarına komplikasyon sigortasını sunmaya başlamış ve devlet de bu poliçelere %70'e varan teşvik getirmiştir.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gold">Kimler İçin?</h3>
              <p className="text-white/70 leading-relaxed">
                Bu ürün, özellikle hastaneler, tıp merkezleri, estetik klinikleri, diş klinikleri gibi sağlık turizmi kapsamında hizmet veren kurumlar için geliştirilmiştir (B2B). Bu kurumlar, yurt dışından gelen hastalarına tedavi paketi sunarken komplikasyon sigortasını da dahil ederek hem yasal gerekliliği yerine getirebilir hem de hastalarına ekstra güvence sağlayabilir. Aynı zamanda bireysel yabancı hastalar (B2C) da, eğer sağlık kurumu sağlamadıysa, kendi girişimleriyle bize başvurarak bu poliçeyi edinebilirler. İleri Grup Sigorta, bugüne kadar 100'ün üzerinde uluslararası hastanın komplikasyon poliçesini düzenlemiş, 50+ sağlık kurumu ile çözüm ortaklığı yapmıştır.
              </p>
            </div>
          </div>

          <div className="bg-white/5 p-8 max-w-4xl mx-auto mb-12">
            <h3 className="text-xl font-bold text-gold mb-6">Kapsam & Avantajlar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-white/80">6 ay boyunca komplikasyonlara karşı 7.500 USD'ye kadar teminat</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-white/80">Hastanın Türkiye'ye geri dönüş uçak bileti, konaklaması, tedavi masrafları dahil geniş kapsam</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-white/80">İsteğe bağlı refakatçi seyahat ve konaklama teminatı</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-white/80">Poliçe ile entegre 35.000 USD seyahat sağlık sigortası dekontu</span>
              </div>
              <div className="flex items-start gap-3 md:col-span-2">
                <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-white/80">VIP plan ile ilk 7 günde dahi ortaya çıkan komplikasyonların teminat altına alınması</span>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-xl font-bold text-gold">Dijital Başvuru ve Yönetim</h3>
            <p className="text-white/70 leading-relaxed">
              İleri Grup Sigorta, sağlık kuruluşlarına yönelik Türkiye'deki ilk B2B dijital komplikasyon sigortası platformunu geliştirmiştir. Bu platform sayesinde hastaneler ve sağlık turizmi aracıları, ellerindeki hasta listeleri için toplu veya tekil olarak 7/24 online poliçe düzenleyebilmektedir. Sistemin çok dilli arayüzü sayesinde Türkçe veya İngilizce olarak işlemler yapılabilir; ilk poliçenizi oluşturmak sadece 10 dakikanızı alır, sonraki poliçelerde bu süre dakikalar, hatta saniyeler mertebesindedir. Ayrıca platform, teşvik raporlama modülüne sahiptir – hastane bazında, ay sonlarında poliçe listelerinizi ve prim tutarlarını tek tuşla raporlayabilir, Ticaret Bakanlığı teşvik başvurusu için gerekli evrakları zahmetsizce hazırlayabilirsiniz. İleri Grup Sigorta, bu alandaki teknolojik üstünlüğü ve uzman insan desteği ile sağlık turizmi alanında sigorta süreçlerini kolaylaştıran stratejik bir iş ortağınızdır.
            </p>

            <div className="p-6 bg-gold/10 border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <ArrowRight className="h-6 w-6 text-gold" />
                <span className="text-white font-medium">Detaylı bilgi için SaglikTurizmiSigortasi.com adresindeki mikro sitemizi ziyaret edin veya doğrudan menümüzden "Komplikasyon Sigortası" bölümüne tıklayın.</span>
              </div>
              <Button asChild className="bg-gold text-navy font-bold px-8 py-4 h-auto rounded-none whitespace-nowrap">
                <Link href="/saglik-turizmi">Detaylı Bilgi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gold">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-navy">Size En Uygun Sigorta Çözümünü Bulalım</h2>
            <p className="text-navy/70">
              Uzman danışmanlarımız ihtiyacınız olan teminatları analiz eder ve en uygun fiyatlı seçenekleri sunar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-navy text-white px-8 py-6 h-auto text-lg rounded-none">
                <Link href="/iletisim">Online Teklif Al</Link>
              </Button>
              <Button asChild variant="outline" className="border-navy text-navy px-8 py-6 h-auto text-lg rounded-none hover:bg-navy hover:text-white">
                <Link href="/iletisim">Bizi Arayın</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
