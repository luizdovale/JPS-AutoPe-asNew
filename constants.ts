import { Product, CategoryHighlight, Testimonial } from './types';

// Images curated to look like high-end realistic AI generations (Industrial/Diesel context)
export const IMAGES = {
  LOGO: "/logo.png", // Rota para a imagem da logo
  HERO_BG: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop", // Big Truck in garage
  ABOUT_TEAM: "https://images.unsplash.com/photo-1504222490245-4815c9e610a0?q=80&w=2069&auto=format&fit=crop", // Mechanic working (used as context for parts handling)
  CAT_MECHANIC: "https://images.unsplash.com/photo-1487754180477-ea9d60309c91?q=80&w=2000&auto=format&fit=crop", // Gears/Parts close up
  CAT_OIL: "https://images.unsplash.com/photo-1486262715619-01b80258e0a5?q=80&w=2070&auto=format&fit=crop", // Oil pouring
  CAT_TECH: "https://images.unsplash.com/photo-1530046339160-7115b7e93b43?q=80&w=2000&auto=format&fit=crop", // Tech parts
  CAT_UNDERCARRIAGE: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2000&auto=format&fit=crop", // Undercarriage parts
  CAT_SHELVES: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=2000&auto=format&fit=crop", // Shelves/Parts
  CAT_FLEET: "https://images.unsplash.com/photo-1596683769970-13d80630dc65?q=80&w=2000&auto=format&fit=crop", // Fleet/Trucks line
  PART_FILTER: "https://images.unsplash.com/photo-1626131481172-e61320d9385a?q=80&w=1000&auto=format&fit=crop", // Industrial Filter style
  PART_TURBO: "https://images.unsplash.com/photo-1569420959092-23c8d3506161?q=80&w=1000&auto=format&fit=crop", // Turbo/Metal
  PART_BRAKE: "https://lh3.googleusercontent.com/pw/AP1GczOQ__XD_RCOObbkEplzl_ilyr38j4FjrSk7JW2THaZTAmNvihlgHlH2q2KaUk2cuft7pn9k0YQyPGVHq-AdzR-fejVbHEzwIcnzaIm77S6I_sohGMW8CIOaNwOi2yoFy7FJ-vqsQRPE9DEQPbzJong=w607-h607-s-no-gm?authuser=4", // Disc brake
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
    imageUrl: IMAGES.CAT_OIL
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
    imageUrl: IMAGES.CAT_OIL
  },
  {
    id: 9,
    name: "Alternador 24v Profissional",
    category: "Motores",
    description: "Geração de energia estável para todos os componentes elétricos do caminhão.",
    imageUrl: IMAGES.CAT_MECHANIC
  },
  {
    id: 10,
    name: "Fluido de Freio DOT 5.1",
    category: "Óleos",
    description: "Alta performance para sistemas de freio hidráulico sob altas temperaturas.",
    imageUrl: IMAGES.CAT_TECH
  },
  {
    id: 11,
    name: "Bomba D'água Diesel",
    category: "Motores",
    description: "Circulação eficiente do líquido de arrefecimento para evitar superaquecimento.",
    imageUrl: IMAGES.PART_TURBO
  },
  {
    id: 12,
    name: "Cruzeta do Cardan",
    category: "Transmissão",
    description: "Transmissão de torque suave e sem vibrações para o eixo traseiro.",
    imageUrl: IMAGES.PART_FILTER
  }
];

// Replaced Services with Product Lines/Categories Highlights
export const PRODUCT_LINES: CategoryHighlight[] = [
  {
    id: 1,
    title: "Motor & Performance",
    description: "Turbinas, kits de motor, bombas d'água e componentes internos para máxima potência.",
    icon: "Settings", // Cog
    imageUrl: IMAGES.CAT_MECHANIC
  },
  {
    id: 2,
    title: "Lubrificantes & Filtros",
    description: "Linha completa de óleos minerais, sintéticos e filtros para proteção total do motor.",
    icon: "Droplet", // Oil
    imageUrl: IMAGES.CAT_OIL
  },
  {
    id: 3,
    title: "Injeção Eletrônica",
    description: "Bicos injetores, módulos e sensores de alta precisão para sistemas Common Rail.",
    icon: "Laptop", // Tech
    imageUrl: IMAGES.CAT_TECH
  },
  {
    id: 4,
    title: "Câmbio & Diferencial",
    description: "Embreagens, cruzetas e peças de transmissão robustas para suportar carga pesada.",
    icon: "Wrench", // Repair tool -> Parts tool
    imageUrl: IMAGES.CAT_UNDERCARRIAGE
  },
  {
    id: 5,
    title: "Peças para Frota",
    description: "Condições especiais para abastecimento de frotas de caminhões e ônibus.",
    icon: "Truck", // Truck
    imageUrl: IMAGES.CAT_FLEET
  },
  {
    id: 6,
    title: "Acessórios e Acabamento",
    description: "Itens de acabamento e acessórios para manter seu veículo sempre novo.",
    icon: "ShieldCheck", // Quality
    imageUrl: IMAGES.CAT_SHELVES
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "Caminhoneiro Autônomo",
    text: "Sempre encontro a peça que preciso. O estoque deles é impressionante e o preço é o melhor da região.",
    rating: 5,
    imageUrl: IMAGES.AVATAR_1
  },
  {
    id: 2,
    name: "Roberto Silva",
    role: "Gerente de Frota",
    text: "Compro todas as peças da frota na JPS. Entrega rápida e peças originais garantidas.",
    rating: 5,
    imageUrl: IMAGES.AVATAR_2
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Proprietária de Van Escolar",
    text: "Fui muito bem atendida. Os vendedores entendem muito de diesel e me indicaram o óleo certo.",
    rating: 4.5,
    imageUrl: IMAGES.AVATAR_3
  },
  {
    id: 4,
    name: "André Souza",
    role: "Transportadora Litoral",
    text: "Preço justo e peças originais. A turbina que comprei está perfeita. Recomendo.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Fernanda Lima",
    role: "Empresária",
    text: "Facilidade de comprar pelo WhatsApp e retirar na loja. Agilidade que eu precisava.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  }
];
