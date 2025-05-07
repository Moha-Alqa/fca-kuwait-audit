
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from './ui/card';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');

  useEffect(() => {
    if (!mapContainer.current) return;
    if (!mapboxToken) return;

    // Initialize map with Kuwait coordinates (lat: 29.3759, lng: 47.9774)
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [47.9774, 29.3759],
      zoom: 15,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add marker for Financial Center for Auditing location
    const marker = new mapboxgl.Marker({ color: '#1e3a8a' })
      .setLngLat([47.9774, 29.3759])
      .setPopup(new mapboxgl.Popup().setHTML("<h3>Financial Center for Auditing</h3><p>Qibla - Block 14 - Abu Bakr Al Sidiq Street</p>"))
      .addTo(map.current);

    // Open popup by default
    marker.togglePopup();

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="w-full h-full">
      {!mapboxToken ? (
        <Card className="p-6 bg-white shadow-md">
          <h3 className="text-lg font-medium mb-4">Enter Mapbox Token to Display Map</h3>
          <p className="text-gray-600 mb-4">
            To view the map, please enter your Mapbox public token. You can get a free token at{" "}
            <a 
              href="https://www.mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-900 hover:underline"
            >
              mapbox.com
            </a>
          </p>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md mb-4"
            placeholder="Enter your Mapbox public token"
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <p className="text-sm text-gray-500">
            Your token is only used locally and is not stored beyond the current session.
          </p>
        </Card>
      ) : (
        <div ref={mapContainer} className="w-full h-full rounded-lg shadow-lg" />
      )}
    </div>
  );
};

export default Map;
