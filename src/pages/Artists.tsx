import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Package } from "lucide-react";
import { Link } from "react-router-dom";
import productTerracotta from "@/assets/product-terracotta.jpg";
import productHandloom from "@/assets/product-handloom.jpg";
import productPainting from "@/assets/product-painting.jpg";
import productJewelry from "@/assets/product-jewelry.jpg";

const artists = [
  {
    id: "1",
    name: "Ranjan Das",
    location: "Bishnupur, West Bengal",
    specialty: "Terracotta Pottery",
    products: 24,
    image: productTerracotta,
    bio: "Third-generation potter specializing in traditional Bishnupur terracotta work.",
  },
  {
    id: "2",
    name: "Meera Banerjee",
    location: "Shantiniketan, West Bengal",
    specialty: "Handloom Textiles",
    products: 18,
    image: productHandloom,
    bio: "Master weaver creating exquisite handloom sarees and traditional fabrics.",
  },
  {
    id: "3",
    name: "Sunil Chitrakar",
    location: "Kalighat, Kolkata",
    specialty: "Patachitra Paintings",
    products: 32,
    image: productPainting,
    bio: "Renowned patachitra artist preserving ancient Bengali scroll painting traditions.",
  },
  {
    id: "4",
    name: "Kalpana Karmakar",
    location: "Dariapur, West Bengal",
    specialty: "Dokra Metal Craft",
    products: 21,
    image: productJewelry,
    bio: "Skilled artisan crafting traditional Dokra jewelry using lost-wax technique.",
  },
];

const Artists = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Header */}
        <section className="bg-secondary/5 py-12 border-b">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-foreground mb-4">Meet Our Artisans</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Every product tells a story. Get to know the talented creators behind our authentic handcrafted treasures, 
              each preserving centuries-old traditions with passion and skill.
            </p>
          </div>
        </section>

        {/* Artists Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {artists.map((artist) => (
                <Card key={artist.id} className="overflow-hidden border-border hover:shadow-large transition-slow">
                  <div className="md:flex">
                    <div className="md:w-1/3 aspect-square md:aspect-auto">
                      <img
                        src={artist.image}
                        alt={`${artist.name}'s work`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <CardContent className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{artist.name}</h3>
                      
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{artist.location}</span>
                      </div>
                      
                      <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {artist.specialty}
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{artist.bio}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Package className="w-4 h-4" />
                          <span>{artist.products} products</span>
                        </div>
                        
                        <Button>View Profile</Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Are You an Artisan?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join our community of talented creators and showcase your work to thousands of conscious consumers
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/sell">Become a Seller</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Artists;
