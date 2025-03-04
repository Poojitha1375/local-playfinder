
import { useState, useEffect } from "react";
import EventCard, { Event } from "./EventCard";
import { Button } from "@/components/ui/button";

// Mock data for events
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Downtown Basketball Tournament",
    sport: "Basketball",
    date: "Jun 15, 2024",
    location: "Central Park, New York",
    participants: 16,
    maxParticipants: 24,
    image: "https://images.unsplash.com/photo-1505666287802-931582b5ed56?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Summer Tennis Open",
    sport: "Tennis",
    date: "Jul 8, 2024",
    location: "Sports Complex, Boston",
    participants: 28,
    maxParticipants: 32,
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3", 
    title: "Youth Football League",
    sport: "Football",
    date: "Jun 22, 2024",
    location: "Riverdale Stadium, Chicago",
    participants: 36,
    maxParticipants: 48,
    image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Volleyball Beach Tournament",
    sport: "Volleyball",
    date: "Jul 15, 2024",
    location: "Ocean Beach, Miami",
    participants: 12,
    maxParticipants: 20,
    image: "https://images.unsplash.com/photo-1574271143515-5cddf8da19be?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "5",
    title: "Cricket Championship",
    sport: "Cricket",
    date: "Aug 5, 2024",
    location: "Memorial Field, Houston",
    participants: 22,
    maxParticipants: 22,
    image: "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "Swimming Competition",
    sport: "Swimming",
    date: "Jul 29, 2024",
    location: "Aquatic Center, San Francisco",
    participants: 18,
    maxParticipants: 30,
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=800&auto=format&fit=crop"
  },
];

interface EventGridProps {
  title: string;
  showMore?: boolean;
}

const EventGrid = ({ title, showMore = true }: EventGridProps) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Simulate loading data from an API
    const loadEvents = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setEvents(mockEvents);
      setIsLoading(false);
      setVisible(true);
    };

    loadEvents();
  }, []);

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-3">{title}</h2>
            <p className="text-muted-foreground max-w-2xl">
              Find and register for exciting sports events in your area. New tournaments and matches are added daily.
            </p>
          </div>
          {showMore && (
            <Button variant="outline" className="mt-4 md:mt-0">
              View all events
            </Button>
          )}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-muted rounded-2xl overflow-hidden animate-pulse-subtle">
                <div className="aspect-[4/3] bg-muted-foreground/10" />
                <div className="p-5 space-y-4">
                  <div className="h-6 w-3/4 bg-muted-foreground/10 rounded-md" />
                  <div className="space-y-2">
                    <div className="h-4 w-1/2 bg-muted-foreground/10 rounded-md" />
                    <div className="h-4 w-2/3 bg-muted-foreground/10 rounded-md" />
                    <div className="h-4 w-1/2 bg-muted-foreground/10 rounded-md" />
                  </div>
                  <div className="h-1.5 w-full bg-muted-foreground/10 rounded-full" />
                  <div className="h-4 w-1/4 bg-muted-foreground/10 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div 
                key={event.id}
                className={`transition-all duration-500 delay-${index * 100} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventGrid;
