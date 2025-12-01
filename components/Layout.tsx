import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Clock, Instagram, Facebook, Phone } from 'lucide-react';
import FloatingWhatsApp from './FloatingWhatsApp';
import { ENDERECO, LINKS_SOCIAIS, IMAGENS } from '../constants';

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
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Barra Superior - Apenas Desktop */}
      <div className="hidden md:block bg-jps-main text-white py-2 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={12} className="text-jps-gold" /> Caraguatatuba - SP</span>
            <span className="flex items-center gap-1"><Clock size={12} className="text-jps-gold" /> Seg-Sex: 7:30 às 18:00 | Sáb: 7:30 às 12:00 | Dom: Fechado</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={LINKS_SOCIAIS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-jps-gold transition-colors"><Instagram size={14} /></a>
            <a href={LINKS_SOCIAIS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="hover:text-jps-gold transition-colors"><Facebook size={14} /></a>
          </div>
        </div>
      </div>

      {/* Cabeçalho Principal */}
      <header className={`sticky top-0 z-40 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-3' : 'shadow-sm py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Imagem da Logo */}
            <Link to="/" className="block group">
              <img 
                src={IMAGENS.LOGO} 
                alt="JPS Auto Peças" 
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>

            {/* Navegação Desktop */}
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
                Fale Conosco
              </Link>
            </nav>

            {/* Botão Menu Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-jps-main focus:outline-none"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Navegação Mobile */}
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

      {/* Rodapé */}
      <footer className="bg-jps-main text-white pt-16 pb-8 border-t-4 border-jps-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="mb-6">
                 {/* Logo do Rodapé - Filtro Branco Aplicado */}
                 <img 
                   src={IMAGENS.LOGO} 
                   alt="JPS Auto Peças" 
                   className="h-20 w-auto object-contain brightness-0 invert opacity-90" 
                 />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Referência na venda de peças para linha diesel há mais de 25 anos. Qualidade, estoque completo e preço justo para você.
              </p>
              <div className="flex space-x-4">
                <a href={LINKS_SOCIAIS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-jps-gold hover:text-jps-main p-2 rounded-full transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href={LINKS_SOCIAIS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-jps-gold hover:text-jps-main p-2 rounded-full transition-all duration-300">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-anton text-xl mb-6 text-jps-gold tracking-wide">Links Rápidos</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link to="/catalogo" className="hover:text-white transition-colors">Peças e Acessórios</Link></li>
                <li><Link to="/sobre" className="hover:text-white transition-colors">Nossa História</Link></li>
                <li><Link to="/contato" className="hover:text-white transition-colors">Fale Conosco</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-anton text-xl mb-6 text-jps-gold tracking-wide">Contato</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-jps-gold flex-shrink-0 mt-0.5" />
                  <span>{ENDERECO}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-jps-gold flex-shrink-0" />
                  <span>(12) 97404-5244</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-jps-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Segunda a Sexta - 7:30 as 18:00</p>
                    <p>Sábado - 7:30 as 12:00</p>
                    <p>Domingo - Fechado</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} JPS Auto Peças. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0 font-medium">Desenvolvido por luizdovaletech.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;