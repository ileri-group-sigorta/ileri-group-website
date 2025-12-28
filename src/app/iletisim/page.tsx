import * as React from "react";
import { Phone, Mail, MapPin, Clock, Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function IletisimPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">İletişim</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Bize ulaşmak çok kolay! Sigorta ihtiyaçlarınız, poliçeleriniz veya herhangi bir sorunuz için size yardımcı olmaktan memnuniyet duyarız.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-navy">İletişim Bilgilerimiz</h2>
                <div className="h-1 w-20 bg-gold" />
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-navy/5 text-navy">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Telefon</h4>
                    <p className="text-sm text-muted-foreground">+90 (533) 404 60 51</p>
                    <p className="text-sm text-muted-foreground">+90 (533) 687 25 29</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-navy/5 text-navy">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">E-Posta</h4>
                    <p className="text-sm text-muted-foreground">zuleyha@ilerigrupsigorta.com</p>
                    <p className="text-sm text-muted-foreground">sevde@ilerigrupsigorta.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-navy/5 text-navy">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Adres</h4>
                    <p className="text-sm text-muted-foreground">Edirne Çırpıcı Yolu A Sokak Merter Meridyen İş Merkezi Ofis No:433 Zeytinburnu - İstanbul</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-navy/5 text-navy">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Çalışma Saatleri</h4>
                    <p className="text-sm text-muted-foreground">Pazartesi – Cuma: 09:00 – 18:00</p>
                    <p className="text-sm text-muted-foreground">Cumartesi: 10:00 – 14:00</p>
                    <p className="text-sm text-muted-foreground">(Pazar günleri kapalıyız)</p>
                    <p className="text-sm text-gold font-medium mt-1">Acil durum hattımız 7/24 aktiftir.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy">Sosyal Medya</h3>
                <p className="text-sm text-muted-foreground">İleri Grup Sigorta'yı sosyal medya hesaplarımızdan da takip edebilirsiniz. En güncel haberler, kampanyalar ve sigorta tüyoları için:</p>
                <div className="flex items-center gap-3">
                  <a href="https://facebook.com/ilerigrupsigorta" target="_blank" rel="noopener noreferrer" className="p-3 bg-navy text-white hover:bg-gold hover:text-navy transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://twitter.com/ilerigrupsigorta" target="_blank" rel="noopener noreferrer" className="p-3 bg-navy text-white hover:bg-gold hover:text-navy transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="https://linkedin.com/company/ilerigrupsigorta" target="_blank" rel="noopener noreferrer" className="p-3 bg-navy text-white hover:bg-gold hover:text-navy transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://instagram.com/ilerigrupsigorta" target="_blank" rel="noopener noreferrer" className="p-3 bg-navy text-white hover:bg-gold hover:text-navy transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">@ilerigrupsigorta</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy">Harita ve Ulaşım</h3>
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7095!2d28.8847!3d41.0095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb8a12345678%3A0x1234567890abcdef!2sMerter%20Meridyen%20%C4%B0%C5%9F%20Merkezi%2C%20Zeytinburnu%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border border-navy/10"
                  />
                </div>
              </div>
            </div>

            <div className="bg-navy p-10 text-white relative h-fit">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 -m-12 rounded-full" />
              <h3 className="text-2xl font-bold mb-4">İletişim Formu</h3>
              <p className="text-white/60 text-sm mb-8">
                Aşağıdaki formu doldurarak bize doğrudan mesaj gönderebilirsiniz. Talebinizi ilettikten sonra ekibimiz en kısa sürede size dönüş yapacaktır. İster teklif isteyin, ister soru sorun, ister görüş ve önerilerinizi paylaşın – sizden haber almak bizi mutlu eder.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Adınız Soyadınız</label>
                    <Input placeholder="Adınız Soyadınız" className="bg-white/5 border-white/10 rounded-none text-white placeholder:text-white/30" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">E-Posta Adresiniz</label>
                    <Input type="email" placeholder="ornek@email.com" className="bg-white/5 border-white/10 rounded-none text-white placeholder:text-white/30" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Telefon</label>
                  <Input placeholder="+90 (5XX) XXX XX XX" className="bg-white/5 border-white/10 rounded-none text-white placeholder:text-white/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Konu</label>
                  <Input placeholder="Sigorta Teklifi Hakkında" className="bg-white/5 border-white/10 rounded-none text-white placeholder:text-white/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Mesajınız</label>
                  <Textarea placeholder="Nasıl yardımcı olabiliriz?" className="bg-white/5 border-white/10 rounded-none text-white placeholder:text-white/30 min-h-[150px]" />
                </div>
                <Button className="w-full bg-gold text-navy font-bold py-6 h-auto text-lg rounded-none hover:bg-gold/90">
                  Gönder
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bizimle iletişime geçtiğinizde, güler yüzlü ve uzman ekibimiz size en iyi şekilde yardımcı olacaktır. İleri Grup Sigorta olarak sizi dinlemek ve ihtiyaçlarınıza çözüm üretmek için buradayız.
          </p>
        </div>
      </section>
    </div>
  );
}
