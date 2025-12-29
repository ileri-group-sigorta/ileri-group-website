import * as React from "react";
import { Phone, Mail, MapPin, Clock, Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function IletisimPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">İletişim</h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl">
            Bize ulaşmak çok kolay! Sigorta ihtiyaçlarınız, poliçeleriniz veya herhangi bir sorunuz için size yardımcı olmaktan memnuniyet duyarız.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white">İletişim Bilgilerimiz</h2>
                <div className="h-1 w-16 sm:w-20 bg-gold" />
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2.5 sm:p-3 bg-navy/5 dark:bg-white/10 text-navy dark:text-gold shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-foreground">Telefon</h4>
                    <a href="tel:+905334046051" className="text-sm text-muted-foreground hover:text-gold transition-colors block py-0.5">+90 (533) 404 60 51</a>
                    <a href="tel:+905336872529" className="text-sm text-muted-foreground hover:text-gold transition-colors block py-0.5">+90 (533) 687 25 29</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2.5 sm:p-3 bg-navy/5 dark:bg-white/10 text-navy dark:text-gold shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-foreground">E-Posta</h4>
                    <a href="mailto:zuleyha@ilerigrupsigorta.com" className="text-sm text-muted-foreground hover:text-gold transition-colors block py-0.5 break-all">zuleyha@ilerigrupsigorta.com</a>
                    <a href="mailto:sevde@ilerigrupsigorta.com" className="text-sm text-muted-foreground hover:text-gold transition-colors block py-0.5 break-all">sevde@ilerigrupsigorta.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2.5 sm:p-3 bg-navy/5 dark:bg-white/10 text-navy dark:text-gold shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-foreground">Adres</h4>
                    <p className="text-sm text-muted-foreground">Edirne Çırpıcı Yolu A Sokak Merter Meridyen İş Merkezi Ofis No:433 Zeytinburnu - İstanbul</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2.5 sm:p-3 bg-navy/5 dark:bg-white/10 text-navy dark:text-gold shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-foreground">Çalışma Saatleri</h4>
                    <p className="text-sm text-muted-foreground">Pazartesi – Cuma: 09:00 – 18:00</p>
                    <p className="text-sm text-muted-foreground">Cumartesi: 10:00 – 14:00</p>
                    <p className="text-sm text-muted-foreground">(Pazar günleri kapalıyız)</p>
                    <p className="text-sm text-gold font-medium mt-1">Acil durum hattımız 7/24 aktiftir.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-white">Sosyal Medya</h3>
                <p className="text-sm text-muted-foreground">İleri Grup Sigorta&apos;yı sosyal medya hesaplarımızdan da takip edebilirsiniz.</p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <a href="https://facebook.com/ilerigrupsigorta" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-navy text-white hover:bg-gold hover:text-navy transition-colors">
                    <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="https://twitter.com/ilerigrupsigorta" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-navy text-white hover:bg-gold hover:text-navy transition-colors">
                    <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="https://linkedin.com/company/ilerigrupsigorta" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-navy text-white hover:bg-gold hover:text-navy transition-colors">
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="https://instagram.com/ilerigrupsigorta" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-navy text-white hover:bg-gold hover:text-navy transition-colors">
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">@ilerigrupsigorta</p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-white">Harita ve Ulaşım</h3>
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7095!2d28.8847!3d41.0095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb8a12345678%3A0x1234567890abcdef!2sMerter%20Meridyen%20%C4%B0%C5%9F%20Merkezi%2C%20Zeytinburnu%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border border-border"
                  />
                </div>
              </div>
            </div>

            <div className="bg-navy p-6 sm:p-8 md:p-10 text-white relative h-fit order-first lg:order-last overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gold/10 -m-4 sm:-m-6 rounded-full" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">İletişim Formu</h3>
              <p className="text-white/60 text-sm mb-6 sm:mb-8">
                Aşağıdaki formu doldurarak bize doğrudan mesaj gönderebilirsiniz. Talebinizi ilettikten sonra ekibimiz en kısa sürede size dönüş yapacaktır.
              </p>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                  <Textarea placeholder="Nasıl yardımcı olabiliriz?" className="bg-white/5 border-white/10 rounded-none text-white placeholder:text-white/30 min-h-[120px] sm:min-h-[150px]" />
                </div>
                <Button className="w-full bg-gold text-navy font-bold py-5 sm:py-6 h-auto text-base sm:text-lg rounded-none hover:bg-gold/90">
                  Gönder
                  <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Bizimle iletişime geçtiğinizde, güler yüzlü ve uzman ekibimiz size en iyi şekilde yardımcı olacaktır. İleri Grup Sigorta olarak sizi dinlemek ve ihtiyaçlarınıza çözüm üretmek için buradayız.
          </p>
        </div>
      </section>
    </div>
  );
}
