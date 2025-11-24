import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Clock, Instagram, Facebook, Phone } from 'lucide-react';
import FloatingWhatsApp from './FloatingWhatsApp';
import { ADDRESS, SOCIAL_LINKS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Catálogo', path: '/catalogo' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar - Desktop Only */}
      <div className="hidden md:block bg-jps-main text-white py-2 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={12} className="text-jps-gold" /> Caraguatatuba - SP</span>
            <span className="flex items-center gap-1"><Clock size={12} className="text-jps-gold" /> Seg-Sex: 8h às 18h | Sáb: 8h às 12h</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-jps-gold transition-colors"><Instagram size={14} /></a>
            <a href={SOCIAL_LINKS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="hover:text-jps-gold transition-colors"><Facebook size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-40 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-3' : 'shadow-sm py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none group">
              <span className="font-anton text-5xl text-jps-main tracking-wider [text-shadow:2px_2px_4px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-300">JPS</span>
              <span className="font-bold text-sm tracking-[0.3em] text-jps-light ml-1">AUTO PEÇAS</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors duration-200 hover:text-jps-light relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-jps-gold after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${location.pathname === link.path ? 'text-jps-main after:w-full' : 'text-gray-600'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contato" className="bg-jps-gold hover:bg-yellow-500 text-jps-main font-bold py-2 px-6 rounded shadow-md transition-transform hover:-translate-y-0.5 active:translate-y-0">
                Orçamento
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-jps-main focus:outline-none"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-3 text-base font-bold uppercase w-full text-center hover:bg-gray-50 rounded ${location.pathname === link.path ? 'text-jps-main' : 'text-gray-600'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <FloatingWhatsApp />

      {/* Footer */}
      <footer className="bg-jps-main text-white pt-16 pb-8 border-t-4 border-jps-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="mb-6">
                <span className="font-anton text-4xl tracking-wider">JPS</span>
                <span className="block text-sm tracking-[0.2em] text-jps-gold opacity-90">AUTO PEÇAS</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Referência em peças e serviços para linha diesel há mais de 25 anos. Qualidade, confiança e preço justo para você seguir viagem.
              </p>
              <div className="flex space-x-4">
                <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-jps-gold hover:text-jps-main p-2 rounded-full transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href={SOCIAL_LINKS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-jps-gold hover:text-jps-main p-2 rounded-full transition-all duration-300">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-anton text-xl mb-6 text-jps-gold tracking-wide">Links Rápidos</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link to="/catalogo" className="hover:text-white transition-colors">Peças e Acessórios</Link></li>
                <li><Link to="/servicos" className="hover:text-white transition-colors">Serviços Especializados</Link></li>
                <li><Link to="/sobre" className="hover:text-white transition-colors">Nossa História</Link></li>
                <li><Link to="/contato" className="hover:text-white transition-colors">Fale Conosco</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-anton text-xl mb-6 text-jps-gold tracking-wide">Contato</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-jps-gold flex-shrink-0 mt-0.5" />
                  <span>{ADDRESS}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-jps-gold flex-shrink-0" />
                  <span>(12) 97404-5244</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-jps-gold flex-shrink-0" />
                  <span>Seg-Sex: 8h às 18h | Sáb: 8h às 12h</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} JPS Auto Peças. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0 font-medium">Desenvolvido por Luís do Vale.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;