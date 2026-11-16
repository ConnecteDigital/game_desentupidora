import type { Metadata } from "next";
import "@fontsource-variable/outfit";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Desentupimento, hidrojateamento e limpa fossa em BH`, template: `%s | ${site.name}` },
  description: `${site.tagline}. Atendimento a empresas, condomínios e órgãos públicos em ${site.region}.`,
  openGraph: { type: "website", locale: "pt_BR", siteName: site.name },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  legalName: site.legalName,
  taxID: site.cnpj,
  telephone: "+55 31 9701-0128",
  url: site.url,
  areaServed: site.region,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo" className="skip">Ir para o conteúdo</a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
