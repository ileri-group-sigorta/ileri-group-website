import Link from "next/link";
import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-gold" />
              <span className="text-xl font-bold tracking-tight uppercase">
                İleri Group <span className="font-light">Sigorta</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              1995'ten bu yana güven, uzmanlık ve yenilikçilik değerleriyle sigorta sektöründe öncü çözümler sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-navy transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-navy transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-navy transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-navy transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gold">Hızlı Bağlantılar</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/" className="hover:text-gold transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda" className="hover:text-gold transition-colors">Hakkımızda</Link></li>
              <li><Link href="/bireysel" className="hover:text-gold transition-colors">Bireysel Sigortalar</Link></li>
              <li><Link href="/kurumsal" className="hover:text-gold transition-colors">Kurumsal Sigortalar</Link></li>
              <li><Link href="/online-islemler" className="hover:text-gold transition-colors">Online İşlemler</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gold">Özel Çözümler</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/saglik-turizmi" className="hover:text-gold transition-colors">Sağlık Turizmi Sigortası</Link></li>
              <li><Link href="/bireysel" className="hover:text-gold transition-colors">Özel Sağlık Sigortası</Link></li>
              <li><Link href="/kurumsal" className="hover:text-gold transition-colors">Siber Sorumluluk</Link></li>
              <li><Link href="/online-islemler" className="hover:text-gold transition-colors">Poliçe Sorgulama</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gold">İletişim</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold shrink-0" />
                <span>İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <span>+90 (212) 000 00 00</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <span>info@ilerigroupsigorta.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>© 2025 İleri Group Sigorta. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
