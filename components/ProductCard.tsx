import React from 'react';
import { Product } from '../types';
import { NUMERO_TELEFONE } from '../constants';
import { MessageCircle, Award } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleConsult = () => {
    const text = `Olá, gostaria de consultar o valor do produto: ${product.name} (Ref: ${product.id})`;
    window.open(`https://wa.me/${NUMERO_TELEFONE}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className={`bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden hover:-translate-y-2 transition-all duration-300 border flex flex-col h-full group ${product.isCustomMade ? 'border-jps-gold shadow-jps-gold/20' : 'border-gray-100'}`}>
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        
        {/* Badge de Categoria */}
        <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 ${product.isCustomMade ? 'bg-jps-gold text-jps-main shadow-lg' : 'bg-jps-main text-white'}`}>
          {product.category}
        </div>

        {/* Overlay Especial para Fabricação Própria */}
        {product.isCustomMade && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-jps-main text-[10px] font-black px-2 py-1 rounded border border-jps-gold flex items-center gap-1 shadow-sm">
            <Award size={10} className="text-jps-gold" /> FABRICAÇÃO PRÓPRIA
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-jps-main mb-2 line-clamp-2 group-hover:text-jps-light transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-3">
          {product.description}
        </p>
        
        <button 
          onClick={handleConsult}
          className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-95 ${product.isCustomMade ? 'bg-jps-gold text-jps-main hover:bg-yellow-500' : 'bg-jps-main text-white hover:bg-jps-light'}`}
        >
          <MessageCircle size={18} />
          Consultar no WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ProductCard;