-- ============================================
-- Subcategories: Category → Subcategory → Product
-- Run this in Supabase SQL Editor
-- ============================================

-- 1. Create subcategories table
CREATE TABLE subcategories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  "order" INT DEFAULT 0,
  featured BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(category_id, slug)
);

-- Indexes
CREATE INDEX idx_subcategories_category ON subcategories(category_id);
CREATE INDEX idx_subcategories_slug ON subcategories(slug);
CREATE INDEX idx_subcategories_order ON subcategories("order");

-- RLS
ALTER TABLE subcategories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read subcategories"
  ON subcategories FOR SELECT
  USING (true);

CREATE POLICY "Admin full access to subcategories"
  ON subcategories FOR ALL
  USING (auth.role() = 'authenticated');

-- Trigger for updated_at
CREATE TRIGGER update_subcategories_updated_at
  BEFORE UPDATE ON subcategories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 2. Add subcategory_id to products (nullable for migration)
ALTER TABLE products
  ADD COLUMN IF NOT EXISTS subcategory_id UUID REFERENCES subcategories(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_products_subcategory ON products(subcategory_id);

-- 3. Migrate existing data: create one subcategory per category and assign products
DO $$
DECLARE
  cat RECORD;
  sub_id UUID;
BEGIN
  FOR cat IN SELECT id, name, slug FROM categories
  LOOP
    -- Create default subcategory "All" (or get existing id)
    INSERT INTO subcategories (category_id, name, slug, description, "order", featured)
    VALUES (cat.id, 'All', 'all', 'All ' || cat.name, 0, true)
    ON CONFLICT (category_id, slug) DO UPDATE SET name = EXCLUDED.name
    RETURNING id INTO sub_id;

    IF sub_id IS NULL THEN
      SELECT id INTO sub_id FROM subcategories WHERE category_id = cat.id AND slug = 'all' LIMIT 1;
    END IF;

    -- Assign all products in this category to the subcategory
    UPDATE products
    SET subcategory_id = sub_id
    WHERE category_id = cat.id AND (subcategory_id IS NULL OR subcategory_id != sub_id);
  END LOOP;
END $$;
