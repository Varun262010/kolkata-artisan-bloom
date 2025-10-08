import { useRef, useState } from "react";
import { Stall } from "./Stall";
import { StallPopup } from "./StallPopup";
import * as THREE from "three";

const stallCategories = [
  { 
    id: "pottery", 
    name: "Pottery & Terracotta", 
    position: [-8, 0, -5] as [number, number, number],
    color: "#e07856",
    rotation: Math.PI / 6
  },
  { 
    id: "textiles", 
    name: "Textiles & Handloom", 
    position: [0, 0, -8] as [number, number, number],
    color: "#d946ef",
    rotation: 0
  },
  { 
    id: "paintings", 
    name: "Art & Paintings", 
    position: [8, 0, -5] as [number, number, number],
    color: "#3b82f6",
    rotation: -Math.PI / 6
  },
  { 
    id: "jewelry", 
    name: "Jewelry & Metalwork", 
    position: [-8, 0, 5] as [number, number, number],
    color: "#fbbf24",
    rotation: -Math.PI / 6
  },
  { 
    id: "home", 
    name: "Home Decor", 
    position: [0, 0, 8] as [number, number, number],
    color: "#10b981",
    rotation: Math.PI
  },
  { 
    id: "accessories", 
    name: "Accessories", 
    position: [8, 0, 5] as [number, number, number],
    color: "#f97316",
    rotation: Math.PI / 6
  },
];

export const BazaarScene = () => {
  const [selectedStall, setSelectedStall] = useState<string | null>(null);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[0, 5, 0]} intensity={0.5} />

      {/* Ground */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -0.1, 0]} 
        receiveShadow
      >
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#f5f5f4" />
      </mesh>

      {/* Grid pattern on ground */}
      <gridHelper args={[50, 50, "#e5e5e5", "#e5e5e5"]} position={[0, 0, 0]} />

      {/* Stalls */}
      {stallCategories.map((category) => (
        <Stall
          key={category.id}
          position={category.position}
          color={category.color}
          rotation={category.rotation}
          onClick={() => setSelectedStall(category.id)}
          label={category.name}
        />
      ))}

      {/* Central fountain/decoration */}
      <mesh position={[0, 1, 0]} castShadow>
        <cylinderGeometry args={[1.5, 2, 2, 16]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
      <mesh position={[0, 2.5, 0]} castShadow>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.2} />
      </mesh>

      {/* Popup */}
      {selectedStall && (
        <StallPopup 
          category={selectedStall}
          onClose={() => setSelectedStall(null)}
        />
      )}
    </>
  );
};
