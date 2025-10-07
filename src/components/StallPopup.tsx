import { useState, useEffect } from "react";
import { X, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

// Import product images
import productTerracotta from "@/assets/product-terracotta.jpg";
import silkSaree from "@/assets/silk-saree.jpg";
import patachitra from "@/assets/patachitra-art.jpg";
import dokraJewelry from "@/assets/dokra-jewelry.jpg";
import woodenDecor from "@/assets/wooden-decor.jpg";
import bambooMirror from "@/assets/bamboo-mirror.jpg";

interface StallPopupProps {
  category: string;
  onClose: () => void;
}

const categoryProducts: Record<string, Array<{id: string, name: string, price: number, artist: string, image: string}>> = {
  pottery: [
    { id: "1", name: "Bishnupur Terracotta Vase", price: 1200, artist: "Ranjan Das", image: productTerracotta },
    { id: "2", name: "Clay Diya Set (12 pieces)", price: 450, artist: "Ranjan Das", image: productTerracotta },
    { id: "3", name: "Terracotta Wall Hanging", price: 850, artist: "Gopal Pal", image: productTerracotta },
    { id: "4", name: "Handcrafted Clay Kulhad Set", price: 380, artist: "Ranjan Das", image: productTerracotta },
  ],
  textiles: [
    { id: "21", name: "Handloom Silk Saree", price: 8500, artist: "Meera Banerjee", image: silkSaree },
    { id: "22", name: "Cotton Handloom Kurta", price: 2200, artist: "Meera Banerjee", image: silkSaree },
    { id: "23", name: "Kantha Embroidered Dupatta", price: 1850, artist: "Anjali Mondal", image: silkSaree },
    { id: "24", name: "Jamdani Cotton Saree", price: 6800, artist: "Meera Banerjee", image: silkSaree },
  ],
  paintings: [
    { id: "51", name: "Patachitra Painting", price: 5500, artist: "Gopal Chitrakar", image: patachitra },
    { id: "52", name: "Kalighat Art Portrait", price: 4200, artist: "Gopal Chitrakar", image: patachitra },
    { id: "53", name: "Madhubani Art Piece", price: 3800, artist: "Lalita Devi", image: patachitra },
    { id: "54", name: "Traditional Folk Art", price: 2900, artist: "Gopal Chitrakar", image: patachitra },
  ],
  jewelry: [
    { id: "71", name: "Dokra Jewelry Set", price: 2800, artist: "Samir Das", image: dokraJewelry },
    { id: "72", name: "Brass Bangles Pair", price: 1500, artist: "Samir Das", image: dokraJewelry },
    { id: "73", name: "Silver Tribal Necklace", price: 4500, artist: "Radha Devi", image: dokraJewelry },
    { id: "74", name: "Handcrafted Earrings", price: 980, artist: "Samir Das", image: dokraJewelry },
  ],
  home: [
    { id: "91", name: "Wooden Wall Decor", price: 3200, artist: "Bikash Sutradhar", image: woodenDecor },
    { id: "92", name: "Brass Home Lamp", price: 2800, artist: "Anil Kumar", image: woodenDecor },
    { id: "93", name: "Bamboo Mirror Frame", price: 1850, artist: "Bikash Sutradhar", image: bambooMirror },
    { id: "94", name: "Decorative Pot", price: 1200, artist: "Minati Kumari", image: woodenDecor },
  ],
  accessories: [
    { id: "111", name: "Jute Shoulder Bag", price: 850, artist: "Preeti Ghosh", image: woodenDecor },
    { id: "112", name: "Leather Sandals", price: 1800, artist: "Ramesh Yadav", image: woodenDecor },
    { id: "113", name: "Handwoven Scarf", price: 1200, artist: "Anjali Mondal", image: silkSaree },
    { id: "114", name: "Bamboo Tray Set", price: 680, artist: "Bikash Sutradhar", image: bambooMirror },
  ],
};

const categoryNames: Record<string, string> = {
  pottery: "Pottery & Terracotta",
  textiles: "Textiles & Handloom",
  paintings: "Art & Paintings",
  jewelry: "Jewelry & Metalwork",
  home: "Home Decor",
  accessories: "Accessories",
};

export const StallPopup = ({ category, onClose }: StallPopupProps) => {
  const products = categoryProducts[category] || [];
  const { addToCart } = useCart();

  useEffect(() => {
    // Prevent body scroll when popup is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-card border rounded-lg shadow-elegant max-w-4xl w-full max-h-[80vh] overflow-hidden animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-serif">{categoryNames[category]}</h2>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="hover:bg-muted"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group bg-background border rounded-lg overflow-hidden hover-lift transition-smooth"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">by {product.artist}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">₹{product.price}</span>
                    <Button 
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      className="gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
