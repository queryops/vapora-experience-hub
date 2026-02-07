import productsNicotina from "@/assets/products-nicotina.png";
import productHaze from "@/assets/product-haze.png";
import productPanamericana from "@/assets/product-panamericana.png";
import productRuntz from "@/assets/product-runtz-ak47.png";
import productHalfBakd from "@/assets/product-half-bakd.png";
import productCapsulas from "@/assets/product-capsulas-runtz.png";
import productBateria from "@/assets/product-bateria-brass.png";

interface FeedPost {
  id: string;
  image: string;
  caption: string;
  likes: string;
}

const feedPosts: FeedPost[] = [
  { id: "1", image: productsNicotina, caption: "IV TEMPORADA — Vapers de Nicotina 🔥", likes: "2.4K" },
  { id: "2", image: productHaze, caption: "DISPONIBLE — Nuevo Disposable Haze ✨", likes: "1.8K" },
  { id: "3", image: productPanamericana, caption: "PANAMERICANA — Nuevamente Disponible 🌎", likes: "3.1K" },
  { id: "4", image: productRuntz, caption: "EL GREENCH — Quinta Temporada 🌿", likes: "2.7K" },
  { id: "5", image: productHalfBakd, caption: "HALF BAK'D PHC — Miami Punch 💜", likes: "1.5K" },
  { id: "6", image: productCapsulas, caption: "CÁPSULAS RUNTZ — Sour Diesel 🍋", likes: "2.0K" },
  { id: "7", image: productBateria, caption: "BATERÍA BRASS — 900 mAh ⚡", likes: "1.2K" },
];

const InstagramFeed = () => {
  return (
    <section id="catalogo" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center neon-border">
                <span className="text-sm">📸</span>
              </div>
              <div>
                <span className="font-display font-bold text-foreground text-lg">@VAP.ORA</span>
                <span className="block text-xs text-primary font-mono">LIVE</span>
              </div>
            </div>
            <p className="text-muted-foreground font-body text-sm">
              Seguinos en Instagram para drops exclusivos y nuevas cepas
            </p>
          </div>
          <a
            href="https://www.instagram.com/vap.ora"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-foreground font-display text-xs font-bold tracking-wider uppercase hover:border-primary hover:text-primary transition-all"
          >
            Seguir en Instagram →
          </a>
        </div>
      </div>

      {/* Horizontal Scroll Feed */}
      <div className="relative">
        <div className="flex gap-4 px-6 overflow-x-auto pb-6 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {feedPosts.map((post) => (
            <div
              key={post.id}
              className="group flex-shrink-0 w-72 sm:w-80 rounded-xl overflow-hidden glass-card-hover cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                {/* Post Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-body text-foreground leading-snug">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-primary">❤️ {post.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default InstagramFeed;
