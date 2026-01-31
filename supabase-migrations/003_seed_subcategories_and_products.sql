-- ============================================
-- Seed: 2 subcategories + 2 products each (4 products)
-- Run in Supabase SQL Editor after 002_subcategories.sql
-- ============================================

DO $$
DECLARE
  cat_id UUID;
  sub_matte_id UUID;
  sub_glossy_id UUID;
BEGIN
  -- Use "Business Cards" category (create if missing)
  SELECT id INTO cat_id FROM categories WHERE slug = 'business-cards' LIMIT 1;

  IF cat_id IS NULL THEN
    -- Fallback: use first category
    SELECT id INTO cat_id FROM categories ORDER BY "order" ASC LIMIT 1;
  END IF;

  IF cat_id IS NULL THEN
    RAISE EXCEPTION 'No category found. Run the initial seed (categories) first.';
  END IF;

  -- 1. Create 2 subcategories (INSERT returns multiple rows, so don't use RETURNING INTO)
  INSERT INTO subcategories (category_id, name, slug, description, image_url, "order", featured)
  VALUES
    (cat_id, 'Matte Business Cards', 'matte-business-cards', 'Professional matte finish business cards with a soft, non-reflective surface.', 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500', 1, true),
    (cat_id, 'Glossy Business Cards', 'glossy-business-cards', 'High-shine glossy finish business cards that make a bold impression.', 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=500', 2, true)
  ON CONFLICT (category_id, slug) DO UPDATE SET name = EXCLUDED.name, description = EXCLUDED.description;

  SELECT id INTO sub_matte_id FROM subcategories WHERE category_id = cat_id AND slug = 'matte-business-cards' LIMIT 1;
  SELECT id INTO sub_glossy_id FROM subcategories WHERE category_id = cat_id AND slug = 'glossy-business-cards' LIMIT 1;

  -- 2. Add 2 products for Matte subcategory
  INSERT INTO products (name, slug, category_id, subcategory_id, description, specifications, tags, featured, "order")
  VALUES
    (
      'Premium Matte 350gsm',
      'premium-matte-350gsm',
      cat_id,
      sub_matte_id,
      'Thick 350gsm matte cardstock. Ideal for a premium, professional look.',
      '{"size": "3.5 x 2 inches", "finish": "Matte", "material": "350gsm cardstock", "quantity": "500", "turnaround": "3-5 days"}'::jsonb,
      ARRAY['matte', 'business-cards', 'premium'],
      true,
      1
    ),
    (
      'Standard Matte 300gsm',
      'standard-matte-300gsm',
      cat_id,
      sub_matte_id,
      'Classic 300gsm matte finish. Great value for everyday use.',
      '{"size": "3.5 x 2 inches", "finish": "Matte", "material": "300gsm cardstock", "quantity": "250", "turnaround": "2-4 days"}'::jsonb,
      ARRAY['matte', 'business-cards', 'standard'],
      false,
      2
    )
  ON CONFLICT (slug) DO NOTHING;

  -- 3. Add 2 products for Glossy subcategory
  INSERT INTO products (name, slug, category_id, subcategory_id, description, specifications, tags, featured, "order")
  VALUES
    (
      'Glossy UV Coated',
      'glossy-uv-coated',
      cat_id,
      sub_glossy_id,
      'Vibrant full-color with UV coating for extra durability and shine.',
      '{"size": "3.5 x 2 inches", "finish": "Glossy UV", "material": "350gsm", "quantity": "500", "turnaround": "3-5 days"}'::jsonb,
      ARRAY['glossy', 'business-cards', 'uv'],
      true,
      1
    ),
    (
      'Glossy Standard',
      'glossy-standard',
      cat_id,
      sub_glossy_id,
      'Classic glossy finish. Sharp colors and a polished look.',
      '{"size": "3.5 x 2 inches", "finish": "Glossy", "material": "300gsm gloss", "quantity": "250", "turnaround": "2-4 days"}'::jsonb,
      ARRAY['glossy', 'business-cards', 'standard'],
      false,
      2
    )
  ON CONFLICT (slug) DO NOTHING;

  -- 4. Add one product image per product (only if product has no images yet)
  INSERT INTO product_images (product_id, image_url, "order")
  SELECT p.id, 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600', 0
  FROM products p
  WHERE p.slug IN ('premium-matte-350gsm', 'standard-matte-300gsm')
  AND NOT EXISTS (SELECT 1 FROM product_images pi WHERE pi.product_id = p.id LIMIT 1);

  INSERT INTO product_images (product_id, image_url, "order")
  SELECT p.id, 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600', 0
  FROM products p
  WHERE p.slug IN ('glossy-uv-coated', 'glossy-standard')
  AND NOT EXISTS (SELECT 1 FROM product_images pi WHERE pi.product_id = p.id LIMIT 1);

END $$;
