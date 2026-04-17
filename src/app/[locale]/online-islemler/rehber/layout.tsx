const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Online işlemler güvenli mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, tüm online işlemlerimiz 256-bit SSL sertifikası ile korunmaktadır. Kişisel bilgileriniz şifrelenerek iletilir.",
      },
    },
    {
      "@type": "Question",
      name: "Hangi ödeme yöntemlerini kullanabilirim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kredi kartı ve banka kartı ile güvenli ödeme yapabilirsiniz. Taksit seçenekleri için lütfen bizimle iletişime geçin.",
      },
    },
    {
      "@type": "Question",
      name: "Poliçemi nasıl indirebilirim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Poliçe sorgulaması yaptıktan sonra poliçenizin PDF versiyonunu indirebilir veya e-posta adresinize gönderilmesini talep edebilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Mobil cihazlardan işlem yapabilir miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, web sitemiz tüm mobil cihazlarla uyumludur. Akıllı telefon veya tabletinizden tüm online işlemleri gerçekleştirebilirsiniz.",
      },
    },
  ],
};

export default function RehberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
