import { useState, useEffect } from 'react';
import { categoryService } from '../services/categoryService';
import type { Category } from '../types';

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        const data = await categoryService.getAll();
        setCategories(data);
        setError(null);
      } catch (err) {
        setError(err as Error);
        console.error('Failed to fetch categories:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return { categories, loading, error };
}

export function useCategory(slug: string) {
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchCategory() {
      try {
        setLoading(true);
        const data = await categoryService.getBySlug(slug);
        setCategory(data);
        setError(null);
      } catch (err) {
        setError(err as Error);
        console.error('Failed to fetch category:', err);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchCategory();
    }
  }, [slug]);

  return { category, loading, error };
}

export function useCategoryById(id: string) {
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchCategory() {
      try {
        setLoading(true);
        const data = await categoryService.getById(id);
        setCategory(data);
        setError(null);
      } catch (err) {
        setError(err as Error);
        console.error('Failed to fetch category by ID:', err);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchCategory();
    }
  }, [id]);

  return { category, loading, error };
}
