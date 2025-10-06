import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Package, Mail, Phone, Award, Clock, ArrowLeft } from "lucide-react";
import { artists } from "@/data/artists";
import ProductCard from "@/components/ProductCard";

const ArtistProfile = () => {
  const { id } = useParams();
  const artist = artists.find((a) => a.id === id);

  if (!artist) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Artist Not Found</h1>
          <Link to="/artists">
            <Button>Back to Artists</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Back Button */}
        <section className="border-b bg-card">
          <div className="container mx-auto px-4 py-4">
            <Link to="/artists">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Artists
              </Button>
            </Link>
          </div>
        </section>

        {/* Artist Hero Section */}
        <section className="py-12 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-large">
                <img
                  src={artist.image}
                  alt={`${artist.name}'s work`}
                  className="w-full h-full object-cover hover:scale-105 transition-slow"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <Badge className="mb-4 text-sm px-4 py-1">
                    {artist.specialty}
                  </Badge>
                  <h1 className="text-5xl font-bold mb-4 text-foreground">{artist.name}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-lg">{artist.location}</span>
                  </div>
                </div>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  {artist.bio}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-primary/20 hover-lift">
                    <CardContent className="p-6 text-center">
                      <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                      <p className="text-2xl font-bold text-foreground">{artist.experience}</p>
                      <p className="text-sm text-muted-foreground">Experience</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-secondary/20 hover-lift">
                    <CardContent className="p-6 text-center">
                      <Package className="w-8 h-8 text-secondary mx-auto mb-3" />
                      <p className="text-2xl font-bold text-foreground">{artist.products}</p>
                      <p className="text-sm text-muted-foreground">Products</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex gap-4">
                  <Button size="lg" className="flex-1 gap-2">
                    <Mail className="w-5 h-5" />
                    Contact Artist
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1 gap-2">
                    <Package className="w-5 h-5" />
                    View Products
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Artist Story */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">The Artist's Journey</h2>
              <Card className="border-0 shadow-medium">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {artist.story}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        {artist.awards.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h2 className="text-4xl font-bold">Awards & Recognition</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {artist.awards.map((award, index) => (
                    <Card key={index} className="border-accent/20 hover-lift">
                      <CardContent className="p-6 flex items-center gap-4">
                        <Award className="w-6 h-6 text-accent flex-shrink-0" />
                        <p className="font-medium text-foreground">{award}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Information */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover-lift">
                  <CardContent className="p-8">
                    <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
                    <p className="font-medium mb-2">Email</p>
                    <a href={`mailto:${artist.email}`} className="text-muted-foreground hover:text-primary transition-smooth">
                      {artist.email}
                    </a>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift">
                  <CardContent className="p-8">
                    <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
                    <p className="font-medium mb-2">Phone</p>
                    <a href={`tel:${artist.phone}`} className="text-muted-foreground hover:text-primary transition-smooth">
                      {artist.phone}
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Support {artist.name.split(' ')[0]}'s Craft
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Every purchase directly supports this talented artisan and helps preserve traditional craftsmanship.
            </p>
            <Button size="xl" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20" asChild>
              <Link to="/shop">
                Browse All Products
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArtistProfile;
