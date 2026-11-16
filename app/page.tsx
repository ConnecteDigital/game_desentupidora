import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PipeArt } from "@/components/PipeArt";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { Clip } from "@/components/Clip";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/services";
import { segments, site, waDefault } from "@/lib/site";

const steps = [
  { t: "Levantamento", d: "Entendemos o imóvel, o sistema e o histórico do problema, por visita ou pelas informações enviadas." },
  { t: "Orçamento", d: "Escopo, método, prazo e valor informados antes do início, sem cobrança que o cliente não aprovou." },
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
            <h1>Desentupimento e limpeza técnica, 24 horas por dia.</h1>
            <p className="hero-lead">
              Há {site.years} anos atendendo empresas, condomínios e residências com hidrojateamento,
              desobstrução de redes, limpa fossa e limpeza de caixas de gordura e d'água.
            </p>
            <div className="hero-actions">
              <a href={waDefault} target="_blank" rel="noopener" className="btn btn-teal"><Icon name="whats" size={22} /> Chamar no WhatsApp</a>
              <Link href="/servicos" className="btn btn-ghost-light">Conhecer os serviços</Link>
            </div>
          </div>
          <PipeArt />
        </div>
        <div className="wrap">
          <dl className="hero-facts">
            <div><dt>Experiência</dt><dd>{site.years} anos de mercado</dd></div>
            <div><dt>Atendimento</dt><dd>24 horas, de domingo a domingo</dd></div>
            <div><dt>Área atendida</dt><dd>{site.region}</dd></div>
            <div><dt>CNPJ</dt><dd>{site.cnpj}</dd></div>
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
            <h2>Técnicos qualificados e um processo previsível, do chamado à nota fiscal.</h2>
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
            <Photo file="fachada.jpg" alt="Fachada da sede da Game Desentupidora em Belo Horizonte" />
            <Photo file="frota.jpg" alt="Caminhão a vácuo e veículos da frota na garagem da sede" />
            <Photo file="succao.jpg" alt="Técnico em serviço de sucção com mangote" />
            <Photo file="caixa-dagua-depois.jpg" alt="Caixa d'água após limpeza e higienização" />
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <p className="eyebrow">Em campo</p>
            <h2>Nossa equipe em atendimento.</h2>
          </Reveal>
          <Reveal className="clips">
            <Clip name="desentupimento-pia" label="Desentupimento de pia de cozinha" />
            <Clip name="desentupimento-ralo" label="Desobstrução de rede de esgoto" />
            <Clip name="desentupimento-area-servico" label="Desentupimento em área de serviço" />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
