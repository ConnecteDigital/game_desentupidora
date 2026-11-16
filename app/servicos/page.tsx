import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Desentupimento, hidrojateamento, limpa fossa, sucção de resíduos e limpeza de caixas de gordura e d'água.",
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Serviços" title="Soluções para sistemas de esgoto, gordura e reservatórios." lead="Do ponto entupido à manutenção programada de toda a rede do imóvel." />
      <section className="sec">
        <div className="wrap">
          <ul className="rows">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug}>
                <Link href={`/servicos/${s.slug}`} className="row">
                  <span className="row-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="row-ico"><Icon name={s.icon} size={32} /></span>
                  <span className="row-txt"><strong>{s.title}</strong><span>{s.short}</span></span>
                  <span className="row-go"><Icon name="arrow" size={22} /></span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
