import React from 'react';
import { Product } from '../types';
import { NUMERO_TELEFONE } from '../constants';
import { MessageCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleConsult = () => {
    const text = `Olá, gostaria de consultar o valor do produto: ${product.name} (Ref: ${product.id})`;
    window.open(`https://wa.me/${NUMERO_TELEFONE}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-gray-100 flex flex-col h-full group">
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-jps-gold text-jps-main text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {product.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-jps-main mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-3">{product.description}</p>
        <button 
          onClick={handleConsult}
          className="w-full bg-jps-main text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-jps-light transition-colors group-hover:shadow-lg"
        >
          <MessageCircle size={18} />
          Consultar no WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ProductCard;