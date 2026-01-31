import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FolderOpen, Package, Plus, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Stats {
  categories: number;
  products: number;
  featuredProducts: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({ categories: 0, products: 0, featuredProducts: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [categoriesResult, productsResult, featuredResult] = await Promise.all([
          supabase.from('categories').select('id', { count: 'exact', head: true }),
          supabase.from('products').select('id', { count: 'exact', head: true }),
          supabase.from('products').select('id', { count: 'exact', head: true }).eq('featured', true),
        ]);

        setStats({
          categories: categoriesResult.count || 0,
          products: productsResult.count || 0,
          featuredProducts: featuredResult.count || 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Categories',
      value: stats.categories,
      icon: FolderOpen,
      color: 'from-primary-500 to-primary-600',
      link: '/admin/categories',
    },
    {
      title: 'Products',
      value: stats.products,
      icon: Package,
      color: 'from-secondary-500 to-secondary-600',
      link: '/admin/products',
    },
    {
      title: 'Featured Products',
      value: stats.featuredProducts,
      icon: Package,
      color: 'from-accent-500 to-accent-600',
      link: '/admin/products',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome to CrowdPrint Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={stat.link}
              className="block bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-500 mt-1">{stat.title}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/admin/categories/new"
            className="flex items-center gap-3 p-4 bg-primary-50 hover:bg-primary-100 rounded-xl transition-colors"
          >
            <div className="p-2 bg-primary-500 rounded-lg">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Add Category</p>
              <p className="text-sm text-gray-500">Create a new product category</p>
            </div>
          </Link>
          <Link
            to="/admin/products/new"
            className="flex items-center gap-3 p-4 bg-secondary-50 hover:bg-secondary-100 rounded-xl transition-colors"
          >
            <div className="p-2 bg-secondary-500 rounded-lg">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Add Product</p>
              <p className="text-sm text-gray-500">Create a new product</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
