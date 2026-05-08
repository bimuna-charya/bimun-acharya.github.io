const signalWords = [
  'cloud',
  'cybersecurity',
  'networking',
  'databases',
  'react',
  'fastapi',
  'aws',
  'azure',
  'kathmandu',
];

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute inset-0 midnight-gradient" />
      <div className="absolute inset-0 quiet-grid" />
      <div className="absolute inset-0 contour-lines" />
      <div className="aurora-band aurora-band-one" />
      <div className="aurora-band aurora-band-two" />
      <div className="absolute inset-0 soft-vignette" />
      <div className="signal-strip">
        <div className="flex w-max animate-marquee gap-7 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500/70">
          {[...signalWords, ...signalWords, ...signalWords].map((word, index) => (
            <span key={`${word}-${index}`}>{word}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
