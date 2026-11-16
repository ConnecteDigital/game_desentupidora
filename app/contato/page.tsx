import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { QuoteForm } from "@/components/QuoteForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description: `Solicite uma proposta à ${site.name}. Atendimento comercial em ${site.region}.`,
};

export default function Page() {
  const a = site.address;
  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${a.street}, ${a.district}, ${a.city} - ${a.state}, ${a.zip}`)}`;
  return (
    <>
      <PageHero eyebrow="Contato" title="Fale com o nosso comercial." lead="Envie os dados do serviço e retornamos com a proposta por escrito." />
      <section className="sec">
        <div className="wrap contact">
          <div className="aside-box">
            <h2>Solicitar proposta</h2>
            <QuoteForm />
          </div>
          <ul className="contact-list">
            <li><Icon name="phone" /><div><h3>Telefone e WhatsApp</h3><a href={site.phoneHref}>{site.phoneDisplay}</a><a href={whatsappLink("Olá! Gostaria de falar com o comercial.")} target="_blank" rel="noopener">Abrir conversa no WhatsApp</a></div></li>
            {site.email && <li><Icon name="mail" /><div><h3>E-mail comercial</h3><a href={`mailto:${site.email}`}>{site.email}</a></div></li>}
            <li><Icon name="pin" /><div><h3>Endereço</h3><p>{a.street}, {a.district}<br />{a.city}/{a.state} · CEP {a.zip}</p><a href={map} target="_blank" rel="noopener">Ver no mapa</a></div></li>
            <li><Icon name="doc" /><div><h3>Dados cadastrais</h3><p>{site.legalName}<br />CNPJ {site.cnpj}</p></div></li>
          </ul>
        </div>
      </section>
    </>
  );
}
