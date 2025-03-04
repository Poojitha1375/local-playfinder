
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Miami",
  "Boston",
  "San Francisco",
  "Seattle"
];

const LocationFilter = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <MapPin size={20} className="text-primary" />
        <h3 className="font-medium text-lg">Popular Locations</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {locations.map((location) => (
          <Button 
            key={location} 
            variant="outline" 
            className="rounded-full h-auto py-1.5 px-4 text-sm bg-white hover:bg-secondary/50"
          >
            {location}
          </Button>
        ))}
        
        <Button 
          variant="ghost" 
          className="rounded-full h-auto py-1.5 px-4 text-sm text-primary hover:bg-primary/5"
        >
          See all
        </Button>
      </div>
    </div>
  );
};

export default LocationFilter;
