import { Card } from "@/components/ui/card";
import { Palette, Shirt, Gem, TreePine, Home, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Art",
    icon: Palette,
    count: 25,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Textiles",
    icon: Shirt,
    count: 25,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Jewelry",
    icon: Gem,
    count: 30,
    color: "from-amber-500 to-yellow-500",
  },
  {
    name: "Pottery",
    icon: TreePine,
    count: 20,
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Home Decor",
    icon: Home,
    count: 50,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Accessories",
    icon: ShoppingBag,
    count: 50,
    color: "from-pink-500 to-rose-500",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore diverse crafts from Bengal's rich artistic heritage
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={`/shop?category=${category.name.toLowerCase()}`}
              >
                <Card
                  className="group p-6 text-center cursor-pointer border-border hover:shadow-large transition-slow hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} mx-auto mb-4 flex items-center justify-center transition-slow group-hover:scale-110`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-smooth">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.count} items</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
