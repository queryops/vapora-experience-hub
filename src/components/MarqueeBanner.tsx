const MarqueeBanner = () => {
  const text = "NOVEDAD — QUINTA TEMPORADA — NUEVAS CEPAS — DISPONIBLE AHORA — ENTREGAS INMEDIATAS — ";

  return (
    <div className="w-full py-3 bg-primary overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-xs font-display font-bold tracking-[0.25em] text-primary-foreground uppercase mx-0"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
