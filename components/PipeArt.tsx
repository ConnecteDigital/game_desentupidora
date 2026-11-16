/** Ilustração do hero: rede de tubulações em traço contínuo, no mesmo desenho arredondado da marca. */
export function PipeArt() {
  const pipes = [
    "M40 90 H210 a40 40 0 0 1 40 40 V250 a40 40 0 0 0 40 40 H520",
    "M40 190 H130 a40 40 0 0 1 40 40 V370 a40 40 0 0 0 40 40 H400 a40 40 0 0 0 40 -40 V290",
    "M330 40 V130 a40 40 0 0 0 40 40 H480 a40 40 0 0 1 40 40 V470",
    "M90 470 V410 a40 40 0 0 1 40 -40 H170",
  ];
  return (
    <svg className="pipe-art" viewBox="0 0 560 510" fill="none" aria-hidden="true">
      {pipes.map((d, i) => (
        <g key={i}>
          <path d={d} className="pipe-bed" />
          <path d={d} className="pipe-line" pathLength={1} style={{ animationDelay: `${0.25 + i * 0.3}s` }} />
          <path d={d} className="pipe-flow" pathLength={1} style={{ animationDelay: `${1.6 + i * 0.5}s` }} />
        </g>
      ))}
      {[[40, 90], [40, 190], [330, 40], [520, 290], [520, 470], [90, 470]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="11" className="pipe-node" style={{ animationDelay: `${1.2 + i * 0.12}s` }} />
      ))}
    </svg>
  );
}
