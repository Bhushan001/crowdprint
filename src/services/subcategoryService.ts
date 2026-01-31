import { supabase } from '../lib/supabase';
import type { Subcategory } from '../types';

export const subcategoryService = {
  /**
   * Fetch all subcategories
   */
  async getAll(): Promise<Subcategory[]> {
    const { data, error } = await supabase
      .from('subcategories')
      .select('*')
      .order('order', { ascending: true });

    if (error) {
      console.error('Error fetching subcategories:', error);
      throw error;
    }

    return data || [];
  },

  /**
   * Fetch subcategories by category ID
   */
  async getByCategoryId(categoryId: string): Promise<Subcategory[]> {
    const { data, error } = await supabase
      .from('subcategories')
      .select('*')
      .eq('category_id', categoryId)
      .order('order', { ascending: true });

    if (error) {
      console.error('Error fetching subcategories by category:', error);
      throw error;
    }

    return data || [];
  },

  /**
   * Fetch a single subcategory by category slug + subcategory slug
   */
  async getBySlug(categorySlug: string, subcategorySlug: string): Promise<Subcategory | null> {
    const { data: category } = await supabase
      .from('categories')
      .select('id')
      .eq('slug', categorySlug)
      .single();

    if (!category?.id) return null;

    const { data, error } = await supabase
      .from('subcategories')
      .select('*')
      .eq('category_id', category.id)
      .eq('slug', subcategorySlug)
      .single();

    if (error) {
      console.error('Error fetching subcategory:', error);
      throw error;
    }

    return data;
  },

  /**
   * Fetch a single subcategory by ID
   */
  async getById(id: string): Promise<Subcategory | null> {
    const { data, error } = await supabase
      .from('subcategories')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching subcategory by ID:', error);
      throw error;
    }

    return data;
  },

  /**
   * Create a new subcategory (Admin only)
   */
  async create(subcategory: Omit<Subcategory, 'id' | 'created_at' | 'updated_at'>): Promise<Subcategory> {
    const { data, error } = await supabase
      .from('subcategories')
      .insert([subcategory])
      .select()
      .single();

    if (error) {
      console.error('Error creating subcategory:', error);
      throw error;
    }

    return data;
  },

  /**
   * Update an existing subcategory (Admin only)
   */
  async update(id: string, updates: Partial<Subcategory>): Promise<Subcategory> {
    const { data, error } = await supabase
      .from('subcategories')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating subcategory:', error);
      throw error;
    }

    return data;
  },

  /**
   * Delete a subcategory (Admin only)
   */
  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('subcategories')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting subcategory:', error);
      throw error;
    }
  },
};
