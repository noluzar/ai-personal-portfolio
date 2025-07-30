
import React from 'react';
import { CATEGORIES } from '../constants';

interface SidebarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="w-full md:w-80 lg:w-96 bg-neutral-800 p-6 flex flex-col flex-shrink-0">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="relative mb-4">
          <img
            src="https://picsum.photos/seed/portfolio-her/128/128"
            alt="Noluthando Ndlovu"
            className="w-24 h-24 rounded-full border-4 border-orange-500 object-cover"
          />
           <div className="absolute bottom-0 right-0 w-6 h-6 bg-orange-500 rounded-full border-2 border-neutral-800"></div>
        </div>
        <h1 className="text-2xl font-bold text-neutral-100">Noluthando Ndlovu</h1>
        <p className="text-md text-neutral-400">Tech associate | Aspiring Software Engineer</p>
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-semibold text-neutral-400 tracking-widest uppercase">Categories</h2>
        <nav className="mt-4 space-y-2">
          {CATEGORIES.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm font-medium rounded-lg transition-all duration-200 ${
                activeCategory === category.name
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'text-neutral-300 hover:bg-neutral-700/50 hover:text-white'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto text-center text-xs text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Noluthando Ndlovu. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Sidebar;