import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, useCursor } from '@react-three/drei';
import { useStore } from '@nanostores/react';
import { themeStore } from '../store/themeStore';
import { products, type Product } from '../data/products';
import ProductObject from './ProductObject';
import * as THREE from 'three';

function CameraController({ activeProduct }: { activeProduct: Product | null }) {
  const { size, gl } = useThree();
  const targetRef = useRef(new THREE.Vector3(0, 0, 25));
  
  // Velocity and momentum for fluid panning
  const velocityRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const activePointersRef = useRef<Map<number, { x: number, y: number }>>(new Map());
  const initialPinchDistRef = useRef<number | null>(null);
  
  // Custom panning logic
  useEffect(() => {
    const handleMove = (e: any) => {
      const { x, y } = e.detail;
      targetRef.current.set(x, y, 15);
      velocityRef.current = { x: 0, y: 0 }; // stop momentum on explicit move
    };
    
    if (!activeProduct) {
      // Reset zoom but keep XY
      targetRef.current.z = 25;
    }
    
    document.addEventListener('move-camera', handleMove);
    return () => document.removeEventListener('move-camera', handleMove);
  }, [activeProduct]);

  useEffect(() => {
    const handleKeyboardPan = (e: any) => {
      if (activeProduct) return;
      const { dx, dy } = e.detail;
      velocityRef.current.x += dx * 0.15;
      velocityRef.current.y += dy * 0.15;
      
      const hint = document.getElementById('drag-hint');
      if (hint) hint.style.opacity = '0';
    };
    
    document.addEventListener('keyboard-pan', handleKeyboardPan);
    return () => document.removeEventListener('keyboard-pan', handleKeyboardPan);
  }, [activeProduct]);

  useFrame((state, delta) => {
    // Apply momentum if not dragging
    if (!isDraggingRef.current && !activeProduct) {
      targetRef.current.x -= velocityRef.current.x;
      targetRef.current.y += velocityRef.current.y;
      
      // Friction (smoothly damp velocity to 0)
      velocityRef.current.x *= 0.88;
      velocityRef.current.y *= 0.88;
    }

    // Frame-rate independent smooth damping for camera position
    const smoothFactor = 1 - Math.exp(-8 * delta); // slightly softer for more fluidity
    state.camera.position.lerp(targetRef.current, smoothFactor);
    // Keep looking forward
    state.camera.lookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z - 1);
    
    // Emit diagnostic data periodically (throttled to ~10hz)
    if (state.clock.elapsedTime * 10 % 1 < 0.1) {
      document.dispatchEvent(new CustomEvent('camera-update', { 
        detail: { x: state.camera.position.x, y: state.camera.position.y, z: state.camera.position.z } 
      }));
      // Basic FPS calc
      document.dispatchEvent(new CustomEvent('fps-update', { detail: Math.round(1 / (delta || 0.016)) }));
    }
  });

  // Pan via pointer drag and multi-touch when no product is active
  useEffect(() => {
    if (activeProduct) return;
    
    let previousPosition = { x: 0, y: 0 };

    const handlePointerDown = (e: PointerEvent) => {
      activePointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      
      if (activePointersRef.current.size === 1) {
        isDraggingRef.current = true;
        velocityRef.current = { x: 0, y: 0 };
        previousPosition = { x: e.clientX, y: e.clientY };
        initialPinchDistRef.current = null;
      } else if (activePointersRef.current.size === 2) {
        // Multi-touch pinch start
        isDraggingRef.current = true;
        const pts = Array.from(activePointersRef.current.values());
        initialPinchDistRef.current = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      }
      
      // Hide the drag hint when user interacts
      const hint = document.getElementById('drag-hint');
      if (hint) {
        hint.style.opacity = '0';
      }
    };

    const handlePointerUp = (e: PointerEvent) => {
      activePointersRef.current.delete(e.pointerId);
      if (activePointersRef.current.size === 0) {
        isDraggingRef.current = false;
        initialPinchDistRef.current = null;
      } else if (activePointersRef.current.size === 1) {
        // Fall back to single touch pan
        const remaining = Array.from(activePointersRef.current.values())[0];
        previousPosition = { x: remaining.x, y: remaining.y };
        initialPinchDistRef.current = null;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!activePointersRef.current.has(e.pointerId)) return;
      activePointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      
      if (!isDraggingRef.current) return;
      
      if (activePointersRef.current.size === 1) {
        // Single finger pan
        const deltaX = e.clientX - previousPosition.x;
        const deltaY = e.clientY - previousPosition.y;
        
        const panScale = targetRef.current.z / size.width;
        velocityRef.current = {
          x: deltaX * panScale,
          y: deltaY * panScale
        };
        
        targetRef.current.set(
          targetRef.current.x - velocityRef.current.x,
          targetRef.current.y + velocityRef.current.y,
          targetRef.current.z
        );
        
        previousPosition = { x: e.clientX, y: e.clientY };
      } else if (activePointersRef.current.size === 2) {
        // Two finger pinch/pan
        const pts = Array.from(activePointersRef.current.values());
        const currentDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        
        if (initialPinchDistRef.current !== null) {
          const deltaDist = currentDist - initialPinchDistRef.current;
          const zoomSpeed = 0.05;
          const newZ = Math.max(8, Math.min(35, targetRef.current.z - deltaDist * zoomSpeed));
          targetRef.current.set(targetRef.current.x, targetRef.current.y, newZ);
        }
        
        initialPinchDistRef.current = currentDist;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const isMouseWheel = !e.ctrlKey && Math.abs(e.deltaY) > 0 && e.deltaX === 0 && e.deltaMode === 0;
      const isPinch = e.ctrlKey;
      
      if (isMouseWheel || isPinch) {
        // ZOOM — scale speed to current zoom level for natural feel
        const zoomFactor = targetRef.current.z * 0.007;
        const newZ = Math.max(8, Math.min(35, targetRef.current.z + e.deltaY * zoomFactor));
        targetRef.current.set(targetRef.current.x, targetRef.current.y, newZ);
      } else {
        // PAN — trackpad two-finger scroll; do NOT write to velocityRef
        const panScale = targetRef.current.z / size.width;
        
        targetRef.current.set(
          targetRef.current.x + e.deltaX * panScale,
          targetRef.current.y - e.deltaY * panScale,
          targetRef.current.z
        );
        
        const hint = document.getElementById('drag-hint');
        if (hint) {
          hint.style.opacity = '0';
        }
      }
    };

    const domElement = gl.domElement;
    domElement.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    window.addEventListener('pointermove', handlePointerMove);
    domElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      domElement.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      window.removeEventListener('pointermove', handlePointerMove);
      domElement.removeEventListener('wheel', handleWheel);
    };
  }, [activeProduct, size.width, gl.domElement]);

  return null;
}

export default function SpatialCatalog() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [filteredProductIds, setFilteredProductIds] = useState<Set<string>>(new Set(products.map(p => p.id)));
  const [highlightId, setHighlightId] = useState<string | null>(null);
  const $theme = useStore(themeStore);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const highlight = params.get('highlight');
    if (highlight) {
      setFilteredProductIds(new Set([highlight]));
      setHighlightId(highlight);
      window.history.replaceState({}, '', '/');
    }

    // Listen for clear selection
    const handleClear = () => setActiveProduct(null);
    document.addEventListener('clear-product', handleClear);

    const handleClearHighlight = () => {
      setHighlightId(null);
      setFilteredProductIds(new Set(products.map(p => p.id)));
    };
    document.addEventListener('clear-highlight', handleClearHighlight);

    const handleFilters = (e: any) => {
      setHighlightId(null);
      const activeFilters = e.detail;
      const { brand, color, size, category, price } = activeFilters;
      
      const isDefaultPrice = price[0] === 0 && price[1] === 500;
      
      if (brand.length === 0 && color.length === 0 && size.length === 0 && (!category || category.length === 0) && isDefaultPrice) {
        setFilteredProductIds(new Set(products.map(p => p.id)));
        return;
      }
      
      const newFiltered = new Set<string>();
      products.forEach(p => {
        let matches = true;
        if (brand.length > 0 && !brand.includes(p.name)) matches = false;
        if (color.length > 0 && !color.includes(p.color)) matches = false;
        if (size.length > 0 && !p.sizes.some(s => size.includes(s))) matches = false;
        if (category && category.length > 0 && !category.includes(p.category)) matches = false;
        
        // Price is stored in product.price, price filter is [min, max]
        if (p.price < price[0] || p.price > price[1]) matches = false;
        
        if (matches) newFiltered.add(p.id);
      });
      setFilteredProductIds(newFiltered);
    };
    
    document.addEventListener('filters-changed', handleFilters);
    
    // Hide loader and show hint
    const loader = document.getElementById('canvas-loader');
    if (loader) loader.style.display = 'none';
    const hint = document.getElementById('drag-hint');
    if (hint) hint.style.opacity = '1';

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeProduct) return;
      if (document.activeElement?.tagName === 'INPUT') return;
      
      const panAmount = 10;
      let dx = 0;
      let dy = 0;
      
      if (e.key === 'ArrowLeft') dx = -panAmount;
      if (e.key === 'ArrowRight') dx = panAmount;
      if (e.key === 'ArrowUp') dy = panAmount;
      if (e.key === 'ArrowDown') dy = -panAmount;
      
      if (dx !== 0 || dy !== 0) {
        e.preventDefault();
        document.dispatchEvent(new CustomEvent('keyboard-pan', { detail: { dx, dy } }));
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('clear-product', handleClear);
      document.removeEventListener('clear-highlight', handleClearHighlight);
      document.removeEventListener('filters-changed', handleFilters);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProduct]);

  useEffect(() => {
    document.dispatchEvent(new CustomEvent('highlight-changed', { detail: !!highlightId && !activeProduct }));
  }, [highlightId, activeProduct]);

  useEffect(() => {
    document.dispatchEvent(new CustomEvent('visible-count', { detail: filteredProductIds.size }));
  }, [filteredProductIds]);

  return (
    <div className="fixed inset-0 pt-[40px] z-10 hidden md:block" style={{ pointerEvents: activeProduct ? 'none' : 'auto' }}>
      
      {/* Drag Hint */}
      <div 
        id="drag-hint" 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-mono-sm tracking-system text-[var(--ink-faded)] transition-opacity duration-1000 pointer-events-none"
      >
        [ SCROLL TO PAN / PINCH TO ZOOM ]
      </div>

      <Canvas
        camera={{ position: [0, 0, 25], fov: 50 }}
        gl={{ antialias: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={[$theme === 'dark' ? '#0E0D0A' : '#F3F0E8']} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 10, 5]} intensity={2} />
        
        <CameraController activeProduct={activeProduct} />
        
        <Suspense fallback={null}>
          {products.map((p, index) => {
            const isFilteredIn = filteredProductIds.has(p.id);
            
            // Calculate grid position
            const gridCols = 12;
            const spacing = 3.5; // MUST be > 3 (maxSize) to prevent overlapping!
            const dimensionsWidth = gridCols * spacing;
            const dimensionsHeight = Math.ceil(products.length / gridCols) * spacing;
            
            const col = index % gridCols;
            const row = Math.floor(index / gridCols);
            const x = col * spacing - dimensionsWidth / 2 + spacing / 2;
            const y = -row * spacing + dimensionsHeight / 2 - spacing / 2;
            
            return (
              <ProductObject 
                key={p.id} 
                product={p} 
                basePos={{x, y}}
                isActive={activeProduct?.id === p.id}
                isFiltered={isFilteredIn}
                onSelect={() => {
                  if (!isFilteredIn) return;
                  setActiveProduct(p);
                  // Center camera on product
                  document.dispatchEvent(new CustomEvent('select-product', { detail: p }));
                  const ev = new CustomEvent('move-camera', { detail: { x, y } });
                  document.dispatchEvent(ev);
                }} 
              />
            );
          })}
        </Suspense>
      </Canvas>
    </div>
  );
}
