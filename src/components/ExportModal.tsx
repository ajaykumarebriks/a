import { Section } from '../types';

interface ExportModalProps {
  sections: Section[];
  onClose: () => void;
}

function generateHTML(sections: Section[]): string {
  let bodyHTML = '';

  sections.forEach((section) => {
    const { type, content } = section;

    switch (type) {
      case 'hero':
        bodyHTML += `
  <section style="background-color: ${content.bgColor}; padding: 80px 40px; text-align: center;">
    <h1 style="font-size: 3rem; font-weight: bold; color: ${content.titleColor}; margin-bottom: 16px;">${content.title}</h1>
    <p style="font-size: 1.25rem; color: ${content.textColor}; max-width: 600px; margin: 0 auto 32px;">${content.subtitle}</p>
    <button style="background-color: ${content.buttonColor}; color: #ffffff; padding: 14px 32px; border-radius: 8px; font-size: 1.1rem; font-weight: 600; border: none; cursor: pointer;">${content.buttonText}</button>
  </section>`;
        break;

      case 'text':
        bodyHTML += `
  <section style="background-color: ${content.bgColor}; padding: 60px 40px;">
    <div style="max-width: 800px; margin: 0 auto;">
      <h2 style="font-size: 2rem; font-weight: bold; color: ${content.titleColor}; margin-bottom: 16px;">${content.title}</h2>
      <p style="font-size: 1.1rem; line-height: 1.8; color: ${content.textColor};">${content.body}</p>
    </div>
  </section>`;
        break;

      case 'features':
        const featureCards = content.features.map((f: { icon: string; title: string; description: string }) => `
        <div style="text-align: center; padding: 24px; background-color: ${content.cardBgColor}; border-radius: 12px;">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">${f.icon}</div>
          <h3 style="font-size: 1.2rem; font-weight: 600; color: ${content.titleColor}; margin-bottom: 8px;">${f.title}</h3>
          <p style="color: ${content.textColor}; font-size: 0.95rem;">${f.description}</p>
        </div>`).join('');
        bodyHTML += `
  <section style="background-color: ${content.bgColor}; padding: 60px 40px;">
    <h2 style="font-size: 2rem; font-weight: bold; color: ${content.titleColor}; text-align: center; margin-bottom: 40px;">${content.title}</h2>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1000px; margin: 0 auto;">${featureCards}
    </div>
  </section>`;
        break;

      case 'image':
        bodyHTML += `
  <section style="background-color: ${content.bgColor}; padding: 60px 40px; text-align: center;">
    <div style="max-width: 800px; margin: 0 auto;">
      <div style="width: 100%; height: 300px; background-color: ${content.imageBgColor}; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
        <span style="font-size: 4rem;">${content.emoji}</span>
      </div>
      <p style="color: ${content.textColor}; font-size: 1rem; font-style: italic;">${content.caption}</p>
    </div>
  </section>`;
        break;

      case 'testimonial':
        bodyHTML += `
  <section style="background-color: ${content.bgColor}; padding: 60px 40px;">
    <div style="max-width: 700px; margin: 0 auto; text-align: center;">
      <div style="font-size: 3rem; margin-bottom: 16px;">❝</div>
      <p style="font-size: 1.3rem; line-height: 1.8; color: ${content.textColor}; font-style: italic; margin-bottom: 24px;">${content.quote}</p>
      <div style="font-weight: 600; color: ${content.titleColor}; font-size: 1.1rem;">${content.author}</div>
      <div style="color: ${content.textColor}; font-size: 0.9rem;">${content.role}</div>
    </div>
  </section>`;
        break;

      case 'pricing':
        const pricingCards = content.plans.map((p: { name: string; price: string; features: string }, i: number) => `
        <div style="text-align: center; padding: 32px 24px; background-color: ${content.cardBgColor}; border-radius: 12px; border: ${i === 1 ? `2px solid ${content.highlightColor}` : '1px solid #e5e7eb'};">
          <h3 style="font-size: 1.3rem; font-weight: 600; color: ${content.titleColor}; margin-bottom: 8px;">${p.name}</h3>
          <div style="font-size: 2.5rem; font-weight: bold; color: ${content.highlightColor}; margin-bottom: 16px;">${p.price}</div>
          <p style="color: ${content.textColor}; margin-bottom: 24px;">${p.features}</p>
          <button style="background-color: ${i === 1 ? content.highlightColor : 'transparent'}; color: ${i === 1 ? '#fff' : content.highlightColor}; border: 2px solid ${content.highlightColor}; padding: 10px 24px; border-radius: 8px; font-weight: 600; cursor: pointer;">Choose Plan</button>
        </div>`).join('');
        bodyHTML += `
  <section style="background-color: ${content.bgColor}; padding: 60px 40px;">
    <h2 style="font-size: 2rem; font-weight: bold; color: ${content.titleColor}; text-align: center; margin-bottom: 40px;">${content.title}</h2>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1000px; margin: 0 auto;">${pricingCards}
    </div>
  </section>`;
        break;

      case 'cta':
        bodyHTML += `
  <section style="background-color: ${content.bgColor}; padding: 60px 40px; text-align: center;">
    <h2 style="font-size: 2rem; font-weight: bold; color: ${content.titleColor}; margin-bottom: 16px;">${content.title}</h2>
    <p style="font-size: 1.1rem; color: ${content.textColor}; max-width: 500px; margin: 0 auto 32px;">${content.subtitle}</p>
    <button style="background-color: ${content.buttonColor}; color: #ffffff; padding: 14px 32px; border-radius: 8px; font-size: 1.1rem; font-weight: 600; border: none; cursor: pointer;">${content.buttonText}</button>
  </section>`;
        break;

      case 'footer':
        bodyHTML += `
  <footer style="background-color: ${content.bgColor}; padding: 40px; text-align: center;">
    <div style="max-width: 800px; margin: 0 auto;">
      <h3 style="color: ${content.titleColor}; font-size: 1.3rem; font-weight: 600; margin-bottom: 12px;">${content.brandName}</h3>
      <p style="color: ${content.textColor}; margin-bottom: 16px;">${content.tagline}</p>
      <p style="color: ${content.textColor}; font-size: 0.85rem;">${content.copyright}</p>
    </div>
  </footer>`;
        break;
    }
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
  </style>
</head>
<body>${bodyHTML}
</body>
</html>`;
}

export default function ExportModal({ sections, onClose }: ExportModalProps) {
  const html = generateHTML(sections);

  const handleCopy = () => {
    navigator.clipboard.writeText(html);
  };

  const handleDownload = () => {
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-website.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-gray-700">
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <h2 className="text-white font-bold text-lg">📦 Export HTML</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">✕</button>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <pre className="bg-gray-950 p-4 rounded-lg text-green-400 text-xs overflow-auto font-mono whitespace-pre-wrap">
            {html}
          </pre>
        </div>
        <div className="p-4 border-t border-gray-700 flex gap-3 justify-end">
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
          >
            📋 Copy to Clipboard
          </button>
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors"
          >
            💾 Download HTML
          </button>
        </div>
      </div>
    </div>
  );
}
