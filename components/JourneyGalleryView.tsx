
import React from 'react';
import { JOURNEY_DATA } from '../constants';
import { PhotoIcon } from './icons';

interface JourneyItem {
  imageUrl: string;
  description: string;
  title: string;
  date: string;
}

const JourneyCard: React.FC<{ item: JourneyItem }> = ({ item }) => (
  <div className="bg-neutral-800 border border-neutral-700/60 rounded-lg overflow-hidden group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-900/30 flex flex-col">
    <div className="aspect-w-16 aspect-h-9 bg-neutral-700">
      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="p-4 md:p-6 flex-1 flex flex-col">
        <p className="text-sm text-neutral-400 mb-1">{item.date}</p>
        <h3 className="text-lg font-bold text-orange-400 mb-2">{item.title}</h3>
        <p className="text-neutral-300 flex-grow">{item.description}</p>
    </div>
  </div>
);

const JourneyGalleryView: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col bg-neutral-900 overflow-y-auto">
      <header className="flex-shrink-0 p-6 md:p-8 text-center border-b border-neutral-700/80">
        <div className="inline-block p-4 bg-neutral-800 rounded-full mb-4">
          <PhotoIcon className="w-10 h-10 text-orange-400" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-100 tracking-wider uppercase">
          Journey Gallery
        </h1>
        <p className="mt-2 text-neutral-400 max-w-xl mx-auto">
          A visual timeline of key moments, achievements, and experiences in my tech journey.
        </p>
      </header>

      <main className="flex-1 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {JOURNEY_DATA.map((item, index) => (
            <JourneyCard key={index} item={item} />
          ))}
        </div>
      </main>

      <footer className="p-4 text-center text-xs text-neutral-500 border-t border-neutral-700/80 mt-auto">
        <p>Capturing the milestones that shape my career.</p>
      </footer>
    </div>
  );
};

export default JourneyGalleryView;
