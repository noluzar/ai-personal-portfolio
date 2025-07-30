
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ChatView from './components/ChatView';
import SkillsView from './components/SkillsView';
import ContactView from './components/ContactView';
import EducationView from './components/EducationView';
import ExperienceView from './components/ExperienceView';
import ProjectsView from './components/ProjectsView';
import JourneyGalleryView from './components/JourneyGalleryView';
import { checkAiAvailability } from './services/geminiService';
import { CATEGORIES } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].name);
  const [aiAvailable, setAiAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    // Check AI availability asynchronously after the component mounts.
    const checkAvailability = async () => {
      const isAvailable = await checkAiAvailability();
      setAiAvailable(isAvailable);
    };
    checkAvailability();
  }, []);

  const renderContent = () => {
    switch (activeCategory) {
      case 'Experience':
        return <ExperienceView />;
      case 'Skills':
        return <SkillsView />;
      case 'Projects':
        return <ProjectsView />;
      case 'Education':
        return <EducationView />;
      case 'Journey Gallery':
        return <JourneyGalleryView />;
      case 'Contact':
        return <ContactView />;
      default:
        return <ChatView isAiAvailable={aiAvailable} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-neutral-900 text-neutral-200 font-sans">
      <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <div className="flex-1 flex flex-col min-w-0">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
