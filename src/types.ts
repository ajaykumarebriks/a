export interface Section {
  id: string;
  type: 'hero' | 'text' | 'features' | 'image' | 'cta' | 'footer' | 'testimonial' | 'pricing';
  content: Record<string, any>;
}

export interface ComponentOption {
  type: Section['type'];
  label: string;
  icon: string;
  description: string;
}
