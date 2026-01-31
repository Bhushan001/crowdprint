import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ChevronRight, Check, ShoppingBag, Share2, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useProduct } from '../hooks/useProducts';
import { useCategoryById } from '../hooks/useCategories';
import { useSubcategoryById } from '../hooks/useSubcategories';

export default function ProductDetailPage() {
  const { productSlug } = useParams<{ productSlug: string }>();
  const navigate = useNavigate();
  const { product, loading, error } = useProduct(productSlug || '');
  const { category } = useCategoryById(product?.category_id || '');
  const { subcategory } = useSubcategoryById(product?.subcategory_id || '');
  const [activeImage, setActiveImage] = useState(0);

  const handleQuoteClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('quote');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (error) {
    return (
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-red-600">Error loading product</h1>
        <p className="text-gray-600 mb-6">Please try again later.</p>
        <Link to="/products" className="btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Product not found</h1>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
        <Link to="/products" className="btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8 text-gray-600">
          <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/products" className="hover:text-primary-600 transition-colors">
            Products
          </Link>
          {category && (
            <>
              <ChevronRight size={14} />
              <Link
                to={`/products/${category.slug}`}
                className="hover:text-primary-600 transition-colors"
              >
                {category.name}
              </Link>
            </>
          )}
          {subcategory && category && (
            <>
              <ChevronRight size={14} />
              <Link
                to={`/products/${category.slug}/${subcategory.slug}`}
                className="hover:text-primary-600 transition-colors"
              >
                {subcategory.name}
              </Link>
            </>
          )}
          <ChevronRight size={14} />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative aspect-square bg-gray-100 rounded-3xl overflow-hidden mb-4">
              <img
                src={product.images?.[activeImage] || 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=500'}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.featured && (
                <span className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  Featured
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all
                      ${activeImage === index ? 'border-primary-500 ring-2 ring-primary-500/20' : 'border-transparent hover:border-gray-300'}`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {category && (
              <Link
                to={`/products/${category.slug}`}
                className="inline-block text-sm text-primary-600 hover:text-primary-700 transition-colors mb-2 font-semibold"
              >
                {category.name}
              </Link>
            )}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">{product.description}</p>

            {/* Specifications */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 mb-8 border border-gray-200">
              <h3 className="font-bold text-lg mb-4">Specifications</h3>
              <dl className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(
                  ([key, value]) =>
                    value && (
                      <div key={key} className="flex flex-col">
                        <dt className="text-gray-500 text-sm capitalize mb-1">
                          {key}
                        </dt>
                        <dd className="font-bold">{value}</dd>
                      </div>
                    )
                )}
              </dl>
            </div>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Features */}
            <div className="space-y-3 mb-8">
              {['Premium quality materials', 'Available in custom sizes', 'Bulk order discounts'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center">
                    <Check className="text-white" size={12} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleQuoteClick}
                className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-6 rounded-xl font-bold hover:from-primary-600 hover:to-primary-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-500/25"
              >
                <ShoppingBag size={20} />
                Request Quote
              </button>
              <button className="py-4 px-6 border-2 border-gray-200 rounded-xl font-bold hover:border-primary-500 hover:text-primary-600 transition-all flex items-center justify-center gap-2">
                <Share2 size={20} />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
