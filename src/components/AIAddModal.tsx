import { useState } from 'react';
import { Section } from '../types';
import { generateFromPrompt } from '../ai/templates';

interface AIAddModalProps {
  onAdd: (sections: Section[]) => void;
  onClose: () => void;
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

const quickSuggestions = [
  { label: '🎯 Add a hero banner', prompt: 'hero section with call to action' },
  { label: '⭐ Add features grid', prompt: 'features grid with icons' },
  { label: '💬 Add testimonial', prompt: 'customer testimonial' },
  { label: '💰 Add pricing table', prompt: 'pricing plans comparison' },
  { label: '🚀 Add call to action', prompt: 'call to action section' },
  { label: '📋 Add footer', prompt: 'website footer' },
];

export default function AIAddModal({ onAdd, onClose }: AIAddModalProps) {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      const generated = generateFromPrompt(prompt);
      const sections: Section[] = generated.map((s) => ({
        id: generateId(),
        type: s.type as Section['type'],
        content: s.content,
      }));
      onAdd(sections);
      setIsGenerating(false);
    }, 1000);
  };

  const handleQuickAdd = (suggestionPrompt: string) => {
    setIsGenerating(true);
    setTimeout(() => {
      const generated = generateFromPrompt(suggestionPrompt);
      const sections: Section[] = generated.map((s) => ({
        id: generateId(),
        type: s.type as Section['type'],
        content: s.content,
      }));
      onAdd(sections);
      setIsGenerating(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl w-full max-w-lg border border-gray-700 animate-slide-up">
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <h2 className="text-white font-bold text-lg flex items-center gap-2">
            <span className="text-xl">🤖</span> AI Add Section
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">✕</button>
        </div>
        <div className="p-5">
          {isGenerating ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4 animate-float">🤖</div>
              <p className="text-indigo-300">AI is generating your section...</p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe the section you want to add..."
                    className="w-full px-4 py-3 pl-10 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30"
                    autoFocus
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">✨</span>
                </div>
                <button
                  type="submit"
                  disabled={!prompt.trim()}
                  className="w-full mt-3 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded-xl font-medium transition-colors"
                >
                  🚀 Generate Section
                </button>
              </form>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-500 text-xs mb-2">Quick add:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickSuggestions.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuickAdd(s.prompt)}
                      className="px-3 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-indigo-500/50 rounded-lg text-gray-300 text-xs text-left transition-all"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
