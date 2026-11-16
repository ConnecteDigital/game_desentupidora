import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/CtaBand";
import { segments, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Empresas e contratos",
  description: "Contratos de manutenção, limpezas programadas e fornecimento para empresas, condomínios e licitações.",
};

const models = [
  { t: "Serviço avulso", d: "Atendimento pontual com proposta formal, para demandas específicas ou primeira contratação." },
  { t: "Limpeza programada", d: "Calendário de limpezas de caixas de gordura, fossas, colunas e reservatórios, com datas definidas no ano." },
  { t: "Contrato de manutenção", d: "Atendimento recorrente com escopo, periodicidade e condições comerciais fixadas em contrato." },
];

const docs = [
  "Proposta comercial com escopo, método e prazo",
  "Cartão CNPJ e dados cadastrais para homologação de fornecedor",
  "Emissão de nota fiscal de serviço",
  "Registro do serviço executado ao final de cada atendimento",
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Empresas e contratos" title="Um fornecedor preparado para compras corporativas e públicas." lead="Do orçamento à nota fiscal, falamos a língua do setor de compras, da administradora e da comissão de licitação." />
      <section className="sec">
        <div className="wrap">
          <Reveal className="sec-head"><p className="eyebrow">Modelos de contratação</p><h2>Do atendimento pontual ao contrato anual.</h2></Reveal>
          <ol className="steps steps-3">
            {models.map((m, i) => (
              <Reveal as="li" key={m.t} delay={i * 90}>
                <span className="steps-n">{String(i + 1).padStart(2, "0")}</span><h3>{m.t}</h3><p>{m.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <section className="sec sec-mist">
        <div className="wrap split">
          <Reveal className="split-head">
            <p className="eyebrow">Documentação</p>
            <h2>O que entregamos para o seu processo de compra.</h2>
            <p>Precisa de um documento específico para cadastro ou edital? Informe na solicitação e verificamos a disponibilidade.</p>
            <dl className="facts">
              <div><dt>Razão social</dt><dd>{site.legalName}</dd></div>
              <div><dt>CNPJ</dt><dd>{site.cnpj}</dd></div>
            </dl>
          </Reveal>
          <Reveal delay={100}>
            <ul className="checks checks-lg">{docs.map((d) => <li key={d}><Icon name="check" size={22} />{d}</li>)}</ul>
          </Reveal>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <Reveal className="sec-head"><p className="eyebrow">Segmentos</p><h2>Quem contrata a {site.name}.</h2></Reveal>
          <ul className="seg seg-3">
            {segments.map((s, i) => <Reveal as="li" key={s.title} delay={(i % 3) * 80}><h3>{s.title}</h3><p>{s.text}</p></Reveal>)}
          </ul>
        </div>
      </section>
      <CtaBand title="Tem um edital ou uma cotação em aberto?" text="Envie o termo de referência ou a descrição do serviço. Retornamos com a proposta dentro do prazo do processo." />
    </>
  );
}
