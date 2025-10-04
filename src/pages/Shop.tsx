import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import productTerracotta from "@/assets/product-terracotta.jpg";
import productHandloom from "@/assets/product-handloom.jpg";
import productPainting from "@/assets/product-painting.jpg";
import productJewelry from "@/assets/product-jewelry.jpg";

const products = [
  {
    id: "1",
    name: "Bishnupur Terracotta Vase",
    price: 1200,
    artist: "Ranjan Das",
    image: productTerracotta,
    category: "Pottery",
  },
  {
    id: "2",
    name: "Handloom Silk Saree",
    price: 8500,
    artist: "Meera Banerjee",
    image: productHandloom,
    category: "Textiles",
  },
  {
    id: "3",
    name: "Patachitra Folk Art Scroll",
    price: 3500,
    artist: "Sunil Chitrakar",
    image: productPainting,
    category: "Art",
  },
  {
    id: "4",
    name: "Dokra Metal Jewelry Set",
    price: 2800,
    artist: "Kalpana Karmakar",
    image: productJewelry,
    category: "Jewelry",
  },
  {
    id: "5",
    name: "Clay Diya Set",
    price: 450,
    artist: "Ranjan Das",
    image: productTerracotta,
    category: "Pottery",
  },
  {
    id: "6",
    name: "Cotton Handloom Kurta",
    price: 2200,
    artist: "Meera Banerjee",
    image: productHandloom,
    category: "Textiles",
  },
  {
    id: "7",
    name: "Traditional Wall Art",
    price: 4500,
    artist: "Sunil Chitrakar",
    image: productPainting,
    category: "Art",
  },
  {
    id: "8",
    name: "Brass Bangle Set",
    price: 1800,
    artist: "Kalpana Karmakar",
    image: productJewelry,
    category: "Jewelry",
  },
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Header */}
        <section className="bg-primary/5 py-12 border-b">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-foreground mb-4">Shop All Products</h1>
            <p className="text-muted-foreground text-lg">
              Discover authentic handcrafted treasures from Kolkata's finest artisans
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b bg-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                />
              </div>
              
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="pottery">Pottery</SelectItem>
                  <SelectItem value="textiles">Textiles</SelectItem>
                  <SelectItem value="art">Art</SelectItem>
                  <SelectItem value="jewelry">Jewelry</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="featured">
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
