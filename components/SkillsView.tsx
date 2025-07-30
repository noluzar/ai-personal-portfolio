import React from 'react';
import { SKILLS_DATA } from '../constants';
import { ComputerDesktopIcon, WrenchScrewdriverIcon, CircleStackIcon, Cog6ToothIcon, StarIcon } from './icons';

const levelColorMap: { [key: string]: string } = {
  'Advanced': 'bg-green-500 text-white',
  'Intermediate': 'bg-orange-500 text-white',
};

const categoryIcons: { [key: string]: React.ReactElement } = {
  'Programming Languages': <ComputerDesktopIcon className="w-8 h-8 text-neutral-300" />,
  'Frameworks and Libraries': <WrenchScrewdriverIcon className="w-8 h-8 text-neutral-300" />,
  'Databases': <CircleStackIcon className="w-8 h-8 text-neutral-300" />,
  'Tools & Technologies': <Cog6ToothIcon className="w-8 h-8 text-neutral-300" />,
  'Certifications': <StarIcon className="w-8 h-8 text-neutral-300" />
};


const SkillCard: React.FC<{ name: string; level: string; years: string }> = ({ name, level, years }) => (
  <div className="bg-neutral-700/20 border border-neutral-700/50 p-6 rounded-lg text-center flex flex-col items-center justify-center gap-y-2 transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-700/40 transform hover:-translate-y-1 h-full">
    <h3 className="text-neutral-100 font-bold text-lg">{name}</h3>
    {level && 
      <span className={`px-4 py-1.5 text-xs font-bold rounded-full ${levelColorMap[level] || 'bg-neutral-600 text-neutral-200'}`}>
        {level}
      </span>
    }
    {years && 
      <p className="text-neutral-400 text-sm">{years}</p>
    }
  </div>
);

const SkillsView: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col bg-neutral-900 overflow-y-auto">
       <header className="flex-shrink-0 p-6 md:p-8 text-center border-b border-neutral-700/80">
        <div className="inline-block p-4 bg-neutral-800 rounded-full mb-4">
          <WrenchScrewdriverIcon className="w-10 h-10 text-orange-400" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-100 tracking-wider uppercase">
          Skills & Proficiencies
        </h1>
        <p className="mt-2 text-neutral-400 max-w-xl mx-auto">
          A breakdown of my technical abilities and tools of the trade.
        </p>
      </header>

      <main className="flex-1 p-6 md:p-8 space-y-8">
        {Object.entries(SKILLS_DATA).map(([category, skills]) => (
          <section key={category} className="w-full max-w-5xl mx-auto bg-neutral-800 border border-neutral-700/60 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-4 mb-4">
              {categoryIcons[category] || <ComputerDesktopIcon className="w-8 h-8 text-neutral-300" />}
              <h2 className="text-2xl font-bold text-neutral-100">{category}</h2>
            </div>
            <hr className="border-t border-orange-500 mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map(skill => (
                <SkillCard key={skill.name} name={skill.name} level={skill.level} years={skill.years} />
              ))}
            </div>
          </section>
        ))}
      </main>
      
       <footer className="p-4 text-center text-xs text-neutral-500 border-t border-neutral-700/80 mt-auto">
        <p>A versatile skill set for building modern web applications.</p>
      </footer>
    </div>
  );
};

export default SkillsView;