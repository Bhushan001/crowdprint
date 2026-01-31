import { motion } from 'framer-motion';
import { Target, Compass, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=800&auto=format&fit=crop"
                alt="Zipper manufacturing"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/50 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary-500 to-primary-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-extrabold">9+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-bold text-primary-600 uppercase tracking-wider mb-2">
              About Us
            </span>
            <h2 className="heading-secondary mt-2 mb-6">
              Delivering Quality Prints Since 2015
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At <strong className="text-gray-900">CrowdPrint</strong>, we take pride in being a
              leading provider of custom printing solutions, delivering{' '}
              <strong className="text-primary-600">quality, creativity, and innovation</strong> for diverse
              needs. With years of experience, we have built a reputation for
              exceptional print quality, fast turnaround, and customer-centric service.
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {[
                'Premium quality materials',
                'Custom designs & bulk orders',
                'Fast & reliable delivery',
                'Expert customer support',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-white" size={14} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Vision & Mission */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 border border-primary-200">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Target size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Our Vision</h4>
                <p className="text-gray-600 text-sm">
                  To be the most trusted printing partner, recognized for excellence
                  and creativity globally.
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-6 border border-accent-200">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-500 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Compass size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Our Mission</h4>
                <p className="text-gray-600 text-sm">
                  To provide high-quality, innovative printing solutions that meet the
                  evolving needs of businesses and individuals worldwide.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
