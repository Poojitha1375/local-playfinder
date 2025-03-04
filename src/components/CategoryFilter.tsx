
import { useState } from "react";

const sports = [
  { id: "basketball", name: "Basketball", icon: "🏀" },
  { id: "football", name: "Football", icon: "⚽" },
  { id: "tennis", name: "Tennis", icon: "🎾" },
  { id: "volleyball", name: "Volleyball", icon: "🏐" },
  { id: "cricket", name: "Cricket", icon: "🏏" },
  { id: "swimming", name: "Swimming", icon: "🏊‍♂️" },
  { id: "athletics", name: "Athletics", icon: "🏃‍♂️" },
  { id: "badminton", name: "Badminton", icon: "🏸" }
];

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  return (
    <div className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center font-medium text-lg mb-8">Browse by Sport</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {sports.map((sport) => (
            <button
              key={sport.id}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 ${
                selectedCategory === sport.id
                  ? "bg-primary/10 border-primary/30 border"
                  : "bg-white border hover:border-primary/30 border-border"
              }`}
              onClick={() => setSelectedCategory(sport.id === selectedCategory ? null : sport.id)}
            >
              <span className="text-3xl mb-2">{sport.icon}</span>
              <span className="text-sm font-medium">{sport.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
