import mascotFloat from "@/assets/mascot-float.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="relative border-t border-border py-16 px-6 overflow-hidden">
      {/* Mascot in Footer */}
      <div className="absolute right-4 md:right-12 -bottom-4 pointer-events-none opacity-[0.08] hidden sm:block">
        <img
          src={mascotFloat}
          alt=""
          className="w-[200px] md:w-[280px]"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl font-bold tracking-[0.2em] text-foreground mb-4">
              VAPORA
            </h3>
            <p className="text-muted-foreground font-body text-sm max-w-sm leading-relaxed">
              Quinta temporada. Nuevas cepas. Mismo ritual. Elevá tu experiencia con productos premium y entregas inmediatas.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/573000000000?text=Hola%20VAPORA%2C%20quiero%20info"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-primary text-primary-foreground font-display text-sm font-bold tracking-wider transition-all duration-300 hover:scale-105"
              style={{ boxShadow: "var(--shadow-neon-sm)" }}
            >
              📲 Escribinos por WhatsApp
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-foreground text-sm tracking-wider uppercase mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {["Inicio", "Productos", "Galería", "Experiencia", "Contacto"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-foreground text-sm tracking-wider uppercase mb-4">
              Redes
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/vap.ora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  📸 Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/573000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/vapora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  ✈️ Telegram
                </a>
              </li>
            </ul>

            {/* Newsletter placeholder */}
            <div className="mt-6">
              <p className="text-xs text-muted-foreground font-body mb-2">
                Entérate de drops antes que todos 🌱
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-3 py-2 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:border-primary transition-colors"
                />
                <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-display text-xs font-bold tracking-wider hover:scale-105 transition-transform">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © {currentYear} VAPORA. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground/60 font-body text-center">
            Los productos están destinados para uso legal. Consulte las regulaciones locales.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
