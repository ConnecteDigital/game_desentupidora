import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Espaço de foto. Se existir public/fotos/<file>, mostra a imagem;
 * enquanto não existir, mostra um quadro da marca com a legenda do que entra ali.
 */
export function PhotoSlot({ file, label, ratio = "4 / 3" }: { file: string; label: string; ratio?: string }) {
  const has = existsSync(join(process.cwd(), "public", "fotos", file));
  return (
    <figure className={`photo${has ? "" : " photo-empty"}`} style={{ aspectRatio: ratio }}>
      {has ? <img src={`/fotos/${file}`} alt={label} loading="lazy" /> : <span>Foto: {label}</span>}
    </figure>
  );
}
