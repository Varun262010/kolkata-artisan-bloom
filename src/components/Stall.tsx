import { useRef, useState } from "react";
import { Text, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface StallProps {
  position: [number, number, number];
  color: string;
  rotation?: number;
  onClick: () => void;
  label: string;
}

export const Stall = ({ position, color, rotation = 0, onClick, label }: StallProps) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current && hovered) {
      meshRef.current.position.y = position[1] + Math.sin(Date.now() * 0.003) * 0.1;
    } else if (meshRef.current) {
      meshRef.current.position.y = position[1];
    }
  });

  return (
    <group 
      ref={meshRef}
      position={position}
      rotation={[0, rotation, 0]}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Stall base */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[3, 1, 3]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </mesh>

      {/* Stall roof */}
      <mesh position={[0, 2.5, 0]} castShadow>
        <coneGeometry args={[2.5, 2, 4]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.2 : 0.05}
        />
      </mesh>

      {/* Poles */}
      {[[-1.2, 0, -1.2], [1.2, 0, -1.2], [-1.2, 0, 1.2], [1.2, 0, 1.2]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.1, 0.1, 3]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>
      ))}

      {/* Label */}
      <Html position={[0, 4, 0]} center>
        <div 
          className="bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap border shadow-lg pointer-events-none"
          style={{ 
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.2s'
          }}
        >
          {label}
        </div>
      </Html>

      {/* Click indicator */}
      {hovered && (
        <Html position={[0, -0.5, 0]} center>
          <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium animate-pulse pointer-events-none">
            Click to explore
          </div>
        </Html>
      )}
    </group>
  );
};
