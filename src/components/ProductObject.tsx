import React, { useState, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';
import type { Product } from '../data/products';
import ProductHoverLabel from './ProductHoverLabel';
import HoloCardMaterialImpl from './HoloCardMaterial'; // Registers holoCardMaterial

interface ProductObjectProps {
  product: Product;
  basePos: { x: number, y: number };
  isActive: boolean;
  isFiltered?: boolean;
  onSelect: () => void;
}

export default function ProductObject({ product, basePos, isActive, isFiltered = true, onSelect }: ProductObjectProps) {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<any>(null);
  
  const texture = useLoader(THREE.TextureLoader, product.image);

  // Springs for scale and opacity
  const { scale, opacity } = useSpring({
    scale: isActive ? 1.5 : hovered ? 1.05 : isFiltered ? 1 : 0.8,
    opacity: isFiltered ? 1 : 0.12,
    config: { mass: 1, tension: 120, friction: 14 }
  });

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Calculate relative distance to camera for curvature
    const relX = basePos.x - state.camera.position.x;
    const relY = basePos.y - state.camera.position.y;
    
    const distSq = relX * relX + relY * relY;
    const dist = Math.sqrt(distSq);
    
    const curvatureStrength = 0.003;
    const rotationStrength = 0.5;
    
    // Z pushback creates the cylinder/sphere
    const curveZ = -distSq * curvatureStrength;
    
    // Rotation so it faces the camera from its curved position
    const rotationIntensity = Math.min(dist * 0.4, 2.0);
    const rotX = relY * curvatureStrength * rotationStrength * rotationIntensity;
    const rotY = -relX * curvatureStrength * rotationStrength * rotationIntensity;

    // Apply active push-forward
    const focusZ = isActive ? 5 : hovered ? 1 : 0;
    
    // Smooth lerp to the target position
    const targetZ = curveZ + focusZ;
    
    groupRef.current.position.set(basePos.x, basePos.y, THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.1));
    groupRef.current.rotation.set(
      THREE.MathUtils.lerp(groupRef.current.rotation.x, rotX, 0.1),
      THREE.MathUtils.lerp(groupRef.current.rotation.y, rotY, 0.1),
      0
    );
    groupRef.current.scale.setScalar(scale.get());

    // Update shader uniforms
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.elapsedTime;
      // Animate uActive towards 1 if active, 0 if not
      materialRef.current.uActive = THREE.MathUtils.lerp(
        materialRef.current.uActive,
        isActive ? 1 : 0,
        0.1
      );
      // Read the spring value for opacity to fix the transparency bug
      materialRef.current.uOpacity = opacity.get();
    }
  });

  const imageDims = React.useMemo(() => {
    const maxSize = 3; // Keep the same max width as before
    if (!texture.image) return [maxSize, maxSize, 16, 16];
    
    const imgAspect = texture.image.width / texture.image.height;
    // We want the plane to match the image aspect ratio
    if (imgAspect > 1) {
      return [maxSize, maxSize / imgAspect, 16, 16];
    } else {
      return [maxSize * imgAspect, maxSize, 16, 16];
    }
  }, [texture]);

  return (
    <group ref={groupRef}>
      <mesh 
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e) => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <planeGeometry args={imageDims as any} />
        {/* @ts-ignore */}
        <holoCardMaterial
          key={HoloCardMaterialImpl.key}
          ref={materialRef}
          transparent={true}
          uTexture={texture}
        />
      </mesh>
      
      {hovered && !isActive && (
        <Html position={[0, -1.2, 0]} center zIndexRange={[100, 0]}>
          <ProductHoverLabel product={product} />
        </Html>
      )}
    </group>
  );
}
