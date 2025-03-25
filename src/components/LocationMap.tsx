
import { MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

const LocationMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  
  useEffect(() => {
    // Force re-render to ensure map appears
    setMapLoaded(true);
  }, []);

  const handleMapClick = () => {
    window.open('https://www.google.com/maps/place/Pátio+Limeira+Shopping/data=!4m2!3m1!1s0x0:0x2e15d3d2be7fe64f?sa=X&ved=1t:2428&ictx=111', '_blank');
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-md border border-gray-200">
      {/* Show placeholder while map loads */}
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <MapPin className="animate-pulse text-primary" size={32} />
        </div>
      )}
      
      {/* Actual map image */}
      <div 
        className="w-full h-full bg-cover bg-center cursor-pointer"
        style={{ 
          backgroundImage: `url('https://maps.googleapis.com/maps/api/staticmap?center=-22.5719,-47.4089&zoom=16&size=600x300&scale=2&maptype=roadmap&markers=color:red%7C-22.5719,-47.4089&key=AIzaSyC2HIpir5XeUZX8UBtdR7F0t8vJUvLHq-A')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: mapLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
        onClick={handleMapClick}
        role="button"
        aria-label="Ver localização no Google Maps"
      >
        <div className="absolute inset-0 bg-primary/5"></div>
      </div>
      
      <Button 
        variant="secondary"
        onClick={handleMapClick}
        className="absolute bottom-3 left-3 flex items-center gap-2 shadow-md"
        size="sm"
      >
        <MapPin className="text-primary w-4 h-4" />
        <span className="font-medium text-xs">Ver no Google Maps</span>
      </Button>
    </div>
  );
};

export default LocationMap;
