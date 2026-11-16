import { Icon } from "./Icon";
import { site, waDefault } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CtaBand({ title = "Precisa de um orçamento?", text = `Chame no WhatsApp e informe o serviço e o endereço. Nossa equipe atende ${site.hours}.` }: { title?: string; text?: string }) {
  return (
    <section className="cta">
      <Reveal className="wrap cta-in">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <a href={waDefault} target="_blank" rel="noopener" className="btn btn-teal"><Icon name="whats" size={22} /> Chamar no WhatsApp</a>
          <a href={site.phoneHref} className="btn btn-ghost-light">{site.phoneDisplay}</a>
        </div>
      </Reveal>
    </section>
  );
}
