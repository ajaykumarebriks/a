import { useState, useCallback } from 'react';
import { Section, ComponentOption } from './types';
import { AITemplate, generateFromPrompt } from './ai/templates';
import AIPromptScreen from './components/AIPromptScreen';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertyPanel from './components/PropertyPanel';
import ExportModal from './components/ExportModal';
import AIAddModal from './components/AIAddModal';

function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

function getDefaultContent(type: ComponentOption['type']): Record<string, any> {
  switch (type) {
    case 'hero':
      return {
        title: 'Welcome to My Website',
        subtitle: 'Build something amazing with our powerful platform.',
        buttonText: 'Get Started →',
        bgColor: '#1e1b4b',
        titleColor: '#ffffff',
        textColor: '#c7d2fe',
        buttonColor: '#6366f1',
      };
    case 'text':
      return {
        title: 'About Us',
        body: 'We are a passionate team dedicated to creating innovative solutions.',
        bgColor: '#ffffff',
        titleColor: '#1f2937',
        textColor: '#4b5563',
      };
    case 'features':
      return {
        title: 'Our Features',
        bgColor: '#f9fafb',
        titleColor: '#1f2937',
        textColor: '#6b7280',
        cardBgColor: '#ffffff',
        features: [
          { icon: '⚡', title: 'Fast', description: 'Lightning fast performance' },
          { icon: '🔒', title: 'Secure', description: 'Enterprise-grade security' },
          { icon: '🎨', title: 'Beautiful', description: 'Stunning design' },
        ],
      };
    case 'image':
      return {
        emoji: '🏔️',
        caption: 'A beautiful moment',
        bgColor: '#ffffff',
        imageBgColor: '#e0e7ff',
        textColor: '#6b7280',
      };
    case 'testimonial':
      return {
        quote: 'This product changed everything for us!',
        author: 'Sarah Johnson',
        role: 'CEO at TechStart',
        bgColor: '#f0fdf4',
        titleColor: '#166534',
        textColor: '#4b5563',
      };
    case 'pricing':
      return {
        title: 'Pricing',
        bgColor: '#f9fafb',
        titleColor: '#1f2937',
        textColor: '#6b7280',
        cardBgColor: '#ffffff',
        highlightColor: '#6366f1',
        plans: [
          { name: 'Basic', price: '$9/mo', features: '5 projects, 1GB storage' },
          { name: 'Pro', price: '$29/mo', features: 'Unlimited projects, 50GB' },
          { name: 'Enterprise', price: '$99/mo', features: 'Custom solutions' },
        ],
      };
    case 'cta':
      return {
        title: 'Ready to Get Started?',
        subtitle: 'Join thousands of happy customers.',
        buttonText: 'Start Free Trial',
        bgColor: '#4f46e5',
        titleColor: '#ffffff',
        textColor: '#e0e7ff',
        buttonColor: '#ffffff',
      };
    case 'footer':
      return {
        brandName: 'MyBrand',
        tagline: 'Building the future.',
        copyright: '© 2025 All rights reserved.',
        bgColor: '#111827',
        titleColor: '#ffffff',
        textColor: '#9ca3af',
      };
    default:
      return {};
  }
}

type AppView = 'ai-prompt' | 'builder';

export default function App() {
  const [view, setView] = useState<AppView>('ai-prompt');
  const [sections, setSections] = useState<Section[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showExport, setShowExport] = useState(false);
  const [showAIAdd, setShowAIAdd] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');

  const convertToSections = (templateSections: { type: string; content: Record<string, any> }[]): Section[] => {
    return templateSections.map((s) => ({
      id: generateId(),
      type: s.type as Section['type'],
      content: s.content,
    }));
  };

  const showNotificationMsg = useCallback((msg: string) => {
    setNotificationMsg(msg);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 4000);
  }, []);

  const handleAIGenerate = useCallback((prompt: string) => {
    setAiPrompt(prompt);
    const generated = generateFromPrompt(prompt);
    setSections(convertToSections(generated));
    setSelectedId(null);
    setView('builder');
    showNotificationMsg(`✨ AI generated ${generated.length} sections for your website!`);
  }, [showNotificationMsg]);

  const handleTemplateSelect = useCallback((template: AITemplate) => {
    setAiPrompt(template.description);
    setSections(convertToSections(template.sections));
    setSelectedId(null);
    setView('builder');
    showNotificationMsg(`✨ Template "${template.name}" loaded with ${template.sections.length} sections!`);
  }, [showNotificationMsg]);

  const handleRegenerate = useCallback(() => {
    if (aiPrompt) {
      handleAIGenerate(aiPrompt);
    }
  }, [aiPrompt, handleAIGenerate]);

  const addSection = useCallback((type: ComponentOption['type']) => {
    const newSection: Section = {
      id: generateId(),
      type,
      content: getDefaultContent(type),
    };
    setSections((prev) => [...prev, newSection]);
    setSelectedId(newSection.id);
  }, []);

  const updateSection = useCallback((id: string, content: Record<string, any>) => {
    setSections((prev) =>
      prev.map((s) => (s.id === id ? { ...s, content } : s))
    );
  }, []);

  const deleteSection = useCallback((id: string) => {
    setSections((prev) => prev.filter((s) => s.id !== id));
    setSelectedId(null);
  }, []);

  const moveUp = useCallback((id: string) => {
    setSections((prev) => {
      const idx = prev.findIndex((s) => s.id === id);
      if (idx <= 0) return prev;
      const newArr = [...prev];
      [newArr[idx - 1], newArr[idx]] = [newArr[idx], newArr[idx - 1]];
      return newArr;
    });
  }, []);

  const moveDown = useCallback((id: string) => {
    setSections((prev) => {
      const idx = prev.findIndex((s) => s.id === id);
      if (idx === -1 || idx >= prev.length - 1) return prev;
      const newArr = [...prev];
      [newArr[idx], newArr[idx + 1]] = [newArr[idx + 1], newArr[idx]];
      return newArr;
    });
  }, []);

  const clearAll = useCallback(() => {
    setSections([]);
    setSelectedId(null);
  }, []);

  const handleAIAdd = useCallback((newSections: Section[]) => {
    setSections((prev) => [...prev, ...newSections]);
    setShowAIAdd(false);
    if (newSections.length > 0) {
      setSelectedId(newSections[0].id);
      showNotificationMsg(`✨ AI added ${newSections.length} new section${newSections.length > 1 ? 's' : ''}!`);
    }
  }, [showNotificationMsg]);

  const goBackToAI = useCallback(() => {
    setView('ai-prompt');
  }, []);

  const selectedSection = sections.find((s) => s.id === selectedId) || null;

  // AI Prompt Screen
  if (view === 'ai-prompt') {
    return (
      <AIPromptScreen
        onGenerate={handleAIGenerate}
        onTemplateSelect={handleTemplateSelect}
      />
    );
  }

  // Builder View
  return (
    <div className="h-screen flex flex-col bg-gray-950 overflow-hidden">
      {/* Top Bar */}
      <header className="h-14 bg-gray-900 border-b border-gray-700 flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={goBackToAI}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl">🌐</span>
            <h1 className="text-white font-bold text-lg">WebCraft AI</h1>
          </button>
          <span className="text-gray-600">|</span>
          <div className="flex items-center gap-2">
            <span className="text-indigo-400 text-sm">✨</span>
            <span className="text-gray-400 text-sm truncate max-w-xs">
              {aiPrompt || 'AI Generated'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm mr-2">
            {sections.length} section{sections.length !== 1 ? 's' : ''}
          </span>
          <button
            onClick={() => setShowAIAdd(true)}
            className="px-3 py-1.5 bg-indigo-900/40 hover:bg-indigo-800/50 text-indigo-300 rounded text-sm border border-indigo-700 transition-colors flex items-center gap-1"
          >
            🤖 AI Add Section
          </button>
          <button
            onClick={handleRegenerate}
            className="px-3 py-1.5 bg-purple-900/40 hover:bg-purple-800/50 text-purple-300 rounded text-sm border border-purple-700 transition-colors flex items-center gap-1"
          >
            🔄 Regenerate
          </button>
          <button
            onClick={goBackToAI}
            className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-sm border border-gray-700 transition-colors"
          >
            ✨ New AI Build
          </button>
          <button
            onClick={clearAll}
            disabled={sections.length === 0}
            className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-sm border border-gray-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            🗑️ Clear
          </button>
          <button
            onClick={() => setShowExport(true)}
            disabled={sections.length === 0}
            className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            📦 Export HTML
          </button>
        </div>
      </header>

      {/* AI Notification */}
      {showNotification && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
          <div className="bg-indigo-600 text-white px-5 py-3 rounded-xl shadow-lg shadow-indigo-500/30 flex items-center gap-3">
            <span className="text-lg">🚀</span>
            <span className="text-sm font-medium">{notificationMsg}</span>
            <button onClick={() => setShowNotification(false)} className="text-indigo-200 hover:text-white ml-2">✕</button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onAddSection={addSection} />
        <Canvas
          sections={sections}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <PropertyPanel
          section={selectedSection}
          onUpdate={updateSection}
          onDelete={deleteSection}
          onMoveUp={moveUp}
          onMoveDown={moveDown}
        />
      </div>

      {/* Export Modal */}
      {showExport && (
        <ExportModal sections={sections} onClose={() => setShowExport(false)} />
      )}

      {/* AI Add Section Modal */}
      {showAIAdd && (
        <AIAddModal
          onAdd={handleAIAdd}
          onClose={() => setShowAIAdd(false)}
        />
      )}
    </div>
  );
}
