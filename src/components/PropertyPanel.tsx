import { Section } from '../types';

interface PropertyPanelProps {
  section: Section | null;
  onUpdate: (id: string, content: Record<string, any>) => void;
  onDelete: (id: string) => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
}

export default function PropertyPanel({ section, onUpdate, onDelete, onMoveUp, onMoveDown }: PropertyPanelProps) {
  if (!section) {
    return (
      <div className="w-72 bg-gray-900 border-l border-gray-700 flex flex-col h-full">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-white font-bold text-lg flex items-center gap-2">
            <span className="text-2xl">⚙️</span> Properties
          </h2>
        </div>
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <div className="text-4xl mb-3">👆</div>
            <p className="text-gray-400 text-sm">Select a section on the canvas to edit its properties</p>
          </div>
        </div>
      </div>
    );
  }

  const updateField = (key: string, value: any) => {
    onUpdate(section.id, { ...section.content, [key]: value });
  };

  return (
    <div className="w-72 bg-gray-900 border-l border-gray-700 flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-white font-bold text-lg flex items-center gap-2">
          <span className="text-2xl">⚙️</span> Edit Section
        </h2>
        <p className="text-gray-400 text-sm mt-1 capitalize">{section.type} Block</p>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Move/Delete buttons */}
        <div className="flex gap-2">
          <button onClick={() => onMoveUp(section.id)} className="flex-1 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-sm border border-gray-700 transition-colors">
            ↑ Move Up
          </button>
          <button onClick={() => onMoveDown(section.id)} className="flex-1 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-sm border border-gray-700 transition-colors">
            ↓ Move Down
          </button>
        </div>
        <button onClick={() => onDelete(section.id)} className="w-full px-3 py-2 bg-red-900/30 hover:bg-red-900/50 text-red-400 rounded text-sm border border-red-800 transition-colors">
          🗑️ Delete Section
        </button>

        <hr className="border-gray-700" />

        {/* Dynamic fields based on section type */}
        {Object.entries(section.content).map(([key, value]) => (
          <div key={key}>
            <label className="block text-gray-300 text-xs font-medium mb-1 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </label>
            {typeof value === 'string' && value.length > 50 ? (
              <textarea
                value={value}
                onChange={(e) => updateField(key, e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm focus:border-indigo-500 focus:outline-none resize-none"
                rows={3}
              />
            ) : typeof value === 'string' && key.toLowerCase().includes('color') ? (
              <div className="flex gap-2">
                <input
                  type="color"
                  value={value}
                  onChange={(e) => updateField(key, e.target.value)}
                  className="w-10 h-9 rounded border border-gray-700 cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={value}
                  onChange={(e) => updateField(key, e.target.value)}
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm focus:border-indigo-500 focus:outline-none"
                />
              </div>
            ) : typeof value === 'string' ? (
              <input
                type="text"
                value={value}
                onChange={(e) => updateField(key, e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm focus:border-indigo-500 focus:outline-none"
              />
            ) : typeof value === 'number' ? (
              <input
                type="number"
                value={value}
                onChange={(e) => updateField(key, Number(e.target.value))}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm focus:border-indigo-500 focus:outline-none"
              />
            ) : typeof value === 'boolean' ? (
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => updateField(key, e.target.checked)}
                  className="w-4 h-4 rounded border-gray-700 bg-gray-800 text-indigo-500 focus:ring-indigo-500"
                />
                <span className="text-gray-300 text-sm">{value ? 'Yes' : 'No'}</span>
              </label>
            ) : Array.isArray(value) ? (
              <div className="space-y-2">
                {value.map((item: any, idx: number) => (
                  <div key={idx} className="p-2 bg-gray-800 rounded border border-gray-700">
                    {typeof item === 'object' ? (
                      Object.entries(item).map(([subKey, subVal]) => (
                        <div key={subKey} className="mb-1">
                          <label className="text-gray-500 text-xs">{subKey}</label>
                          <input
                            type="text"
                            value={subVal as string}
                            onChange={(e) => {
                              const newArr = [...value];
                              newArr[idx] = { ...item, [subKey]: e.target.value };
                              updateField(key, newArr);
                            }}
                            className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-xs focus:border-indigo-500 focus:outline-none"
                          />
                        </div>
                      ))
                    ) : (
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const newArr = [...value];
                          newArr[idx] = e.target.value;
                          updateField(key, newArr);
                        }}
                        className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-xs focus:border-indigo-500 focus:outline-none"
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
