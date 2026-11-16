export function Photo({ file, alt, ratio }: { file: string; alt: string; ratio?: string }) {
  return (
    <figure className="photo" style={ratio ? { aspectRatio: ratio } : undefined}>
      <img src={`/fotos/${file}`} alt={alt} loading="lazy" />
    </figure>
  );
}
