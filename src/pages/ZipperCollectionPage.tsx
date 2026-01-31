import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useCategories } from '../hooks/useCategories';
import { useProducts } from '../hooks/useProducts';
import CategoryCard from '../components/ui/CategoryCard';
import ProductCard from '../components/ui/ProductCard';

export default function ZipperCollectionPage() {
  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();
  const { products, loading: productsLoading, error: productsError } = useProducts();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="heading-primary mb-4">Product Collection</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Explore our wide range of custom printing solutions. Browse by category or view
            all products below.
          </p>
        </motion.div>

        <section className="mb-16">
          <h2 className="heading-secondary mb-8">Categories</h2>
          {categoriesError ? (
            <div className="text-center text-red-600 py-8">
              <p>Error loading categories. Please try again later.</p>
            </div>
          ) : categoriesLoading ? (
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
        </section>

        <section>
          <h2 className="heading-secondary mb-8">All Products</h2>
          {productsError ? (
            <div className="text-center text-red-600 py-8">
              <p>Error loading products. Please try again later.</p>
            </div>
          ) : productsLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
