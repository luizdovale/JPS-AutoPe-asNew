import React, { useState } from 'react';
import Layout from '../components/Layout';
import { PHONE_NUMBER, ADDRESS, GOOGLE_MAPS_EMBED } from '../constants';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é ${formData.name}. Telefone: ${formData.phone}. Mensagem: ${formData.message}. Enviado pelo site da JPS Auto Peças.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <Layout>
      <div className="bg-jps-main text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-anton text-4xl md:text-5xl mb-4">Fale Conosco</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Estamos prontos para atender você. Entre em contato via WhatsApp, telefone ou visite nossa loja.</p>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
            
            {/* Form Side */}
            <div className="p-8 md:p-12">
              <h2 className="font-anton text-3xl text-jps-black mb-2">Envie uma mensagem</h2>
              <p className="text-gray-500 mb-8">Responderemos o mais breve possível via WhatsApp.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-jps-main focus:ring-1 focus:ring-jps-main transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Telefone (WhatsApp)</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-jps-main focus:ring-1 focus:ring-jps-main transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-jps-main focus:ring-1 focus:ring-jps-main transition-colors resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-jps-whatsapp hover:bg-green-600 text-white font-bold py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
                >
                  <Send size={20} />
                  Enviar para WhatsApp
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="bg-jps-main text-white p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-jps-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="font-anton text-2xl mb-8 tracking-wide">Informações de Contato</h3>
              
              <ul className="space-y-8 relative z-10">
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="text-jps-gold" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-400 uppercase tracking-wider mb-1">Endereço</p>
                    <p className="text-lg leading-relaxed">{ADDRESS}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="text-jps-gold" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-400 uppercase tracking-wider mb-1">Telefone</p>
                    <p className="text-lg">(12) 97404-5244</p>
                    <p className="text-sm text-gray-400">Atendimento WhatsApp</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="text-jps-gold" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-400 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-lg">contato@jpsautopecas.com.br</p>
                  </div>
                </li>
              </ul>

              <div className="mt-12 pt-12 border-t border-white/10">
                 <h4 className="font-anton text-xl mb-4">Horário de Funcionamento</h4>
                 <div className="flex justify-between text-sm text-gray-300">
                   <span>Segunda a Sexta</span>
                   <span>08:00 - 18:00</span>
                 </div>
                 <div className="flex justify-between text-sm text-gray-300 mt-2">
                   <span>Sábado</span>
                   <span>08:00 - 12:00</span>
                 </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-12 bg-white p-2 rounded-xl shadow-lg h-[400px]">
             <iframe 
               src={GOOGLE_MAPS_EMBED} 
               width="100%" 
               height="100%" 
               style={{ border: 0, borderRadius: '0.75rem' }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Mapa da JPS Auto Peças"
             ></iframe>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Contact;