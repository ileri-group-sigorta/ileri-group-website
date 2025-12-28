import * as React from "react";
import { Search, FileText, CreditCard, ClipboardList, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function OnlineIslemlerPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Online İşlemler</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Sigorta işlemlerinizi şubeye gitmeden, 7/24 hızlı ve güvenli bir şekilde dijital platformumuz üzerinden gerçekleştirebilirsiniz.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="rounded-none border-navy/5 hover:border-gold transition-all group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center text-navy mx-auto mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                  <FileText className="h-8 w-8" />
                </div>
                <CardTitle>Teklif Al</CardTitle>
                <CardDescription>Size özel en uygun sigorta teklifini anında oluşturun.</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-navy text-white rounded-none">Hemen Başla</Button>
              </CardContent>
            </Card>

            <Card className="rounded-none border-navy/5 hover:border-gold transition-all group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center text-navy mx-auto mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                  <Search className="h-8 w-8" />
                </div>
                <CardTitle>Poliçe Sorgula</CardTitle>
                <CardDescription>Mevcut poliçelerinizin detaylarını ve vade tarihlerini görüntüleyin.</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-navy text-white rounded-none">Sorgula</Button>
              </CardContent>
            </Card>

            <Card className="rounded-none border-navy/5 hover:border-gold transition-all group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center text-navy mx-auto mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                  <CreditCard className="h-8 w-8" />
                </div>
                <CardTitle>Prim Ödeme</CardTitle>
                <CardDescription>Poliçe taksitlerinizi kredi kartı ile güvenli bir şekilde ödeyin.</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-navy text-white rounded-none">Ödeme Yap</Button>
              </CardContent>
            </Card>

            <Card className="rounded-none border-navy/5 hover:border-gold transition-all group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center text-navy mx-auto mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                  <ClipboardList className="h-8 w-8" />
                </div>
                <CardTitle>Hasar İşlemleri</CardTitle>
                <CardDescription>Hasar ihbarında bulunun ve dosya durumunuzu takip edin.</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-navy text-white rounded-none">Hasar Dosyası</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Inquiry Form */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-white p-8 shadow-lg border-t-4 border-gold">
            <h3 className="text-2xl font-bold text-navy mb-6 flex items-center">
              <HelpCircle className="mr-2 h-6 w-6 text-gold" />
              Hızlı Poliçe Sorgulama
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">T.C. Kimlik / Vergi No</label>
                <Input placeholder="Giriş yapın..." className="rounded-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Plaka veya Poliçe No</label>
                <Input placeholder="Örn: 34ABC123" className="rounded-none" />
              </div>
              <Button className="w-full bg-gold text-navy font-bold py-6 h-auto text-lg rounded-none mt-4">Sorgula</Button>
              <p className="text-center text-xs text-muted-foreground mt-4 italic">
                * Bilgileriniz SSL sertifikası ile korunmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
