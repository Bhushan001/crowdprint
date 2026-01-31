import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, ArrowUpRight } from 'lucide-react';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <Link
        to={`/product/${product.slug}`}
        className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
      >
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.images?.[0] || 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=500'}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-600/80 to-primary-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-full font-bold">
              <Eye size={18} />
              View Details
            </div>
          </div>
          {/* Featured badge */}
          {product.featured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              Featured
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-bold text-lg group-hover:text-primary-600 transition-colors">
              {product.name}
            </h4>
            <ArrowUpRight className="flex-shrink-0 text-gray-400 group-hover:text-primary-500 transition-colors" size={20} />
          </div>
          <p className="text-gray-500 text-sm mt-2 line-clamp-2">
            {product.description}
          </p>
          {product.specifications.size && (
            <div className="mt-4 flex items-center gap-2">
              <span className="bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                {product.specifications.size}
              </span>
              {product.specifications.color && (
                <span className="bg-accent-50 text-accent-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {product.specifications.color}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
