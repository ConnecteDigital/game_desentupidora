import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PipeArt } from "@/components/PipeArt";
import { Reveal } from "@/components/Reveal";
import { PhotoSlot } from "@/components/PhotoSlot";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/services";
import { segments, site } from "@/lib/site";

const steps = [
  { t: "Levantamento", d: "Entendemos o imóvel, o sistema e o histórico do problema, por visita ou pelas informações enviadas." },
  { t: "Proposta por escrito", d: "Escopo, método, prazo e valor formalizados em nome da empresa, com CNPJ e dados para cadastro." },
  { t: "Execução", d: "Equipe e equipamentos dimensionados para o serviço, em horário combinado com a operação do cliente." },
  { t: "Fechamento", d: "Teste de funcionamento, registro do que foi executado e emissão de nota fiscal." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-in">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">{site.region}</p>
            <h1>Desentupimento e limpeza técnica para quem não pode parar.</h1>
            <p className="hero-lead">
              Hidrojateamento, desobstrução de redes, limpa fossa e limpeza de caixas de gordura e d'água
              para empresas, condomínios e órgãos públicos.
            </p>
            <div className="hero-actions">
              <Link href="/contato" className="btn btn-teal">Solicitar proposta</Link>
              <Link href="/servicos" className="btn btn-ghost-light">Conhecer os serviços</Link>
            </div>
          </div>
          <PipeArt />
        </div>
        <div className="wrap">
          <dl className="hero-facts">
            <div><dt>Razão social</dt><dd>{site.legalName}</dd></div>
            <div><dt>CNPJ</dt><dd>{site.cnpj}</dd></div>
            <div><dt>Sede</dt><dd>{site.address.district}, {site.address.city}/{site.address.state}</dd></div>
            <div><dt>Comercial</dt><dd><a href={site.phoneHref}>{site.phoneDisplay}</a></dd></div>
          </dl>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <span key={k}>
              {services.map((s) => <i key={s.slug}>{s.title}</i>)}
              <i>Contratos de manutenção</i>
            </span>
          ))}
        </div>
      </div>

      <section className="sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <p className="eyebrow">Serviços</p>
            <h2>Tudo o que envolve esgoto, gordura e reservatórios, em um só fornecedor.</h2>
          </Reveal>
          <ul className="cards">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={(i % 3) * 80}>
                <Link href={`/servicos/${s.slug}`} className="card">
                  <span className="card-ico"><Icon name={s.icon} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <span className="card-more">Ver serviço <Icon name="arrow" size={18} /></span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec-mist">
        <div className="wrap split">
          <Reveal className="split-head">
            <p className="eyebrow">Quem atendemos</p>
            <h2>Estrutura comercial para clientes corporativos.</h2>
            <p>
              Atendemos a demanda pontual e também a rotina: limpezas programadas, contratos de manutenção
              e fornecimento para processos de compra formais.
            </p>
            <Link href="/contratos" className="link-arrow">Empresas e contratos <Icon name="arrow" size={18} /></Link>
          </Reveal>
          <ul className="seg">
            {segments.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 2) * 80}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <p className="eyebrow">Como trabalhamos</p>
            <h2>Um processo previsível, do primeiro contato à nota fiscal.</h2>
          </Reveal>
          <ol className="steps">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.t} delay={i * 90}>
                <span className="steps-n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec sec-navy">
        <div className="wrap">
          <Reveal className="sec-head">
            <p className="eyebrow eyebrow-light">Frota e estrutura</p>
            <h2>Veículos e equipamentos próprios para cada tipo de serviço.</h2>
          </Reveal>
          <Reveal className="gallery">
            <PhotoSlot file="frota-1.jpg" label="caminhão da frota" ratio="16 / 10" />
            <PhotoSlot file="servico-1.jpg" label="equipe em hidrojateamento" />
            <PhotoSlot file="servico-2.jpg" label="limpeza de caixa de gordura" />
            <PhotoSlot file="frota-2.jpg" label="veículo de apoio" />
            <PhotoSlot file="servico-3.jpg" label="limpeza de caixa d'água" />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
