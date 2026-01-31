import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { industries } from '../../data/industries';
import IndustryCard from '../ui/IndustryCard';

export default function Industries() {
  return (
    <section id="who" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 uppercase tracking-wider mb-4">
            <Sparkles size={16} />
            We Serve
          </span>
          <h2 className="heading-primary mb-4">Industries We Serve</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We provide high-quality printing services designed to meet the needs of various
            industries. Our prints are crafted with precision, quality, and
            innovation to ensure exceptional results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
