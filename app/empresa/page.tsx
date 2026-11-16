import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { CtaBand } from "@/components/CtaBand";
import { addressLine, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "A empresa",
  description: `Conheça a ${site.name}: empresa de desentupimento e limpeza técnica com sede em Belo Horizonte.`,
};

const values = [
  { t: "Técnicos qualificados", d: "Equipe treinada para identificar a causa da obstrução e escolher o método certo para cada sistema." },
  { t: "Atendimento rápido", d: "Equipes e veículos prontos para chegar ao local e resolver, a qualquer hora do dia ou da noite." },
  { t: "Respeito à operação do cliente", d: "Serviços agendados no horário que menos interfere na rotina do imóvel ou da produção." },
  { t: "Cuidado com o ambiente", d: "Áreas protegidas durante o serviço e local entregue limpo ao final." },
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="A empresa" title={`Há ${site.years} anos resolvendo problemas de esgoto em Belo Horizonte e região.`} lead="Atuamos em desentupimento, hidrojateamento, limpa fossa e limpeza de caixas de gordura e d'água para clientes corporativos e residenciais." />
      <section className="sec">
        <div className="wrap split">
          <Reveal className="prose">
            <h2>Quem somos</h2>
            <p>
              A {site.name} está há {site.years} anos no mercado, prestando serviços de desobstrução e
              limpeza de sistemas de esgoto, gordura e reservatórios em {site.region}. Trabalhamos com
              técnicos qualificados, frota e equipamentos próprios, e atendemos {site.hours}.
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
              <div><dt>Atendimento</dt><dd>{site.hours}</dd></div>
            </dl>
          </Reveal>
          <Reveal delay={120}><Photo file="frota.jpg" alt="Frota da Game Desentupidora na sede, em Belo Horizonte" ratio="4 / 5" /></Reveal>
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
