import React, { useState } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { PRODUTOS } from '../constants';
import { Search, Sparkles } from 'lucide-react';

const Catalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // No modo demonstração, filtramos apenas pelo termo de busca nos 6 itens fixos
  const filteredProducts = PRODUTOS.filter(product => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           product.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Layout>
      <SEO 
        title="Catálogo Demonstrativo" 
        description="Confira nossos principais itens em destaque: filtros, embreagens, injeção, mangueiras e muito mais com a qualidade JPS."
      />
      
      {/* Header do Catálogo */}
      <div className="bg-jps-main text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-jps-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-jps-light rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-jps-gold/20 text-jps-gold px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} /> Principais Destaques
          </span>
          <h1 className="font-anton text-4xl md:text-5xl mb-4 uppercase tracking-tight">Catálogo de Demonstração</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Confira nossa seleção de itens em destaque e encontre a peça ideal para o seu veículo com a confiança e qualidade JPS.
          </p>
        </div>
      </div>

      <section className="py-12 bg-jps-gray min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Barra de Busca Simplificada */}
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-12 flex flex-col md:flex-row gap-4 items-center justify-between border border-gray-100">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="O que você está procurando hoje?" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-jps-main focus:ring-2 focus:ring-jps-main/10 transition-all text-jps-black text-lg"
                aria-label="Buscar peça"
              />
              <Search className="absolute left-4 top-4.5 text-gray-400" size={24} />
            </div>
          </div>

          {/* Grid de Produtos (6 itens) */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
               <div className="h-8 w-1.5 bg-jps-gold rounded-full"></div>
               <h2 className="font-anton text-2xl text-jps-main uppercase">Itens Selecionados</h2>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                <p className="text-xl text-gray-500 font-bold italic">Nenhum item encontrado com esse nome.</p>
                <button 
                  onClick={() => setSearchTerm('')} 
                  className="mt-4 text-jps-main hover:underline font-bold flex items-center gap-2 mx-auto"
                >
                  <Sparkles size={18} /> Mostrar todos os destaques
                </button>
              </div>
            )}
          </div>

          {/* Call to Action Final */}
          <div className="bg-jps-main rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-jps-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="font-anton text-3xl mb-4 uppercase">Precisa de outra peça?</h3>
                <p className="text-gray-300 max-w-lg text-lg">
                  Temos mais de <span className="text-jps-gold font-bold">5.000 itens</span> em nosso estoque físico esperando por você.
                </p>
              </div>
              <a 
                href="https://wa.me/5512974045244" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-jps-whatsapp text-white font-black py-5 px-10 rounded-2xl hover:bg-green-600 transition-all shadow-xl hover:shadow-green-500/20 transform hover:-translate-y-1 text-center whitespace-nowrap text-lg flex items-center gap-3"
              >
                Falar com Especialista Agora
              </a>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Catalog;