
import React from 'react';
import { AtSymbolIcon, MapPinIcon, PhoneIcon, LinkIcon } from './icons';

const ContactView: React.FC = () => {
  const email = 'noluthandosamantha.ns@gmail.com';
  const location = 'Johannesburg, GP, South Africa';
  const phone = '0681503210';
  const linkedinUrl = 'https://www.linkedin.com/in/noluthando-ndlovu-737aab18a/';
  const githubUrl = 'https://github.com/noluzar';


  return (
    <div className="flex-1 flex flex-col bg-neutral-900 overflow-y-auto">
      <header className="flex-shrink-0 p-6 md:p-8 text-center border-b border-neutral-700/80">
        <div className="inline-block p-4 bg-neutral-800 rounded-full mb-4">
          <AtSymbolIcon className="w-10 h-10 text-orange-400" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-100 tracking-wider uppercase">
          Get In Touch
        </h1>
        <p className="mt-2 text-neutral-400 max-w-xl mx-auto">
          Let's connect and discuss opportunities.
        </p>
      </header>
      
      <main className="flex-1 p-6 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-2xl space-y-6">
            <div className="bg-neutral-800 p-6 rounded-lg flex items-center gap-5 transition-transform transform hover:-translate-y-1">
                <div className="p-3 bg-orange-600 rounded-full flex-shrink-0">
                    <AtSymbolIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h3 className="text-neutral-400 text-sm font-semibold">Email</h3>
                    <a href={`mailto:${email}`} className="text-orange-400 font-medium text-lg hover:underline break-all">
                        {email}
                    </a>
                </div>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg flex items-center gap-5 transition-transform transform hover:-translate-y-1">
                <div className="p-3 bg-orange-600 rounded-full flex-shrink-0">
                    <PhoneIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h3 className="text-neutral-400 text-sm font-semibold">Phone</h3>
                    <a href={`tel:${phone}`} className="text-orange-400 font-medium text-lg hover:underline break-all">
                        {phone}
                    </a>
                </div>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg flex items-center gap-5 transition-transform transform hover:-translate-y-1">
                 <div className="p-3 bg-orange-600 rounded-full flex-shrink-0">
                    <LinkIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h3 className="text-neutral-400 text-sm font-semibold">LinkedIn</h3>
                     <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-orange-400 font-medium text-lg hover:underline break-all">
                        in/noluthando-ndlovu-737aab18a
                    </a>
                </div>
            </div>
            
            <div className="bg-neutral-800 p-6 rounded-lg flex items-center gap-5 transition-transform transform hover:-translate-y-1">
                 <div className="p-3 bg-orange-600 rounded-full flex-shrink-0">
                    <LinkIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h3 className="text-neutral-400 text-sm font-semibold">GitHub</h3>
                     <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-orange-400 font-medium text-lg hover:underline break-all">
                        noluzar
                    </a>
                </div>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg flex items-center gap-5 transition-transform transform hover:-translate-y-1">
                 <div className="p-3 bg-orange-600 rounded-full flex-shrink-0">
                    <MapPinIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h3 className="text-neutral-400 text-sm font-semibold">Location</h3>
                    <p className="text-neutral-100 font-medium text-lg">{location}</p>
                </div>
            </div>
        </div>
      </main>

      <footer className="p-4 text-center text-xs text-neutral-500 border-t border-neutral-700/80 mt-auto">
        <p>Feel free to reach out via email. I'm open to new opportunities.</p>
      </footer>
    </div>
  );
};

export default ContactView;
