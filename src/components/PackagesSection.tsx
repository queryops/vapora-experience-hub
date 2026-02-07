import { Zap, Palette, Shield, Store, CreditCard, Calendar, Mail, Server, Lock } from "lucide-react";

interface PackageFeature {
  text: string;
  included: boolean;
}

interface Package {
  name: string;
  badge?: string;
  price: string;
  priceNote: string;
  description: string;
  features: PackageFeature[];
  cta: string;
  ctaLink: string;
  highlighted?: boolean;
}

const packages: Package[] = [
  {
    name: "Plan Básico",
    badge: "GRATIS",
    price: "Incluido",
    priceNote: "En el plan gratuito",
    description: "Tu presencia digital esencial. Todo lo que necesitás para empezar.",
    features: [
      { text: "Landing page estática profesional", included: true },
      { text: "Botón de WhatsApp integrado", included: true },
      { text: "Diseño 100% responsive", included: true },
      { text: "SEO básico optimizado", included: true },
      { text: "Imágenes optimizadas", included: true },
      { text: "Deploy en Vercel/Netlify", included: true },
    ],
    cta: "Empezar Gratis",
    ctaLink: "https://wa.me/573000000000?text=Hola%2C%20quiero%20el%20Plan%20Básico",
  },
  {
    name: "Plan Pro",
    badge: "POPULAR",
    price: "Incluido",
    priceNote: "Todavía en el plan gratuito",
    description: "Más funcionalidades sin costo adicional. Máximo impacto.",
    features: [
      { text: "Todo del Plan Básico", included: true },
      { text: "Galería de productos/servicios", included: true },
      { text: "Testimonios dinámicos (JSON local)", included: true },
      { text: "Personalización de colores/branding", included: true },
      { text: "Animaciones premium", included: true },
      { text: "Feed de Instagram integrado", included: true },
    ],
    cta: "Quiero Este",
    ctaLink: "https://wa.me/573000000000?text=Hola%2C%20quiero%20el%20Plan%20Pro",
    highlighted: true,
  },
  {
    name: "Plan Premium",
    badge: "DE PAGO",
    price: "Cotizar",
    priceNote: "Según requerimientos",
    description: "Funcionalidades avanzadas que requieren backend y servicios premium.",
    features: [
      { text: "Todo del Plan Pro", included: true },
      { text: "Tienda online con carrito", included: true },
      { text: "Pagos (Stripe, MercadoPago)", included: true },
      { text: "Formularios con CRM", included: true },
      { text: "Reservas y calendarios", included: true },
      { text: "Correos con dominio propio", included: true },
    ],
    cta: "Cotizar Ahora",
    ctaLink: "https://wa.me/573000000000?text=Hola%2C%20quiero%20cotizar%20el%20Plan%20Premium",
  },
];

const premiumAddons = [
  { icon: Store, label: "Tienda online con carrito", note: "E-commerce completo" },
  { icon: CreditCard, label: "Métodos de pago", note: "Stripe · MercadoPago · Shopify" },
  { icon: Zap, label: "Formularios avanzados + CRM", note: "Captura y gestión de leads" },
  { icon: Calendar, label: "Reservas online y calendarios", note: "Booking integrado" },
  { icon: Mail, label: "Correos con dominio propio", note: "info@tumarca.com" },
  { icon: Server, label: "Hosting premium", note: "Más almacenamiento y velocidad" },
];

const PackagesSection = () => {
  return (
    <section id="paquetes" className="py-20 md:py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary tracking-[0.3em] uppercase">
            Planes
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3 tracking-tight">
            Tu Web, <span className="gradient-text-gold">Tu Nivel</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body">
            Desde landing pages gratuitas hasta tiendas completas. Elegí el plan que se ajuste a tu negocio.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-6 md:p-8 transition-all duration-500 ${
                pkg.highlighted
                  ? "neon-border bg-card scale-[1.02] md:scale-105"
                  : "glass-card-hover"
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-display font-bold tracking-wider mb-4 ${
                    pkg.highlighted
                      ? "bg-primary text-primary-foreground"
                      : pkg.badge === "DE PAGO"
                        ? "bg-gold-electric/20 text-gold-electric"
                        : "bg-primary/10 text-primary"
                  }`}
                >
                  {pkg.badge === "GRATIS" && "⭐ "}
                  {pkg.badge === "POPULAR" && "🔥 "}
                  {pkg.badge === "DE PAGO" && "💰 "}
                  {pkg.badge}
                </div>
              )}

              <h3 className="text-2xl font-display font-bold text-foreground">{pkg.name}</h3>
              <p className="text-muted-foreground text-sm mt-2 font-body">{pkg.description}</p>

              <div className="mt-6 mb-6">
                <span className="text-3xl font-display font-bold text-foreground">{pkg.price}</span>
                <span className="block text-xs text-muted-foreground font-mono mt-1">{pkg.priceNote}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-2">
                    <span className="text-primary text-sm mt-0.5">✓</span>
                    <span className="text-sm text-foreground/80 font-body">{feature.text}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={pkg.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3.5 rounded-full font-display text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                  pkg.highlighted
                    ? "bg-primary text-primary-foreground hover:scale-105"
                    : "border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
                style={pkg.highlighted ? { boxShadow: "var(--shadow-neon-sm)" } : {}}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Premium Add-ons */}
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-5 h-5 text-gold-electric" />
            <h3 className="text-xl font-display font-bold text-foreground">
              Servicios Premium <span className="gradient-text-gold">(De Pago)</span>
            </h3>
          </div>
          <p className="text-sm text-muted-foreground font-body mb-8 max-w-2xl">
            Estos servicios requieren funciones no disponibles en el plan gratuito: backend, bases de datos, pasarelas de pago y más. Contactanos para una cotización personalizada.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {premiumAddons.map((addon) => (
              <div
                key={addon.label}
                className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <addon.icon className="w-5 h-5 text-gold-electric flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-display font-bold text-foreground">{addon.label}</span>
                  <span className="block text-xs text-muted-foreground mt-0.5">{addon.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
