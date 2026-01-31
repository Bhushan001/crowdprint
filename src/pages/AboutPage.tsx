import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { statistics } from '../data/statistics';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="heading-primary mb-6">About Us</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            At <strong>Simran Zip Centre</strong>, we take pride in being a
            leading provider of premium zippers, delivering quality, durability,
            and innovation for diverse industries.
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="heading-secondary mb-6">Our Story</h2>
          <p className="text-gray-600 text-lg max-w-4xl leading-relaxed">
            With years of experience in the industry, we have built a reputation
            for precision engineering, reliable supply, and customer-centric
            service. Whether for fashion, luggage, automotive, or industrial
            applications, our zippers are designed to enhance functionality and
            aesthetics.
          </p>
        </motion.section>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Vision</h3>
            <p className="text-gray-600">
              To be the most trusted and preferred zipper supplier, recognized
              for excellence, innovation, and reliability. We aim to set new
              standards in zipper technology, offering customized solutions that
              empower businesses globally.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Mission</h3>
            <p className="text-gray-600">
              To provide high-quality, durable, and innovative zipper solutions
              that meet the evolving needs of industries worldwide. We are
              committed to precision, sustainability, and customer satisfaction,
              ensuring every product exceeds expectations.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-100 rounded-lg p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-4xl font-bold text-black">
                  {stat.value}
                  {stat.suffix}
                </div>
                <p className="text-gray-600 mt-2 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <Link to="/products" className="btn-primary">
            View Our Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
