
import React from 'react';
import {
  ChatBubbleOvalLeftEllipsisIcon,
  BriefcaseIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  PhotoIcon,
  EnvelopeIcon,
  ComputerDesktopIcon,
  CircleStackIcon,
  GlobeAltIcon,
  ChartBarIcon,
  LinkIcon,
  ClipboardDocumentListIcon,
} from './components/icons';

export const CATEGORIES = [
  { name: 'General Chat', icon: <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" /> },
  { name: 'Experience', icon: <BriefcaseIcon className="w-5 h-5" /> },
  { name: 'Skills', icon: <WrenchScrewdriverIcon className="w-5 h-5" /> },
  { name: 'Projects', icon: <RocketLaunchIcon className="w-5 h-5" /> },
  { name: 'Education', icon: <AcademicCapIcon className="w-5 h-5" /> },
  { name: 'Journey Gallery', icon: <PhotoIcon className="w-5 h-5" /> },
  { name: 'Contact', icon: <EnvelopeIcon className="w-5 h-5" /> },
];

export const SUGGESTED_PROMPTS = [
  { text: "What is Noluthando's current role and experience?", icon: <BriefcaseIcon className="w-8 h-8 mx-auto mb-2 text-orange-400" /> },
  { text: "What are Noluthando's technical skills?", icon: <WrenchScrewdriverIcon className="w-8 h-8 mx-auto mb-2 text-orange-400" /> },
  { text: "Tell me about a project Noluthando has worked on.", icon: <RocketLaunchIcon className="w-8 h-8 mx-auto mb-2 text-orange-400" /> },
  { text: "What is Noluthando's educational background?", icon: <AcademicCapIcon className="w-8 h-8 mx-auto mb-2 text-orange-400" /> },
];

export const SKILLS_DATA: { [key: string]: { name: string; level: string; years: string }[] } = {
  'Programming Languages': [
    { name: 'Python', level: 'Intermediate', years: '3+ years' },
    { name: 'JavaScript', level: 'Intermediate', years: '2+ years' },
    { name: 'TypeScript', level: 'Junior', years: '1+ years' },
  ],
  'Frameworks and Libraries': [
    { name: 'React', level: 'Intermediate', years: '2 years' },
    { name: 'Node.js', level: 'Junior', years: '1+ years' },
    { name: 'Express.js', level: 'Junior', years: '1 year' },
  ],
  'Databases': [
    { name: 'MySQL', level: 'Intermediate', years: '2+ year' },
    { name: 'MongoDB', level: 'Junior', years: '1 year' },
  ],
  'Tools & Technologies': [
    { name: 'Azure', level: 'Intermediate', years: '1 year' },
    { name: 'GIT', level: 'Advanced', years: '3 years' },
    { name: 'RESTful API', level: 'Intermediate', years: '2 years' },
    { name: 'HTML5', level: 'Advanced', years: '3 years' },
    { name: 'CSS', level: 'Advanced', years: '3 years' },
    { name: 'Vite', level: 'Intermediate', years: '1 year' },
  ],
  'Certifications': [
    { name: 'Microsoft Azure Fundamentals (AZ-900)', level: '', years: '' },
    { name: 'Google Certified Cybersecurity Professional', level: '', years: '' },
    { name: 'Google IT Automation with Python', level: '', years: '' },
    { name: 'Microsoft AI Fundamentals (AI-900)', level: '', years: '' },
  ]
};

export const EXPERIENCE_DATA = [
  {
    title: 'Tech Associate',
    company: 'CAPACITI',
    location: 'Johannesburg, South Africa',
    timeline: 'Current',
    responsibilities: [
      ''
    ],
    technologies: ['AI', 'Python', 'Professional development'],
  },
  {
    title: 'Software Developer',
    company: 'Tshimologong Digital Innovation Center',
    location: 'Johannesburg, South Africa',
    timeline: 'July 2024 - June 2025',
    responsibilities: [
      'Developed and maintained responsive web applications using React, Tailwind CSS, and Vite, ensuring optimal performance across devices.',
      'Built and integrated RESTful APIs using Node.js and Express, enhancing backend functionality and data flow.',
      'Contributed to CI/CD processes with GitHub Actions, automating testing and deployments to Azure Blob Storage.',
      'Strengthened communication and teamwork through collaboration with developers, designers, and project coordinators.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'RESTful API', 'JWT', 'Git'],
  },
];

export const PROJECTS_DATA = [
  {
    title: 'Full-stack e-commerce website',
    description: 'Development of a full-stack eCommerce website using the MERN stack, featuring secure JWT authentication, product management, shopping cart functionality, and responsive UI components.',
    tag: 'Professional',
    role: 'Full-Stack Developer',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'JWT', 'RESTful APIs', 'GitHub Actions'],
    achievements: [
      'Implemented secure user authentication and authorization using JWT.',
      'Developed a comprehensive product management system with CRUD functionalities.',
      'Built a fully functional shopping cart and checkout process.',
      'Designed a responsive UI for a seamless user experience across devices.',
      'Set up CI/CD pipelines with GitHub Actions for automated deployment.'
    ],
    liveDemoUrl: 'https://eco-glow-frontend.vercel.app/'
  },
  {
    title: 'AI Portfolio Assistant',
    description: 'The portfolio you are currently viewing. An interactive web application built with React and TypeScript, featuring a chat interface to an AI assistant powered by Gemini.',
    tag: 'Personal',
    role: 'Frontend Developer',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Gemini API'],
    achievements: [
      'Developed a dynamic and responsive portfolio website from scratch.',
      'Integrated the Google Gemini API to create an interactive AI chat assistant.',
      'Structured the application with a clean, component-based architecture.'
    ]
  },
  {
    title: 'Fur-seasons',
    description: 'Designed and developed “Fur-Seasons,” a fully responsive dog hotel website that showcases services, pricing, and booking options. Built with React and Tailwind CSS, featuring a clean, modern UI for an engaging user experience.',
    tag: 'Personal',
    role: 'Frontend Developer',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'JavaScript', 'GitHub', 'Vercel (Deployment)'],
    achievements: [
      'Designed and developed a fully responsive website to ensure a seamless experience across all devices.',
      'Implemented a clean, modern UI with React and Tailwind CSS for an engaging user experience.',
      'Structured the site to clearly showcase services, pricing, and booking information.',
      'Deployed the application using Vercel for high availability and performance.'
    ],
    liveDemoUrl: 'https://fur-seasons.vercel.app/'
  }
];

export const JOURNEY_DATA = [
  {
    title: "CAPACITI Hackathon Winner",
    date: "2025",
    imageUrl: '/unnamed.jpg',
    description: "One of my proudest moments was winning a hackathon hosted by CAPACITI, where my team and I collaborated on building a functional prototype to address a real-world challenge.",
  },
  {
    title: "Salesforce Agent Tour – Event Experience",
    date: "2025",
    imageUrl: '/salesforce.jpg',
    description: "Attended the Salesforce Agent Tour, an interactive event designed to explore the latest innovations in Salesforce solutions. Gained hands-on exposure to Salesforce products, including Sales Cloud, Service Cloud, and AI-driven CRM capabilities. Engaged with industry experts, participated in live demos, and learned best practices for leveraging Salesforce to drive customer success.",
  },
];

export const ACADEMIC_SUBJECTS = [
  { name: 'Web Development Principles', icon: <ComputerDesktopIcon className="w-6 h-6 text-orange-400 flex-shrink-0" /> },
  { name: 'Database Management Systems', icon: <CircleStackIcon className="w-6 h-6 text-orange-400 flex-shrink-0" /> },
  { name: 'Web Technologies', icon: <GlobeAltIcon className="w-6 h-6 text-orange-400 flex-shrink-0" /> },
  { name: 'System Analysis & Design', icon: <ChartBarIcon className="w-6 h-6 text-orange-400 flex-shrink-0" /> },
  { name: 'Network and Communication Technologies', icon: <LinkIcon className="w-6 h-6 text-orange-400 flex-shrink-0" /> },
];
