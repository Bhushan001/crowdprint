import { motion } from 'framer-motion';
import { Shirt, ShoppingBag, Footprints, Factory } from 'lucide-react';
import type { Industry } from '../../types';

const iconMap = {
  Shirt,
  ShoppingBag,
  Footprints,
  Factory,
};

const colorVariants = [
  'from-primary-400 to-primary-600',
  'from-accent-400 to-accent-600',
  'from-secondary-400 to-secondary-600',
  'from-purple-400 to-purple-600',
];

interface IndustryCardProps {
  industry: Industry;
  index: number;
}

export default function IndustryCard({ industry, index }: IndustryCardProps) {
  const IconComponent = iconMap[industry.icon as keyof typeof iconMap] || Shirt;
  const colorClass = colorVariants[index % colorVariants.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
    >
      <div className={`w-20 h-20 bg-gradient-to-br ${colorClass} text-white rounded-3xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
        <IconComponent size={40} />
      </div>
      <span className="font-bold text-lg group-hover:text-primary-600 transition-colors">{industry.name}</span>
    </motion.div>
  );
}
