import React, { useState } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { PRODUTOS } from '../constants';
import { Search } from 'lucide-react';

const Catalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Todos', 'Filtros', 'Motores', 'Freios', 'Óleos', 'Transmissão', 'Injeção'];

  const filteredProducts = PRODUTOS.filter(product => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="bg-jps-main text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-anton text-4xl md:text-5xl mb-4">Catálogo de Peças</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Encontre tudo o que você precisa para a manutenção da sua frota. Filtros, óleos, peças de motor e muito mais.</p>
        </div>
      </div>

      <section className="py-12 bg-jps-gray min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Barra de Pesquisa/Filtro */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-12 flex flex-col md:flex-row gap-4 items-center justify-between sticky top-24 z-30 border border-gray-100">
            <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder="Buscar peça..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-jps-main transition-colors text-jps-black"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors border ${selectedCategory === cat ? 'bg-jps-main text-white border-jps-main' : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grade de Produtos */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 font-bold">Nenhum produto encontrado.</p>
              <p className="text-gray-400">Tente ajustar seus filtros ou busca.</p>
              <button onClick={() => {setSelectedCategory('Todos'); setSearchTerm('')}} className="mt-4 text-jps-main hover:underline font-bold">Limpar filtros</button>
            </div>
          )}

          <div className="mt-16 text-center">
             <p className="text-gray-500 mb-4">Não encontrou o que procura? Temos mais de 5.000 itens em estoque.</p>
             <a href="https://wa.me/5512974045244" target="_blank" className="inline-block bg-jps-whatsapp text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
               Falar com Vendedor Especialista
             </a>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Catalog;