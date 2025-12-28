import * as React from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
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
            Sorularınız, önerileriniz veya sigorta ihtiyaçlarınız için uzman ekibimizle dilediğiniz zaman iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-navy">Bize Ulaşın</h2>
                <div className="h-1 w-20 bg-gold" />
                <p className="text-muted-foreground text-lg">Size en kısa sürede dönüş sağlayacağız.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-navy/5 text-navy">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Telefon</h4>
                    <p className="text-sm text-muted-foreground">+90 (212) 000 00 00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-navy/5 text-navy">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">E-Posta</h4>
                    <p className="text-sm text-muted-foreground">info@ilerigroupsigorta.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-navy/5 text-navy">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Adres</h4>
                    <p className="text-sm text-muted-foreground">Merkez Mah. Sigorta Sok. No:1 Kat:3 İstanbul</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-navy/5 text-navy">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Çalışma Saatleri</h4>
                    <p className="text-sm text-muted-foreground">Pzt - Cmt: 09:00 - 18:00</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-muted flex items-center justify-center border-navy/5 border">
                <span className="text-muted-foreground font-medium italic">Harita Görünümü (Yakında)</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-navy p-10 text-white relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 -m-12 rounded-full" />
              <h3 className="text-2xl font-bold mb-8">İletişim Formu</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Adınız Soyadınız</label>
                    <Input placeholder="John Doe" className="bg-white/5 border-white/10 rounded-none text-white placeholder:text-white/30" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">E-Posta Adresiniz</label>
                    <Input type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 rounded-none text-white placeholder:text-white/30" />
                  </div>
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
    </div>
  );
}
