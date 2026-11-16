import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return { title: `${s.title} em Belo Horizonte`, description: s.short };
}

export default async function Page({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const others = services.filter((o) => o.slug !== s.slug);
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <PageHero eyebrow="Serviço" title={s.title} lead={s.lead} crumbs={[{ href: "/servicos", label: "Serviços" }]} />
      <section className="sec">
        <div className="wrap detail">
          <article className="prose">
            <Reveal>
              {s.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </Reveal>
            <Reveal>
              <h2>O que o serviço compreende</h2>
              <ul className="checks">
                {s.includes.map((i) => <li key={i}><Icon name="check" size={20} />{i}</li>)}
              </ul>
            </Reveal>
            <Reveal>
              <h2>Onde se aplica</h2>
              <ul className="tags">{s.applications.map((a) => <li key={a}>{a}</li>)}</ul>
            </Reveal>
            <Reveal>
              <h2>Perguntas frequentes</h2>
              <div className="faq">
                {s.faq.map((f) => (
                  <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
                ))}
              </div>
            </Reveal>
          </article>
          <aside className="aside">
            <div className="aside-box">
              <h2>Solicitar proposta</h2>
              <p>Atendimento em {site.region}.</p>
              <QuoteForm defaultService={s.title} />
            </div>
            <nav className="aside-nav" aria-label="Outros serviços">
              <h3>Outros serviços</h3>
              {others.map((o) => <Link key={o.slug} href={`/servicos/${o.slug}`}>{o.title}<Icon name="arrow" size={16} /></Link>)}
            </nav>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
