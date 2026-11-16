import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { WhatsBox } from "@/components/WhatsBox";
import { Photo } from "@/components/Photo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description: `Fale com a ${site.name} pelo WhatsApp. Atendimento ${site.hours}, em ${site.region}.`,
};

export default function Page() {
  const a = site.address;
  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${a.street}, ${a.district}, ${a.city} - ${a.state}, ${a.zip}`)}`;
  return (
    <>
      <PageHero eyebrow="Contato" title="Fale com a nossa equipe." lead={`Atendimento ${site.hours}, em ${site.region}.`} />
      <section className="sec">
        <div className="wrap contact">
          <div className="contact-main">
            <WhatsBox title="Atendimento pelo WhatsApp" />
            <Photo file="fachada.jpg" alt="Fachada da sede da Game Desentupidora, na Rua Talco, 43, em Belo Horizonte" ratio="16 / 10" />
          </div>
          <ul className="contact-list">
            <li><Icon name="phone" /><div><h3>Telefone e WhatsApp</h3><a href={site.phoneHref}>{site.phoneDisplay}</a></div></li>
            <li><Icon name="clock" /><div><h3>Horário</h3><p>{site.hours}</p></div></li>
            {site.email && <li><Icon name="mail" /><div><h3>E-mail comercial</h3><a href={`mailto:${site.email}`}>{site.email}</a></div></li>}
            <li><Icon name="pin" /><div><h3>Endereço</h3><p>{a.street}, {a.district}<br />{a.city}/{a.state} · CEP {a.zip}</p><a href={map} target="_blank" rel="noopener">Ver no mapa</a></div></li>
            <li><Icon name="pin" /><div><h3>Área de atendimento</h3><p>{site.cities.join(", ")}</p></div></li>
            <li><Icon name="doc" /><div><h3>Dados cadastrais</h3><p>{site.legalName}<br />CNPJ {site.cnpj}</p></div></li>
          </ul>
        </div>
      </section>
    </>
  );
}
