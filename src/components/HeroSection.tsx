import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, hsla(213, 60%, 7%, 0.3) 0%, hsla(213, 60%, 7%, 0.6) 50%, hsl(213, 60%, 7%) 100%)`,
        }}
      />

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: "hsl(var(--neon-green))",
              boxShadow: "0 0 10px hsl(var(--neon-green))",
              animation: `float ${Math.random() * 4 + 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Season Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-neon" />
          <span className="text-xs font-mono font-medium tracking-widest text-primary uppercase">
            Quinta Temporada Disponible
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-[0.2em] text-foreground mb-6 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          VAPORA
        </h1>

        {/* Divider */}
        <div className="w-32 h-0.5 bg-primary mx-auto mb-6 animate-fade-up" style={{ animationDelay: "0.5s", boxShadow: "var(--shadow-neon-sm)" }} />

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl md:text-2xl font-display font-medium tracking-[0.15em] text-foreground/80 mb-10 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          ELEVÁ TU EXPERIENCIA
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="#productos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 animate-pulse-neon"
          >
            Explorar Catálogo ⚡
          </a>
          <a
            href="https://wa.me/573000000000?text=Hola%20VAPORA%2C%20quiero%20info"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-foreground/20 text-foreground font-display text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:border-primary hover:text-primary"
          >
            Contactar 📲
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs font-mono text-muted-foreground tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
