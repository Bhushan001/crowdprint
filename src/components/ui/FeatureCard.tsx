import { motion } from 'framer-motion';
import {
  Award,
  Layers,
  Palette,
  Building2,
  Lightbulb,
  Truck,
} from 'lucide-react';
import type { Feature } from '../../types';

const iconMap = {
  Star: Award,
  Layers: Layers,
  Settings: Palette,
  Building2: Building2,
  Lightbulb: Lightbulb,
  TrendingUp: Truck,
};

const colorVariants = [
  'from-primary-400 to-primary-600',
  'from-accent-400 to-accent-600',
  'from-secondary-400 to-secondary-600',
  'from-purple-400 to-purple-600',
  'from-blue-400 to-blue-600',
  'from-pink-400 to-pink-600',
];

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Award;
  const colorClass = colorVariants[index % colorVariants.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
    >
      <div className="flex flex-col">
        <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}>
          <IconComponent size={32} />
        </div>
        <h4 className="font-bold text-xl mb-3 group-hover:text-primary-600 transition-colors">{feature.title}</h4>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}
