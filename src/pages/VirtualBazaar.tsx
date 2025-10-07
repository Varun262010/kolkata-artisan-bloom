import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Html } from "@react-three/drei";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BazaarScene } from "@/components/BazaarScene";
import { Loader2 } from "lucide-react";

const VirtualBazaar = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Virtual Bazaar</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our immersive 3D marketplace. Click and drag to look around, scroll to zoom, and click on stalls to view products.
          </p>
        </div>
        
        <div className="w-full h-[600px] md:h-[700px] rounded-lg overflow-hidden border shadow-soft">
          <Canvas shadows>
            <Suspense fallback={
              <Html center>
                <div className="flex items-center gap-2 text-primary">
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <span>Loading Bazaar...</span>
                </div>
              </Html>
            }>
              <PerspectiveCamera makeDefault position={[0, 5, 15]} />
              <OrbitControls 
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                minDistance={5}
                maxDistance={30}
                maxPolarAngle={Math.PI / 2.2}
              />
              <Environment preset="sunset" />
              <BazaarScene />
            </Suspense>
          </Canvas>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-card rounded-lg border">
            <h3 className="font-semibold mb-2">🎨 Explore Stalls</h3>
            <p className="text-sm text-muted-foreground">Click on colorful stalls to see products from different artisan categories</p>
          </div>
          <div className="p-4 bg-card rounded-lg border">
            <h3 className="font-semibold mb-2">🔄 Navigate Freely</h3>
            <p className="text-sm text-muted-foreground">Drag to rotate, scroll to zoom, and move around the virtual marketplace</p>
          </div>
          <div className="p-4 bg-card rounded-lg border">
            <h3 className="font-semibold mb-2">🛍️ Shop Direct</h3>
            <p className="text-sm text-muted-foreground">Click on products within stalls to add them to your cart instantly</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VirtualBazaar;
