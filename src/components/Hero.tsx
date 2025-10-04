import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Users, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-artisan.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Image with Overlay */}
      <div className="relative h-[600px] md:h-[700px]">
        <img
          src={heroImage}
          alt="Local artisans of Kolkata showcasing traditional crafts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <div className="inline-flex items-center gap-2 bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <Leaf className="w-4 h-4" />
                <span className="text-sm font-medium">100% Eco-Friendly Packaging</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Connecting Kolkata's<br />Artists to the World
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Discover authentic handcrafted treasures directly from local artisans. 
                Every purchase supports traditional craftsmanship and sustainable practices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="group">
                  Shop Now
                  <ArrowRight className="w-5 h-5 transition-smooth group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                  Become a Seller
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-card border-y">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">200+</h3>
              <p className="text-muted-foreground">Local Artists</p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">1000+</h3>
              <p className="text-muted-foreground">Unique Products</p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">100%</h3>
              <p className="text-muted-foreground">Plastic-Free</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
