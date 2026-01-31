import { useState, useEffect } from 'react';
import { subcategoryService } from '../services/subcategoryService';
import type { Subcategory } from '../types';

export function useSubcategories() {
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchSubcategories() {
      try {
        setLoading(true);
        const data = await subcategoryService.getAll();
        setSubcategories(data);
        setError(null);
      } catch (err) {
        setError(err as Error);
        console.error('Failed to fetch subcategories:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchSubcategories();
  }, []);

  return { subcategories, loading, error };
}

export function useSubcategoriesByCategory(categoryId: string) {
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchSubcategories() {
      try {
        setLoading(true);
        const data = await subcategoryService.getByCategoryId(categoryId);
        setSubcategories(data);
        setError(null);
      } catch (err) {
        setError(err as Error);
        console.error('Failed to fetch subcategories:', err);
      } finally {
        setLoading(false);
      }
    }

    if (categoryId) {
      fetchSubcategories();
    }
  }, [categoryId]);

  return { subcategories, loading, error };
}

export function useSubcategory(categorySlug: string, subcategorySlug: string) {
  const [subcategory, setSubcategory] = useState<Subcategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchSubcategory() {
      try {
        setLoading(true);
        const data = await subcategoryService.getBySlug(categorySlug, subcategorySlug);
        setSubcategory(data);
        setError(null);
      } catch (err) {
        setError(err as Error);
        console.error('Failed to fetch subcategory:', err);
      } finally {
        setLoading(false);
      }
    }

    if (categorySlug && subcategorySlug) {
      fetchSubcategory();
    }
  }, [categorySlug, subcategorySlug]);

  return { subcategory, loading, error };
}

export function useSubcategoryById(id: string) {
  const [subcategory, setSubcategory] = useState<Subcategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchSubcategory() {
      try {
        setLoading(true);
        const data = await subcategoryService.getById(id);
        setSubcategory(data);
        setError(null);
      } catch (err) {
        setError(err as Error);
        console.error('Failed to fetch subcategory:', err);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchSubcategory();
    }
  }, [id]);

  return { subcategory, loading, error };
}
