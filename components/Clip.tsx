"use client";
import { useEffect, useRef } from "react";

/** Vídeo curto, mudo e em loop, que só toca enquanto está visível na tela. */
export function Clip({ name, label }: { name: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    }, { threshold: 0.35 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <figure className="clip">
      <video ref={ref} muted loop playsInline preload="none" poster={`/videos/${name}.jpg`} aria-label={label}>
        <source src={`/videos/${name}.mp4`} type="video/mp4" />
      </video>
      <figcaption>{label}</figcaption>
    </figure>
  );
}
