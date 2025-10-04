import { Card } from "@/components/ui/card";
import { Palette, Shirt, Gem, TreePine, Package, Sparkles } from "lucide-react";

const categories = [
  {
    name: "Paintings",
    icon: Palette,
    count: 150,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Handloom",
    icon: Shirt,
    count: 220,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Jewelry",
    icon: Gem,
    count: 180,
    color: "from-amber-500 to-yellow-500",
  },
  {
    name: "Pottery",
    icon: TreePine,
    count: 95,
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Handicrafts",
    icon: Package,
    count: 310,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Eco Products",
    icon: Sparkles,
    count: 125,
    color: "from-green-500 to-lime-500",
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
              <Card
                key={category.name}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
