import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  artist: string;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, artist, image, category }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
    toast.success(`${name} added to cart!`);
    window.dispatchEvent(new Event("open-cart"));
  };

  return (
    <Card className="group overflow-hidden border-border hover:shadow-large transition-slow cursor-pointer">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-slow group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-smooth">
          <Button size="icon" variant="secondary" className="rounded-full shadow-medium">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-secondary/90 text-secondary-foreground text-xs font-medium rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-smooth">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">by {artist}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">₹{price.toLocaleString()}</span>
          <Button size="sm" className="gap-2" onClick={handleAddToCart}>
            <ShoppingCart className="w-4 h-4" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
