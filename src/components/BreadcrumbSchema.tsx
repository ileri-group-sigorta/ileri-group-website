import { routing } from "@/i18n/routing";

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
  locale: string;
}

const BASE_URL = "https://ilerigroupsigorta.com";

export function BreadcrumbSchema({ items, locale }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item.startsWith("http") ? item.item : `${BASE_URL}/${locale}${item.item === "/" ? "" : item.item}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
