
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChatMessage } from '../types';
import { sendMessageStream } from '../services/geminiService';
import { SUGGESTED_PROMPTS } from '../constants';
import { PaperAirplaneIcon, PlusIcon } from './icons';

// Add type declaration for the 'marked' library loaded from CDN
declare const marked: {
  parse: (markdown: string) => string;
};

const WelcomeScreen: React.FC<{ onPromptClick: (prompt: string) => void }> = ({ onPromptClick }) => (
  <div className="text-center">
    <div className="inline-block bg-neutral-800 p-3 rounded-full mb-4">
      <span className="text-4xl">👋</span>
    </div>
    <h1 className="text-3xl md:text-4xl font-bold text-neutral-100">
      Welcome to{' '}
      <span className="text-orange-400">
        Noluthando's Portfolio!
      </span>
    </h1>
    <p className="mt-2 text-neutral-400 max-w-xl mx-auto">
      I'm Astra, your AI assistant. Feel free to ask me anything about Noluthando Ndlovu's professional background!
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-3xl mx-auto">
      {SUGGESTED_PROMPTS.map((prompt) => (
        <button
          key={prompt.text}
          onClick={() => onPromptClick(prompt.text)}
          className="p-4 bg-neutral-800 rounded-lg text-left hover:bg-neutral-700 transition-all duration-200 h-full flex flex-col justify-between"
        >
          <div>
            {prompt.icon}
            <p className="text-neutral-100 font-medium">{prompt.text}</p>
          </div>
        </button>
      ))}
    </div>
  </div>
);

const LoadingIndicator: React.FC = () => (
    <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
    </div>
);

const ChatView: React.FC<{ isAiAvailable: boolean | null }> = ({ isAiAvailable }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = useCallback(async (messageText: string) => {
    if (!messageText.trim() || isLoading || isAiAvailable !== true) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      text: messageText,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const aiMessageId = `ai-${Date.now()}`;
    setMessages((prev) => [...prev, { id: aiMessageId, text: '', sender: 'ai' }]);

    await sendMessageStream(
      messageText,
      (chunk) => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMessageId ? { ...msg, text: msg.text + chunk } : msg
          )
        );
      },
      () => {
        setIsLoading(false);
      }
    );
  }, [isLoading, isAiAvailable]);

  const handlePromptClick = (prompt: string) => {
    handleSendMessage(prompt);
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  const getAiStatus = () => {
    if (isAiAvailable === null) {
      return { text: 'Checking...', className: 'bg-yellow-500/20 text-yellow-300' };
    }
    return isAiAvailable 
      ? { text: 'Online', className: 'bg-green-500/20 text-green-300' }
      : { text: 'Unavailable', className: 'bg-red-800 text-red-200' };
  };

  const aiStatus = getAiStatus();
  const isInputDisabled = isLoading || isAiAvailable !== true;

  return (
    <div className="flex-1 flex flex-col bg-neutral-900">
      <header className="flex-shrink-0 flex items-center justify-between p-4 border-b border-neutral-700/80">
        <div>
          <h2 className="text-lg font-semibold text-neutral-100">Chat with Astra - AI Portfolio Assistant</h2>
          <p className="text-sm text-neutral-400">Ask me anything about Noluthando's experience, skills, and projects</p>
        </div>
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${aiStatus.className}`}>
          AI {aiStatus.text}
        </span>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center">
             <WelcomeScreen onPromptClick={handlePromptClick} />
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-orange-600 flex-shrink-0 flex items-center justify-center font-bold text-white text-sm">
                    AI
                  </div>
                )}
                <div className={`max-w-xl p-3 rounded-lg ${msg.sender === 'user' ? 'bg-orange-700 text-white rounded-br-none' : 'bg-neutral-800 text-neutral-200 rounded-bl-none'}`}>
                  {msg.sender === 'ai' && msg.text === '' && isLoading ? (
                    <LoadingIndicator />
                  ) : msg.sender === 'user' ? (
                     <div className="whitespace-pre-wrap">{msg.text}</div>
                  ) : (
                    <div className="prose prose-sm prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: marked.parse(msg.text) }} />
                  )}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
        )}
      </main>

      <footer className="p-4 border-t border-neutral-700/80">
        <form onSubmit={handleFormSubmit} className="flex items-center gap-3">
          <button type="button" className="p-2 rounded-full hover:bg-neutral-700 transition-colors">
            <PlusIcon className="w-6 h-6 text-neutral-400"/>
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              isAiAvailable === false 
                ? "AI assistant is currently unavailable." 
                : "Ask me anything about Noluthando - her experience, skills, or anything else!"
            }
            className="w-full bg-neutral-800 border-neutral-700 rounded-lg px-4 py-2.5 text-neutral-100 focus:ring-2 focus:ring-orange-500 focus:outline-none disabled:opacity-60"
            disabled={isInputDisabled}
          />
          <button
            type="submit"
            disabled={!input.trim() || isInputDisabled}
            className="p-2.5 bg-neutral-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors"
          >
            <PaperAirplaneIcon className="w-5 h-5 text-neutral-100" />
          </button>
        </form>
      </footer>
    </div>
  );
};

export default ChatView;