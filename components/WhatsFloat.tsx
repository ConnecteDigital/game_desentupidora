import { Icon } from "./Icon";
import { waDefault } from "@/lib/site";

export function WhatsFloat() {
  return (
    <a className="wfloat" href={waDefault} target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
      <Icon name="whats" size={30} />
    </a>
  );
}
