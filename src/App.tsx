import { useState, useCallback } from 'react';
import { Section, ComponentOption } from './types';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertyPanel from './components/PropertyPanel';
import ExportModal from './components/ExportModal';

function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

function getDefaultContent(type: ComponentOption['type']): Record<string, any> {
  switch (type) {
    case 'hero':
      return {
        title: 'Welcome to My Website',
        subtitle: 'Build something amazing with our powerful platform. Create, customize, and launch your dream website today.',
        buttonText: 'Get Started →',
        bgColor: '#1e1b4b',
        titleColor: '#ffffff',
        textColor: '#c7d2fe',
        buttonColor: '#6366f1',
      };
    case 'text':
      return {
        title: 'About Us',
        body: 'We are a passionate team dedicated to creating innovative solutions that make a difference. Our mission is to empower businesses and individuals with cutting-edge technology and exceptional service. With years of experience in the industry, we bring expertise and creativity to every project we undertake.',
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
          { icon: '⚡', title: 'Lightning Fast', description: 'Optimized performance for the best user experience' },
          { icon: '🔒', title: 'Secure', description: 'Enterprise-grade security to protect your data' },
          { icon: '🎨', title: 'Beautiful Design', description: 'Stunning templates that look great on any device' },
        ],
      };
    case 'image':
      return {
        emoji: '🏔️',
        caption: 'A beautiful moment captured in time',
        bgColor: '#ffffff',
        imageBgColor: '#e0e7ff',
        textColor: '#6b7280',
      };
    case 'testimonial':
      return {
        quote: 'This product has completely transformed how we work. The team is incredibly responsive and the results speak for themselves. Highly recommended!',
        author: 'Sarah Johnson',
        role: 'CEO at TechStart Inc.',
        bgColor: '#f0fdf4',
        titleColor: '#166534',
        textColor: '#4b5563',
      };
    case 'pricing':
      return {
        title: 'Simple Pricing',
        bgColor: '#f9fafb',
        titleColor: '#1f2937',
        textColor: '#6b7280',
        cardBgColor: '#ffffff',
        highlightColor: '#6366f1',
        plans: [
          { name: 'Starter', price: '$9/mo', features: '5 projects, 1GB storage, Email support' },
          { name: 'Pro', price: '$29/mo', features: 'Unlimited projects, 50GB storage, Priority support' },
          { name: 'Enterprise', price: '$99/mo', features: 'Custom solutions, Unlimited storage, 24/7 support' },
        ],
      };
    case 'cta':
      return {
        title: 'Ready to Get Started?',
        subtitle: 'Join thousands of happy customers who have already transformed their business.',
        buttonText: 'Start Free Trial',
        bgColor: '#4f46e5',
        titleColor: '#ffffff',
        textColor: '#e0e7ff',
        buttonColor: '#ffffff',
      };
    case 'footer':
      return {
        brandName: 'MyBrand',
        tagline: 'Building the future, one pixel at a time.',
        copyright: '© 2025 MyBrand. All rights reserved.',
        bgColor: '#111827',
        titleColor: '#ffffff',
        textColor: '#9ca3af',
      };
    default:
      return {};
  }
}

export default function App() {
  const [sections, setSections] = useState<Section[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showExport, setShowExport] = useState(false);

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

  const selectedSection = sections.find((s) => s.id === selectedId) || null;

  return (
    <div className="h-screen flex flex-col bg-gray-950 overflow-hidden">
      {/* Top Bar */}
      <header className="h-14 bg-gray-900 border-b border-gray-700 flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌐</span>
            <h1 className="text-white font-bold text-lg">WebCraft</h1>
          </div>
          <span className="text-gray-600">|</span>
          <span className="text-gray-400 text-sm">Free Website Builder</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm mr-2">
            {sections.length} section{sections.length !== 1 ? 's' : ''}
          </span>
          <button
            onClick={clearAll}
            disabled={sections.length === 0}
            className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-sm border border-gray-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            🗑️ Clear All
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
    </div>
  );
}
