import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Category } from '../../types';

const gradientOverlays = [
  'from-primary-600/80 to-primary-800/90',
  'from-accent-500/80 to-accent-700/90',
  'from-secondary-500/80 to-secondary-700/90',
  'from-purple-500/80 to-purple-700/90',
  'from-blue-500/80 to-blue-700/90',
  'from-pink-500/80 to-pink-700/90',
];

interface CategoryCardProps {
  category: Category;
  index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  const gradientClass = gradientOverlays[index % gradientOverlays.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        to={`/products/${category.slug}`}
        className="group block relative rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={category.image_url}
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${gradientClass} opacity-80 group-hover:opacity-90 transition-opacity`} />
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h4 className="font-bold text-2xl text-white mb-2 drop-shadow-lg">{category.name}</h4>
          <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {category.description}
          </p>
          <div className="flex items-center gap-2 text-white">
            <span className="text-sm font-semibold">Explore</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
