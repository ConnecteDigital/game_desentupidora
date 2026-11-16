"use client";
import { useState } from "react";
import { services } from "@/lib/services";
import { whatsappLink } from "@/lib/site";

const perfis = ["Empresa", "Condomínio", "Órgão público / licitação", "Residência"];

export function QuoteForm({ defaultService = "" }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const lines = [
      "Olá! Gostaria de solicitar uma proposta.",
      "",
      `Nome: ${v("nome")}`,
      v("empresa") && `Empresa/Condomínio: ${v("empresa")}`,
      v("cnpj") && `CNPJ: ${v("cnpj")}`,
      `Perfil: ${v("perfil")}`,
      `Serviço: ${v("servico")}`,
      `Telefone: ${v("telefone")}`,
      v("email") && `E-mail: ${v("email")}`,
      v("local") && `Local do serviço: ${v("local")}`,
      v("mensagem") && `\nDetalhes: ${v("mensagem")}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
    setSent(true);
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-row">
        <label>Nome<input name="nome" required autoComplete="name" /></label>
        <label>Empresa ou condomínio<input name="empresa" autoComplete="organization" /></label>
      </div>
      <div className="form-row">
        <label>Telefone<input name="telefone" type="tel" required autoComplete="tel" placeholder="(31) " /></label>
        <label>E-mail<input name="email" type="email" autoComplete="email" /></label>
      </div>
      <div className="form-row">
        <label>Perfil
          <select name="perfil" defaultValue={perfis[0]}>{perfis.map((p) => <option key={p}>{p}</option>)}</select>
        </label>
        <label>Serviço
          <select name="servico" defaultValue={defaultService || services[0].title}>
            {services.map((s) => <option key={s.slug}>{s.title}</option>)}
            <option>Contrato de manutenção</option>
            <option>Outro</option>
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>CNPJ<input name="cnpj" inputMode="numeric" placeholder="Opcional" /></label>
        <label>Local do serviço<input name="local" placeholder="Bairro e cidade" /></label>
      </div>
      <label>Descreva a necessidade<textarea name="mensagem" rows={4} placeholder="Tipo de imóvel, volume aproximado, periodicidade desejada, prazo do edital…" /></label>
      <div className="form-foot">
        <button className="btn btn-primary" type="submit">Enviar pelo WhatsApp</button>
        <p role="status">{sent ? "Abrimos o WhatsApp com a sua solicitação preenchida. Basta confirmar o envio." : "Ao enviar, o WhatsApp abre com a solicitação já preenchida para o nosso comercial."}</p>
      </div>
    </form>
  );
}
