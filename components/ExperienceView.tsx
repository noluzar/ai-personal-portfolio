
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { BriefcaseIcon, MapPinIcon, CalendarDaysIcon, RocketLaunchIcon, WrenchScrewdriverIcon } from './icons';

const ExperienceCard: React.FC<typeof EXPERIENCE_DATA[0]> = ({
  title,
  company,
  location,
  timeline,
  responsibilities,
  technologies
}) => {
  return (
    <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700/50 relative">
      <div className="absolute top-0 left-0 w-1 h-full bg-orange-600 rounded-l-lg"></div>
      <div className="pl-4 md:pl-6">
        <h3 className="text-2xl font-bold text-orange-400">{title}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-x-4 gap-y-1 text-neutral-400 mt-2">
          <div className="flex items-center gap-2">
            <BriefcaseIcon className="w-4 h-4 flex-shrink-0" />
            <span>{company}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-4 h-4 flex-shrink-0" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="w-4 h-4 flex-shrink-0" />
            <span>{timeline}</span>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-semibold text-neutral-200 flex items-center gap-2 mb-3">
            <RocketLaunchIcon className="w-5 h-5 text-orange-500" />
            Key Responsibilities:
          </h4>
          <ul className="space-y-2 text-neutral-300">
            {responsibilities.map((resp, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-orange-500 mt-1 flex-shrink-0 text-lg leading-none">▸</span>
                <p className="flex-1">{resp}</p>
              </li>
            ))}
          </ul>
        </div>
        
        {technologies && technologies.length > 0 && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-neutral-200 flex items-center gap-2 mb-3">
              <WrenchScrewdriverIcon className="w-5 h-5 text-orange-500" />
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map(tech => (
                <span key={tech} className="bg-orange-900/70 text-orange-300 px-3 py-1 text-sm font-medium rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


const ExperienceView: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col bg-neutral-900 overflow-y-auto">
      <header className="flex-shrink-0 p-6 md:p-8 text-center border-b border-neutral-700/80">
        <div className="inline-block p-4 bg-neutral-800 rounded-full mb-4">
          <BriefcaseIcon className="w-10 h-10 text-orange-400" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-100 tracking-wider uppercase">
          Work Experience
        </h1>
        <p className="mt-2 text-neutral-400 max-w-xl mx-auto">
          A timeline of my professional journey and contributions.
        </p>
      </header>
      
      <main className="flex-1 p-6 md:p-8 space-y-8">
        {EXPERIENCE_DATA.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </main>

       <footer className="p-4 text-center text-xs text-neutral-500 border-t border-neutral-700/80 mt-auto">
        <p>Continuously seeking challenging roles to leverage my skills and drive innovation.</p>
      </footer>
    </div>
  );
};

export default ExperienceView;
