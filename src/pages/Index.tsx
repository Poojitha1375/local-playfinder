
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventGrid from "@/components/EventGrid";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";
import LocationFilter from "@/components/LocationFilter";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Search Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-secondary/50 to-white relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-display font-bold tracking-tight mb-3">Find Your Perfect Match</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Search for sports events by name, location, or date to find exactly what you're looking for.
              </p>
            </div>
            
            <SearchBar />
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
              <LocationFilter />
              
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-primary text-lg">📅</span>
                  <h3 className="font-medium text-lg">Upcoming Events</h3>
                </div>
                
                <div className="bg-white rounded-xl p-4 shadow-sm border">
                  <div className="space-y-4">
                    {[
                      { date: "Jun 15", name: "Downtown Basketball Tournament" },
                      { date: "Jun 22", name: "Youth Football League" },
                      { date: "Jul 8", name: "Summer Tennis Open" }
                    ].map((event, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                        <div className="flex items-center space-x-3">
                          <span className="bg-primary/10 text-primary text-sm font-medium py-1 px-2 rounded">
                            {event.date}
                          </span>
                          <span className="font-medium">{event.name}</span>
                        </div>
                        <div>
                          <button className="text-primary text-sm font-medium hover:underline">Details</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Category Filter Section */}
        <CategoryFilter />
        
        {/* Featured Events */}
        <EventGrid title="Featured Events" />
        
        {/* Call to Action */}
        <section className="py-16 px-6 bg-gradient-to-r from-primary/5 to-primary/10 border-y">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-10 shadow-sm max-w-3xl mx-auto border">
              <h2 className="text-3xl font-display font-bold tracking-tight mb-4">Ready to Join a Tournament?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Register today to participate in exciting sports events in your area. Show off your skills and connect with other sports enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="btn-primary">Find Events</button>
                <button className="btn-secondary">Register Account</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
