import { useState } from 'react';
import { aiTemplates, AITemplate } from '../ai/templates';

interface AIPromptScreenProps {
  onGenerate: (prompt: string) => void;
  onTemplateSelect: (template: AITemplate) => void;
}

const examplePrompts = [
  "A modern SaaS startup for project management",
  "Italian restaurant called Bella Vita",
  "Photographer portfolio with dark theme",
  "Online fitness coaching platform",
  "Luxury real estate agency in Miami",
  "Handmade jewelry e-commerce shop",
];

export default function AIPromptScreen({ onGenerate, onTemplateSelect }: AIPromptScreenProps) {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setIsGenerating(true);
    // Simulate AI thinking
    setTimeout(() => {
      onGenerate(prompt);
      setIsGenerating(false);
    }, 1500);
  };

  const handleExampleClick = (example: string) => {
    setPrompt(example);
  };

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950 flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-6 animate-float">🤖</div>
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-indigo-600/20 animate-pulse-glow flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-indigo-500 animate-ping"></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">AI is Building Your Website</h2>
          <p className="text-indigo-300 mb-2">Analyzing your description...</p>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </div>
          <div className="mt-8 max-w-md mx-auto">
            <div className="bg-gray-900/60 border border-gray-700 rounded-xl p-4 text-left">
              <p className="text-gray-500 text-xs mb-1">Your prompt:</p>
              <p className="text-indigo-200 text-sm">"{prompt}"</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950 flex flex-col relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Header */}
      <header className="p-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🌐</span>
          <div>
            <h1 className="text-white font-bold text-xl">WebCraft AI</h1>
            <p className="text-indigo-300 text-xs">Free AI Website Builder</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="px-2 py-1 bg-indigo-900/50 rounded text-indigo-300 text-xs font-medium">✨ AI-Powered</span>
          <span className="px-2 py-1 bg-green-900/50 rounded text-green-300 text-xs font-medium">100% Free</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-12 relative z-10">
        <div className="text-center mb-8 max-w-2xl animate-slide-up">
          <div className="text-5xl mb-4">✨</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Describe Your Website
          </h2>
          <p className="text-lg text-indigo-200">
            Tell us what you need and our AI will build it for you in seconds.
            <br />No coding required.
          </p>
        </div>

        {/* AI Input */}
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">🤖</div>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., A modern restaurant website with online reservations..."
              className="w-full pl-14 pr-32 py-5 bg-gray-900/80 border border-indigo-500/30 rounded-2xl text-white text-lg placeholder-gray-500 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 backdrop-blur-sm transition-all duration-300"
            />
            <button
              type="submit"
              disabled={!prompt.trim() || isGenerating}
              className="absolute right-3 top-1/2 -translate-y-1/2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
            >
              <span>🚀</span>
              Generate
            </button>
          </div>
        </form>

        {/* Example Prompts */}
        <div className="w-full max-w-2xl mb-12 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <p className="text-gray-500 text-sm text-center mb-3">Try these examples:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {examplePrompts.map((example, i) => (
              <button
                key={i}
                onClick={() => handleExampleClick(example)}
                className="px-3 py-1.5 bg-gray-800/60 hover:bg-gray-700/60 border border-gray-700 hover:border-indigo-500/50 rounded-full text-gray-300 text-sm transition-all duration-200"
              >
                {example}
              </button>
            ))}
          </div>
        </div>

        {/* Templates */}
        <div className="w-full max-w-4xl animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <h3 className="text-white font-semibold text-center mb-4">
            Or start from a template:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {aiTemplates.map((template, i) => (
              <button
                key={template.id}
                onClick={() => onTemplateSelect(template)}
                className="p-4 bg-gray-900/60 hover:bg-gray-800/80 border border-gray-700 hover:border-indigo-500 rounded-xl text-left transition-all duration-200 group backdrop-blur-sm hover:scale-105 hover:-translate-y-1"
                style={{ animationDelay: `${0.3 + i * 0.05}s` }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{template.icon}</div>
                <div className="text-white font-medium text-sm group-hover:text-indigo-300 transition-colors">
                  {template.name}
                </div>
                <div className="text-gray-500 text-xs mt-1">
                  {template.description}
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-600 text-sm relative z-10">
        Built with ❤️ — Free forever, no sign-up required
      </footer>
    </div>
  );
}
