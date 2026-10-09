import { ComponentOption } from '../types';

const components: ComponentOption[] = [
  { type: 'hero', label: 'Hero Section', icon: '🎯', description: 'Large header with title and CTA' },
  { type: 'text', label: 'Text Block', icon: '📝', description: 'Paragraph text section' },
  { type: 'features', label: 'Features', icon: '⭐', description: 'Feature grid with icons' },
  { type: 'image', label: 'Image Section', icon: '🖼️', description: 'Image with caption' },
  { type: 'testimonial', label: 'Testimonial', icon: '💬', description: 'Customer quote block' },
  { type: 'pricing', label: 'Pricing', icon: '💰', description: 'Pricing cards' },
  { type: 'cta', label: 'Call to Action', icon: '🚀', description: 'CTA banner section' },
  { type: 'footer', label: 'Footer', icon: '📋', description: 'Site footer' },
];

interface SidebarProps {
  onAddSection: (type: ComponentOption['type']) => void;
}

export default function Sidebar({ onAddSection }: SidebarProps) {
  return (
    <div className="w-72 bg-gray-900 border-r border-gray-700 flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-white font-bold text-lg flex items-center gap-2">
          <span className="text-2xl">🧩</span> Components
        </h2>
        <p className="text-gray-400 text-sm mt-1">Click to add to your page</p>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {components.map((comp) => (
          <button
            key={comp.type}
            onClick={() => onAddSection(comp.type)}
            className="w-full text-left p-3 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-indigo-500 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{comp.icon}</span>
              <div>
                <div className="text-white font-medium text-sm group-hover:text-indigo-300 transition-colors">
                  {comp.label}
                </div>
                <div className="text-gray-500 text-xs">{comp.description}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
