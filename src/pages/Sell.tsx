import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Users, TrendingUp, Shield, Package, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Sell = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted! We'll review and contact you within 2-3 business days.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Become a Seller on Artisan Connect
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join our community of talented artisans and showcase your work to thousands of conscious consumers. 
              No middlemen, fair profits, complete control.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/sell">Start Your Journey</Link>
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Why Sell With Us?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Higher Profits</h3>
                  <p className="text-muted-foreground">
                    Keep 85% of every sale. No hidden fees or surprise deductions. Your work, your earnings.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Direct Customer Access</h3>
                  <p className="text-muted-foreground">
                    Build relationships with buyers who appreciate authentic craftsmanship and your story.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Secure Payments</h3>
                  <p className="text-muted-foreground">
                    Fast, reliable payment processing with multiple options. Get paid on time, every time.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Easy Listing Process</h3>
                  <p className="text-muted-foreground">
                    Simple dashboard to upload products, manage inventory, and track orders effortlessly.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Marketing Support</h3>
                  <p className="text-muted-foreground">
                    We promote your products through social media, email campaigns, and featured listings.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    We handle quality checks and customer service, so you can focus on creating.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-2">Apply to Sell</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out this form and we'll get back to you within 2-3 business days
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="artist-name" className="block text-sm font-medium text-foreground mb-2">
                        Your Full Name *
                      </label>
                      <Input
                        id="artist-name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                        Location *
                      </label>
                      <Input
                        id="location"
                        placeholder="City, District"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="craft" className="block text-sm font-medium text-foreground mb-2">
                        Your Craft/Specialty *
                      </label>
                      <Input
                        id="craft"
                        placeholder="e.g., Terracotta Pottery, Handloom Weaving"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">
                        Years of Experience *
                      </label>
                      <Input
                        id="experience"
                        type="number"
                        placeholder="0"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="about" className="block text-sm font-medium text-foreground mb-2">
                        Tell Us About Your Work *
                      </label>
                      <Textarea
                        id="about"
                        placeholder="Describe your craft, techniques, and what makes your work unique..."
                        rows={5}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="products" className="block text-sm font-medium text-foreground mb-2">
                        Types of Products You Create
                      </label>
                      <Textarea
                        id="products"
                        placeholder="List the products you plan to sell..."
                        rows={3}
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sell;
