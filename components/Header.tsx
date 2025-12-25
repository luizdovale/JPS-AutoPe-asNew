import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Clock, Instagram, Facebook, Menu, X } from 'lucide-react';
import { IMAGENS, LINKS_SOCIAIS } from '../constants';

interface HeaderProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, isMenuOpen, toggleMenu }) => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Catálogo', path: '/catalogo' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-jps-main text-white py-2 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={12} className="text-jps-gold" /> Caraguatatuba - SP</span>
            <span className="flex items-center gap-1"><Clock size={12} className="text-jps-gold" /> Seg-Sex: 7:30-18:00 | Sáb: 7:30-12:00</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={LINKS_SOCIAIS.INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-jps-gold transition-colors"><Instagram size={14} /></a>
            <a href={LINKS_SOCIAIS.FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-jps-gold transition-colors"><Facebook size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-40 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-3' : 'shadow-sm py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="block group">
              <img 
                src={IMAGENS.LOGO} 
                alt="JPS Auto Peças Logo" 
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                width="160"
                height="64"
              />
            </Link>

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

            <button
              onClick={toggleMenu}
              className="md:hidden text-jps-main focus:outline-none"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={toggleMenu}
                className={`block px-3 py-3 text-base font-bold uppercase w-full text-center hover:bg-gray-50 rounded ${location.pathname === link.path ? 'text-jps-main' : 'text-gray-600'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;