import ProductCard from "./ProductCard";
import terracottaVase from "@/assets/terracotta-vase.jpg";
import silkSaree from "@/assets/silk-saree.jpg";
import patachitra from "@/assets/patachitra-art.jpg";
import dokraJewelry from "@/assets/dokra-jewelry.jpg";

const products = [
  {
    id: "1",
    name: "Bishnupur Terracotta Vase",
    price: 1200,
    artist: "Ranjan Das",
    image: terracottaVase,
    category: "Pottery",
  },
  {
    id: "2",
    name: "Handloom Silk Saree",
    price: 8500,
    artist: "Meera Banerjee",
    image: silkSaree,
    category: "Textiles",
  },
  {
    id: "3",
    name: "Patachitra Folk Art Scroll",
    price: 3500,
    artist: "Sunil Chitrakar",
    image: patachitra,
    category: "Art",
  },
  {
    id: "4",
    name: "Dokra Metal Jewelry Set",
    price: 2800,
    artist: "Kalpana Karmakar",
    image: dokraJewelry,
    category: "Jewelry",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Crafts
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover handpicked treasures from Kolkata's finest artisans, each piece telling a unique story
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
