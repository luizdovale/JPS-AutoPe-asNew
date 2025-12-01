import React, { useState } from 'react';
import Layout from '../components/Layout';
import { IMAGENS } from '../constants';
import { Award, Users, History, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="bg-jps-main text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-anton text-4xl md:text-5xl mb-4">Nossa Trajetória</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Conheça quem faz a JPS Auto Peças ser referência em distribuição na região há mais de 25 anos.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* História Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="prose prose-lg text-gray-600">
              <h2 className="font-anton text-3xl text-jps-black mb-6">Tradição e Confiança</h2>
              <p className="mb-6">
                A <strong>JPS Auto Peças</strong> atua há mais de 25 anos no mercado, oferecendo a maior variedade de peças e soluções para toda a linha diesel com qualidade, tradição e confiança.
              </p>
              <p className="mb-6">
                Fundada em Caraguatatuba, nossa empresa nasceu da necessidade de um fornecimento ágil de peças para caminhoneiros e frotistas que trafegam pelo Litoral Norte. O que começou como uma pequena loja, hoje é um centro de distribuição completo.
              </p>
              <p>
                Nosso compromisso não é apenas vender uma peça, mas garantir que você tenha o produto certo, com a qualidade original, para que seu veículo volte para a estrada com segurança e eficiência o mais rápido possível.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={IMAGENS.FUNDO_HERO} className="rounded-lg shadow-lg w-full h-48 object-cover" alt="Loja JPS" />
              <img src={IMAGENS.CAT_PRATELEIRAS} className="rounded-lg shadow-lg w-full h-48 object-cover mt-8" alt="Estoque" />
            </div>
          </div>

          {/* Estatísticas/Valores */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {[
              { icon: History, label: "25+ Anos", desc: "De História" },
              { icon: Users, label: "5000+", desc: "Clientes Satisfeitos" },
              { icon: Award, label: "100%", desc: "Peças Originais" },
              { icon: Target, label: "Especialista", desc: "Linha Diesel" },
            ].map((stat, i) => (
              <div key={i} className="bg-jps-gray p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <stat.icon className="mx-auto text-jps-gold mb-4" size={32} />
                <div className="font-anton text-2xl text-jps-main mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500 font-bold uppercase">{stat.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default About;