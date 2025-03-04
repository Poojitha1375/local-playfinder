
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface Event {
  id: string;
  title: string;
  sport: string;
  date: string;
  location: string;
  participants: number;
  maxParticipants: number;
  image: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden card-hover">
      <div className="relative">
        {/* Image container with aspect ratio */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Sport category chip */}
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-xs font-medium py-1 px-3 rounded-full">
            {event.sport}
          </div>
        </div>
        
        {/* Main content */}
        <div className="p-5">
          <h3 className="font-display font-semibold text-xl mb-3 transition-colors group-hover:text-primary">{event.title}</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar size={16} className="mr-2 text-muted-foreground/70" />
              <span>{event.date}</span>
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin size={16} className="mr-2 text-muted-foreground/70" />
              <span>{event.location}</span>
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <Users size={16} className="mr-2 text-muted-foreground/70" />
              <span>{event.participants} of {event.maxParticipants} participants</span>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full h-1.5 bg-secondary rounded-full mb-5">
            <div 
              className="h-full bg-primary rounded-full" 
              style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
            />
          </div>
          
          {/* Action link */}
          <Link 
            to={`/event/${event.id}`} 
            className="inline-flex items-center text-sm font-medium text-primary group-hover:underline"
          >
            View details
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
