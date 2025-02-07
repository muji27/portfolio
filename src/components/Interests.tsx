import React from 'react';
import { Book, Star, ShoppingBasket as Basketball, ChevronRight as ChessKnight, Bot } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      category: "Professional Interests",
      items: [
        { name: "Artificial Intelligence", icon: <Bot size={24} /> },
        { name: "Machine Learning", icon: <Bot size={24} /> },
        { name: "Deep Learning", icon: <Bot size={24} /> },
        { name: "Natural Language Processing", icon: <Bot size={24} /> },
        { name: "Data Analytics", icon: <Bot size={24} /> }
      ]
    },
    {
      category: "Hobbies",
      items: [
        { name: "Reading Self-Help Books", icon: <Book size={24} /> },
        { name: "Stargazing", icon: <Star size={24} /> },
        { name: "Basketball", icon: <Basketball size={24} /> },
        { name: "Playing Chess", icon: <ChessKnight size={24} /> },
        { name: "Exploring AI Tools", icon: <Bot size={24} /> }
      ]
    }
  ];

  return (
    <section id="interests" className="py-24 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-900">
          Interests & <span className="text-blue-600">Hobbies</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {interests.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-orange-100">
              <h3 className="text-2xl font-bold mb-8 text-blue-600 flex items-center">
                <span className="bg-blue-100 p-3 rounded-xl mr-4">
                  {index === 0 ? "👨‍💻" : "🎯"}
                </span>
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="group flex items-center gap-4 bg-orange-50/50 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
                  >
                    <div className="text-blue-600 transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                    <span className="text-gray-700 font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests