import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Leaf, TrendingUp } from "lucide-react";
import ecoPackaging from "@/assets/eco-packaging.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Artisan Connect was born from a simple yet powerful vision: to create a direct bridge between 
                Kolkata's talented local artisans and conscious consumers worldwide, while championing 
                sustainable practices and fair trade.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Eliminating the Middleman
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  For too long, talented artisans have seen their profits diminished by layers of intermediaries. 
                  We've built a platform where creators connect directly with buyers, ensuring fair compensation 
                  and authentic relationships.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every purchase on Artisan Connect means more money in the pockets of the people who pour 
                  their heart and soul into each piece. It means preserving traditional crafts for future 
                  generations and celebrating the rich cultural heritage of Bengal.
                </p>
              </div>
              
              <div className="relative">
                <img
                  src={ecoPackaging}
                  alt="Eco-friendly packaging"
                  className="rounded-2xl shadow-large"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Our Core Values
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center border-border">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Fair Trade</h3>
                  <p className="text-muted-foreground text-sm">
                    Ensuring artisans receive fair compensation for their incredible work
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Sustainability</h3>
                  <p className="text-muted-foreground text-sm">
                    100% plastic-free packaging with eco-friendly paper bags
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Community</h3>
                  <p className="text-muted-foreground text-sm">
                    Building a supportive network of artisans and conscious consumers
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Growth</h3>
                  <p className="text-muted-foreground text-sm">
                    Empowering artisans to scale their craft into sustainable businesses
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Impact So Far
              </h2>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-muted-foreground">Active Artisans</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">0kg</div>
                  <div className="text-muted-foreground">Plastic Used</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Together, we're preserving traditional crafts, supporting local economies, and building 
                a more sustainable future—one handcrafted product at a time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
