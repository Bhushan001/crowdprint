import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useCategory } from '../hooks/useCategories';
import { useProductsByCategory } from '../hooks/useProducts';
import ProductCard from '../components/ui/ProductCard';

export default function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { category, loading: categoryLoading, error: categoryError } = useCategory(categorySlug || '');
  const { products, loading: productsLoading, error: productsError } = useProductsByCategory(category?.id || '');

  if (categoryError) {
    return (
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Error loading category</h1>
        <Link to="/products" className="btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  if (categoryLoading) {
    return (
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Category not found</h1>
        <Link to="/products" className="btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="text-sm mb-8 text-gray-600">
          <Link to="/" className="hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-black">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black">{category.name}</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="heading-primary mb-4">{category.name}</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            {category.description}
          </p>
        </motion.div>

        {productsError ? (
          <div className="text-center py-16 text-red-600">
            <p className="mb-4">Error loading products. Please try again later.</p>
          </div>
        ) : productsLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 mb-4">No products in this category yet.</p>
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
