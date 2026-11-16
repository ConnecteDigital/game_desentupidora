import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="Erro 404" title="Página não encontrada." lead="O endereço pode ter mudado ou não existe mais." />
      <section className="sec"><div className="wrap"><Link href="/" className="btn btn-primary">Voltar ao início</Link></div></section>
    </>
  );
}
