
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { RocketLaunchIcon, WrenchScrewdriverIcon, TrophyIcon, UserIcon, ArrowTopRightOnSquareIcon } from './icons';

type Project = (typeof PROJECTS_DATA)[number];

const tagColorMap: { [key: string]: string } = {
  'Professional': 'bg-green-600/80 text-green-100 border border-green-500/50',
  'Personal': 'bg-blue-600/80 text-blue-100 border border-blue-500/50',
  'Academic': 'bg-purple-600/80 text-purple-100 border border-purple-500/50',
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700/50 relative transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-800/80 transform hover:-translate-y-1">
      <div className="absolute top-0 left-0 w-1 h-full bg-orange-600 rounded-l-lg"></div>
      <div className="pl-4 md:pl-6 space-y-5">
        
        <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold text-neutral-100">{project.title}</h3>
            {project.tag && (
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${tagColorMap[project.tag] || 'bg-neutral-600 text-neutral-200'}`}>
                    {project.tag}
                </span>
            )}
        </div>
        
        <p className="text-neutral-400">{project.description}</p>
        
        {'liveDemoUrl' in project && project.liveDemoUrl && (
          <div>
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-orange-600 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-orange-500 transition-colors"
            >
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              View Live Demo
            </a>
          </div>
        )}

        {project.role && (
          <div>
            <h4 className="font-semibold text-neutral-200 flex items-center gap-2 mb-2">
              <UserIcon className="w-5 h-5 text-orange-500" />
              Role: <span className="font-normal text-neutral-300">{project.role}</span>
            </h4>
          </div>
        )}
        
        {project.technologies && project.technologies.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-neutral-200 flex items-center gap-2 mb-3">
              <WrenchScrewdriverIcon className="w-5 h-5 text-orange-500" />
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="bg-orange-900/70 text-orange-300 px-3 py-1 text-sm font-medium rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.achievements && project.achievements.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-neutral-200 flex items-center gap-2 mb-3">
              <TrophyIcon className="w-5 h-5 text-orange-500" />
              Key Achievements:
            </h4>
            <ul className="space-y-2 text-neutral-300">
              {project.achievements.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1.5 flex-shrink-0 text-xs leading-none">●</span>
                  <p className="flex-1">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};


const ProjectsView: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col bg-neutral-900 overflow-y-auto">
      <header className="flex-shrink-0 p-6 md:p-8 text-center border-b border-neutral-700/80">
        <div className="inline-block p-4 bg-neutral-800 rounded-full mb-4">
          <RocketLaunchIcon className="w-10 h-10 text-orange-400" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-100 tracking-wider uppercase">
          Projects Showcase
        </h1>
        <p className="mt-2 text-neutral-400 max-w-xl mx-auto">
          A collection of my work, demonstrating my skills and passion for development.
        </p>
      </header>
      
      <main className="flex-1 p-6 md:p-8 space-y-8">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </main>

       <footer className="p-4 text-center text-xs text-neutral-500 border-t border-neutral-700/80 mt-auto">
        <p>Exploring new ideas and building solutions, one project at a time.</p>
      </footer>
    </div>
  );
};

export default ProjectsView;
