
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Event } from "@/components/EventCard";
import { Calendar, MapPin, Users, Clock, CheckCircle, ChevronLeft, Share2, Bookmark, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventGrid from "@/components/EventGrid";

// Mock event details
const mockEvent: Event = {
  id: "1",
  title: "Downtown Basketball Tournament",
  sport: "Basketball",
  date: "Jun 15, 2024",
  location: "Central Park Court, New York",
  participants: 16,
  maxParticipants: 24,
  image: "https://images.unsplash.com/photo-1505666287802-931582b5ed56?q=80&w=1920&auto=format&fit=crop"
};

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Simulate API fetch for event details
    const fetchEvent = async () => {
      setLoading(true);
      // In a real app, you would fetch based on the ID
      await new Promise(resolve => setTimeout(resolve, 1000));
      setEvent(mockEvent);
      setLoading(false);
    };
    
    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-pulse-subtle">
            <span className="sr-only">Loading...</span>
            <div className="h-32 w-32 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-display font-bold">Event not found</h2>
            <p className="text-muted-foreground mt-2 mb-6">The event you're looking for doesn't exist or has been removed.</p>
            <Link to="/" className="btn-primary">
              Go back home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleRegister = () => {
    setRegistered(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[50vh] md:h-[60vh]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${event.image})`,
              filter: "brightness(0.7)"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-6 pb-16">
              <Link 
                to="/" 
                className="inline-flex items-center text-white bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft size={18} className="mr-1" />
                Back to events
              </Link>
              
              <span className="inline-block bg-primary/90 backdrop-blur-sm text-white text-sm font-medium py-1 px-3 rounded-full mb-4">
                {event.sport}
              </span>
              
              <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">{event.title}</h1>
              
              <div className="flex flex-wrap gap-4 md:gap-6 text-white">
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2 text-white/80" />
                  <span>{event.date}</span>
                </div>
                
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2 text-white/80" />
                  <span>{event.location}</span>
                </div>
                
                <div className="flex items-center">
                  <Users size={18} className="mr-2 text-white/80" />
                  <span>{event.participants} of {event.maxParticipants} participants</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-sm border mb-8">
                  <h2 className="text-2xl font-display font-semibold mb-6">About this event</h2>
                  
                  <div className="prose max-w-none">
                    <p>
                      Join us for an exciting basketball tournament in the heart of the city. This event is perfect for young players looking to showcase their talent and compete in a friendly environment.
                    </p>
                    <p>
                      The tournament will feature teams of 3-5 players, with multiple games throughout the day. All skill levels are welcome, but players will be grouped according to age and experience to ensure fair competition.
                    </p>
                    <h3>What to bring</h3>
                    <ul>
                      <li>Appropriate sports attire and shoes</li>
                      <li>Water bottle</li>
                      <li>ID for registration</li>
                      <li>Team jersey (if you have one)</li>
                    </ul>
                    <h3>Rules</h3>
                    <p>
                      Standard basketball rules apply. Games will be 20 minutes long with a 5-minute halftime. Full tournament rules will be provided upon registration.
                    </p>
                    <p>
                      Don't miss this opportunity to play, meet fellow basketball enthusiasts, and potentially get spotted by local coaches and scouts!
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm border">
                  <h2 className="text-2xl font-display font-semibold mb-6">Location</h2>
                  
                  <div className="rounded-xl overflow-hidden mb-6 h-[300px] bg-secondary relative">
                    {/* This would be replaced with an actual map component in a real app */}
                    <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                      <span className="text-muted-foreground">Interactive map would be here</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin size={24} className="text-primary flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-lg">Central Park Court</h3>
                      <p className="text-muted-foreground">Mid-Park at 97th Street, New York, NY 10022</p>
                      <a href="#" className="text-primary text-sm font-medium mt-2 inline-block hover:underline">
                        Get directions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border sticky top-24">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-display text-2xl font-bold">Free Entry</span>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Share2 size={18} />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Bookmark size={18} />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center py-2 border-b">
                      <Clock size={18} className="text-muted-foreground mr-3" />
                      <div>
                        <p className="font-medium">Time</p>
                        <p className="text-sm text-muted-foreground">9:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center py-2 border-b">
                      <CalendarIcon size={18} className="text-muted-foreground mr-3" />
                      <div>
                        <p className="font-medium">Date</p>
                        <p className="text-sm text-muted-foreground">June 15, 2024</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center py-2">
                      <Users size={18} className="text-muted-foreground mr-3" />
                      <div>
                        <p className="font-medium">Participants</p>
                        <div className="flex items-center mt-1">
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }} 
                            />
                          </div>
                          <span className="text-sm text-muted-foreground ml-2">
                            {event.participants}/{event.maxParticipants}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {registered ? (
                    <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-center mb-6">
                      <CheckCircle size={24} className="text-green-500 mx-auto mb-2" />
                      <h3 className="font-medium text-green-800">You're registered!</h3>
                      <p className="text-sm text-green-600 mt-1">Check your email for confirmation details</p>
                    </div>
                  ) : (
                    <Button 
                      className="w-full h-12 text-base font-medium rounded-xl mb-6"
                      onClick={handleRegister}
                    >
                      Register Now
                    </Button>
                  )}
                  
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2">
                      <strong>Registration closes:</strong> June 13, 2024
                    </p>
                    <p>
                      <strong>Organizer:</strong> NYC Sports Association
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Similar Events */}
        <EventGrid title="Similar Events" />
      </main>
      
      <Footer />
    </div>
  );
};

export default EventDetails;
