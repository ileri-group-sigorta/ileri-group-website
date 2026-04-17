import { routing } from "@/i18n/routing";

export const metadata = {
  title: "İleri Group Sigorta",
  description:
    "İleri Group Sigorta - 30 yılı aşkın tecrübeyle bireysel ve kurumsal sigorta çözümleri.",
  robots: { index: false, follow: true },
};

const DEFAULT_URL = `/${routing.defaultLocale}/`;

export default function RootRedirectPage() {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="refresh" content={`0; url=${DEFAULT_URL}`} />
        <link rel="canonical" href={`https://ilerigroupsigorta.com${DEFAULT_URL}`} />
        <link rel="alternate" hrefLang="tr" href="https://ilerigroupsigorta.com/tr/" />
        <link rel="alternate" hrefLang="en" href="https://ilerigroupsigorta.com/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://ilerigroupsigorta.com/tr/" />
        <title>İleri Group Sigorta</title>
      </head>
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", textAlign: "center" }}>
        <p>
          <a href="/tr/">Türkçe</a> &nbsp;|&nbsp; <a href="/en/">English</a>
        </p>
      </body>
    </html>
  );
}
