"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, ChevronDown, ChevronRight, Phone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  {
    name: "Sigortalar",
    href: "#",
    children: [
      { name: "Bireysel Sigortalar", href: "/bireysel" },
      { name: "Kurumsal Sigortalar", href: "/kurumsal" },
      { name: "Sağlık Turizmi Komplikasyon", href: "/saglik-turizmi" },
    ],
  },
  { name: "Online İşlemler", href: "/online-islemler" },
  { name: "İletişim", href: "/iletisim" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [expandedMenu, setExpandedMenu] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  React.useEffect(() => {
    setIsOpen(false);
    setExpandedMenu(null);
  }, [pathname]);

  const toggleSubmenu = (name: string) => {
    setExpandedMenu(expandedMenu === name ? null : name);
  };

  return (
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

          <div className="flex items-center gap-2 lg:hidden">
            <a 
              href="tel:+905334046051" 
              className="p-2 text-navy dark:text-white hover:text-gold transition-colors"
              aria-label="Telefon"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              className="p-2 text-navy dark:text-white hover:text-gold transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Menüyü Kapat" : "Menüyü Aç"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={cn(
          "lg:hidden fixed inset-0 top-16 z-50 bg-white dark:bg-navy transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="h-full overflow-y-auto overscroll-contain">
          <div className="container mx-auto px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100 dark:border-white/10 last:border-0">
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="flex items-center justify-between w-full py-4 text-base font-medium text-navy dark:text-white hover:text-gold transition-colors"
                      aria-expanded={expandedMenu === item.name}
                    >
                      <span>{item.name}</span>
                      <ChevronRight 
                        className={cn(
                          "h-5 w-5 transition-transform duration-200",
                          expandedMenu === item.name && "rotate-90"
                        )} 
                      />
                    </button>
                    <div 
                      className={cn(
                        "overflow-hidden transition-all duration-200",
                        expandedMenu === item.name ? "max-h-48 pb-4" : "max-h-0"
                      )}
                    >
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-3 text-base text-navy/70 dark:text-white/70 hover:text-gold transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-4 text-base font-medium transition-colors hover:text-gold",
                      pathname === item.href ? "text-gold" : "text-navy dark:text-white"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-6 space-y-3">
              <Button asChild className="w-full bg-gold hover:bg-gold/90 text-navy font-bold py-4 h-auto text-base">
                <Link href="/online-islemler" onClick={() => setIsOpen(false)}>
                  Online Teklif Al
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white py-4 h-auto text-base">
                <Link href="/iletisim" onClick={() => setIsOpen(false)}>
                  Bize Ulaşın
                </Link>
              </Button>
            </div>

            <div className="pt-6 pb-8 text-center">
              <p className="text-sm text-muted-foreground mb-2">Hemen Arayın</p>
              <a href="tel:+905334046051" className="text-lg font-bold text-navy dark:text-gold hover:underline">
                +90 (533) 404 60 51
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
