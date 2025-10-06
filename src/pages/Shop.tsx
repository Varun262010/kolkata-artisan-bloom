import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import productTerracotta from "@/assets/product-terracotta.jpg";
import terracottaVase from "@/assets/terracotta-vase.jpg";
import clayDiya from "@/assets/clay-diya.jpg";
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
import cottonShirt from "@/assets/cotton-shirt.jpg";
import decorativePot from "@/assets/decorative-pot.jpg";
import juteBag from "@/assets/jute-bag.jpg";
import woodenDecor from "@/assets/wooden-decor.jpg";
import brassLamp from "@/assets/brass-lamp.jpg";
import cushionCover from "@/assets/cushion-cover.jpg";
import leatherSandals from "@/assets/leather-sandals.jpg";
import teaSet from "@/assets/tea-set.jpg";
import bambooMirror from "@/assets/bamboo-mirror.jpg";
import silkDupatta from "@/assets/silk-dupatta.jpg";

const products = [
  // Pottery & Terracotta (20 items)
  { id: "1", name: "Bishnupur Terracotta Vase", price: 1200, artist: "Ranjan Das", image: terracottaVase, category: "Pottery" },
  { id: "2", name: "Clay Diya Set (12 pieces)", price: 450, artist: "Ranjan Das", image: clayDiya, category: "Pottery" },
  { id: "3", name: "Terracotta Wall Hanging", price: 850, artist: "Gopal Pal", image: productTerracotta, category: "Pottery" },
  { id: "4", name: "Handcrafted Clay Kulhad Set", price: 380, artist: "Ranjan Das", image: productTerracotta, category: "Pottery" },
  { id: "5", name: "Decorative Clay Pot", price: 650, artist: "Minati Kumari", image: decorativePot, category: "Pottery" },
  { id: "6", name: "Terracotta Horse Figurine", price: 950, artist: "Gopal Pal", image: productTerracotta, category: "Pottery" },
  { id: "7", name: "Clay Incense Holder Set", price: 420, artist: "Ranjan Das", image: clayDiya, category: "Pottery" },
  { id: "8", name: "Terracotta Jewelry Box", price: 1100, artist: "Minati Kumari", image: productTerracotta, category: "Pottery" },
  { id: "9", name: "Decorative Clay Mask", price: 780, artist: "Gopal Pal", image: terracottaVase, category: "Pottery" },
  { id: "10", name: "Terracotta Planter Set", price: 890, artist: "Ranjan Das", image: decorativePot, category: "Pottery" },
  { id: "11", name: "Clay Water Bottle Traditional", price: 520, artist: "Minati Kumari", image: terracottaVase, category: "Pottery" },
  { id: "12", name: "Terracotta Wind Chimes", price: 680, artist: "Gopal Pal", image: clayDiya, category: "Pottery" },
  { id: "13", name: "Clay Pen Stand", price: 340, artist: "Ranjan Das", image: productTerracotta, category: "Pottery" },
  { id: "14", name: "Terracotta Ganesha Idol", price: 1350, artist: "Minati Kumari", image: terracottaVase, category: "Pottery" },
  { id: "15", name: "Clay Fruit Bowl", price: 720, artist: "Gopal Pal", image: decorativePot, category: "Pottery" },
  { id: "16", name: "Terracotta Bell Set", price: 580, artist: "Ranjan Das", image: clayDiya, category: "Pottery" },
  { id: "17", name: "Clay Candle Holder Trio", price: 630, artist: "Minati Kumari", image: productTerracotta, category: "Pottery" },
  { id: "18", name: "Terracotta Serving Tray", price: 980, artist: "Gopal Pal", image: terracottaVase, category: "Pottery" },
  { id: "19", name: "Handmade Tea Set", price: 1150, artist: "Ranjan Das", image: teaSet, category: "Pottery" },
  { id: "20", name: "Terracotta Decorative Plate", price: 820, artist: "Minati Kumari", image: clayDiya, category: "Pottery" },

  // Textiles & Handloom (25 items)
  { id: "21", name: "Handloom Silk Saree", price: 8500, artist: "Meera Banerjee", image: silkSaree, category: "Textiles" },
  { id: "22", name: "Cotton Handloom Kurta", price: 2200, artist: "Meera Banerjee", image: cottonKurta, category: "Textiles" },
  { id: "23", name: "Kantha Embroidered Dupatta", price: 1850, artist: "Anjali Mondal", image: kanthaDupatta, category: "Textiles" },
  { id: "24", name: "Jamdani Cotton Saree", price: 6800, artist: "Meera Banerjee", image: jamdaniSaree, category: "Textiles" },
  { id: "25", name: "Handwoven Table Runner", price: 980, artist: "Anjali Mondal", image: cottonKurta, category: "Textiles" },
  { id: "26", name: "Baluchari Silk Saree", price: 12500, artist: "Tapati Das", image: silkSaree, category: "Textiles" },
  { id: "27", name: "Handloom Cotton Bedsheet Set", price: 3200, artist: "Meera Banerjee", image: cottonKurta, category: "Textiles" },
  { id: "28", name: "Tant Saree Traditional", price: 3500, artist: "Anjali Mondal", image: jamdaniSaree, category: "Textiles" },
  { id: "29", name: "Kantha Stitch Wall Hanging", price: 2400, artist: "Tapati Das", image: kanthaDupatta, category: "Textiles" },
  { id: "30", name: "Handloom Silk Scarf", price: 1650, artist: "Meera Banerjee", image: silkSaree, category: "Textiles" },
  { id: "31", name: "Cotton Dhoti Traditional", price: 1200, artist: "Anjali Mondal", image: cottonKurta, category: "Textiles" },
  { id: "32", name: "Kantha Quilt Queen Size", price: 5800, artist: "Tapati Das", image: kanthaDupatta, category: "Textiles" },
  { id: "33", name: "Handloom Silk Stole", price: 2100, artist: "Meera Banerjee", image: silkDupatta, category: "Textiles" },
  { id: "34", name: "Jamdani Dupatta White", price: 2800, artist: "Anjali Mondal", image: jamdaniSaree, category: "Textiles" },
  { id: "35", name: "Cotton Saree Daily Wear", price: 1950, artist: "Tapati Das", image: cottonKurta, category: "Textiles" },
  { id: "36", name: "Handloom Cushion Cover Set", price: 1400, artist: "Meera Banerjee", image: cushionCover, category: "Textiles" },
  { id: "37", name: "Kantha Embroidered Saree", price: 4200, artist: "Anjali Mondal", image: silkSaree, category: "Textiles" },
  { id: "38", name: "Silk Blend Kurta Set", price: 3800, artist: "Tapati Das", image: cottonShirt, category: "Textiles" },
  { id: "39", name: "Handloom Cotton Towel Set", price: 890, artist: "Meera Banerjee", image: cottonKurta, category: "Textiles" },
  { id: "40", name: "Traditional Bengali Gamcha", price: 420, artist: "Anjali Mondal", image: jamdaniSaree, category: "Textiles" },
  { id: "41", name: "Handwoven Jute Bag", price: 650, artist: "Tapati Das", image: juteBag, category: "Textiles" },
  { id: "42", name: "Kantha Work Kurta", price: 2600, artist: "Meera Banerjee", image: kanthaDupatta, category: "Textiles" },
  { id: "43", name: "Handloom Table Cloth", price: 1150, artist: "Anjali Mondal", image: cottonKurta, category: "Textiles" },
  { id: "44", name: "Silk Saree Party Wear", price: 9500, artist: "Tapati Das", image: silkSaree, category: "Textiles" },
  { id: "45", name: "Cotton Handloom Shawl", price: 2350, artist: "Meera Banerjee", image: jamdaniSaree, category: "Textiles" },

  // Art & Paintings (25 items)
  { id: "46", name: "Patachitra Folk Art Scroll", price: 3500, artist: "Sunil Chitrakar", image: patachitra, category: "Art" },
  { id: "47", name: "Traditional Wall Art", price: 4500, artist: "Sunil Chitrakar", image: productPainting, category: "Art" },
  { id: "48", name: "Madhubani Painting Canvas", price: 5200, artist: "Priya Jha", image: productPainting, category: "Art" },
  { id: "49", name: "Kalighat Painting Traditional", price: 6800, artist: "Sunil Chitrakar", image: kalighatPainting, category: "Art" },
  { id: "50", name: "Bengal Patachitra Scroll Large", price: 8500, artist: "Monoranjan Chitrakar", image: patachitra, category: "Art" },
  { id: "51", name: "Warli Art Wall Hanging", price: 3200, artist: "Priya Jha", image: productPainting, category: "Art" },
  { id: "52", name: "Durga Painting Canvas", price: 4800, artist: "Sunil Chitrakar", image: kalighatPainting, category: "Art" },
  { id: "53", name: "Folk Art Miniature Set", price: 2900, artist: "Monoranjan Chitrakar", image: patachitra, category: "Art" },
  { id: "54", name: "Kalighat Cat Painting", price: 5600, artist: "Priya Jha", image: kalighatPainting, category: "Art" },
  { id: "55", name: "Patachitra Ganesha Art", price: 4200, artist: "Sunil Chitrakar", image: patachitra, category: "Art" },
  { id: "56", name: "Bengal Landscape Painting", price: 7200, artist: "Monoranjan Chitrakar", image: productPainting, category: "Art" },
  { id: "57", name: "Traditional Rangoli Art", price: 2800, artist: "Priya Jha", image: productPainting, category: "Art" },
  { id: "58", name: "Patachitra Krishna Leela", price: 9500, artist: "Sunil Chitrakar", image: patachitra, category: "Art" },
  { id: "59", name: "Folk Art Bookmark Set", price: 450, artist: "Monoranjan Chitrakar", image: patachitra, category: "Art" },
  { id: "60", name: "Kalighat Style Portrait", price: 6200, artist: "Priya Jha", image: kalighatPainting, category: "Art" },
  { id: "61", name: "Bengal Village Scene Art", price: 5800, artist: "Sunil Chitrakar", image: productPainting, category: "Art" },
  { id: "62", name: "Patachitra Calendar Art", price: 1200, artist: "Monoranjan Chitrakar", image: patachitra, category: "Art" },
  { id: "63", name: "Traditional Alpana Design", price: 3400, artist: "Priya Jha", image: productPainting, category: "Art" },
  { id: "64", name: "Folk Art Coaster Set", price: 680, artist: "Sunil Chitrakar", image: patachitra, category: "Art" },
  { id: "65", name: "Ramayana Patachitra Scroll", price: 11500, artist: "Monoranjan Chitrakar", image: patachitra, category: "Art" },
  { id: "66", name: "Bengal Tiger Painting", price: 4900, artist: "Priya Jha", image: kalighatPainting, category: "Art" },
  { id: "67", name: "Kalighat Goddess Art", price: 7800, artist: "Sunil Chitrakar", image: kalighatPainting, category: "Art" },
  { id: "68", name: "Folk Art Greeting Cards", price: 350, artist: "Monoranjan Chitrakar", image: patachitra, category: "Art" },
  { id: "69", name: "Patachitra Tree of Life", price: 6500, artist: "Priya Jha", image: patachitra, category: "Art" },
  { id: "70", name: "Traditional Festival Art", price: 5200, artist: "Sunil Chitrakar", image: productPainting, category: "Art" },

  // Jewelry & Metal Craft (30 items)
  { id: "71", name: "Dokra Metal Jewelry Set", price: 2800, artist: "Kalpana Karmakar", image: dokraJewelry, category: "Jewelry" },
  { id: "72", name: "Brass Bangle Set", price: 1800, artist: "Kalpana Karmakar", image: brassBangles, category: "Jewelry" },
  { id: "73", name: "Dokra Necklace Traditional", price: 3200, artist: "Shyamal Karmakar", image: dokraJewelry, category: "Jewelry" },
  { id: "74", name: "Brass Earrings Jhumka", price: 950, artist: "Kalpana Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "75", name: "Dokra Pendant Tribal Design", price: 1450, artist: "Rina Karmakar", image: dokraJewelry, category: "Jewelry" },
  { id: "76", name: "Silver Anklet Pair", price: 4200, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "77", name: "Brass Ring Set (3 pieces)", price: 680, artist: "Kalpana Karmakar", image: brassBangles, category: "Jewelry" },
  { id: "78", name: "Dokra Choker Necklace", price: 3800, artist: "Rina Karmakar", image: dokraJewelry, category: "Jewelry" },
  { id: "79", name: "Traditional Nose Pin", price: 520, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "80", name: "Brass Kada Bangle", price: 2100, artist: "Kalpana Karmakar", image: brassBangles, category: "Jewelry" },
  { id: "81", name: "Dokra Earrings Long", price: 1350, artist: "Rina Karmakar", image: dokraJewelry, category: "Jewelry" },
  { id: "82", name: "Silver Toe Ring Set", price: 1680, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "83", name: "Brass Bracelet Tribal", price: 1150, artist: "Kalpana Karmakar", image: brassBangles, category: "Jewelry" },
  { id: "84", name: "Dokra Headpiece Traditional", price: 4500, artist: "Rina Karmakar", image: dokraJewelry, category: "Jewelry" },
  { id: "85", name: "Metal Brooch Set", price: 780, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "86", name: "Brass Necklace Layered", price: 2650, artist: "Kalpana Karmakar", image: brassBangles, category: "Jewelry" },
  { id: "87", name: "Dokra Hair Pin Set", price: 890, artist: "Rina Karmakar", image: dokraJewelry, category: "Jewelry" },
  { id: "88", name: "Silver Belly Chain", price: 3800, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "89", name: "Brass Armlet Pair", price: 1950, artist: "Kalpana Karmakar", image: brassBangles, category: "Jewelry" },
  { id: "90", name: "Dokra Ring Adjustable", price: 620, artist: "Rina Karmakar", image: dokraJewelry, category: "Jewelry" },
  { id: "91", name: "Traditional Maang Tikka", price: 2400, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "92", name: "Brass Chain Anklet", price: 1320, artist: "Kalpana Karmakar", image: brassBangles, category: "Jewelry" },
  { id: "93", name: "Dokra Cuff Bracelet", price: 2850, artist: "Rina Karmakar", image: dokraJewelry, category: "Jewelry" },
  { id: "94", name: "Metal Keychain Handmade", price: 380, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "95", name: "Brass Hoop Earrings", price: 1050, artist: "Kalpana Karmakar", image: brassBangles, category: "Jewelry" },
  { id: "96", name: "Dokra Belt Traditional", price: 3600, artist: "Rina Karmakar", image: dokraJewelry, category: "Jewelry" },
  { id: "97", name: "Silver Finger Ring Set", price: 2900, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },
  { id: "98", name: "Brass Pendant Chain", price: 1750, artist: "Kalpana Karmakar", image: brassBangles, category: "Jewelry" },
  { id: "99", name: "Dokra Brooch Peacock", price: 1480, artist: "Rina Karmakar", image: dokraJewelry, category: "Jewelry" },
  { id: "100", name: "Traditional Payal Anklet", price: 3200, artist: "Shyamal Karmakar", image: productJewelry, category: "Jewelry" },

  // Home Decor (50 items)
  { id: "101", name: "Wooden Wall Hanging", price: 2800, artist: "Ramesh Kumar", image: woodenDecor, category: "Home Decor" },
  { id: "102", name: "Brass Traditional Lamp", price: 3200, artist: "Anil Sharma", image: brassLamp, category: "Home Decor" },
  { id: "103", name: "Bamboo Mirror Frame", price: 1950, artist: "Rajesh Singh", image: bambooMirror, category: "Home Decor" },
  { id: "104", name: "Handmade Cushion Cover", price: 850, artist: "Priya Devi", image: cushionCover, category: "Home Decor" },
  { id: "105", name: "Wooden Photo Frame Set", price: 1400, artist: "Ramesh Kumar", image: woodenDecor, category: "Home Decor" },
  { id: "106", name: "Brass Incense Holder", price: 680, artist: "Anil Sharma", image: brassLamp, category: "Home Decor" },
  { id: "107", name: "Jute Table Mat Set", price: 590, artist: "Rajesh Singh", image: juteBag, category: "Home Decor" },
  { id: "108", name: "Kantha Work Pillow Cover", price: 920, artist: "Priya Devi", image: cushionCover, category: "Home Decor" },
  { id: "109", name: "Wooden Key Holder Wall Mount", price: 780, artist: "Ramesh Kumar", image: woodenDecor, category: "Home Decor" },
  { id: "110", name: "Brass Diya Stand Large", price: 1250, artist: "Anil Sharma", image: brassLamp, category: "Home Decor" },
  { id: "111", name: "Bamboo Wall Shelf", price: 2100, artist: "Rajesh Singh", image: bambooMirror, category: "Home Decor" },
  { id: "112", name: "Handwoven Floor Cushion", price: 1680, artist: "Priya Devi", image: cushionCover, category: "Home Decor" },
  { id: "113", name: "Wooden Spice Box Traditional", price: 1350, artist: "Ramesh Kumar", image: woodenDecor, category: "Home Decor" },
  { id: "114", name: "Brass Hanging Bell", price: 950, artist: "Anil Sharma", image: brassLamp, category: "Home Decor" },
  { id: "115", name: "Jute Basket Storage Set", price: 1120, artist: "Rajesh Singh", image: juteBag, category: "Home Decor" },
  { id: "116", name: "Embroidered Table Runner", price: 1450, artist: "Priya Devi", image: cushionCover, category: "Home Decor" },
  { id: "117", name: "Wooden Carved Bookend Pair", price: 1880, artist: "Ramesh Kumar", image: woodenDecor, category: "Home Decor" },
  { id: "118", name: "Brass Wall Sconce", price: 2650, artist: "Anil Sharma", image: brassLamp, category: "Home Decor" },
  { id: "119", name: "Bamboo Plant Stand", price: 1750, artist: "Rajesh Singh", image: bambooMirror, category: "Home Decor" },
  { id: "120", name: "Handblock Print Bedsheet", price: 3400, artist: "Priya Devi", image: cushionCover, category: "Home Decor" },
  { id: "121", name: "Wooden Magazine Rack", price: 2200, artist: "Ramesh Kumar", image: woodenDecor, category: "Home Decor" },
  { id: "122", name: "Brass Puja Thali Set", price: 3800, artist: "Anil Sharma", image: brassLamp, category: "Home Decor" },
  { id: "123", name: "Jute Wall Hanging Macrame", price: 1580, artist: "Rajesh Singh", image: juteBag, category: "Home Decor" },
  { id: "124", name: "Applique Work Cushion", price: 1050, artist: "Priya Devi", image: cushionCover, category: "Home Decor" },
  { id: "125", name: "Wooden Serving Tray Carved", price: 1920, artist: "Ramesh Kumar", image: woodenDecor, category: "Home Decor" },
  { id: "126", name: "Brass Candle Stand Trio", price: 2450, artist: "Anil Sharma", image: brassLamp, category: "Home Decor" },
  { id: "127", name: "Bamboo Tissue Box Cover", price: 680, artist: "Rajesh Singh", image: bambooMirror, category: "Home Decor" },
  { id: "128", name: "Hand Embroidered Curtain", price: 4200, artist: "Priya Devi", image: cushionCover, category: "Home Decor" },
  { id: "129", name: "Wooden Clock Wall Mounted", price: 2850, artist: "Ramesh Kumar", image: woodenDecor, category: "Home Decor" },
  { id: "130", name: "Brass Floor Lamp Traditional", price: 5600, artist: "Anil Sharma", image: brassLamp, category: "Home Decor" },
  { id: "131", name: "Jute Rug Handwoven", price: 3200, artist: "Rajesh Singh", image: juteBag, category: "Home Decor" },
  { id: "132", name: "Patchwork Quilt Handmade", price: 4800, artist: "Priya Devi", image: cushionCover, category: "Home Decor" },
  { id: "133", name: "Wooden Letter Holder Desk", price: 890, artist: "Ramesh Kumar", image: woodenDecor, category: "Home Decor" },
  { id: "134", name: "Brass Decorative Bowl", price: 1650, artist: "Anil Sharma", image: brassLamp, category: "Home Decor" },
  { id: "135", name: "Bamboo Wind Chime", price: 1280, artist: "Rajesh Singh", image: bambooMirror, category: "Home Decor" },
  { id: "136", name: "Handwoven Throw Blanket", price: 2950, artist: "Priya Devi", image: cushionCover, category: "Home Decor" },
  { id: "137", name: "Wooden Coaster Set of 6", price: 540, artist: "Ramesh Kumar", image: woodenDecor, category: "Home Decor" },
  { id: "138", name: "Brass Vase Traditional", price: 2100, artist: "Anil Sharma", image: brassLamp, category: "Home Decor" },
  { id: "139", name: "Jute Lamp Shade", price: 1450, artist: "Rajesh Singh", image: juteBag, category: "Home Decor" },
  { id: "140", name: "Embroidered Door Curtain", price: 2680, artist: "Priya Devi", image: cushionCover, category: "Home Decor" },
  { id: "141", name: "Wooden Pen Holder Carved", price: 720, artist: "Ramesh Kumar", image: woodenDecor, category: "Home Decor" },
  { id: "142", name: "Brass Paper Weight Set", price: 850, artist: "Anil Sharma", image: brassLamp, category: "Home Decor" },
  { id: "143", name: "Bamboo Fruit Basket", price: 980, artist: "Rajesh Singh", image: bambooMirror, category: "Home Decor" },
  { id: "144", name: "Handmade Patchwork Cushion", price: 1150, artist: "Priya Devi", image: cushionCover, category: "Home Decor" },
  { id: "145", name: "Wooden Wall Clock Ethnic", price: 3100, artist: "Ramesh Kumar", image: woodenDecor, category: "Home Decor" },
  { id: "146", name: "Brass Dinner Set Traditional", price: 8500, artist: "Anil Sharma", image: brassLamp, category: "Home Decor" },
  { id: "147", name: "Jute Doormat Welcome", price: 750, artist: "Rajesh Singh", image: juteBag, category: "Home Decor" },
  { id: "148", name: "Kantha Bedspread King Size", price: 5200, artist: "Priya Devi", image: cushionCover, category: "Home Decor" },
  { id: "149", name: "Wooden Tissue Box Carved", price: 1180, artist: "Ramesh Kumar", image: woodenDecor, category: "Home Decor" },
  { id: "150", name: "Brass Wall Art Traditional", price: 3850, artist: "Anil Sharma", image: brassLamp, category: "Home Decor" },

  // Accessories (50 items)
  { id: "151", name: "Handwoven Tote Bag", price: 1200, artist: "Lakshmi Devi", image: juteBag, category: "Accessories" },
  { id: "152", name: "Leather Sandals Handcrafted", price: 1850, artist: "Suresh Pal", image: leatherSandals, category: "Accessories" },
  { id: "153", name: "Cotton Handkerchief Set", price: 450, artist: "Mina Roy", image: cottonKurta, category: "Accessories" },
  { id: "154", name: "Jute Shopping Bag Large", price: 680, artist: "Lakshmi Devi", image: juteBag, category: "Accessories" },
  { id: "155", name: "Leather Belt Traditional", price: 1450, artist: "Suresh Pal", image: leatherSandals, category: "Accessories" },
  { id: "156", name: "Silk Scarf Hand Painted", price: 1950, artist: "Mina Roy", image: silkDupatta, category: "Accessories" },
  { id: "157", name: "Jute Messenger Bag", price: 1380, artist: "Lakshmi Devi", image: juteBag, category: "Accessories" },
  { id: "158", name: "Leather Wallet Handmade", price: 980, artist: "Suresh Pal", image: leatherSandals, category: "Accessories" },
  { id: "159", name: "Cotton Stole Block Print", price: 850, artist: "Mina Roy", image: cottonKurta, category: "Accessories" },
  { id: "160", name: "Jute Laptop Bag", price: 1680, artist: "Lakshmi Devi", image: juteBag, category: "Accessories" },
  { id: "161", name: "Leather Handbag Traditional", price: 3200, artist: "Suresh Pal", image: leatherSandals, category: "Accessories" },
  { id: "162", name: "Silk Tie Hand Dyed", price: 1250, artist: "Mina Roy", image: silkDupatta, category: "Accessories" },
  { id: "163", name: "Jute Backpack Eco Friendly", price: 1850, artist: "Lakshmi Devi", image: juteBag, category: "Accessories" },
  { id: "164", name: "Leather Sling Bag", price: 2400, artist: "Suresh Pal", image: leatherSandals, category: "Accessories" },
  { id: "165", name: "Cotton Bandana Set", price: 520, artist: "Mina Roy", image: cottonKurta, category: "Accessories" },
  { id: "166", name: "Jute Beach Bag", price: 950, artist: "Lakshmi Devi", image: juteBag, category: "Accessories" },
  { id: "167", name: "Leather Card Holder", price: 680, artist: "Suresh Pal", image: leatherSandals, category: "Accessories" },
  { id: "168", name: "Silk Bow Tie Handmade", price: 890, artist: "Mina Roy", image: silkDupatta, category: "Accessories" },
  { id: "169", name: "Jute Gym Bag", price: 1420, artist: "Lakshmi Devi", image: juteBag, category: "Accessories" },
  { id: "170", name: "Leather Keychain Personalized", price: 420, artist: "Suresh Pal", image: leatherSandals, category: "Accessories" },
  { id: "171", name: "Cotton Turban Traditional", price: 780, artist: "Mina Roy", image: cottonKurta, category: "Accessories" },
  { id: "172", name: "Jute Cosmetic Pouch", price: 580, artist: "Lakshmi Devi", image: juteBag, category: "Accessories" },
  { id: "173", name: "Leather Journal Cover", price: 1180, artist: "Suresh Pal", image: leatherSandals, category: "Accessories" },
  { id: "174", name: "Silk Pocket Square Set", price: 950, artist: "Mina Roy", image: silkDupatta, category: "Accessories" },
  { id: "175", name: "Jute Tiffin Bag", price: 650, artist: "Lakshmi Devi", image: juteBag, category: "Accessories" },
  { id: "176", name: "Leather Phone Case", price: 850, artist: "Suresh Pal", image: leatherSandals, category: "Accessories" },
  { id: "177", name: "Cotton Face Mask Set", price: 380, artist: "Mina Roy", image: cottonKurta, category: "Accessories" },
  { id: "178", name: "Jute Wine Bag", price: 720, artist: "Lakshmi Devi", image: juteBag, category: "Accessories" },
  { id: "179", name: "Leather Passport Cover", price: 780, artist: "Suresh Pal", image: leatherSandals, category: "Accessories" },
  { id: "180", name: "Silk Headband Embroidered", price: 650, artist: "Mina Roy", image: silkDupatta, category: "Accessories" },
  { id: "181", name: "Jute Picnic Basket", price: 1650, artist: "Lakshmi Devi", image: juteBag, category: "Accessories" },
  { id: "182", name: "Leather Glasses Case", price: 580, artist: "Suresh Pal", image: leatherSandals, category: "Accessories" },
  { id: "183", name: "Cotton Hat Sun Protection", price: 720, artist: "Mina Roy", image: cottonKurta, category: "Accessories" },
  { id: "184", name: "Jute Gift Bag Set", price: 480, artist: "Lakshmi Devi", image: juteBag, category: "Accessories" },
  { id: "185", name: "Leather Watch Strap", price: 950, artist: "Suresh Pal", image: leatherSandals, category: "Accessories" },
  { id: "186", name: "Silk Hair Scrunchie Set", price: 420, artist: "Mina Roy", image: silkDupatta, category: "Accessories" },
  { id: "187", name: "Jute Yoga Mat Bag", price: 890, artist: "Lakshmi Devi", image: juteBag, category: "Accessories" },
  { id: "188", name: "Leather Bracelet Braided", price: 680, artist: "Suresh Pal", image: leatherSandals, category: "Accessories" },
  { id: "189", name: "Cotton Apron Kitchen", price: 620, artist: "Mina Roy", image: cottonKurta, category: "Accessories" },
  { id: "190", name: "Jute Pen Pouch", price: 380, artist: "Lakshmi Devi", image: juteBag, category: "Accessories" },
  { id: "191", name: "Leather Bookmark Set", price: 480, artist: "Suresh Pal", image: leatherSandals, category: "Accessories" },
  { id: "192", name: "Silk Eye Mask Sleep", price: 580, artist: "Mina Roy", image: silkDupatta, category: "Accessories" },
  { id: "193", name: "Jute Shopping Tote", price: 750, artist: "Lakshmi Devi", image: juteBag, category: "Accessories" },
  { id: "194", name: "Leather Coin Purse", price: 520, artist: "Suresh Pal", image: leatherSandals, category: "Accessories" },
  { id: "195", name: "Cotton Waist Belt", price: 680, artist: "Mina Roy", image: cottonKurta, category: "Accessories" },
  { id: "196", name: "Jute Clutch Bag Evening", price: 1150, artist: "Lakshmi Devi", image: juteBag, category: "Accessories" },
  { id: "197", name: "Leather Name Tag", price: 350, artist: "Suresh Pal", image: leatherSandals, category: "Accessories" },
  { id: "198", name: "Silk Sleeping Cap", price: 720, artist: "Mina Roy", image: silkDupatta, category: "Accessories" },
  { id: "199", name: "Jute Travel Pouch Set", price: 920, artist: "Lakshmi Devi", image: juteBag, category: "Accessories" },
  { id: "200", name: "Leather Luggage Tag", price: 420, artist: "Suresh Pal", image: leatherSandals, category: "Accessories" },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.artist.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    const sorted = [...filtered];
    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        // Keep original order for newest
        break;
      default:
        // Featured - keep original order
        break;
    }

    return sorted;
  }, [selectedCategory, searchQuery, sortBy]);

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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                  <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="pottery">Pottery</SelectItem>
                  <SelectItem value="textiles">Textiles</SelectItem>
                  <SelectItem value="art">Art</SelectItem>
                  <SelectItem value="jewelry">Jewelry</SelectItem>
                  <SelectItem value="home decor">Home Decor</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
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
            {filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              </div>
            ) : (
              <>
                <p className="text-muted-foreground mb-6">
                  Showing {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredAndSortedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
