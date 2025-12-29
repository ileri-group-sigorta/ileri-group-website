import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VisualEditsMessenger } from "orchids-visual-edits";

export const metadata: Metadata = {
  title: "İleri Group Sigorta | 30 Yıllık Tecrübe ve Güven",
  description: "İleri Group Sigorta olarak 30 yılı aşkın tecrübemizle bireysel ve kurumsal sigorta çözümleri sunuyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
<main className="flex-grow pb-20 lg:pb-0">
            {children}
          </main>
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
