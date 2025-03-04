
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [focused, setFocused] = useState(false);
  
  return (
    <div className={`relative max-w-2xl mx-auto w-full transition-all duration-300 ${
      focused ? 'scale-[1.02]' : 'scale-100'
    }`}>
      <div className={`flex items-center bg-white rounded-full border overflow-hidden px-5 py-3 shadow-sm transition-shadow ${
        focused ? 'shadow-md border-primary' : 'border-border'
      }`}>
        <Search size={20} className="text-muted-foreground mr-2 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search for sports, locations, or events..."
          className="flex-1 bg-transparent border-0 focus:outline-none text-base placeholder:text-muted-foreground"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <button className="bg-primary text-white rounded-full px-5 py-2 text-sm font-medium transition-transform active:scale-95 hover:bg-primary/90">
          Search
        </button>
      </div>
      
      {/* Floating hint element */}
      <div className="absolute -bottom-12 right-4 text-sm text-muted-foreground bg-white rounded-lg px-3 py-1.5 shadow-sm border animate-pulse-subtle">
        <p className="text-xs">Try searching for "Basketball in New York"</p>
      </div>
    </div>
  );
};

export default SearchBar;
