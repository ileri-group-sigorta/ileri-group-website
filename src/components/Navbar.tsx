"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, ChevronDown } from "lucide-react";
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

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-gold" />
            <span className="text-xl font-bold tracking-tight text-navy dark:text-gold uppercase">
              İleri Group <span className="font-light">Sigorta</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-gold">
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
            <Button className="bg-navy hover:bg-navy-light text-white dark:bg-gold dark:text-navy dark:hover:bg-gold/90">
              Teklif Al
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass border-t animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gold uppercase tracking-wider">{item.name}</div>
                    <div className="pl-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block text-sm text-navy/80 dark:text-white/80 hover:text-gold"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "block text-sm font-medium transition-colors hover:text-gold",
                      pathname === item.href ? "text-gold" : "text-navy/80 dark:text-white/80"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button className="w-full bg-navy hover:bg-navy-light text-white dark:bg-gold dark:text-navy">
              Teklif Al
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
