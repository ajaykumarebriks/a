export interface AITemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  keywords: string[];
  sections: { type: string; content: Record<string, any> }[];
}

export const aiTemplates: AITemplate[] = [
  {
    id: 'restaurant',
    name: 'Restaurant',
    description: 'Elegant restaurant website with menu, about, and reservations',
    icon: '🍽️',
    keywords: ['restaurant', 'food', 'cafe', 'dining', 'menu', 'chef', 'kitchen', 'bistro', 'pizza', 'sushi', 'bar', 'pub'],
    sections: [
      { type: 'hero', content: { title: 'La Maison', subtitle: 'Experience exquisite French cuisine in an elegant setting. Fresh ingredients, passionate chefs, unforgettable flavors.', buttonText: 'Reserve a Table', bgColor: '#1a1a2e', titleColor: '#ffffff', textColor: '#e0d5c1', buttonColor: '#c9a96e' } },
      { type: 'features', content: { title: 'Why Choose Us', bgColor: '#faf8f5', titleColor: '#1a1a2e', textColor: '#666666', cardBgColor: '#ffffff', features: [{ icon: '🌿', title: 'Fresh Ingredients', description: 'Locally sourced, organic produce delivered daily' }, { icon: '👨‍🍳', title: 'Expert Chefs', description: 'Award-winning culinary team with 20+ years experience' }, { icon: '🍷', title: 'Fine Wines', description: 'Curated selection of 200+ wines from around the world' }] } },
      { type: 'image', content: { emoji: '🍝', caption: 'Our signature handmade pasta, crafted with love', bgColor: '#ffffff', imageBgColor: '#f5efe6', textColor: '#888888' } },
      { type: 'testimonial', content: { quote: 'An absolutely divine dining experience. The flavors were extraordinary and the service impeccable. We will definitely be returning!', author: 'Michael & Emma Thompson', role: 'Food Critics, Gourmet Weekly', bgColor: '#faf8f5', titleColor: '#1a1a2e', textColor: '#666666' } },
      { type: 'cta', content: { title: 'Book Your Experience', subtitle: 'Reserve your table today and discover why we\'ve been voted the city\'s finest dining destination.', buttonText: 'Make Reservation', bgColor: '#1a1a2e', titleColor: '#ffffff', textColor: '#e0d5c1', buttonColor: '#c9a96e' } },
      { type: 'footer', content: { brandName: 'La Maison', tagline: 'Fine dining since 1998 • 42 Rue de la Paix, Paris', copyright: '© 2025 La Maison. All rights reserved.', bgColor: '#0f0f1a', titleColor: '#ffffff', textColor: '#888888' } },
    ],
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    description: 'Creative portfolio for designers, developers, or artists',
    icon: '🎨',
    keywords: ['portfolio', 'designer', 'developer', 'artist', 'freelancer', 'creative', 'photographer', 'writer', 'personal'],
    sections: [
      { type: 'hero', content: { title: 'Hi, I\'m Alex Chen', subtitle: 'Full-stack developer & UI designer crafting beautiful digital experiences. Let\'s build something amazing together.', buttonText: 'View My Work', bgColor: '#0f172a', titleColor: '#ffffff', textColor: '#94a3b8', buttonColor: '#3b82f6' } },
      { type: 'features', content: { title: 'What I Do', bgColor: '#ffffff', titleColor: '#0f172a', textColor: '#64748b', cardBgColor: '#f8fafc', features: [{ icon: '💻', title: 'Web Development', description: 'React, Next.js, TypeScript — modern, fast, scalable apps' }, { icon: '🎨', title: 'UI/UX Design', description: 'Beautiful interfaces with intuitive user experiences' }, { icon: '📱', title: 'Mobile Apps', description: 'Cross-platform mobile applications with React Native' }] } },
      { type: 'testimonial', content: { quote: 'Alex delivered beyond our expectations. The website is stunning, fast, and our conversions increased by 40%. Truly exceptional work!', author: 'Jessica Park', role: 'Founder, StartupLab', bgColor: '#f0f9ff', titleColor: '#0f172a', textColor: '#475569' } },
      { type: 'cta', content: { title: 'Let\'s Work Together', subtitle: 'Have a project in mind? I\'m always open to discussing new opportunities and creative ideas.', buttonText: 'Get In Touch', bgColor: '#3b82f6', titleColor: '#ffffff', textColor: '#dbeafe', buttonColor: '#ffffff' } },
      { type: 'footer', content: { brandName: 'Alex Chen', tagline: 'Available for freelance projects worldwide', copyright: '© 2025 Alex Chen. Built with passion.', bgColor: '#0f172a', titleColor: '#ffffff', textColor: '#64748b' } },
    ],
  },
  {
    id: 'saas',
    name: 'SaaS / Tech Startup',
    description: 'Modern SaaS landing page with features and pricing',
    icon: '🚀',
    keywords: ['saas', 'startup', 'app', 'software', 'tech', 'platform', 'tool', 'product', 'cloud', 'ai', 'analytics'],
    sections: [
      { type: 'hero', content: { title: 'Supercharge Your Workflow', subtitle: 'The all-in-one platform that helps teams collaborate, automate, and scale. Join 10,000+ companies already growing faster.', buttonText: 'Start Free Trial', bgColor: '#0c0a1d', titleColor: '#ffffff', textColor: '#a5b4fc', buttonColor: '#7c3aed' } },
      { type: 'features', content: { title: 'Everything You Need', bgColor: '#f5f3ff', titleColor: '#1e1b4b', textColor: '#6b7280', cardBgColor: '#ffffff', features: [{ icon: '⚡', title: 'Lightning Fast', description: 'Built for speed with edge computing and smart caching' }, { icon: '🔗', title: 'Integrations', description: 'Connect with 200+ tools you already use and love' }, { icon: '📊', title: 'Analytics', description: 'Real-time insights and dashboards to track everything' }] } },
      { type: 'pricing', content: { title: 'Simple, Transparent Pricing', bgColor: '#ffffff', titleColor: '#1e1b4b', textColor: '#6b7280', cardBgColor: '#f9fafb', highlightColor: '#7c3aed', plans: [{ name: 'Starter', price: '$19/mo', features: '5 users, 10GB storage, Basic analytics' }, { name: 'Pro', price: '$49/mo', features: '25 users, 100GB storage, Advanced analytics' }, { name: 'Enterprise', price: '$149/mo', features: 'Unlimited users, 1TB storage, Custom integrations' }] } },
      { type: 'testimonial', content: { quote: 'This tool saved us 20+ hours per week. The automation features alone paid for the subscription in the first month. Absolutely game-changing!', author: 'David Kim', role: 'CTO, GrowthTech', bgColor: '#f5f3ff', titleColor: '#1e1b4b', textColor: '#4b5563' } },
      { type: 'cta', content: { title: 'Ready to Transform Your Business?', subtitle: 'Start your 14-day free trial. No credit card required. Cancel anytime.', buttonText: 'Get Started Free', bgColor: '#7c3aed', titleColor: '#ffffff', textColor: '#e9d5ff', buttonColor: '#ffffff' } },
      { type: 'footer', content: { brandName: 'SuperFlow', tagline: 'The smarter way to work', copyright: '© 2025 SuperFlow Inc. All rights reserved.', bgColor: '#0c0a1d', titleColor: '#ffffff', textColor: '#6b7280' } },
    ],
  },
  {
    id: 'agency',
    name: 'Agency / Studio',
    description: 'Creative agency or consulting firm website',
    icon: '🏢',
    keywords: ['agency', 'studio', 'consulting', 'marketing', 'branding', 'firm', 'company', 'business'],
    sections: [
      { type: 'hero', content: { title: 'We Build Brands That Matter', subtitle: 'Award-winning creative agency helping businesses stand out through strategy, design, and digital innovation.', buttonText: 'See Our Work', bgColor: '#18181b', titleColor: '#ffffff', textColor: '#a1a1aa', buttonColor: '#f59e0b' } },
      { type: 'features', content: { title: 'Our Services', bgColor: '#fafafa', titleColor: '#18181b', textColor: '#71717a', cardBgColor: '#ffffff', features: [{ icon: '🎯', title: 'Brand Strategy', description: 'Positioning, messaging, and identity that resonates' }, { icon: '✏️', title: 'Creative Design', description: 'Visual identities, packaging, and digital experiences' }, { icon: '📈', title: 'Digital Marketing', description: 'SEO, social media, and performance marketing' }] } },
      { type: 'testimonial', content: { quote: 'Working with this team was transformative. They didn\'t just redesign our brand — they redefined how our customers see us. Revenue up 60% in 6 months.', author: 'Rachel Morrison', role: 'CEO, Elevate Brands', bgColor: '#fffbeb', titleColor: '#18181b', textColor: '#71717a' } },
      { type: 'cta', content: { title: 'Let\'s Create Something Extraordinary', subtitle: 'Book a free consultation and discover how we can elevate your brand to the next level.', buttonText: 'Book Consultation', bgColor: '#f59e0b', titleColor: '#18181b', textColor: '#78350f', buttonColor: '#18181b' } },
      { type: 'footer', content: { brandName: 'Apex Studio', tagline: 'Strategy • Design • Growth', copyright: '© 2025 Apex Studio. All rights reserved.', bgColor: '#18181b', titleColor: '#ffffff', textColor: '#71717a' } },
    ],
  },
  {
    id: 'fitness',
    name: 'Fitness / Gym',
    description: 'Gym, fitness studio, or personal trainer website',
    icon: '💪',
    keywords: ['fitness', 'gym', 'workout', 'trainer', 'yoga', 'health', 'wellness', 'sport', 'exercise'],
    sections: [
      { type: 'hero', content: { title: 'Transform Your Body', subtitle: 'Join the #1 rated fitness studio. Expert trainers, state-of-the-art equipment, and a community that pushes you to be your best.', buttonText: 'Start Today', bgColor: '#0c0a09', titleColor: '#ffffff', textColor: '#a8a29e', buttonColor: '#ef4444' } },
      { type: 'features', content: { title: 'What We Offer', bgColor: '#fafaf9', titleColor: '#1c1917', textColor: '#78716c', cardBgColor: '#ffffff', features: [{ icon: '🏋️', title: 'Personal Training', description: 'One-on-one sessions tailored to your goals' }, { icon: '🧘', title: 'Group Classes', description: 'Yoga, HIIT, spinning, boxing and more' }, { icon: '🥗', title: 'Nutrition Plans', description: 'Custom meal plans from certified nutritionists' }] } },
      { type: 'pricing', content: { title: 'Membership Plans', bgColor: '#ffffff', titleColor: '#1c1917', textColor: '#78716c', cardBgColor: '#fafaf9', highlightColor: '#ef4444', plans: [{ name: 'Basic', price: '$29/mo', features: 'Gym access, Locker room, 1 class/week' }, { name: 'Pro', price: '$59/mo', features: 'All access, Unlimited classes, 2 PT sessions' }, { name: 'Elite', price: '$99/mo', features: 'Everything + Nutrition plan, Unlimited PT' }] } },
      { type: 'testimonial', content: { quote: 'I\'ve lost 30 pounds and gained so much confidence. The trainers here genuinely care about your progress. Best decision I ever made!', author: 'Marcus Johnson', role: 'Member since 2023', bgColor: '#fef2f2', titleColor: '#1c1917', textColor: '#78716c' } },
      { type: 'cta', content: { title: 'Your Transformation Starts Now', subtitle: 'First week free. No contracts. Cancel anytime. What are you waiting for?', buttonText: 'Claim Free Week', bgColor: '#ef4444', titleColor: '#ffffff', textColor: '#fecaca', buttonColor: '#ffffff' } },
      { type: 'footer', content: { brandName: 'IronPulse Fitness', tagline: 'Strong body. Strong mind. Strong life.', copyright: '© 2025 IronPulse Fitness. All rights reserved.', bgColor: '#0c0a09', titleColor: '#ffffff', textColor: '#78716c' } },
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce / Shop',
    description: 'Online store or product landing page',
    icon: '🛍️',
    keywords: ['shop', 'store', 'ecommerce', 'product', 'buy', 'sell', 'fashion', 'clothing', 'jewelry', 'handmade'],
    sections: [
      { type: 'hero', content: { title: 'Handcrafted With Love', subtitle: 'Discover unique, artisan-made products that tell a story. Every piece is crafted with care and delivered with pride.', buttonText: 'Shop Collection', bgColor: '#fdf2f8', titleColor: '#831843', textColor: '#9d174d', buttonColor: '#be185d' } },
      { type: 'features', content: { title: 'Why Shop With Us', bgColor: '#ffffff', titleColor: '#1f2937', textColor: '#6b7280', cardBgColor: '#fdf2f8', features: [{ icon: '✨', title: 'Handmade Quality', description: 'Every product crafted by skilled artisans' }, { icon: '🚚', title: 'Free Shipping', description: 'Free delivery on all orders over $50' }, { icon: '💝', title: 'Gift Wrapping', description: 'Beautiful complimentary gift wrapping available' }] } },
      { type: 'image', content: { emoji: '👜', caption: 'Our bestselling collection — loved by thousands worldwide', bgColor: '#ffffff', imageBgColor: '#fce7f3', textColor: '#9d174d' } },
      { type: 'testimonial', content: { quote: 'The quality is absolutely incredible. You can tell so much love and attention goes into every piece. I\'ve ordered 5 times already!', author: 'Sophie Williams', role: 'Loyal Customer', bgColor: '#fdf2f8', titleColor: '#831843', textColor: '#6b7280' } },
      { type: 'cta', content: { title: 'Get 20% Off Your First Order', subtitle: 'Subscribe to our newsletter and receive an exclusive discount code for your first purchase.', buttonText: 'Shop Now', bgColor: '#be185d', titleColor: '#ffffff', textColor: '#fce7f3', buttonColor: '#ffffff' } },
      { type: 'footer', content: { brandName: 'Artisan & Co.', tagline: 'Handcrafted goods for the modern home', copyright: '© 2025 Artisan & Co. All rights reserved.', bgColor: '#1f2937', titleColor: '#ffffff', textColor: '#9ca3af' } },
    ],
  },
  {
    id: 'education',
    name: 'Education / Course',
    description: 'Online course, school, or educational platform',
    icon: '📚',
    keywords: ['education', 'course', 'school', 'learn', 'teach', 'training', 'academy', 'university', 'student'],
    sections: [
      { type: 'hero', content: { title: 'Learn Without Limits', subtitle: 'Master new skills with world-class instructors. Flexible online courses designed for your schedule and career goals.', buttonText: 'Browse Courses', bgColor: '#064e3b', titleColor: '#ffffff', textColor: '#a7f3d0', buttonColor: '#10b981' } },
      { type: 'features', content: { title: 'Why Learn With Us', bgColor: '#f0fdf4', titleColor: '#064e3b', textColor: '#4b5563', cardBgColor: '#ffffff', features: [{ icon: '🎓', title: 'Expert Instructors', description: 'Learn from industry professionals with real experience' }, { icon: '📱', title: 'Learn Anywhere', description: 'Access courses on any device, anytime, anywhere' }, { icon: '📜', title: 'Certificates', description: 'Earn recognized certificates to boost your career' }] } },
      { type: 'pricing', content: { title: 'Choose Your Plan', bgColor: '#ffffff', titleColor: '#064e3b', textColor: '#6b7280', cardBgColor: '#f0fdf4', highlightColor: '#10b981', plans: [{ name: 'Free', price: '$0', features: '5 courses, Basic access, Community forum' }, { name: 'Pro', price: '$19/mo', features: 'All courses, Certificates, Priority support' }, { name: 'Teams', price: '$49/mo', features: 'Everything + Team dashboard, Analytics' }] } },
      { type: 'testimonial', content: { quote: 'This platform changed my career. I went from zero coding knowledge to landing a developer job in just 6 months. The courses are incredibly well-structured.', author: 'James Rodriguez', role: 'Software Developer, Google', bgColor: '#f0fdf4', titleColor: '#064e3b', textColor: '#4b5563' } },
      { type: 'cta', content: { title: 'Start Learning Today', subtitle: 'Join 500,000+ learners already building their future. First course is always free.', buttonText: 'Get Started Free', bgColor: '#10b981', titleColor: '#ffffff', textColor: '#d1fae5', buttonColor: '#ffffff' } },
      { type: 'footer', content: { brandName: 'LearnHub Academy', tagline: 'Education for everyone, everywhere', copyright: '© 2025 LearnHub Academy. All rights reserved.', bgColor: '#064e3b', titleColor: '#ffffff', textColor: '#6ee7b7' } },
    ],
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    description: 'Real estate agency or property listing website',
    icon: '🏠',
    keywords: ['real estate', 'property', 'house', 'home', 'apartment', 'rental', 'realtor', 'housing'],
    sections: [
      { type: 'hero', content: { title: 'Find Your Dream Home', subtitle: 'Discover premium properties in the most sought-after locations. Your perfect home is just a search away.', buttonText: 'Browse Properties', bgColor: '#1e3a5f', titleColor: '#ffffff', textColor: '#bfdbfe', buttonColor: '#2563eb' } },
      { type: 'features', content: { title: 'Our Services', bgColor: '#f8fafc', titleColor: '#1e3a5f', textColor: '#64748b', cardBgColor: '#ffffff', features: [{ icon: '🏡', title: 'Buy a Home', description: 'Find your perfect property from our curated listings' }, { icon: '💰', title: 'Sell Property', description: 'Get the best value with our expert market analysis' }, { icon: '🔑', title: 'Rent', description: 'Premium rental properties in prime locations' }] } },
      { type: 'image', content: { emoji: '🏘️', caption: 'Luxury living in the heart of the city — starting from $450,000', bgColor: '#ffffff', imageBgColor: '#dbeafe', textColor: '#64748b' } },
      { type: 'testimonial', content: { quote: 'They found us our dream home in just two weeks! The team was professional, knowledgeable, and truly understood what we were looking for.', author: 'The Anderson Family', role: 'Homeowners since 2024', bgColor: '#eff6ff', titleColor: '#1e3a5f', textColor: '#64748b' } },
      { type: 'cta', content: { title: 'Ready to Make a Move?', subtitle: 'Schedule a free consultation with one of our expert agents today.', buttonText: 'Contact Us', bgColor: '#2563eb', titleColor: '#ffffff', textColor: '#bfdbfe', buttonColor: '#ffffff' } },
      { type: 'footer', content: { brandName: 'Prestige Realty', tagline: 'Your trusted partner in real estate since 2005', copyright: '© 2025 Prestige Realty. All rights reserved.', bgColor: '#0f172a', titleColor: '#ffffff', textColor: '#94a3b8' } },
    ],
  },
];

export function matchTemplate(input: string): AITemplate | null {
  const lower = input.toLowerCase();
  
  let bestMatch: AITemplate | null = null;
  let bestScore = 0;

  for (const template of aiTemplates) {
    let score = 0;
    for (const keyword of template.keywords) {
      if (lower.includes(keyword)) {
        score += keyword.length; // longer keyword matches score higher
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = template;
    }
  }

  return bestMatch;
}

export function generateFromPrompt(input: string): { type: string; content: Record<string, any> }[] {
  const lower = input.toLowerCase();
  const matched = matchTemplate(input);
  
  if (matched) {
    // Customize the template based on the prompt
    const sections = JSON.parse(JSON.stringify(matched.sections));
    
    // Try to extract a business name
    const namePatterns = [
      /(?:for|called|named)\s+["']?([A-Z][a-zA-Z\s&]+?)["']?(?:\s|$|,|\.)/,
      /^([A-Z][a-zA-Z\s&]+?)(?:\s+website|\s+site|\s+page)/,
    ];
    
    for (const pattern of namePatterns) {
      const match = input.match(pattern);
      if (match) {
        const name = match[1].trim();
        // Update brand-related fields
        sections.forEach((s: any) => {
          if (s.content.brandName) s.content.brandName = name;
          if (s.type === 'hero' && s.content.title) {
            s.content.title = `Welcome to ${name}`;
          }
        });
        break;
      }
    }

    return sections;
  }

  // Fallback: generate a generic business site
  const businessType = extractBusinessType(lower);
  
  return [
    { type: 'hero', content: { title: businessType || 'Welcome', subtitle: input, buttonText: 'Get Started', bgColor: '#1e1b4b', titleColor: '#ffffff', textColor: '#c7d2fe', buttonColor: '#6366f1' } },
    { type: 'features', content: { title: 'What We Offer', bgColor: '#f9fafb', titleColor: '#1f2937', textColor: '#6b7280', cardBgColor: '#ffffff', features: [{ icon: '⭐', title: 'Quality', description: 'Premium service you can trust' }, { icon: '🤝', title: 'Reliable', description: 'Consistent results every time' }, { icon: '💡', title: 'Innovative', description: 'Modern solutions for today\'s challenges' }] } },
    { type: 'cta', content: { title: 'Ready to Begin?', subtitle: 'Contact us today to learn more about how we can help you.', buttonText: 'Contact Us', bgColor: '#6366f1', titleColor: '#ffffff', textColor: '#e0e7ff', buttonColor: '#ffffff' } },
    { type: 'footer', content: { brandName: businessType || 'My Business', tagline: 'Excellence in everything we do', copyright: '© 2025 All rights reserved.', bgColor: '#111827', titleColor: '#ffffff', textColor: '#9ca3af' } },
  ];
}

function extractBusinessType(input: string): string {
  const words = input.split(' ').filter(w => w.length > 3);
  if (words.length > 0) {
    return words.slice(0, 3).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }
  return 'My Website';
}
