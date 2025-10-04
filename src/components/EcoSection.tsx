import { Leaf, Package, Recycle, Heart } from "lucide-react";
import ecoPackaging from "@/assets/eco-packaging.jpg";

const EcoSection = () => {
  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <img
                src={ecoPackaging}
                alt="Eco-friendly paper bag packaging with Artisan Connect branding"
                className="rounded-2xl shadow-large w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-eco rounded-full blur-3xl opacity-50" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Our Eco Promise</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sustainable Packaging,<br />Beautiful Deliveries
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              Every order arrives in our signature paper bags with hand-drawn logos — 
              no plastic, just pure craftsmanship and care for our planet.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">100% Paper Packaging</h3>
                  <p className="text-muted-foreground text-sm">Biodegradable, recyclable, and beautifully branded</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Recycle className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Zero Plastic Waste</h3>
                  <p className="text-muted-foreground text-sm">Committed to protecting our environment</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Support Local Artists</h3>
                  <p className="text-muted-foreground text-sm">Every purchase empowers traditional craftspeople</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoSection;
