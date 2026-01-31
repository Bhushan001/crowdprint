import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { features } from '../../data/features';
import FeatureCard from '../ui/FeatureCard';

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 uppercase tracking-wider mb-4">
            <Sparkles size={16} />
            Our Advantages
          </span>
          <h2 className="heading-primary mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            At <strong className="text-gray-900">CrowdPrint</strong>, we are more than just a printing
            service—we are your trusted partner for high-quality, creative, and
            professional printing solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
