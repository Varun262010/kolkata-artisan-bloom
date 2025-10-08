import terracottaVase from "@/assets/terracotta-vase.jpg";
import clayDiya from "@/assets/clay-diya.jpg";
import productTerracotta from "@/assets/product-terracotta.jpg";
import silkSaree from "@/assets/silk-saree.jpg";
import cottonKurta from "@/assets/cotton-kurta.jpg";
import kanthaDupatta from "@/assets/kantha-dupatta.jpg";
import jamdaniSaree from "@/assets/jamdani-saree.jpg";
import patachitra from "@/assets/patachitra-art.jpg";
import kalighatPainting from "@/assets/kalighat-painting.jpg";
import productPainting from "@/assets/product-painting.jpg";
import dokraJewelry from "@/assets/dokra-jewelry.jpg";
import brassBangles from "@/assets/brass-bangles.jpg";
import productJewelry from "@/assets/product-jewelry.jpg";
import decorativePot from "@/assets/decorative-pot.jpg";
import woodenDecor from "@/assets/wooden-decor.jpg";
import brassLamp from "@/assets/brass-lamp.jpg";
import cushionCover from "@/assets/cushion-cover.jpg";
import bambooMirror from "@/assets/bamboo-mirror.jpg";
import juteBag from "@/assets/jute-bag.jpg";
import teaSet from "@/assets/tea-set.jpg";
import leatherSandals from "@/assets/leather-sandals.jpg";
import bambooTray from "@/assets/bamboo-tray.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  artist: string;
  image: string;
  category: string;
  vibe?: string[];
  region?: string;
};

export const products: Product[] = [
  // Pottery & Terracotta
  { id: "1", name: "Bishnupur Terracotta Vase", price: 1200, artist: "Ranjan Das", image: terracottaVase, category: "Pottery", vibe: ["earthy", "minimal"], region: "West Bengal" },
  { id: "2", name: "Clay Diya Set (12 pieces)", price: 450, artist: "Ranjan Das", image: clayDiya, category: "Pottery", vibe: ["earthy", "royal"], region: "West Bengal" },
  { id: "3", name: "Terracotta Wall Hanging", price: 850, artist: "Gopal Pal", image: productTerracotta, category: "Pottery", vibe: ["earthy"], region: "West Bengal" },
  { id: "4", name: "Handcrafted Clay Kulhad Set", price: 380, artist: "Ranjan Das", image: productTerracotta, category: "Pottery", vibe: ["earthy", "minimal"], region: "West Bengal" },
  
  // Textiles & Handloom
  { id: "21", name: "Handloom Silk Saree", price: 8500, artist: "Meera Banerjee", image: silkSaree, category: "Textiles", vibe: ["royal"], region: "West Bengal" },
  { id: "22", name: "Cotton Handloom Kurta", price: 2200, artist: "Meera Banerjee", image: cottonKurta, category: "Textiles", vibe: ["minimal", "earthy"], region: "West Bengal" },
  { id: "23", name: "Kantha Embroidered Dupatta", price: 1850, artist: "Anjali Mondal", image: kanthaDupatta, category: "Textiles", vibe: ["earthy", "royal"], region: "West Bengal" },
  { id: "24", name: "Jamdani Cotton Saree", price: 6800, artist: "Meera Banerjee", image: jamdaniSaree, category: "Textiles", vibe: ["royal"], region: "West Bengal" },
  
  // Art & Paintings
  { id: "51", name: "Patachitra Painting", price: 5500, artist: "Gopal Chitrakar", image: patachitra, category: "Art", vibe: ["royal", "earthy"], region: "West Bengal" },
  { id: "52", name: "Kalighat Art Portrait", price: 4200, artist: "Gopal Chitrakar", image: kalighatPainting, category: "Art", vibe: ["royal"], region: "West Bengal" },
  { id: "53", name: "Traditional Wall Art", price: 3800, artist: "Lalita Devi", image: productPainting, category: "Art", vibe: ["minimal", "earthy"], region: "Bihar" },
  { id: "54", name: "Traditional Folk Art", price: 2900, artist: "Gopal Chitrakar", image: patachitra, category: "Art", vibe: ["earthy"], region: "West Bengal" },
  
  // Jewelry & Metalwork
  { id: "71", name: "Dokra Jewelry Set", price: 2800, artist: "Samir Das", image: dokraJewelry, category: "Jewelry", vibe: ["royal", "earthy"], region: "West Bengal" },
  { id: "72", name: "Brass Bangles Pair", price: 1500, artist: "Samir Das", image: brassBangles, category: "Jewelry", vibe: ["royal"], region: "West Bengal" },
  { id: "73", name: "Silver Tribal Necklace", price: 4500, artist: "Radha Devi", image: dokraJewelry, category: "Jewelry", vibe: ["royal", "minimal"], region: "Odisha" },
  { id: "74", name: "Handcrafted Earrings", price: 980, artist: "Samir Das", image: productJewelry, category: "Jewelry", vibe: ["minimal", "earthy"], region: "West Bengal" },
  
  // Home Decor
  { id: "91", name: "Wooden Wall Decor", price: 3200, artist: "Bikash Sutradhar", image: woodenDecor, category: "Home Decor", vibe: ["earthy", "minimal"], region: "Karnataka" },
  { id: "92", name: "Brass Home Lamp", price: 2800, artist: "Anil Kumar", image: brassLamp, category: "Home Decor", vibe: ["royal"], region: "Uttar Pradesh" },
  { id: "93", name: "Bamboo Mirror Frame", price: 1850, artist: "Bikash Sutradhar", image: bambooMirror, category: "Home Decor", vibe: ["minimal", "earthy"], region: "Northeast" },
  { id: "94", name: "Decorative Pot", price: 1200, artist: "Minati Kumari", image: decorativePot, category: "Home Decor", vibe: ["earthy"], region: "Rajasthan" },
  
  // Accessories
  { id: "111", name: "Jute Shoulder Bag", price: 850, artist: "Preeti Ghosh", image: juteBag, category: "Accessories", vibe: ["minimal", "earthy"], region: "West Bengal" },
  { id: "112", name: "Leather Sandals", price: 1800, artist: "Ramesh Yadav", image: leatherSandals, category: "Accessories", vibe: ["minimal"], region: "Maharashtra" },
  { id: "113", name: "Handwoven Scarf", price: 1200, artist: "Anjali Mondal", image: kanthaDupatta, category: "Accessories", vibe: ["earthy", "royal"], region: "West Bengal" },
  { id: "114", name: "Bamboo Tray Set", price: 680, artist: "Bikash Sutradhar", image: bambooTray, category: "Accessories", vibe: ["minimal", "earthy"], region: "Northeast" },
];

export const getCategoryProducts = (categoryKey: string) => {
  const categoryMap: Record<string, string> = {
    pottery: "Pottery",
    textiles: "Textiles",
    paintings: "Art",
    jewelry: "Jewelry",
    home: "Home Decor",
    accessories: "Accessories",
  };
  
  return products.filter(p => p.category === categoryMap[categoryKey]);
};
