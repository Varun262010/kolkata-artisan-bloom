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
  // Pottery & Terracotta (20 items)
  { id: "1", name: "Bishnupur Terracotta Vase", price: 1200, artist: "Ranjan Das", image: productTerracotta, category: "Pottery" },
  { id: "2", name: "Clay Diya Set (12 pieces)", price: 450, artist: "Ranjan Das", image: productTerracotta, category: "Pottery" },
  { id: "3", name: "Terracotta Wall Hanging", price: 850, artist: "Gopal Pal", image: productTerracotta, category: "Pottery" },
  { id: "4", name: "Handcrafted Clay Kulhad Set", price: 380, artist: "Ranjan Das", image: productTerracotta, category: "Pottery" },
  { id: "5", name: "Decorative Clay Pot", price: 650, artist: "Minati Kumari", image: productTerracotta, category: "Pottery" },
  { id: "6", name: "Terracotta Horse Figurine", price: 950, artist: "Gopal Pal", image: productTerracotta, category: "Pottery" },
  { id: "7", name: "Clay Incense Holder Set", price: 420, artist: "Ranjan Das", image: productTerracotta, category: "Pottery" },
  { id: "8", name: "Terracotta Jewelry Box", price: 1100, artist: "Minati Kumari", image: productTerracotta, category: "Pottery" },
  { id: "9", name: "Decorative Clay Mask", price: 780, artist: "Gopal Pal", image: productTerracotta, category: "Pottery" },
  { id: "10", name: "Terracotta Planter Set", price: 890, artist: "Ranjan Das", image: productTerracotta, category: "Pottery" },
  { id: "11", name: "Clay Water Bottle Traditional", price: 520, artist: "Minati Kumari", image: productTerracotta, category: "Pottery" },
  { id: "12", name: "Terracotta Wind Chimes", price: 680, artist: "Gopal Pal", image: productTerracotta, category: "Pottery" },
  { id: "13", name: "Clay Pen Stand", price: 340, artist: "Ranjan Das", image: productTerracotta, category: "Pottery" },
  { id: "14", name: "Terracotta Ganesha Idol", price: 1350, artist: "Minati Kumari", image: productTerracotta, category: "Pottery" },
  { id: "15", name: "Clay Fruit Bowl", price: 720, artist: "Gopal Pal", image: productTerracotta, category: "Pottery" },
  { id: "16", name: "Terracotta Bell Set", price: 580, artist: "Ranjan Das", image: productTerracotta, category: "Pottery" },
  { id: "17", name: "Clay Candle Holder Trio", price: 630, artist: "Minati Kumari", image: productTerracotta, category: "Pottery" },
  { id: "18", name: "Terracotta Serving Tray", price: 980, artist: "Gopal Pal", image: productTerracotta, category: "Pottery" },
  { id: "19", name: "Clay Tea Kettle", price: 1150, artist: "Ranjan Das", image: productTerracotta, category: "Pottery" },
  { id: "20", name: "Terracotta Decorative Plate", price: 820, artist: "Minati Kumari", image: productTerracotta, category: "Pottery" },

  // Textiles & Handloom (25 items)
  { id: "21", name: "Handloom Silk Saree", price: 8500, artist: "Meera Banerjee", image: productHandloom, category: "Textiles" },
  { id: "22", name: "Cotton Handloom Kurta", price: 2200, artist: "Meera Banerjee", image: productHandloom, category: "Textiles" },
  { id: "23", name: "Kantha Embroidered Dupatta", price: 1850, artist: "Anjali Mondal", image: productHandloom, category: "Textiles" },
  { id: "24", name: "Jamdani Cotton Saree", price: 6800, artist: "Meera Banerjee", image: productHandloom, category: "Textiles" },
  { id: "25", name: "Handwoven Table Runner", price: 980, artist: "Anjali Mondal", image: productHandloom, category: "Textiles" },
  { id: "26", name: "Baluchari Silk Saree", price: 12500, artist: "Tapati Das", image: productHandloom, category: "Textiles" },
  { id: "27", name: "Handloom Cotton Bedsheet Set", price: 3200, artist: "Meera Banerjee", image: productHandloom, category: "Textiles" },
  { id: "28", name: "Tant Saree Traditional", price: 3500, artist: "Anjali Mondal", image: productHandloom, category: "Textiles" },
  { id: "29", name: "Kantha Stitch Wall Hanging", price: 2400, artist: "Tapati Das", image: productHandloom, category: "Textiles" },
  { id: "30", name: "Handloom Silk Scarf", price: 1650, artist: "Meera Banerjee", image: productHandloom, category: "Textiles" },
  { id: "31", name: "Cotton Dhoti Traditional", price: 1200, artist: "Anjali Mondal", image: productHandloom, category: "Textiles" },
  { id: "32", name: "Kantha Quilt Queen Size", price: 5800, artist: "Tapati Das", image: productHandloom, category: "Textiles" },
  { id: "33", name: "Handloom Silk Stole", price: 2100, artist: "Meera Banerjee", image: productHandloom, category: "Textiles" },
  { id: "34", name: "Jamdani Dupatta White", price: 2800, artist: "Anjali Mondal", image: productHandloom, category: "Textiles" },
  { id: "35", name: "Cotton Saree Daily Wear", price: 1950, artist: "Tapati Das", image: productHandloom, category: "Textiles" },
  { id: "36", name: "Handloom Cushion Cover Set", price: 1400, artist: "Meera Banerjee", image: productHandloom, category: "Textiles" },
  { id: "37", name: "Kantha Embroidered Saree", price: 4200, artist: "Anjali Mondal", image: productHandloom, category: "Textiles" },
  { id: "38", name: "Silk Blend Kurta Set", price: 3800, artist: "Tapati Das", image: productHandloom, category: "Textiles" },
  { id: "39", name: "Handloom Cotton Towel Set", price: 890, artist: "Meera Banerjee", image: productHandloom, category: "Textiles" },
  { id: "40", name: "Traditional Bengali Gamcha", price: 420, artist: "Anjali Mondal", image: productHandloom, category: "Textiles" },
  { id: "41", name: "Handwoven Jute Bag", price: 650, artist: "Tapati Das", image: productHandloom, category: "Textiles" },
  { id: "42", name: "Kantha Work Kurta", price: 2600, artist: "Meera Banerjee", image: productHandloom, category: "Textiles" },
  { id: "43", name: "Handloom Table Cloth", price: 1150, artist: "Anjali Mondal", image: productHandloom, category: "Textiles" },
  { id: "44", name: "Silk Saree Party Wear", price: 9500, artist: "Tapati Das", image: productHandloom, category: "Textiles" },
  { id: "45", name: "Cotton Handloom Shawl", price: 2350, artist: "Meera Banerjee", image: productHandloom, category: "Textiles" },

  // Art & Paintings (25 items)
  { id: "46", name: "Patachitra Folk Art Scroll", price: 3500, artist: "Sunil Chitrakar", image: productPainting, category: "Art" },
  { id: "47", name: "Traditional Wall Art", price: 4500, artist: "Sunil Chitrakar", image: productPainting, category: "Art" },
  { id: "48", name: "Madhubani Painting Canvas", price: 5200, artist: "Priya Jha", image: productPainting, category: "Art" },
  { id: "49", name: "Kalighat Painting Traditional", price: 6800, artist: "Sunil Chitrakar", image: productPainting, category: "Art" },
  { id: "50", name: "Bengal Patachitra Scroll Large", price: 8500, artist: "Monoranjan Chitrakar", image: productPainting, category: "Art" },
  { id: "51", name: "Warli Art Wall Hanging", price: 3200, artist: "Priya Jha", image: productPainting, category: "Art" },
  { id: "52", name: "Durga Painting Canvas", price: 4800, artist: "Sunil Chitrakar", image: productPainting, category: "Art" },
  { id: "53", name: "Folk Art Miniature Set", price: 2900, artist: "Monoranjan Chitrakar", image: productPainting, category: "Art" },
  { id: "54", name: "Kalighat Cat Painting", price: 5600, artist: "Priya Jha", image: productPainting, category: "Art" },
  { id: "55", name: "Patachitra Ganesha Art", price: 4200, artist: "Sunil Chitrakar", image: productPainting, category: "Art" },
  { id: "56", name: "Bengal Landscape Painting", price: 7200, artist: "Monoranjan Chitrakar", image: productPainting, category: "Art" },
  { id: "57", name: "Traditional Rangoli Art", price: 2800, artist: "Priya Jha", image: productPainting, category: "Art" },
  { id: "58", name: "Patachitra Krishna Leela", price: 9500, artist: "Sunil Chitrakar", image: productPainting, category: "Art" },
  { id: "59", name: "Folk Art Bookmark Set", price: 450, artist: "Monoranjan Chitrakar", image: productPainting, category: "Art" },
  { id: "60", name: "Kalighat Style Portrait", price: 6200, artist: "Priya Jha", image: productPainting, category: "Art" },
  { id: "61", name: "Bengal Village Scene Art", price: 5800, artist: "Sunil Chitrakar", image: productPainting, category: "Art" },
  { id: "62", name: "Patachitra Calendar Art", price: 1200, artist: "Monoranjan Chitrakar", image: productPainting, category: "Art" },
  { id: "63", name: "Traditional Alpana Design", price: 3400, artist: "Priya Jha", image: productPainting, category: "Art" },
  { id: "64", name: "Folk Art Coaster Set", price: 680, artist: "Sunil Chitrakar", image: productPainting, category: "Art" },
  { id: "65", name: "Ramayana Patachitra Scroll", price: 11500, artist: "Monoranjan Chitrakar", image: productPainting, category: "Art" },
  { id: "66", name: "Bengal Tiger Painting", price: 4900, artist: "Priya Jha", image: productPainting, category: "Art" },
  { id: "67", name: "Kalighat Goddess Art", price: 7800, artist: "Sunil Chitrakar", image: productPainting, category: "Art" },
  { id: "68", name: "Folk Art Greeting Cards", price: 350, artist: "Monoranjan Chitrakar", image: productPainting, category: "Art" },
  { id: "69", name: "Patachitra Tree of Life", price: 6500, artist: "Priya Jha", image: productPainting, category: "Art" },
  { id: "70", name: "Traditional Festival Art", price: 5200, artist: "Sunil Chitrakar", image: productPainting, category: "Art" },

  // Jewelry & Metal Craft (30 items)
  { id: "71", name: "Dokra Metal Jewelry Set", price: 2800, artist: "Kalpana Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "72", name: "Brass Bangle Set", price: 1800, artist: "Kalpana Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "73", name: "Dokra Necklace Traditional", price: 3200, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "74", name: "Brass Earrings Jhumka", price: 950, artist: "Kalpana Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "75", name: "Dokra Pendant Tribal Design", price: 1450, artist: "Rina Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "76", name: "Silver Anklet Pair", price: 4200, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "77", name: "Brass Ring Set (3 pieces)", price: 680, artist: "Kalpana Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "78", name: "Dokra Choker Necklace", price: 3800, artist: "Rina Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "79", name: "Traditional Nose Pin", price: 520, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "80", name: "Brass Kada Bangle", price: 2100, artist: "Kalpana Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "81", name: "Dokra Earrings Long", price: 1350, artist: "Rina Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "82", name: "Silver Toe Ring Set", price: 1680, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "83", name: "Brass Bracelet Tribal", price: 1150, artist: "Kalpana Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "84", name: "Dokra Headpiece Traditional", price: 4500, artist: "Rina Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "85", name: "Metal Brooch Set", price: 780, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "86", name: "Brass Necklace Layered", price: 2650, artist: "Kalpana Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "87", name: "Dokra Hair Pin Set", price: 890, artist: "Rina Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "88", name: "Silver Belly Chain", price: 3800, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "89", name: "Brass Armlet Pair", price: 1950, artist: "Kalpana Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "90", name: "Dokra Ring Adjustable", price: 620, artist: "Rina Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "91", name: "Traditional Maang Tikka", price: 2400, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "92", name: "Brass Chain Anklet", price: 1320, artist: "Kalpana Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "93", name: "Dokra Cuff Bracelet", price: 2850, artist: "Rina Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "94", name: "Metal Keychain Handmade", price: 380, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "95", name: "Brass Hoop Earrings", price: 1050, artist: "Kalpana Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "96", name: "Dokra Belt Traditional", price: 3600, artist: "Rina Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "97", name: "Silver Finger Ring Set", price: 2900, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "98", name: "Brass Pendant Chain", price: 1750, artist: "Kalpana Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "99", name: "Dokra Brooch Peacock", price: 1480, artist: "Rina Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "100", name: "Traditional Payal Anklet", price: 3200, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
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
