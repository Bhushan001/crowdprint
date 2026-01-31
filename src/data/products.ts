import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Gold Premium Zipper 10"',
    slug: 'gold-premium-zipper-10',
    category_id: 'luxury-zipper',
    description: 'Elegant gold-plated zipper perfect for luxury handbags and designer apparel.',
    images: [
      'https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&auto=format&fit=crop',
    ],
    specifications: {
      size: '10 inch',
      color: 'Gold',
      material: 'Brass with gold plating',
      weight: '20g',
      finish: 'High polish',
    },
    tags: ['luxury', 'gold', 'premium'],
    order: 1,
    featured: true,
  },
  {
    id: 'p2',
    name: 'Silver Diamond Zipper 12"',
    slug: 'silver-diamond-zipper-12',
    category_id: 'luxury-zipper',
    description: 'Crystal-studded silver zipper for haute couture and bridal wear.',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop',
    ],
    specifications: {
      size: '12 inch',
      color: 'Silver',
      material: 'Sterling silver alloy',
      weight: '25g',
      finish: 'Crystal embellished',
    },
    tags: ['luxury', 'silver', 'bridal'],
    order: 2,
    featured: true,
  },
  {
    id: 'p3',
    name: 'Heavy Duty Metal Zipper 8"',
    slug: 'heavy-duty-metal-8',
    category_id: 'metal-zipper',
    description: 'Industrial-strength metal zipper for leather jackets and bags.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=600&auto=format&fit=crop',
    ],
    specifications: {
      size: '8 inch',
      color: 'Antique Brass',
      material: 'Brass',
      weight: '30g',
      finish: 'Antique',
    },
    tags: ['metal', 'heavy-duty', 'brass'],
    order: 1,
    featured: false,
  },
  {
    id: 'p4',
    name: 'Gunmetal Zipper 14"',
    slug: 'gunmetal-zipper-14',
    category_id: 'metal-zipper',
    description: 'Modern gunmetal finish zipper for contemporary fashion.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop',
    ],
    specifications: {
      size: '14 inch',
      color: 'Gunmetal',
      material: 'Zinc alloy',
      weight: '28g',
      finish: 'Matte',
    },
    tags: ['metal', 'gunmetal', 'modern'],
    order: 2,
    featured: true,
  },
  {
    id: 'p5',
    name: 'Nylon Coil Zipper 6"',
    slug: 'nylon-coil-6',
    category_id: 'nylon-coil',
    description: 'Smooth-operating nylon zipper for everyday garments.',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&auto=format&fit=crop',
    ],
    specifications: {
      size: '6 inch',
      color: 'Black',
      material: 'Nylon',
      weight: '5g',
      finish: 'Standard',
    },
    tags: ['nylon', 'lightweight', 'everyday'],
    order: 1,
    featured: false,
  },
  {
    id: 'p6',
    name: 'Colored Nylon Zipper 10"',
    slug: 'colored-nylon-10',
    category_id: 'nylon-coil',
    description: 'Available in 50+ colors to match any fabric.',
    images: [
      'https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop',
    ],
    specifications: {
      size: '10 inch',
      color: 'Multiple colors available',
      material: 'Nylon',
      weight: '8g',
      finish: 'Standard',
    },
    tags: ['nylon', 'colorful', 'fashion'],
    order: 2,
    featured: true,
  },
  {
    id: 'p7',
    name: 'Plastic Molded Zipper 5"',
    slug: 'plastic-molded-5',
    category_id: 'plastic-molded',
    description: 'Economical plastic zipper for sportswear and casual clothing.',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop',
    ],
    specifications: {
      size: '5 inch',
      color: 'Black',
      material: 'Plastic (POM)',
      weight: '4g',
      finish: 'Standard',
    },
    tags: ['plastic', 'economical', 'sportswear'],
    order: 1,
    featured: false,
  },
  {
    id: 'p8',
    name: 'Two-Way Plastic Zipper 20"',
    slug: 'two-way-plastic-20',
    category_id: 'plastic-molded',
    description: 'Two-way separating zipper for jackets and outerwear.',
    images: [
      'https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=600&auto=format&fit=crop',
    ],
    specifications: {
      size: '20 inch',
      color: 'Navy Blue',
      material: 'Plastic (POM)',
      weight: '15g',
      finish: 'Standard',
    },
    tags: ['plastic', 'two-way', 'jacket'],
    order: 2,
    featured: true,
  },
  {
    id: 'p9',
    name: 'Invisible Zipper 7"',
    slug: 'invisible-zipper-7',
    category_id: 'invisible-zipper',
    description: 'Concealed zipper for a seamless finish on dresses and skirts.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop',
    ],
    specifications: {
      size: '7 inch',
      color: 'White',
      material: 'Nylon',
      weight: '3g',
      finish: 'Concealed',
    },
    tags: ['invisible', 'dress', 'seamless'],
    order: 1,
    featured: true,
  },
  {
    id: 'p10',
    name: 'Invisible Zipper 22"',
    slug: 'invisible-zipper-22',
    category_id: 'invisible-zipper',
    description: 'Long invisible zipper for gowns and formal wear.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop',
    ],
    specifications: {
      size: '22 inch',
      color: 'Ivory',
      material: 'Nylon',
      weight: '6g',
      finish: 'Concealed',
    },
    tags: ['invisible', 'gown', 'bridal'],
    order: 2,
    featured: false,
  },
  {
    id: 'p11',
    name: 'Waterproof Zipper 12"',
    slug: 'waterproof-zipper-12',
    category_id: 'special-zipper',
    description: 'Fully waterproof zipper for outdoor gear and marine applications.',
    images: [
      'https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=600&auto=format&fit=crop',
    ],
    specifications: {
      size: '12 inch',
      color: 'Black',
      material: 'Polyurethane coated',
      weight: '20g',
      finish: 'Waterproof seal',
    },
    tags: ['waterproof', 'outdoor', 'marine'],
    order: 1,
    featured: true,
  },
  {
    id: 'p12',
    name: 'Fire Resistant Zipper 10"',
    slug: 'fire-resistant-zipper-10',
    category_id: 'special-zipper',
    description: 'Fire-resistant zipper for safety gear and industrial uniforms.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop',
    ],
    specifications: {
      size: '10 inch',
      color: 'Orange',
      material: 'Aramid fiber',
      weight: '18g',
      finish: 'Fire resistant',
    },
    tags: ['fire-resistant', 'safety', 'industrial'],
    order: 2,
    featured: false,
  },
];

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter((p) => p.category_id === categorySlug);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};
