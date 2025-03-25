
import { MapPin } from 'lucide-react';
import { Button } from './ui/button';

const LocationMap = () => {
  const handleMapClick = () => {
    window.open('https://www.google.com/maps/place/Pátio+Limeira+Shopping/data=!4m2!3m1!1s0x0:0x2e15d3d2be7fe64f?sa=X&ved=1t:2428&ictx=111', '_blank');
  };

  return (
    <div className="relative w-full h-48 overflow-hidden rounded-lg shadow-md">
      <div 
        className="w-full h-full bg-cover bg-center cursor-pointer"
        style={{ backgroundImage: `url('https://maps.googleapis.com/maps/api/staticmap?center=Patio+Limeira+Shopping&zoom=15&size=400x200&maptype=roadmap&markers=color:red%7CPatio+Limeira+Shopping&key=AIzaSyC2HIpir5XeUZX8UBtdR7F0t8vJUvLHq-A')` }}
        role="button"
        aria-label="Ver localização no Google Maps"
      >
        <div className="absolute inset-0 bg-primary/10"></div>
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
