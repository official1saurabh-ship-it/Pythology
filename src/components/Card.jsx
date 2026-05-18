import React from 'react';

const Card = ({ image, title, description, darkText = false }) => {
  return (
    <div className={`rounded-3xl overflow-hidden group transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20 ${darkText ? 'bg-white shadow-xl' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}>
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 text-left">
        <h3 className={`text-xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors ${darkText ? 'text-darker' : 'text-white'}`}>
          {title}
        </h3>
        <p className={`text-sm mb-6 line-clamp-2 leading-relaxed ${darkText ? 'text-gray-600' : 'text-gray-400'}`}>
          {description}
        </p>
        <button className="w-full py-3 bg-primary hover:brightness-110 text-white font-bold rounded-xl transition-all duration-300 active:scale-95 shadow-lg shadow-primary/20">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Card;



