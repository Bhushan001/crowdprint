# CrowdPrint - Quick Start Guide

This guide will help you get the CrowdPrint app running with Supabase backend.

## Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier is fine)
- Git installed

## Step 1: Set Up Supabase

### 1.1 Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in:
   - **Name**: `crowdprint`
   - **Database Password**: (generate and save this!)
   - **Region**: Choose closest to you
   - **Pricing**: Free
5. Wait 2-3 minutes for setup

### 1.2 Get API Credentials

1. In your Supabase project, go to **Settings** → **API**
2. Copy these values (you'll need them soon):
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGc...` (long string)

### 1.3 Create Database Tables

1. Go to **SQL Editor** in Supabase
2. Click **New Query**
3. Copy and paste this SQL:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  "order" INT DEFAULT 0,
  featured BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  description TEXT,
  specifications JSONB DEFAULT '{}'::jsonb,
  tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  featured BOOLEAN DEFAULT false,
  "order" INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Product Images table
CREATE TABLE product_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  cloudinary_public_id TEXT,
  "order" INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_featured ON products(featured);
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_product_images_product ON product_images(product_id);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Public read categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read products" ON products FOR SELECT USING (true);
CREATE POLICY "Public read images" ON product_images FOR SELECT USING (true);

-- Admin write access (authenticated users only)
CREATE POLICY "Admin categories" ON categories FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin products" ON products FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin images" ON product_images FOR ALL USING (auth.role() = 'authenticated');

-- Auto-update timestamp function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers
CREATE TRIGGER update_categories_updated_at 
  BEFORE UPDATE ON categories 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at 
  BEFORE UPDATE ON products 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

4. Click **Run** (you should see "Success. No rows returned")

### 1.4 Add Sample Data (Optional)

Run this SQL to add sample categories and products:

```sql
-- Insert categories
INSERT INTO categories (name, slug, description, image_url, "order") VALUES
('Business Cards', 'business-cards', 'Professional business cards in various finishes', 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500', 1),
('Flyers & Brochures', 'flyers-brochures', 'Eye-catching marketing materials', 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=500', 2),
('Banners & Posters', 'banners-posters', 'Large format prints for events', 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500', 3),
('Stickers & Labels', 'stickers-labels', 'Custom stickers and labels', 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=500', 4),
('Packaging', 'packaging', 'Custom branded packaging', 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=500', 5),
('Apparel Printing', 'apparel-printing', 'T-shirts and custom apparel', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500', 6);

-- Add sample products
DO $$
DECLARE
  business_cards_id UUID;
  flyers_id UUID;
BEGIN
  SELECT id INTO business_cards_id FROM categories WHERE slug = 'business-cards';
  SELECT id INTO flyers_id FROM categories WHERE slug = 'flyers-brochures';
  
  INSERT INTO products (name, slug, category_id, description, specifications, tags, featured, "order") VALUES
  ('Premium Matte Business Cards', 'premium-matte-business-cards', business_cards_id, 
   'Elegant matte finish business cards', 
   '{"size": "3.5 x 2 inches", "finish": "Matte", "material": "350gsm", "quantity": "500"}'::jsonb,
   ARRAY['business-cards', 'matte', 'premium'], true, 1),
  ('Glossy Flyers A5', 'glossy-flyers-a5', flyers_id,
   'Vibrant full-color flyers',
   '{"size": "A5", "finish": "Glossy", "material": "150gsm", "quantity": "1000"}'::jsonb,
   ARRAY['flyers', 'glossy'], true, 1);
END $$;
```

## Step 2: Configure the React App

### 2.1 Install Dependencies

```bash
npm install
```

### 2.2 Set Up Environment Variables

1. Copy the example env file:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

   Replace with the values you copied from Step 1.2

## Step 3: Run the App

```bash
npm run dev
```

The app should now be running at `http://localhost:5173`

## Step 4: Test It Out

1. Open your browser to `http://localhost:5173`
2. You should see the CrowdPrint homepage
3. Navigate to "Products" to see categories and products from Supabase
4. If you added sample data, you'll see the business cards and flyers

## Troubleshooting

### "Missing Supabase environment variables"
- Make sure your `.env.local` file exists and has the correct values
- Restart the dev server after creating/updating `.env.local`

### "Error loading categories/products"
- Check your Supabase project is running (green status in dashboard)
- Verify the SQL queries ran successfully
- Check browser console for specific error messages

### No data showing
- Make sure you ran the sample data SQL (Step 1.4)
- Or add data manually through Supabase Table Editor

## Next Steps

- **Add More Products**: Use Supabase Table Editor or build an admin panel
- **Deploy**: Follow the full SETUP_GUIDE.md for deployment instructions
- **Customize**: Update colors, images, and content to match your brand

## Need Help?

- Check the full [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed instructions
- Supabase docs: https://supabase.com/docs
- React docs: https://react.dev
