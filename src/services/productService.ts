import { supabase } from '../lib/supabase';
import type { Product } from '../types';

export const productService = {
  /**
   * Fetch all products with their images
   */
  async getAll(): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        product_images (
          id,
          image_url,
          cloudinary_public_id,
          order
        )
      `)
      .order('order', { ascending: true });

    if (error) {
      console.error('Error fetching products:', error);
      throw error;
    }

    // Transform the data to match our Product type
    return (data || []).map(product => ({
      ...product,
      images: product.product_images
        ?.sort((a: any, b: any) => a.order - b.order)
        .map((img: any) => img.image_url) || [],
    }));
  },

  /**
   * Fetch products by category
   */
  async getByCategory(categoryId: string): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        product_images (
          id,
          image_url,
          cloudinary_public_id,
          order
        )
      `)
      .eq('category_id', categoryId)
      .order('order', { ascending: true });

    if (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }

    return (data || []).map(product => ({
      ...product,
      images: product.product_images
        ?.sort((a: any, b: any) => a.order - b.order)
        .map((img: any) => img.image_url) || [],
    }));
  },

  /**
   * Fetch products by subcategory
   */
  async getBySubcategory(subcategoryId: string): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        product_images (
          id,
          image_url,
          cloudinary_public_id,
          order
        )
      `)
      .eq('subcategory_id', subcategoryId)
      .order('order', { ascending: true });

    if (error) {
      console.error('Error fetching products by subcategory:', error);
      throw error;
    }

    return (data || []).map(product => ({
      ...product,
      images: product.product_images
        ?.sort((a: any, b: any) => a.order - b.order)
        .map((img: any) => img.image_url) || [],
    }));
  },

  /**
   * Fetch a single product by slug
   */
  async getBySlug(slug: string): Promise<Product | null> {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        product_images (
          id,
          image_url,
          cloudinary_public_id,
          order
        )
      `)
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching product:', error);
      throw error;
    }

    if (!data) return null;

    return {
      ...data,
      images: data.product_images
        ?.sort((a: any, b: any) => a.order - b.order)
        .map((img: any) => img.image_url) || [],
    };
  },

  /**
   * Fetch featured products
   */
  async getFeatured(): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        product_images (
          id,
          image_url,
          cloudinary_public_id,
          order
        )
      `)
      .eq('featured', true)
      .order('order', { ascending: true })
      .limit(6);

    if (error) {
      console.error('Error fetching featured products:', error);
      throw error;
    }

    return (data || []).map(product => ({
      ...product,
      images: product.product_images
        ?.sort((a: any, b: any) => a.order - b.order)
        .map((img: any) => img.image_url) || [],
    }));
  },

  /**
   * Create a new product (Admin only)
   */
  async create(product: Omit<Product, 'id' | 'created_at' | 'updated_at'>): Promise<Product> {
    const { images, ...productData } = product;

    const { data, error } = await supabase
      .from('products')
      .insert([productData])
      .select()
      .single();

    if (error) {
      console.error('Error creating product:', error);
      throw error;
    }

    // Add images if provided
    if (images && images.length > 0) {
      const imageRecords = images.map((url, index) => ({
        product_id: data.id,
        image_url: url,
        order: index,
      }));

      const { error: imageError } = await supabase
        .from('product_images')
        .insert(imageRecords);

      if (imageError) {
        console.error('Error adding product images:', imageError);
      }
    }

    return { ...data, images: images || [] };
  },

  /**
   * Update an existing product (Admin only)
   */
  async update(id: string, updates: Partial<Product>): Promise<Product> {
    const { images, ...productUpdates } = updates;

    const { data, error } = await supabase
      .from('products')
      .update(productUpdates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating product:', error);
      throw error;
    }

    return { ...data, images: images || [] };
  },

  /**
   * Delete a product (Admin only)
   */
  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  },
};
