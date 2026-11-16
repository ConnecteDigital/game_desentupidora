import Link from "next/link";

export function PageHero({ eyebrow, title, lead, crumbs = [] }: { eyebrow: string; title: string; lead?: string; crumbs?: { href: string; label: string }[] }) {
  return (
    <section className="phero">
      <div className="wrap">
        <nav className="crumbs" aria-label="Você está em">
          <Link href="/">Início</Link>
          {crumbs.map((c) => <Link key={c.href} href={c.href}>{c.label}</Link>)}
        </nav>
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1>{title}</h1>
        {lead && <p className="phero-lead">{lead}</p>}
      </div>
    </section>
  );
}
