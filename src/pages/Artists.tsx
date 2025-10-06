import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Package, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { artists } from "@/data/artists";
import { useState, useMemo } from "react";

const Artists = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArtists = useMemo(() => {
    if (!searchQuery) return artists;
    
    return artists.filter(
      (artist) =>
        artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artist.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artist.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Header */}
        <section className="gradient-hero py-20 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-6">Meet Our Master Artisans</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Every product tells a story. Discover the talented creators behind our authentic handcrafted treasures, 
                each preserving centuries-old traditions with passion and skill.
              </p>
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8 bg-card border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by name, specialty, or location..."
                className="pl-12 h-14 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Artists Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredArtists.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No artists found matching your search.</p>
              </div>
            ) : (
              <>
                <p className="text-muted-foreground mb-8 text-center">
                  Showing {filteredArtists.length} talented artisan{filteredArtists.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArtists.map((artist) => (
                    <Card key={artist.id} className="overflow-hidden border-border hover-lift group">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={artist.image}
                          alt={`${artist.name}'s work`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-slow"
                        />
                      </div>
                      
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{artist.name}</h3>
                        
                        <div className="flex items-center gap-2 text-muted-foreground mb-3">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-sm">{artist.location}</span>
                        </div>
                        
                        <div className="inline-block gradient-hero text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                          {artist.specialty}
                        </div>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-2">{artist.bio}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Package className="w-4 h-4" />
                            <span>{artist.products} products</span>
                          </div>
                          
                          <Button asChild>
                            <Link to={`/artists/${artist.id}`}>View Profile</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
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
