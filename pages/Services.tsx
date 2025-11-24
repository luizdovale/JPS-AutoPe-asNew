import React from 'react';
import Layout from '../components/Layout';
import { PRODUCT_LINES, PHONE_NUMBER } from '../constants';
import { Wrench, CheckCircle, Droplet, Laptop, Settings, Truck, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench size={24} />;
      case 'Droplet': return <Droplet size={24} />;
      case 'Laptop': return <Laptop size={24} />;
      case 'Truck': return <Truck size={24} />;
      case 'ShieldCheck': return <ShieldCheck size={24} />;
      case 'Settings': return <Settings size={24} />;
      default: return <Settings size={24} />;
    }
  };

  return (
    <Layout>
      <div className="bg-jps-main text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-anton text-4xl md:text-5xl mb-4">Serviços Especializados</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Tecnologia de ponta e equipe qualificada para garantir o melhor desempenho do seu veículo diesel.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {PRODUCT_LINES.map((service, index) => (
              <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                   <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                     <div className="absolute inset-0 bg-jps-main/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                     <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                   </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-jps-gray p-3 rounded-full text-jps-main">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-jps-light font-bold uppercase tracking-widest text-sm">Nossos Serviços</span>
                  </div>
                  <h2 className="font-anton text-4xl text-jps-black mb-6">{service.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {['Garantia no serviço', 'Peças originais', 'Orçamento transparente'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle size={20} className="text-jps-whatsapp" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Olá, gostaria de agendar um serviço de ${service.title}.`)}`}
                    target="_blank"
                    className="inline-block bg-jps-main text-white font-bold py-3 px-8 rounded hover:bg-jps-light transition-colors"
                  >
                    Agendar Agora
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;