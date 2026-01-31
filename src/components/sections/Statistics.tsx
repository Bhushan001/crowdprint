import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Clock, Users, ThumbsUp, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const statistics = [
  { id: '1', value: 9, suffix: '+', label: 'Years of Industry Experience', icon: Clock, color: 'from-primary-400 to-primary-600' },
  { id: '2', value: 1000, suffix: '+', label: 'Clients Served', icon: Users, color: 'from-accent-400 to-accent-600' },
  { id: '3', value: 99, suffix: '%', label: 'Customer Satisfaction', icon: ThumbsUp, color: 'from-secondary-400 to-secondary-600' },
  { id: '4', value: 50, suffix: '+', label: 'Print Products Offered', icon: Globe, color: 'from-purple-400 to-purple-600' },
];

export default function Statistics() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Icon size={30} className="text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="text-gray-400 text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
