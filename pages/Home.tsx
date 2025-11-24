import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Settings, ShieldCheck, Truck, ChevronLeft, ChevronRight, Quote, Wrench, Droplet, Laptop } from 'lucide-react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { IMAGES, PRODUCTS, TESTIMONIALS, SERVICES } from '../constants';

const Home: React.FC = () => {
  // Select 3 products for featured section
  const featuredProducts = PRODUCTS.slice(0, 3);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // Approx card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench size={24} />;
      case 'Droplet': return <Droplet size={24} />;
      case 'Laptop': return <Laptop size={24} />;
      default: return <Settings size={24} />;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HERO_BG} 
            alt="Oficina Diesel JPS" 
            className="w-full h-full object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jps-main via-jps-main/80 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl text-white">
            <div className="opacity-0 animate-fade-in-up inline-flex items-center gap-2 bg-jps-gold text-jps-main font-black px-4 py-1.5 text-sm rounded shadow-lg mb-8 uppercase tracking-wider">
              <Star size={14} fill="currentColor" /> Desde 1999
            </div>
            <h1 className="opacity-0 animate-fade-in-up-delay-1 text-5xl md:text-7xl font-anton uppercase tracking-tight leading-tight mb-6 drop-shadow-2xl">
              Potência e <br className="hidden md:block"/>Confiança para <br/><span className="text-jps-gold bg-black/10 px-2 rounded">Linha Diesel</span>
            </h1>
            <p className="opacity-0 animate-fade-in-up-delay-2 text-xl text-gray-100 mb-10 font-light border-l-4 border-jps-gold pl-6 max-w-2xl leading-relaxed">
              Há mais de 25 anos atendendo com excelência. Peças originais, manutenção especializada e o melhor atendimento do litoral.
            </p>
            <div className="opacity-0 animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4">
              <Link to="/catalogo" className="bg-jps-gold text-jps-main font-black text-lg py-4 px-10 rounded-lg hover:bg-white transition-all shadow-lg hover:shadow-jps-gold/50 transform hover:-translate-y-1 text-center flex items-center justify-center gap-2">
                Ver Peças <ArrowRight size={20} />
              </Link>
              <Link to="/servicos" className="backdrop-blur-sm bg-white/10 border-2 border-white/30 text-white font-bold text-lg py-4 px-10 rounded-lg hover:bg-white hover:text-jps-main transition-all text-center">
                Nossos Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Highlights (Why Choose Us) */}
      <section className="py-20 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-anton text-4xl text-jps-black mb-4">Por que escolher a JPS?</h2>
            <p className="text-gray-500 text-lg">Combinamos tradição com tecnologia para oferecer o melhor custo-benefício para sua frota.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-jps-gray hover:bg-white p-8 rounded-2xl transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-white group-hover:bg-jps-main p-4 rounded-xl w-fit mb-6 text-jps-main group-hover:text-jps-gold transition-colors shadow-sm">
                <Truck size={40} strokeWidth={1.5} />
              </div>
              <h3 className="font-anton text-2xl text-jps-main mb-3">Especialista Diesel</h3>
              <p className="text-gray-500 leading-relaxed">Especialistas em caminhões, ônibus e utilitários. Conhecimento técnico aprofundado em todas as marcas.</p>
            </div>
            <div className="group bg-jps-gray hover:bg-white p-8 rounded-2xl transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-white group-hover:bg-jps-main p-4 rounded-xl w-fit mb-6 text-jps-main group-hover:text-jps-gold transition-colors shadow-sm">
                <Settings size={40} strokeWidth={1.5} />
              </div>
              <h3 className="font-anton text-2xl text-jps-main mb-3">Peças de 1ª Linha</h3>
              <p className="text-gray-500 leading-relaxed">Trabalhamos apenas com fornecedores certificados e peças originais para garantir durabilidade extrema.</p>
            </div>
            <div className="group bg-jps-gray hover:bg-white p-8 rounded-2xl transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-white group-hover:bg-jps-main p-4 rounded-xl w-fit mb-6 text-jps-main group-hover:text-jps-gold transition-colors shadow-sm">
                <ShieldCheck size={40} strokeWidth={1.5} />
              </div>
              <h3 className="font-anton text-2xl text-jps-main mb-3">Garantia Total</h3>
              <p className="text-gray-500 leading-relaxed">Segurança em todos os serviços prestados e peças vendidas. Sua frota está em boas mãos na JPS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Visual Section */}
      <section className="py-20 bg-jps-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-jps-light font-bold tracking-widest text-sm uppercase">Soluções Completas</span>
              <h2 className="font-anton text-4xl text-jps-main mt-2">Nossos Serviços</h2>
            </div>
            <Link to="/servicos" className="text-jps-main font-bold flex items-center gap-2 hover:text-jps-light transition-colors mt-4 md:mt-0">
              Ver todos os serviços <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <Link to="/servicos" key={service.id} className="group relative rounded-xl overflow-hidden h-80 shadow-lg">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jps-black/90 via-jps-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="text-jps-gold mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="font-anton text-2xl text-white mb-1">{service.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-jps-black relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jps-main/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-jps-light/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-jps-gold font-bold tracking-[0.2em] text-sm uppercase flex items-center gap-2">
                <div className="w-8 h-0.5 bg-jps-gold"></div> Loja Virtual
              </span>
              <h2 className="font-anton text-4xl md:text-5xl text-white mt-4">Destaques do Mês</h2>
            </div>
            <Link to="/catalogo" className="group flex items-center gap-3 text-white font-bold border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-jps-black transition-all">
              Ver catálogo completo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-0 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[500px] lg:h-auto overflow-hidden group">
            <img 
              src={IMAGES.ABOUT_TEAM} 
              alt="Equipe JPS" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-jps-main/30 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
          </div>
          <div className="bg-jps-gray p-12 lg:p-24 flex flex-col justify-center">
            <span className="text-jps-light font-bold tracking-widest text-sm uppercase mb-4">Nossa História</span>
            <h2 className="font-anton text-4xl md:text-5xl mb-6 leading-tight text-jps-main">
              Excelência Técnica e <br/>Paixão por Motores
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Nossa história começou há mais de duas décadas, focada em resolver os problemas mais complexos da linha pesada. Hoje, somos referência em Caraguatatuba e região, oferecendo um mix completo de peças e mão de obra especializada.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
                <div>
                   <h4 className="font-anton text-3xl text-jps-gold mb-1">25+</h4>
                   <p className="text-sm font-bold text-gray-500 uppercase">Anos de Mercado</p>
                </div>
                <div>
                   <h4 className="font-anton text-3xl text-jps-gold mb-1">5k+</h4>
                   <p className="text-sm font-bold text-gray-500 uppercase">Clientes Satisfeitos</p>
                </div>
            </div>
            <Link to="/sobre" className="text-jps-main font-bold border-b-2 border-jps-main pb-1 w-fit hover:text-jps-light hover:border-jps-light transition-colors">
              Conheça Nossa Trajetória &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
               <span className="text-jps-light font-bold tracking-widest text-sm uppercase">Avaliações</span>
               <h2 className="font-anton text-4xl text-jps-black mt-2">O que dizem nossos parceiros</h2>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-jps-main hover:text-white hover:border-jps-main transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-jps-main hover:text-white hover:border-jps-main transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map(testimonial => (
              <div 
                key={testimonial.id} 
                className="flex-none w-[320px] md:w-[400px] snap-center bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] flex flex-col h-[350px]"
              >
                <Quote size={40} className="text-jps-gold/20 mb-4" />
                <div className="flex gap-1 text-jps-gold mb-6">
                   {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill={i < Math.floor(testimonial.rating) ? "currentColor" : "none"} className={i < Math.floor(testimonial.rating) ? "" : "text-gray-300"} />
                   ))}
                </div>
                <p className="text-gray-600 mb-auto text-lg italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                  <img src={testimonial.imageUrl} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100" />
                  <div>
                    <h4 className="font-bold text-jps-main">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;