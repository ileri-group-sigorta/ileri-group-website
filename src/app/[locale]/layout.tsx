import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

const BASE_URL = "https://ilerigroupsigorta.com";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  const languages = routing.locales.reduce((acc, loc) => {
    acc[loc === "tr" ? "tr-TR" : "en-US"] = `${BASE_URL}/${loc}`;
    return acc;
  }, {} as Record<string, string>);

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: `İleri Grup Sigorta | ${locale === "tr" ? "30 Yıllık Tecrübe ve Güven" : "30 Years of Experience and Trust"}`,
      template: "%s | İleri Grup Sigorta",
    },
    description: t("description"),
    keywords: locale === "tr" 
      ? ["sigorta", "İleri Grup Sigorta", "sağlık sigortası", "kasko", "trafik sigortası", "konut sigortası", "sağlık turizmi", "komplikasyon sigortası", "İstanbul sigorta"]
      : ["insurance", "Ileri Group Insurance", "health insurance", "motor insurance", "home insurance", "health tourism", "complication insurance", "Istanbul insurance"],
    authors: [{ name: "İleri Grup Sigorta" }],
    creator: "İleri Grup Sigorta",
    publisher: "İleri Grup Sigorta",
    openGraph: {
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      url: `${BASE_URL}/${locale}`,
      siteName: "İleri Grup Sigorta",
      title: `İleri Grup Sigorta | ${locale === "tr" ? "30 Yıllık Tecrübe ve Güven" : "30 Years of Experience and Trust"}`,
      description: t("description"),
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "İleri Grup Sigorta",
        },
      ],
    },
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const tHome = await getTranslations({ locale, namespace: "home" });
  const tFooter = await getTranslations({ locale, namespace: "footer" });

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "İleri Grup Sigorta",
    alternateName: "İleri Group Sigorta",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: tHome("description"),
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
    image: `${BASE_URL}/og-image.jpg`,
    "@id": BASE_URL,
    url: BASE_URL,
    telephone: "+90-533-404-60-51",
    email: "info@ilerigroupsigorta.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: tFooter("address"),
      addressLocality: "Bağcılar",
      addressRegion: "İstanbul",
      postalCode: "34218",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.0433,
      longitude: 28.8567,
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
      name: locale === "tr" ? "Sigorta Ürünleri" : "Insurance Products",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: locale === "tr" ? "Sağlık Sigortası" : "Health Insurance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: locale === "tr" ? "Kasko Sigortası" : "Motor Insurance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: locale === "tr" ? "Konut Sigortası" : "Home Insurance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: locale === "tr" ? "Sağlık Turizmi Komplikasyon Sigortası" : "Health Tourism Complication Insurance" } },
      ],
    },
  };

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
      </body>
    </html>
  );
}
