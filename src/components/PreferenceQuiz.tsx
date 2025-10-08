import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Sparkles, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface PreferenceQuizProps {
  onComplete: (recommendations: any[]) => void;
}

const vibeOptions = [
  { id: "royal", label: "Royal", emoji: "👑", description: "Luxurious, ornate, and regal designs" },
  { id: "minimal", label: "Minimal", emoji: "✨", description: "Clean, simple, and modern aesthetics" },
  { id: "earthy", label: "Earthy", emoji: "🌿", description: "Natural, rustic, and organic vibes" },
];

const categoryOptions = [
  { id: "pottery", label: "Pottery", emoji: "🏺" },
  { id: "textiles", label: "Textiles", emoji: "🧵" },
  { id: "art", label: "Art", emoji: "🎨" },
  { id: "jewelry", label: "Jewelry", emoji: "💎" },
  { id: "home", label: "Home Decor", emoji: "🏠" },
  { id: "accessories", label: "Accessories", emoji: "👜" },
];

export const PreferenceQuiz = ({ onComplete }: PreferenceQuizProps) => {
  const [step, setStep] = useState(1);
  const [vibe, setVibe] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleCategory = (cat: string) => {
    setCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleSubmit = async () => {
    if (!vibe || categories.length === 0 || !budget) {
      toast.error("Please complete all preferences");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-recommend', {
        body: { vibe, categories, budget }
      });

      if (error) throw error;
      
      onComplete(data.recommendations || []);
      toast.success("Found perfect matches for you!");
    } catch (error) {
      console.error('Error getting recommendations:', error);
      toast.error("Failed to get recommendations. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">AI-Powered Recommendations</span>
        </div>
        <h2 className="text-3xl font-serif mb-2">Find Your Perfect Match</h2>
        <p className="text-muted-foreground">Answer a few questions to discover artisan products tailored to your taste</p>
      </div>

      {step === 1 && (
        <Card className="p-6 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">What vibe do you like?</h3>
            <div className="grid gap-4">
              {vibeOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => setVibe(option.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    vibe === option.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{option.emoji}</span>
                    <div>
                      <div className="font-semibold">{option.label}</div>
                      <div className="text-sm text-muted-foreground">{option.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <Button 
            onClick={() => setStep(2)} 
            disabled={!vibe}
            className="w-full"
          >
            Next <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Card>
      )}

      {step === 2 && (
        <Card className="p-6 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">What interests you?</h3>
            <p className="text-sm text-muted-foreground mb-4">Select one or more categories</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {categoryOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => toggleCategory(option.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    categories.includes(option.id)
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="text-3xl mb-2">{option.emoji}</div>
                  <div className="text-sm font-medium">{option.label}</div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
              Back
            </Button>
            <Button 
              onClick={() => setStep(3)} 
              disabled={categories.length === 0}
              className="flex-1"
            >
              Next <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      )}

      {step === 3 && (
        <Card className="p-6 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">What's your budget range?</h3>
            <div className="grid gap-3">
              {[
                { id: "low", label: "Under ₹1,000", value: "0-1000" },
                { id: "medium", label: "₹1,000 - ₹5,000", value: "1000-5000" },
                { id: "high", label: "Above ₹5,000", value: "5000-100000" },
              ].map(option => (
                <button
                  key={option.id}
                  onClick={() => setBudget(option.value)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    budget === option.value
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="font-medium">{option.label}</div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
              Back
            </Button>
            <Button 
              onClick={handleSubmit} 
              disabled={!budget || isLoading}
              className="flex-1"
            >
              {isLoading ? (
                <>Finding Matches...</>
              ) : (
                <>Get Recommendations <Sparkles className="w-4 h-4 ml-2" /></>
              )}
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};
