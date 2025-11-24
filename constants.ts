import { Product, Service, Testimonial } from './types';

// Images curated to look like high-end realistic AI generations (Industrial/Diesel context)
export const IMAGES = {
  HERO_BG: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop", // Big Truck in garage
  ABOUT_TEAM: "https://images.unsplash.com/photo-1504222490245-4815c9e610a0?q=80&w=2069&auto=format&fit=crop", // Mechanic working
  SERVICE_MECHANIC: "https://images.unsplash.com/photo-1487754180477-ea9d60309c91?q=80&w=2000&auto=format&fit=crop", // Gears/Parts close up
  SERVICE_OIL: "https://images.unsplash.com/photo-1486262715619-01b80258e0a5?q=80&w=2070&auto=format&fit=crop", // Mechanic pouring oil
  SERVICE_DIAGNOSTIC: "https://images.unsplash.com/photo-1530046339160-7115b7e93b43?q=80&w=2000&auto=format&fit=crop", // Technology/Screen
  PART_FILTER: "https://images.unsplash.com/photo-1626131481172-e61320d9385a?q=80&w=1000&auto=format&fit=crop", // Industrial Filter style
  PART_TURBO: "https://images.unsplash.com/photo-1569420959092-23c8d3506161?q=80&w=1000&auto=format&fit=crop", // Turbo/Metal
  PART_BRAKE: "https://images.unsplash.com/photo-1498887960847-2a5e46312788?q=80&w=1000&auto=format&fit=crop", // Disc brake
  AVATAR_1: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
  AVATAR_2: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
  AVATAR_3: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
};

export const PHONE_NUMBER = "5512974045244";
export const ADDRESS = "Avenida Marginal Esquerda, 281 - Poiares - Caraguatatuba - SP";
export const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.228919658253!2d-45.42878952377317!3d-23.63197666418858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd631024227911%3A0xc3f7a4e9b89369b7!2sAv.%20Marginal%20Esquerda%2C%20281%20-%20Poiares%2C%20Caraguatatuba%20-%20SP%2C%2011673-010!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr";

export const SOCIAL_LINKS = {
  INSTAGRAM: "https://www.instagram.com/jpsautopecas",
  FACEBOOK: "https://www.facebook.com/joni.scherer.73"
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Kit Filtros Linha Pesada",
    category: "Filtros",
    description: "Proteção máxima para motores diesel de alta performance. Kit completo ar/óleo/combustível.",
    imageUrl: IMAGES.PART_FILTER
  },
  {
    id: 2,
    name: "Óleo Lubrificante 15W40 Top",
    category: "Óleos",
    description: "Lubrificação avançada para maior durabilidade do motor em condições extremas.",
    imageUrl: IMAGES.SERVICE_OIL
  },
  {
    id: 3,
    name: "Turbina Master Power .50",
    category: "Motores",
    description: "Potência e eficiência redobrada para caminhões e utilitários de carga.",
    imageUrl: IMAGES.PART_TURBO
  },
  {
    id: 4,
    name: "Disco de Freio Ventilado",
    category: "Freios",
    description: "Segurança total com dissipação de calor otimizada para serras e declives.",
    imageUrl: IMAGES.PART_BRAKE
  },
  {
    id: 5,
    name: "Kit Embreagem Reforçada",
    category: "Transmissão",
    description: "Durabilidade extrema para o dia a dia na estrada. Platô e disco inclusos.",
    imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Bicos Injetores Common Rail",
    category: "Injeção",
    description: "Precisão na injeção eletrônica para economia de combustível e menos fumaça.",
    imageUrl: "https://images.unsplash.com/photo-1574627885012-628d05241e2a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Filtro Separador de Água",
    category: "Filtros",
    description: "Essencial para proteger o sistema de injeção contra contaminação por água no diesel.",
    imageUrl: "https://images.unsplash.com/photo-1519002206772-52054c728367?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Pastilha de Freio Heavy Duty",
    category: "Freios",
    description: "Material de atrito de alta resistência para frenagens bruscas e cargas pesadas.",
    imageUrl: "https://images.unsplash.com/photo-1486262715619-01b80258e0a5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "Alternador 24v Profissional",
    category: "Motores",
    description: "Geração de energia estável para todos os componentes elétricos do caminhão.",
    imageUrl: "https://images.unsplash.com/photo-1487754180477-ea9d60309c91?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 10,
    name: "Fluido de Freio DOT 5.1",
    category: "Óleos",
    description: "Alta performance para sistemas de freio hidráulico sob altas temperaturas.",
    imageUrl: "https://images.unsplash.com/photo-1530046339160-7115b7e93b43?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 11,
    name: "Bomba D'água Diesel",
    category: "Motores",
    description: "Circulação eficiente do líquido de arrefecimento para evitar superaquecimento.",
    imageUrl: "https://images.unsplash.com/photo-1569420959092-23c8d3506161?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 12,
    name: "Cruzeta do Cardan",
    category: "Transmissão",
    description: "Transmissão de torque suave e sem vibrações para o eixo traseiro.",
    imageUrl: "https://images.unsplash.com/photo-1626131481172-e61320d9385a?q=80&w=1000&auto=format&fit=crop"
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Mecânica Diesel Geral",
    description: "Diagnóstico completo e reparo de motores diesel leves e pesados com tecnologia de ponta.",
    icon: "Wrench",
    imageUrl: IMAGES.SERVICE_MECHANIC
  },
  {
    id: 2,
    title: "Troca de Óleo Especializada",
    description: "Utilizamos os melhores lubrificantes do mercado para garantir a vida útil do seu veículo.",
    icon: "Droplet",
    imageUrl: IMAGES.SERVICE_OIL
  },
  {
    id: 3,
    title: "Diagnóstico Computadorizado",
    description: "Escaneamento completo para identificar falhas eletrônicas com precisão absoluta.",
    icon: "Laptop",
    imageUrl: IMAGES.SERVICE_DIAGNOSTIC
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "Caminhoneiro Autônomo",
    text: "Atendimento de primeira! A peça chegou rápido e o serviço de instalação foi impecável. Recomendo demais a JPS.",
    rating: 5,
    imageUrl: IMAGES.AVATAR_1
  },
  {
    id: 2,
    name: "Roberto Silva",
    role: "Gerente de Frota",
    text: "Confio toda a nossa frota na mão da equipe JPS. Honestidade e preço justo, algo raro hoje em dia.",
    rating: 5,
    imageUrl: IMAGES.AVATAR_2
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Proprietária de Van Escolar",
    text: "Me salvaram numa emergência. Profissionais muito qualificados e atenciosos. O melhor de Caraguá.",
    rating: 4.5,
    imageUrl: IMAGES.AVATAR_3
  },
  {
    id: 4,
    name: "André Souza",
    role: "Transportadora Litoral",
    text: "Preço justo e peças originais. A turbina que comprei está perfeita. Voltarei para as manutenções preventivas.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Fernanda Lima",
    role: "Empresária",
    text: "Atendimento rápido no WhatsApp e entrega eficiente. Facilitou muito a manutenção da minha frota leve.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  }
];