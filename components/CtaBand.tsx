import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CtaBand({ title = "Precisa de uma proposta formal?", text = "Envie os dados do imóvel ou do edital. Retornamos com escopo, prazo e valor por escrito, em nome da sua empresa." }: { title?: string; text?: string }) {
  return (
    <section className="cta">
      <Reveal className="wrap cta-in">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link href="/contato" className="btn btn-teal">Solicitar proposta</Link>
          <a href={site.phoneHref} className="btn btn-ghost-light">{site.phoneDisplay}</a>
        </div>
      </Reveal>
    </section>
  );
}
