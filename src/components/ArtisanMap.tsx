import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { products } from '@/data/products';
import { Input } from './ui/input';
import { Button } from './ui/button';

// Extract unique regions and their coordinates
const regionCoordinates: Record<string, [number, number]> = {
  "West Bengal": [88.3639, 22.9868],
  "Bihar": [85.3131, 25.0961],
  "Odisha": [85.0985, 20.9517],
  "Karnataka": [76.6394, 14.5204],
  "Uttar Pradesh": [80.9462, 26.8467],
  "Northeast": [91.7898, 26.2006],
  "Rajasthan": [74.2179, 27.0238],
  "Maharashtra": [75.7139, 19.7515],
};

const ArtisanMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [82.8, 21.5],
      zoom: 4.5,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each region
    map.current.on('load', () => {
      const uniqueRegions = new Set(products.map(p => p.region).filter(Boolean));
      
      uniqueRegions.forEach(region => {
        if (region && regionCoordinates[region]) {
          const productsInRegion = products.filter(p => p.region === region);
          const coords = regionCoordinates[region];
          
          // Create custom marker
          const el = document.createElement('div');
          el.className = 'custom-marker';
          el.style.cssText = `
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)));
            border-radius: 50%;
            border: 3px solid white;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 14px;
          `;
          el.textContent = productsInRegion.length.toString();

          // Create popup
          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div style="padding: 8px;">
              <h3 style="font-weight: bold; margin-bottom: 8px;">${region}</h3>
              <p style="margin: 4px 0;">${productsInRegion.length} products</p>
              <p style="font-size: 12px; color: #666;">Click to explore Virtual Bazaar</p>
            </div>`
          );

          new mapboxgl.Marker(el)
            .setLngLat(coords)
            .setPopup(popup)
            .addTo(map.current!);
        }
      });
    });

    setIsMapInitialized(true);
  };

  const handleInitMap = () => {
    if (apiKey) {
      initializeMap(apiKey);
    }
  };

  return (
    <div className="w-full h-full relative">
      {!isMapInitialized ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-card p-8 rounded-lg border">
          <div className="max-w-md w-full space-y-4">
            <h3 className="text-xl font-semibold text-center mb-2">Enter Mapbox Token</h3>
            <p className="text-sm text-muted-foreground text-center mb-4">
              Get your free public token from{' '}
              <a 
                href="https://account.mapbox.com/access-tokens/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
            <Input
              type="text"
              placeholder="pk.ey..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full"
            />
            <Button 
              onClick={handleInitMap}
              disabled={!apiKey}
              className="w-full"
            >
              Initialize Map
            </Button>
          </div>
        </div>
      ) : null}
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
    </div>
  );
};

export default ArtisanMap;
