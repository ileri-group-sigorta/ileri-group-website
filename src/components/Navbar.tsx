"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Shield, ChevronDown, Home, Info, Briefcase, FileText, Phone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: "Ana Sayfa", href: "/", icon: Home },
  { name: "Hakkımızda", href: "/hakkimizda", icon: Info },
  {
    name: "Sigortalar",
    href: "#",
    icon: Briefcase,
    children: [
      { name: "Bireysel Sigortalar", href: "/bireysel" },
      { name: "Kurumsal Sigortalar", href: "/kurumsal" },
      { name: "Sağlık Turizmi Komplikasyon", href: "/saglik-turizmi" },
    ],
  },
  { name: "Online İşlemler", href: "/online-islemler", icon: FileText },
  { name: "İletişim", href: "/iletisim", icon: Phone },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="sticky top-0 z-50 w-full glass border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-7 w-7 md:h-8 md:w-8 text-gold" />
              <span className="text-lg md:text-xl font-bold tracking-tight text-navy dark:text-gold uppercase">
                İleri Group <span className="font-light hidden sm:inline">Sigorta</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                item.children ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-gold focus:outline-none">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link href={child.href} className="w-full cursor-pointer">
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-gold",
                      pathname === item.href ? "text-gold" : "text-navy/80 dark:text-white/80"
                    )}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Button asChild className="bg-navy hover:bg-navy-light text-white dark:bg-gold dark:text-navy dark:hover:bg-gold/90">
                <Link href="/online-islemler">Teklif Al</Link>
              </Button>
            </div>

            <a 
              href="tel:+905334046051" 
              className="lg:hidden flex items-center gap-2 px-3 py-2 bg-gold text-navy font-bold text-sm rounded-none"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Ara</span>
            </a>
          </div>
        </div>
      </nav>

      <MobileBottomNav pathname={pathname} />
    </>
  );
}

function MobileBottomNav({ pathname }: { pathname: string }) {
  const [showInsuranceMenu, setShowInsuranceMenu] = React.useState(false);

  const isInsurancePath = pathname === "/bireysel" || pathname === "/kurumsal" || pathname === "/saglik-turizmi";

  return (
    <>
      {showInsuranceMenu && (
        <div 
          className="lg:hidden fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
          onClick={() => setShowInsuranceMenu(false)}
        >
          <div 
            className="absolute bottom-20 left-4 right-4 bg-white dark:bg-navy rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-navy text-white">
              <h3 className="font-bold">Sigorta Türleri</h3>
            </div>
            <div className="p-2">
              <Link
                href="/bireysel"
                className="flex items-center gap-3 p-4 hover:bg-gold/10 transition-colors rounded-lg"
                onClick={() => setShowInsuranceMenu(false)}
              >
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-full">
                  <Briefcase className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-bold text-navy dark:text-white">Bireysel Sigortalar</p>
                  <p className="text-xs text-muted-foreground">Sağlık, Kasko, Konut</p>
                </div>
              </Link>
              <Link
                href="/kurumsal"
                className="flex items-center gap-3 p-4 hover:bg-gold/10 transition-colors rounded-lg"
                onClick={() => setShowInsuranceMenu(false)}
              >
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-full">
                  <Briefcase className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-bold text-navy dark:text-white">Kurumsal Sigortalar</p>
                  <p className="text-xs text-muted-foreground">İşyeri, Nakliyat, Sorumluluk</p>
                </div>
              </Link>
              <Link
                href="/saglik-turizmi"
                className="flex items-center gap-3 p-4 hover:bg-gold/10 transition-colors rounded-lg"
                onClick={() => setShowInsuranceMenu(false)}
              >
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-full">
                  <Briefcase className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-bold text-navy dark:text-white">Sağlık Turizmi</p>
                  <p className="text-xs text-muted-foreground">Komplikasyon Sigortası</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-navy border-t border-gray-200 dark:border-white/10 safe-area-inset-bottom">
        <div className="grid grid-cols-5 h-16">
          <Link
            href="/"
            className={cn(
              "flex flex-col items-center justify-center gap-1 transition-colors",
              pathname === "/" ? "text-gold" : "text-navy/60 dark:text-white/60"
            )}
          >
            <Home className="h-5 w-5" />
            <span className="text-[10px] font-medium">Ana Sayfa</span>
          </Link>

          <Link
            href="/hakkimizda"
            className={cn(
              "flex flex-col items-center justify-center gap-1 transition-colors",
              pathname === "/hakkimizda" ? "text-gold" : "text-navy/60 dark:text-white/60"
            )}
          >
            <Info className="h-5 w-5" />
            <span className="text-[10px] font-medium">Hakkımızda</span>
          </Link>

          <button
            onClick={() => setShowInsuranceMenu(!showInsuranceMenu)}
            className={cn(
              "flex flex-col items-center justify-center gap-1 transition-colors relative",
              isInsurancePath || showInsuranceMenu ? "text-gold" : "text-navy/60 dark:text-white/60"
            )}
          >
            <div className={cn(
              "absolute -top-5 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors",
              isInsurancePath || showInsuranceMenu ? "bg-gold" : "bg-navy"
            )}>
              <Briefcase className={cn(
                "h-6 w-6",
                isInsurancePath || showInsuranceMenu ? "text-navy" : "text-white"
              )} />
            </div>
            <span className="text-[10px] font-medium mt-6">Sigortalar</span>
          </button>

          <Link
            href="/online-islemler"
            className={cn(
              "flex flex-col items-center justify-center gap-1 transition-colors",
              pathname === "/online-islemler" ? "text-gold" : "text-navy/60 dark:text-white/60"
            )}
          >
            <FileText className="h-5 w-5" />
            <span className="text-[10px] font-medium">İşlemler</span>
          </Link>

          <Link
            href="/iletisim"
            className={cn(
              "flex flex-col items-center justify-center gap-1 transition-colors",
              pathname === "/iletisim" ? "text-gold" : "text-navy/60 dark:text-white/60"
            )}
          >
            <Phone className="h-5 w-5" />
            <span className="text-[10px] font-medium">İletişim</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
