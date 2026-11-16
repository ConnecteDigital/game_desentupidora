import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PhotoSlot } from "@/components/PhotoSlot";
import { CtaBand } from "@/components/CtaBand";
import { addressLine, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "A empresa",
  description: `Conheça a ${site.name}: empresa de desentupimento e limpeza técnica com sede em Belo Horizonte.`,
};

const values = [
  { t: "Diagnóstico antes da solução", d: "Identificamos a causa da obstrução antes de escolher o método. É o que evita o retorno do problema." },
  { t: "Tudo por escrito", d: "Escopo, prazo e valor formalizados antes do início. Sem cobrança que o cliente não aprovou." },
  { t: "Respeito à operação do cliente", d: "Serviços agendados no horário que menos interfere na rotina do imóvel ou da produção." },
  { t: "Cuidado com o ambiente", d: "Áreas protegidas durante o serviço e local entregue limpo ao final." },
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="A empresa" title="Uma empresa de saneamento predial com sede em Belo Horizonte." lead="Atuamos em desentupimento, hidrojateamento, limpa fossa e limpeza de caixas de gordura e d'água para clientes corporativos e residenciais." />
      <section className="sec">
        <div className="wrap split">
          <Reveal className="prose">
            <h2>Quem somos</h2>
            <p>
              A {site.name} presta serviços de desobstrução e limpeza de sistemas de esgoto, gordura e
              reservatórios em {site.region}. Trabalhamos com frota e equipamentos próprios e com uma
              rotina comercial preparada para atender empresas, condomínios e órgãos públicos.
            </p>
            <p>
              Nosso compromisso é resolver o problema do cliente com método: entender o sistema,
              propor a solução adequada, executar no prazo e deixar registrado o que foi feito.
            </p>
            <dl className="facts">
              <div><dt>Razão social</dt><dd>{site.legalName}</dd></div>
              <div><dt>CNPJ</dt><dd>{site.cnpj}</dd></div>
              <div><dt>Endereço</dt><dd>{addressLine}</dd></div>
              <div><dt>Área de atendimento</dt><dd>{site.region}</dd></div>
            </dl>
          </Reveal>
          <Reveal delay={120}><PhotoSlot file="empresa.jpg" label="equipe e frota na sede" ratio="4 / 5" /></Reveal>
        </div>
      </section>
      <section className="sec sec-mist">
        <div className="wrap">
          <Reveal className="sec-head"><p className="eyebrow">Como pensamos</p><h2>Princípios que orientam cada atendimento.</h2></Reveal>
          <ul className="seg seg-4">
            {values.map((v, i) => <Reveal as="li" key={v.t} delay={i * 80}><h3>{v.t}</h3><p>{v.d}</p></Reveal>)}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
