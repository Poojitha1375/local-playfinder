
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setIsVisible(true);
  }, []);

  const sports = [
    "basketball",
    "football",
    "tennis",
    "volleyball",
    "cricket",
    "swimming",
    "athletics"
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1920&auto=format&fit=crop')",
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Abstract shapes */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="flex flex-col space-y-6 text-center md:text-left">
            <span 
              className={`inline-block bg-white/10 backdrop-blur-sm text-white text-sm font-medium py-1 px-3 rounded-full transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Find your next game
            </span>
            
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white text-balance transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Discover local sports events near you
            </h1>
            
            <p 
              className={`text-lg md:text-xl text-white/80 max-w-2xl transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Connect with events, tournaments, and matches in your neighborhood. Showcase your talent and play the sports you love.
            </p>

            {/* Sports tags */}
            <div className={`flex flex-wrap gap-2 justify-center md:justify-start transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
              {sports.map((sport, index) => (
                <span 
                  key={sport} 
                  className="inline-block bg-white/10 backdrop-blur-sm text-white text-xs py-1 px-3 rounded-full"
                  style={{ animationDelay: `${300 + (index * 50)}ms` }}
                >
                  {sport}
                </span>
              ))}
            </div>
            
            <div 
              className={`flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start pt-4 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button className="rounded-full text-base font-medium h-12 px-8">Find Events</Button>
              <Button variant="outline" className="rounded-full text-base font-medium h-12 px-8 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                How It Works
              </Button>
            </div>
          </div>
        </div>

        {/* Floating card */}
        <div 
          className={`hidden lg:block absolute bottom-12 right-12 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl max-w-sm transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary text-xl font-bold">24</span>
            </div>
            <div>
              <h3 className="font-medium text-lg">Local tournaments today</h3>
              <p className="text-sm text-muted-foreground mt-1">Register now to secure your spot in the upcoming tournaments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
