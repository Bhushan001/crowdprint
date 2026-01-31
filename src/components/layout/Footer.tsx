import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { contactInfo } from '../../data/contactInfo';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById('quote');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#quote');
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <Sparkles size={20} className="text-white" />
              </div>
              <span className="text-2xl font-extrabold">CrowdPrint</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for custom printing solutions. From business cards 
              to large format prints, we deliver quality and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={handleQuoteClick}
                  className="text-gray-400 hover:text-primary-400 transition-colors font-medium"
                >
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Categories</h4>
            <ul className="space-y-3">
              {[
                { name: 'Luxury Zipper', slug: 'luxury-zipper' },
                { name: 'Metal Zipper', slug: 'metal-zipper' },
                { name: 'Nylon Coil', slug: 'nylon-coil' },
                { name: 'Plastic Molded', slug: 'plastic-molded' },
                { name: 'Invisible Zipper', slug: 'invisible-zipper' },
              ].map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/products/${cat.slug}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors font-medium"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary-400" />
                </div>
                <div>
                  {contactInfo.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="block text-gray-400 hover:text-primary-400 transition-colors font-medium"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-accent-400" />
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-accent-400 transition-colors font-medium"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-secondary-400" />
                </div>
                <span className="text-gray-400 text-sm">{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} CrowdPrint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
