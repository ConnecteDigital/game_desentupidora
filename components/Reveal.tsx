"use client";
import { useEffect, useRef } from "react";

/** Revela o conteúdo ao entrar na tela. Sem JS (ou com movimento reduzido) o conteúdo já aparece. */
export function Reveal({
  children, delay = 0, as: Tag = "div", className = "",
}: { children: React.ReactNode; delay?: number; as?: "div" | "li" | "section" | "article"; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < innerHeight * 0.92) { el.classList.add("rv", "rv-in"); return; }
    el.classList.add("rv");
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("rv-in"); io.disconnect(); }
    }, { rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Comp = Tag as React.ElementType;
  return <Comp ref={ref} className={className} style={{ transitionDelay: `${delay}ms` }}>{children}</Comp>;
}
