export interface NavLink {
  name: string;
  path: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  order: number;
  featured?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category_id: string;
  description: string;
  images: string[];
  specifications: Record<string, string>;
  tags?: string[];
  order: number;
  featured?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Industry {
  id: string;
  icon: string;
  name: string;
}

export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface ContactInfo {
  phones: string[];
  email: string;
  address: string;
  whatsapp: string;
  googleMapsLink: string;
}
