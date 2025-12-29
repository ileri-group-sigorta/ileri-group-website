import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://www.ilerisigorta.com";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "İleri Grup Sigorta | 30 Yıllık Tecrübe ve Güven",
    template: "%s | İleri Grup Sigorta",
  },
  description: "İleri Grup Sigorta olarak 30 yılı aşkın tecrübemizle bireysel ve kurumsal sigorta çözümleri sunuyoruz. Sağlık, kasko, konut, nakliyat ve sağlık turizmi sigortası.",
  keywords: ["sigorta", "İleri Grup Sigorta", "sağlık sigortası", "kasko", "trafik sigortası", "konut sigortası", "sağlık turizmi", "komplikasyon sigortası", "İstanbul sigorta"],
  authors: [{ name: "İleri Grup Sigorta" }],
  creator: "İleri Grup Sigorta",
  publisher: "İleri Grup Sigorta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: BASE_URL,
    siteName: "İleri Grup Sigorta",
    title: "İleri Grup Sigorta | 30 Yıllık Tecrübe ve Güven",
    description: "İleri Grup Sigorta olarak 30 yılı aşkın tecrübemizle bireysel ve kurumsal sigorta çözümleri sunuyoruz.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "İleri Grup Sigorta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İleri Grup Sigorta | 30 Yıllık Tecrübe ve Güven",
    description: "İleri Grup Sigorta olarak 30 yılı aşkın tecrübemizle bireysel ve kurumsal sigorta çözümleri sunuyoruz.",
    images: ["/og-image.jpg"],
    creator: "@ilerigrupsigorta",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "tr-TR": BASE_URL,
      "en-US": `${BASE_URL}/en`,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "İleri Grup Sigorta",
  alternateName: "İleri Group Sigorta",
  url: "https://www.ilerisigorta.com",
  logo: "https://www.ilerisigorta.com/logo.png",
  description: "30 yılı aşkın tecrübeyle bireysel ve kurumsal sigorta çözümleri sunan İstanbul merkezli sigorta acentesi.",
  foundingDate: "1995",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-533-404-60-51",
    contactType: "customer service",
    availableLanguage: ["Turkish", "English"],
    areaServed: "TR",
  },
  sameAs: [
    "https://facebook.com/ilerigrupsigorta",
    "https://twitter.com/ilerigrupsigorta",
    "https://linkedin.com/company/ilerigrupsigorta",
    "https://instagram.com/ilerigrupsigorta",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "İleri Grup Sigorta",
  image: "https://www.ilerisigorta.com/og-image.jpg",
  "@id": "https://www.ilerisigorta.com",
  url: "https://www.ilerisigorta.com",
  telephone: "+90-533-404-60-51",
  email: "zuleyha@ilerigrupsigorta.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Edirne Çırpıcı Yolu A Sokak Merter Meridyen İş Merkezi Ofis No:433",
    addressLocality: "Zeytinburnu",
    addressRegion: "İstanbul",
    postalCode: "34025",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.0095,
    longitude: 28.8847,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "Turkey",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sigorta Ürünleri",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sağlık Sigortası" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kasko Sigortası" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Konut Sigortası" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sağlık Turizmi Komplikasyon Sigortası" } },
    ],
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "tr" | "en")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="flex-grow pb-20 lg:pb-0">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
