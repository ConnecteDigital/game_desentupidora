"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(scrollY > 24);
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);

  return (
    <header className={`hdr${scrolled ? " hdr-scrolled" : ""}${open ? " hdr-open" : ""}`}>
      <div className="wrap hdr-in">
        <Link href="/" className="hdr-logo" aria-label={`${site.name}: página inicial`}>
          <img src="/brand/logo-blue.png" alt={site.legalName} width={804} height={152} />
        </Link>
        <nav className="hdr-nav" aria-label="Principal">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={path.startsWith(n.href) ? "page" : undefined}>{n.label}</Link>
          ))}
        </nav>
        <div className="hdr-cta">
          <a href={site.phoneHref} className="hdr-phone">{site.phoneDisplay}</a>
          <Link href="/contato" className="btn btn-primary btn-sm">Solicitar proposta</Link>
        </div>
        <button className="hdr-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
    </header>
  );
}
