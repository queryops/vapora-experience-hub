import { Truck, Clock, MessageCircle, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Entregas Inmediatas",
    description: "Recibí tu pedido el mismo día. Sin drama, con calidad.",
  },
  {
    icon: Clock,
    title: "Nuevas Cepas Semanales",
    description: "Actualizamos el catálogo con las cepas más exclusivas del mercado.",
  },
  {
    icon: MessageCircle,
    title: "Atención por WhatsApp",
    description: "Respuestas en menos de 5 minutos. Soporte real, no bots.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad Garantizada",
    description: "Productos verificados con certificación de laboratorio.",
  },
];

const testimonials = [
  {
    name: "Carlos M.",
    text: "La calidad del Runtz AK-47 es brutal. Lo mejor que probé en mucho tiempo.",
    rating: 5,
  },
  {
    name: "Valentina R.",
    text: "Entregas rápidas y producto siempre fresco. VAPORA no falla.",
    rating: 5,
  },
  {
    name: "Andrés P.",
    text: "La batería Brass es un 10/10. Discreta, elegante y dura toda la semana.",
    rating: 5,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-20 md:py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Features Grid */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary tracking-[0.3em] uppercase">
            Experiencia
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3 tracking-tight">
            ¿Por qué <span className="gradient-text-neon">VAPORA</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card-hover rounded-xl p-6 text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-gold-electric tracking-[0.3em] uppercase">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            Lo que dicen nuestros <span className="gradient-text-gold">clientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass-card-hover rounded-xl p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gold-electric text-sm">★</span>
                ))}
              </div>
              <p className="text-foreground/80 font-body text-sm leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-display font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-display font-medium text-foreground">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
