import Link from "next/link";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-grid">
        <div className="ftr-brand">
          <img src="/brand/logo-teal.png" alt={site.legalName} width={804} height={152} />
          <p>{site.tagline}. Atendimento a empresas, condomínios e órgãos públicos em {site.region}.</p>
        </div>
        <div>
          <h3>Serviços</h3>
          <ul>{services.map((s) => <li key={s.slug}><Link href={`/servicos/${s.slug}`}>{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h3>Institucional</h3>
          <ul>{nav.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h3>Contato</h3>
          <ul>
            <li><a href={site.phoneHref}>{site.phoneDisplay}</a></li>
            {site.email && <li><a href={`mailto:${site.email}`}>{site.email}</a></li>}
            <li>{site.address.street}, {site.address.district}</li>
            <li>{site.address.city}/{site.address.state} · CEP {site.address.zip}</li>
          </ul>
        </div>
      </div>
      <div className="wrap ftr-legal">
        <span>{site.legalName} · CNPJ {site.cnpj}</span>
        <span>© {new Date().getFullYear()} Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
