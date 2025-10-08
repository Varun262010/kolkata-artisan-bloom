import { useState, useEffect } from "react";
import { X, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { getCategoryProducts } from "@/data/products";

interface StallPopupProps {
  category: string;
  onClose: () => void;
}

const categoryNames: Record<string, string> = {
  pottery: "Pottery & Terracotta",
  textiles: "Textiles & Handloom",
  paintings: "Art & Paintings",
  jewelry: "Jewelry & Metalwork",
  home: "Home Decor",
  accessories: "Accessories",
};

export const StallPopup = ({ category, onClose }: StallPopupProps) => {
  const products = getCategoryProducts(category);
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
