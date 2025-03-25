
import { MapPin } from 'lucide-react';

const LocationMap = () => {
  const handleMapClick = () => {
    window.open('https://www.google.com/maps/place/Pátio+Limeira+Shopping/data=!4m2!3m1!1s0x0:0x2e15d3d2be7fe64f?sa=X&ved=1t:2428&ictx=111', '_blank');
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-md">
      <div 
        className="w-full h-full bg-cover bg-center cursor-pointer transition-transform hover:scale-105"
        style={{ backgroundImage: `url('https://maps.googleapis.com/maps/api/staticmap?center=Patio+Limeira+Shopping&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7CPatio+Limeira+Shopping&key=AIzaSyC2HIpir5XeUZX8UBtdR7F0t8vJUvLHq-A')` }}
        onClick={handleMapClick}
        role="button"
        aria-label="Abrir localização no Google Maps"
      >
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-md">
          <MapPin className="text-primary w-5 h-5" />
          <span className="font-medium text-sm">Patio Limeira Shopping</span>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
