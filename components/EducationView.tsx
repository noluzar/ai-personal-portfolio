
import React from 'react';
import { AcademicCapIcon, BuildingLibraryIcon, MapPinIcon, CalendarDaysIcon, LightBulbIcon } from './icons';
import { ACADEMIC_SUBJECTS } from '../constants';

const EducationView: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col bg-neutral-900 overflow-y-auto">
      <header className="flex-shrink-0 p-6 md:p-8 text-center border-b border-neutral-700/80">
        <div className="inline-block p-4 bg-neutral-800 rounded-full mb-4">
          <AcademicCapIcon className="w-10 h-10 text-orange-400" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-100 tracking-wider uppercase">
          Educational Background
        </h1>
        <p className="mt-2 text-neutral-400 max-w-xl mx-auto">
          Academic foundation and qualifications.
        </p>
      </header>

      <main className="flex-1 p-6 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-3xl space-y-8">
            <div className="w-full bg-neutral-800 rounded-lg p-8 shadow-lg border border-neutral-700/60">
                <h2 className="text-2xl font-bold text-orange-400 mb-6">
                    Diploma in Information technology in Network Management
                </h2>
                <div className="space-y-4 text-neutral-300">
                    <div className="flex items-center gap-4">
                    <BuildingLibraryIcon className="w-6 h-6 text-neutral-500 flex-shrink-0" />
                    <span>IIE Rosebank College</span>
                    </div>
                    <div className="flex items-center gap-4">
                    <MapPinIcon className="w-6 h-6 text-neutral-500 flex-shrink-0" />
                    <span>Johannesburg, Gauteng</span>
                    </div>
                    <div className="flex items-center gap-4">
                    <CalendarDaysIcon className="w-6 h-6 text-neutral-500 flex-shrink-0" />
                    <span>Graduated: July 2022</span>
                    </div>
                    <div className="flex items-center gap-4">
                    <AcademicCapIcon className="w-6 h-6 text-neutral-500 flex-shrink-0" />
                    <span>Undergraduate Program</span>
                    </div>
                </div>
            </div>

            <section className="w-full bg-neutral-800 border border-neutral-700/60 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                    <LightBulbIcon className="w-8 h-8 text-orange-400" />
                    <h2 className="text-2xl font-bold text-neutral-100">Academic Foundation</h2>
                </div>
                <hr className="border-t border-orange-500 mb-6" />
                <div className="bg-neutral-700/20 border border-neutral-700/50 p-6 rounded-lg">
                    <p className="text-neutral-300 mb-6">The ICT degree provided a comprehensive foundation in:</p>
                    <ul className="space-y-4">
                        {ACADEMIC_SUBJECTS.map((subject, index) => (
                        <li key={index} className="flex items-center gap-4">
                            {subject.icon}
                            <span className="text-neutral-200">{subject.name}</span>
                        </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
      </main>

       <footer className="p-4 text-center text-xs text-neutral-500 border-t border-neutral-700/80 mt-auto">
        <p>Committed to lifelong learning and continuous professional development.</p>
      </footer>
    </div>
  );
};

export default EducationView;
