export function Photo({ file, alt, ratio, pos }: { file: string; alt: string; ratio?: string; pos?: string }) {
  return (
    <figure className="photo" style={ratio ? { aspectRatio: ratio } : undefined}>
      <img src={`/fotos/${file}`} alt={alt} loading="lazy" style={pos ? { objectPosition: pos } : undefined} />
    </figure>
  );
}
