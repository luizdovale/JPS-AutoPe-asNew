import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';
import { IMAGENS, LINKS_SOCIAIS, ENDERECO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jps-main text-white pt-16 pb-8 border-t-4 border-jps-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Centralizada no Topo do Rodapé */}
        <div className="flex flex-col items-center mb-16 text-center">
          <Link to="/" className="mb-6 inline-block">
            <img 
              src={IMAGENS.LOGO} 
              alt="JPS Auto Peças Logo Footer" 
              className="h-24 w-auto object-contain brightness-0 invert opacity-100" 
              width="240"
              height="96"
              loading="lazy"
            />
          </Link>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Referência na venda de peças para linha diesel há mais de 25 anos. Qualidade, estoque completo e preço justo para você e sua frota.
          </p>
          <div className="flex space-x-6 mt-8">
            <a href={LINKS_SOCIAIS.INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white/10 hover:bg-jps-gold hover:text-jps-main p-3 rounded-full transition-all duration-300 transform hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href={LINKS_SOCIAIS.FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white/10 hover:bg-jps-gold hover:text-jps-main p-3 rounded-full transition-all duration-300 transform hover:scale-110">
              <Facebook size={24} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 border-t border-white/10 pt-12">
          {/* Navegação */}
          <nav aria-labelledby="footer-links-title" className="text-center lg:text-left">
            <h3 id="footer-links-title" className="font-anton text-xl mb-6 text-jps-gold tracking-wide uppercase">Links Rápidos</h3>
            <ul className="space-y-3 text-sm md:text-base text-gray-300">
              <li><Link to="/" className="hover:text-jps-gold transition-colors">Início</Link></li>
              <li><Link to="/catalogo" className="hover:text-jps-gold transition-colors">Catálogo de Peças</Link></li>
              <li><Link to="/servicos" className="hover:text-jps-gold transition-colors">Nossos Serviços</Link></li>
              <li><Link to="/sobre" className="hover:text-jps-gold transition-colors">Sobre a JPS</Link></li>
              <li><Link to="/contato" className="hover:text-jps-gold transition-colors">Fale Conosco</Link></li>
            </ul>
          </nav>

          {/* Endereço */}
          <section aria-labelledby="footer-address-title" className="text-center lg:text-left">
            <h3 id="footer-address-title" className="font-anton text-xl mb-6 text-jps-gold tracking-wide uppercase">Localização</h3>
            <div className="flex flex-col items-center lg:items-start gap-4 text-sm md:text-base text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-jps-gold flex-shrink-0 mt-0.5" />
                <span>{ENDERECO}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-jps-gold flex-shrink-0" />
                <span className="font-bold">(12) 97404-5244</span>
              </div>
            </div>
          </section>

          {/* Horários */}
          <section aria-labelledby="footer-hours-title" className="text-center lg:text-left">
            <h3 id="footer-hours-title" className="font-anton text-xl mb-6 text-jps-gold tracking-wide uppercase">Horários</h3>
            <ul className="space-y-3 text-sm md:text-base text-gray-300">
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <Clock size={20} className="text-jps-gold flex-shrink-0" />
                <div>
                  <p><span className="font-bold text-white">Segunda a Sexta:</span> 7:30 às 18:00</p>
                  <p><span className="font-bold text-white">Sábado:</span> 7:30 às 12:00</p>
                  <p className="text-jps-gold/60">Domingo: Fechado</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} JPS Auto Peças. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 font-medium tracking-widest uppercase opacity-60">Desenvolvido por LUIZDOVALETECH</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;