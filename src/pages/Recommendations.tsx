import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PreferenceQuiz } from "@/components/PreferenceQuiz";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [showQuiz, setShowQuiz] = useState(true);

  const handleComplete = (recs: any[]) => {
    setRecommendations(recs);
    setShowQuiz(false);
  };

  const resetQuiz = () => {
    setShowQuiz(true);
    setRecommendations([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        {showQuiz ? (
          <PreferenceQuiz onComplete={handleComplete} />
        ) : (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-serif mb-2">Your Personalized Recommendations</h2>
                <p className="text-muted-foreground">Handpicked products based on your preferences</p>
              </div>
              <Button variant="outline" onClick={resetQuiz}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Take Quiz Again
              </Button>
            </div>

            {recommendations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No products match your preferences. Try adjusting your selections!</p>
                <Button onClick={resetQuiz}>Try Again</Button>
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Recommendations;
