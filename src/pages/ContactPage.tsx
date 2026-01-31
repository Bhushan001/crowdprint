import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { contactInfo } from '../data/contactInfo';

export default function ContactPage() {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('quote');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-primary-600 uppercase tracking-wider">
            Get In Touch
          </span>
          <h1 className="heading-primary mt-2 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions or need a custom quote? We're here to help! Reach out to
            our team and we'll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Phone size={32} />
            </div>
            <h3 className="font-bold text-xl mb-4">Phone Numbers</h3>
            <div className="space-y-3">
              {contactInfo.phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="block text-gray-600 hover:text-primary-600 transition-colors font-medium"
                >
                  {phone}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-accent-200 transition-all"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Mail size={32} />
            </div>
            <h3 className="font-bold text-xl mb-4">Email Address</h3>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-gray-600 hover:text-accent-600 transition-colors font-medium"
            >
              {contactInfo.email}
            </a>
            <p className="text-gray-500 text-sm mt-3">
              We typically respond within 24 hours
            </p>
          </motion.div>

          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-secondary-200 transition-all"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <MapPin size={32} />
            </div>
            <h3 className="font-bold text-xl mb-4">Our Location</h3>
            <a
              href={contactInfo.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-secondary-600 transition-colors block font-medium"
            >
              {contactInfo.address}
            </a>
          </motion.div>
        </div>

        {/* Business Hours & CTA */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
                <Clock size={28} />
              </div>
              <h3 className="font-bold text-xl">Business Hours</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Monday - Friday</span>
                <span className="font-bold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Saturday</span>
                <span className="font-bold">9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 font-medium">Sunday</span>
                <span className="font-bold text-primary-500">Closed</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="vibrant-gradient text-white rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <h3 className="font-extrabold text-2xl mb-4 relative z-10">Ready to Get Started?</h3>
            <p className="text-white/90 mb-6 font-medium relative z-10">
              Request a custom quote for your zipper needs. Our team will provide
              competitive pricing and fast turnaround.
            </p>
            <button
              onClick={handleQuoteClick}
              className="bg-white text-gray-900 py-3 px-6 rounded-xl font-bold hover:bg-yellow-300 transition-colors inline-flex items-center gap-2 relative z-10 shadow-lg"
            >
              Request a Quote
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
