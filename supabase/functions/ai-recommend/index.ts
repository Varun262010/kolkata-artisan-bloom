import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const products = [
  { id: "1", name: "Bishnupur Terracotta Vase", price: 1200, artist: "Ranjan Das", category: "pottery", vibe: ["earthy", "minimal"], region: "West Bengal" },
  { id: "2", name: "Clay Diya Set (12 pieces)", price: 450, artist: "Ranjan Das", category: "pottery", vibe: ["earthy", "royal"], region: "West Bengal" },
  { id: "3", name: "Terracotta Wall Hanging", price: 850, artist: "Gopal Pal", category: "pottery", vibe: ["earthy"], region: "West Bengal" },
  { id: "4", name: "Handcrafted Clay Kulhad Set", price: 380, artist: "Ranjan Das", category: "pottery", vibe: ["earthy", "minimal"], region: "West Bengal" },
  { id: "21", name: "Handloom Silk Saree", price: 8500, artist: "Meera Banerjee", category: "textiles", vibe: ["royal"], region: "West Bengal" },
  { id: "22", name: "Cotton Handloom Kurta", price: 2200, artist: "Meera Banerjee", category: "textiles", vibe: ["minimal", "earthy"], region: "West Bengal" },
  { id: "23", name: "Kantha Embroidered Dupatta", price: 1850, artist: "Anjali Mondal", category: "textiles", vibe: ["earthy", "royal"], region: "West Bengal" },
  { id: "24", name: "Jamdani Cotton Saree", price: 6800, artist: "Meera Banerjee", category: "textiles", vibe: ["royal"], region: "West Bengal" },
  { id: "51", name: "Patachitra Painting", price: 5500, artist: "Gopal Chitrakar", category: "art", vibe: ["royal", "earthy"], region: "West Bengal" },
  { id: "52", name: "Kalighat Art Portrait", price: 4200, artist: "Gopal Chitrakar", category: "art", vibe: ["royal"], region: "West Bengal" },
  { id: "53", name: "Traditional Wall Art", price: 3800, artist: "Lalita Devi", category: "art", vibe: ["minimal", "earthy"], region: "Bihar" },
  { id: "54", name: "Traditional Folk Art", price: 2900, artist: "Gopal Chitrakar", category: "art", vibe: ["earthy"], region: "West Bengal" },
  { id: "71", name: "Dokra Jewelry Set", price: 2800, artist: "Samir Das", category: "jewelry", vibe: ["royal", "earthy"], region: "West Bengal" },
  { id: "72", name: "Brass Bangles Pair", price: 1500, artist: "Samir Das", category: "jewelry", vibe: ["royal"], region: "West Bengal" },
  { id: "73", name: "Silver Tribal Necklace", price: 4500, artist: "Radha Devi", category: "jewelry", vibe: ["royal", "minimal"], region: "Odisha" },
  { id: "74", name: "Handcrafted Earrings", price: 980, artist: "Samir Das", category: "jewelry", vibe: ["minimal", "earthy"], region: "West Bengal" },
  { id: "91", name: "Wooden Wall Decor", price: 3200, artist: "Bikash Sutradhar", category: "home", vibe: ["earthy", "minimal"], region: "Karnataka" },
  { id: "92", name: "Brass Home Lamp", price: 2800, artist: "Anil Kumar", category: "home", vibe: ["royal"], region: "Uttar Pradesh" },
  { id: "93", name: "Bamboo Mirror Frame", price: 1850, artist: "Bikash Sutradhar", category: "home", vibe: ["minimal", "earthy"], region: "Northeast" },
  { id: "94", name: "Decorative Pot", price: 1200, artist: "Minati Kumari", category: "home", vibe: ["earthy"], region: "Rajasthan" },
  { id: "111", name: "Jute Shoulder Bag", price: 850, artist: "Preeti Ghosh", category: "accessories", vibe: ["minimal", "earthy"], region: "West Bengal" },
  { id: "112", name: "Leather Sandals", price: 1800, artist: "Ramesh Yadav", category: "accessories", vibe: ["minimal"], region: "Maharashtra" },
  { id: "113", name: "Handwoven Scarf", price: 1200, artist: "Anjali Mondal", category: "accessories", vibe: ["earthy", "royal"], region: "West Bengal" },
  { id: "114", name: "Bamboo Tray Set", price: 680, artist: "Bikash Sutradhar", category: "accessories", vibe: ["minimal", "earthy"], region: "Northeast" },
];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { vibe, categories, budget } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // Parse budget
    const [minBudget, maxBudget] = budget.split('-').map(Number);

    // Filter products based on preferences
    const filtered = products.filter(p => 
      categories.includes(p.category) &&
      p.vibe.includes(vibe) &&
      p.price >= minBudget &&
      p.price <= maxBudget
    );

    // Create AI prompt
    const prompt = `You are an expert artisan product curator. A customer wants products with a "${vibe}" vibe from these categories: ${categories.join(', ')} within budget ₹${minBudget}-₹${maxBudget}.

Available matching products:
${filtered.map(p => `- ${p.name} by ${p.artist} (₹${p.price}) from ${p.region}`).join('\n')}

Select the best 6 products that match their preferences. Return ONLY a JSON array of product IDs like: ["1", "21", "51"]`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: 'You are a helpful product recommendation assistant. Always respond with valid JSON.' },
          { role: 'user', content: prompt }
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;
    
    // Parse AI response to get product IDs
    let recommendedIds: string[];
    try {
      recommendedIds = JSON.parse(aiResponse);
    } catch {
      // Fallback to simple filtering if AI response isn't valid JSON
      recommendedIds = filtered.slice(0, 6).map(p => p.id);
    }

    // Get full product details
    const recommendations = products.filter(p => recommendedIds.includes(p.id));

    return new Response(
      JSON.stringify({ recommendations }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in ai-recommend:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
