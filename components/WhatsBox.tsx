import { Icon } from "./Icon";
import { site, whatsappLink } from "@/lib/site";

/** Bloco de contato: o canal comercial é o WhatsApp. */
export function WhatsBox({ title = "Solicite um orçamento", service }: { title?: string; service?: string }) {
  const msg = service
    ? `Olá! Gostaria de um orçamento para ${service.toLowerCase()}.`
    : "Olá! Gostaria de solicitar um orçamento com a Game Desentupidora.";
  return (
    <div className="wbox">
      <h2>{title}</h2>
      <p>Fale direto com a nossa equipe pelo WhatsApp. Atendimento {site.hours}.</p>
      <a className="btn btn-whats" href={whatsappLink(msg)} target="_blank" rel="noopener">
        <Icon name="whats" size={22} /> Chamar no WhatsApp
      </a>
      <a className="wbox-phone" href={site.phoneHref}>{site.phoneDisplay}</a>
      <ul>
        <li><Icon name="clock" size={18} />{site.hours}</li>
        <li><Icon name="pin" size={18} />{site.region}</li>
        <li><Icon name="check" size={18} />Orçamento antes de iniciar o serviço</li>
      </ul>
    </div>
  );
}
