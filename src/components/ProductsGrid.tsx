import productRuntz from "@/assets/product-runtz-ak47.png";
import productPanamericana from "@/assets/product-panamericana.png";
import productHaze from "@/assets/product-haze.png";
import productHalfBakd from "@/assets/product-half-bakd.png";
import productCapsulas from "@/assets/product-capsulas-runtz.png";
import productBateria from "@/assets/product-bateria-brass.png";
import mascotFloat from "@/assets/mascot-float.png";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  badge?: string;
  description: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Runtz AK-47",
    category: "Cartucho HHC",
    price: "Desde 25.000 COP",
    image: productRuntz,
    badge: "QUINTA TEMPORADA",
    description: "Hybrid · 1 Gram · El Greench Edition",
  },
  {
    id: "2",
    name: "Panamericana Series",
    category: "Cartucho Premium",
    price: "Edición Limitada",
    image: productPanamericana,
    badge: "NUEVO",
    description: "Nuevamente disponible · Colección exclusiva",
  },
  {
    id: "3",
    name: "Haze Ascend Blend",
    category: "Vape Desechable",
    price: "Desde 30.000 COP",
    image: productHaze,
    description: "Sativa · Live Resin · 3 Gram · Quantum Kush",
  },
  {
    id: "4",
    name: "Half Bak'd PHC",
    category: "Vape Desechable",
    price: "Desde 35.000 COP",
    image: productHalfBakd,
    description: "THC-P / THC-8 · 3G Disposable · Miami Punch",
  },
  {
    id: "5",
    name: "Cápsulas Runtz",
    category: "Cartucho Delta-8",
    price: "Desde 22.000 COP",
    image: productCapsulas,
    description: "Sour Diesel · Sativa · 1 Gram Vaporizer",
  },
  {
    id: "6",
    name: "Batería Brass Knuckles",
    category: "Accesorio",
    price: "35.000 COP",
    image: productBateria,
    description: "900 mAh · Adjustable · Diseño premium",
  },
];

const ProductCard = ({ product, featured = false }: { product: Product; featured?: boolean }) => (
  <div
    className={`group relative rounded-xl overflow-hidden glass-card-hover cursor-pointer ${
      featured ? "md:row-span-2" : ""
    }`}
  >
    {/* Image */}
    <div className="relative aspect-[3/4] overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-display font-bold tracking-wider">
          {product.badge}
        </div>
      )}

      {/* Vapor Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 vapor-exhale" style={{
          background: "radial-gradient(ellipse at bottom, hsla(150, 100%, 50%, 0.1) 0%, transparent 70%)"
        }} />
      </div>
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <span className="text-xs font-mono text-primary tracking-wider uppercase">
        {product.category}
      </span>
      <h3 className="text-lg font-display font-bold text-foreground mt-1">
        {product.name}
      </h3>
      <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
      <div className="flex items-center justify-between mt-3">
        <span className="text-sm font-mono font-bold text-primary">
          {product.price}
        </span>
        <span className="text-xs font-display text-foreground/60 group-hover:text-primary transition-colors tracking-wider uppercase">
          Ver más →
        </span>
      </div>
    </div>
  </div>
);

const ProductsGrid = () => {
  return (
    <section id="productos" className="relative py-20 md:py-32 px-6 overflow-hidden">
      {/* Background Mascot Watermark */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06] hidden lg:block">
        <img
          src={mascotFloat}
          alt=""
          className="w-[500px] rotate-[-15deg]"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary tracking-[0.3em] uppercase">
            Catálogo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3 tracking-tight">
            Productos <span className="gradient-text-neon">Estelares</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto font-body">
            Quinta temporada. Nuevas cepas. Mismo ritual.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              featured={index === 0}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/573000000000?text=Hola%20VAPORA%2C%20quiero%20el%20catálogo%20completo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full neon-border bg-transparent text-primary font-display text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Solicitar Catálogo Completo →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
