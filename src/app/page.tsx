import { routing } from "@/i18n/routing";

export const metadata = {
  title: "İleri Grup Sigorta",
  description:
    "İleri Grup Sigorta - 30 yılı aşkın tecrübeyle bireysel ve kurumsal sigorta çözümleri.",
  robots: { index: false, follow: true },
};

const DEFAULT_URL = `/${routing.defaultLocale}/`;

export default function RootRedirectPage() {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="refresh" content={`0; url=${DEFAULT_URL}`} />
        <link rel="canonical" href={`https://ilerigrupsigorta.com${DEFAULT_URL}`} />
        <link rel="alternate" hrefLang="tr" href="https://ilerigrupsigorta.com/tr/" />
        <link rel="alternate" hrefLang="en" href="https://ilerigrupsigorta.com/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://ilerigrupsigorta.com/tr/" />
        <title>İleri Grup Sigorta</title>
      </head>
      <body suppressHydrationWarning style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", textAlign: "center" }}>
        <p>
          <a href="/tr/">Türkçe</a> &nbsp;|&nbsp; <a href="/en/">English</a>
        </p>
      </body>
    </html>
  );
}
