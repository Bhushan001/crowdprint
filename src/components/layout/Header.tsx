import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight, Sparkles, User } from 'lucide-react';
import { mainNavLinks } from '../../data/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation on location change
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname === '/') {
      // Already on home page, just scroll
      const element = document.getElementById('quote');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home with hash
      navigate('/#quote');
    }
  };

  const isHomeHero = !isScrolled && location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isHomeHero ? 'bg-white/20' : 'bg-gradient-to-br from-primary-500 to-primary-600'}`}>
            <Sparkles size={20} className={isHomeHero ? 'text-white' : 'text-white'} />
          </div>
          <span
            className={`text-2xl md:text-3xl font-extrabold ${
              isHomeHero ? 'text-white' : 'text-gray-900'
            }`}
          >
            CrowdPrint
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {mainNavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-semibold transition-colors
                ${isHomeHero ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-primary-600'}
                ${!isHomeHero && location.pathname === link.path ? 'text-primary-600' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={handleQuoteClick}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all cursor-pointer
              ${isHomeHero 
                ? 'bg-white text-gray-900 hover:bg-yellow-300 shadow-lg' 
                : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-500/25'}`}
          >
            Request a Quote
            <ChevronRight size={18} />
          </button>
          <Link
            to="/admin/login"
            className={`p-2.5 rounded-full transition-all ${
              isHomeHero 
                ? 'bg-white/20 text-white hover:bg-white/30' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-primary-600'
            }`}
            title="Admin Login"
          >
            <User size={20} />
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 ${isHomeHero ? 'text-white' : 'text-gray-900'}`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-xl">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {mainNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="font-semibold py-2 border-b border-gray-100 text-gray-700 hover:text-primary-600"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleQuoteClick}
              className="btn-primary justify-center mt-2"
            >
              Request a Quote
            </button>
            <Link
              to="/admin/login"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 py-2 text-gray-500 hover:text-primary-600"
            >
              <User size={18} />
              Admin Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
