import { Section } from '../types';

interface CanvasProps {
  sections: Section[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

function renderSection(section: Section, isSelected: boolean) {
  const { type, content } = section;

  switch (type) {
    case 'hero':
      return (
        <div style={{ backgroundColor: content.bgColor, padding: '80px 40px', textAlign: 'center' as const }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: content.titleColor, marginBottom: '16px' }}>
            {content.title}
          </h1>
          <p style={{ fontSize: '1.25rem', color: content.textColor, marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            {content.subtitle}
          </p>
          <button style={{
            backgroundColor: content.buttonColor,
            color: '#ffffff',
            padding: '14px 32px',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer'
          }}>
            {content.buttonText}
          </button>
        </div>
      );

    case 'text':
      return (
        <div style={{ backgroundColor: content.bgColor, padding: '60px 40px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: content.titleColor, marginBottom: '16px' }}>
              {content.title}
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: content.textColor }}>
              {content.body}
            </p>
          </div>
        </div>
      );

    case 'features':
      return (
        <div style={{ backgroundColor: content.bgColor, padding: '60px 40px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: content.titleColor, textAlign: 'center' as const, marginBottom: '40px' }}>
            {content.title}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
            {content.features.map((f: { icon: string; title: string; description: string }, i: number) => (
              <div key={i} style={{ textAlign: 'center' as const, padding: '24px', backgroundColor: content.cardBgColor, borderRadius: '12px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: content.titleColor, marginBottom: '8px' }}>{f.title}</h3>
                <p style={{ color: content.textColor, fontSize: '0.95rem' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'image':
      return (
        <div style={{ backgroundColor: content.bgColor, padding: '60px 40px', textAlign: 'center' as const }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              width: '100%',
              height: '300px',
              backgroundColor: content.imageBgColor,
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <span style={{ fontSize: '4rem' }}>{content.emoji}</span>
            </div>
            <p style={{ color: content.textColor, fontSize: '1rem', fontStyle: 'italic' }}>{content.caption}</p>
          </div>
        </div>
      );

    case 'testimonial':
      return (
        <div style={{ backgroundColor: content.bgColor, padding: '60px 40px' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' as const }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>❝</div>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: content.textColor, fontStyle: 'italic', marginBottom: '24px' }}>
              {content.quote}
            </p>
            <div style={{ fontWeight: '600', color: content.titleColor, fontSize: '1.1rem' }}>{content.author}</div>
            <div style={{ color: content.textColor, fontSize: '0.9rem' }}>{content.role}</div>
          </div>
        </div>
      );

    case 'pricing':
      return (
        <div style={{ backgroundColor: content.bgColor, padding: '60px 40px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: content.titleColor, textAlign: 'center' as const, marginBottom: '40px' }}>
            {content.title}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
            {content.plans.map((p: { name: string; price: string; features: string }, i: number) => (
              <div key={i} style={{
                textAlign: 'center' as const,
                padding: '32px 24px',
                backgroundColor: content.cardBgColor,
                borderRadius: '12px',
                border: i === 1 ? `2px solid ${content.highlightColor}` : '1px solid #e5e7eb'
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: content.titleColor, marginBottom: '8px' }}>{p.name}</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: content.highlightColor, marginBottom: '16px' }}>{p.price}</div>
                <p style={{ color: content.textColor, marginBottom: '24px' }}>{p.features}</p>
                <button style={{
                  backgroundColor: i === 1 ? content.highlightColor : 'transparent',
                  color: i === 1 ? '#fff' : content.highlightColor,
                  border: `2px solid ${content.highlightColor}`,
                  padding: '10px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      );

    case 'cta': {
      const btnTextColor = content.buttonColor === '#ffffff' || content.buttonColor === '#fff' ? content.bgColor : '#ffffff';
      return (
        <div style={{
          backgroundColor: content.bgColor,
          padding: '60px 40px',
          textAlign: 'center' as const
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: content.titleColor, marginBottom: '16px' }}>
            {content.title}
          </h2>
          <p style={{ fontSize: '1.1rem', color: content.textColor, marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
            {content.subtitle}
          </p>
          <button style={{
            backgroundColor: content.buttonColor,
            color: btnTextColor,
            padding: '14px 32px',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer'
          }}>
            {content.buttonText}
          </button>
        </div>
      );
    }

    case 'footer':
      return (
        <div style={{ backgroundColor: content.bgColor, padding: '40px', textAlign: 'center' as const }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ color: content.titleColor, fontSize: '1.3rem', fontWeight: '600', marginBottom: '12px' }}>
              {content.brandName}
            </h3>
            <p style={{ color: content.textColor, marginBottom: '16px' }}>{content.tagline}</p>
            <p style={{ color: content.textColor, fontSize: '0.85rem' }}>
              {content.copyright}
            </p>
          </div>
        </div>
      );

    default:
      return <div>Unknown section type</div>;
  }
}

export default function Canvas({ sections, selectedId, onSelect }: CanvasProps) {
  if (sections.length === 0) {
    return (
      <div className="flex-1 bg-gray-100 flex items-center justify-center overflow-auto">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">🏗️</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Start Building Your Website</h2>
          <p className="text-gray-500 max-w-md">
            Click on components from the left sidebar to add them to your page.
            Then customize everything using the properties panel on the right.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gray-200 overflow-auto p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        {sections.map((section) => (
          <div
            key={section.id}
            onClick={() => onSelect(section.id)}
            className={`relative cursor-pointer transition-all duration-200 ${
              selectedId === section.id
                ? 'ring-4 ring-indigo-500 ring-offset-2 z-10'
                : 'hover:ring-2 hover:ring-indigo-300 hover:ring-offset-1'
            }`}
          >
            {selectedId === section.id && (
              <div className="absolute top-2 right-2 bg-indigo-500 text-white text-xs px-2 py-1 rounded z-20 font-medium">
                ✏️ Editing
              </div>
            )}
            {renderSection(section, selectedId === section.id)}
          </div>
        ))}
      </div>
    </div>
  );
}
