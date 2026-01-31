import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { useCategories } from '../../hooks/useCategories';
import CategoryCard from '../ui/CategoryCard';

export default function ZipperCollection() {
  const { categories, loading, error } = useCategories();

  if (error) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-red-600">
            <p>Error loading categories. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 uppercase tracking-wider mb-4">
            <Sparkles size={16} />
            Our Products
          </span>
          <h2 className="heading-primary mb-4">Product Collection</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our wide range of custom printing solutions designed for various
            needs and applications.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-bold hover:from-primary-600 hover:to-primary-700 transition-all hover:gap-4 shadow-lg shadow-primary-500/25"
          >
            View All Products
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
