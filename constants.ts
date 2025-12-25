import { Product, CategoryHighlight, Testimonial } from './types';

export const IMAGENS = {
  LOGO: "/img/logo.png",
  FUNDO_HERO: "/img/hero-fundo.png",
  SOBRE_EQUIPE: "/img/sobre-equipe.png",
  CAT_MECANICO: "/img/cat-mecanico.png",
  CAT_OLEO: "/img/cat-oleo.png",
  CAT_TECNOLOGIA: "/img/cat-tecnologia.png",
  CAT_CHASSI: "/img/cat-chassi.png",
  CAT_PRATELEIRAS: "/img/cat-prateleiras.png",
  CAT_FROTA: "/img/cat-frota.png",
  PECA_FILTRO: "/img/peca-filtro.png",
  PECA_TURBO: "/img/peca-turbo.png",
  PECA_FREIO: "/img/peca-freio.png",
  // Avatares mantidos com URLs sugeridas (Unsplash)
  AVATAR_1: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
  AVATAR_2: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
  AVATAR_3: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  AVATAR_4: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  AVATAR_5: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
};

export const NUMERO_TELEFONE = "5512974045244";
export const ENDERECO = "Avenida Marginal Esquerda, 281 - Poiares - Caraguatatuba - SP";
export const MAPA_GOOGLE_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.228919658253!2d-45.42878952377317!3d-23.63197666418858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd631024227911%3A0xc3f7a4e9b89369b7!2sAv.%20Marginal%20Esquerda%2C%20281%20-%20Poiares%2C%20Caraguatatuba%20-%20SP%2C%2011673-010!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr";

export const LINKS_SOCIAIS = {
  INSTAGRAM: "https://www.instagram.com/jpsautopecas",
  FACEBOOK: "https://www.facebook.com/joni.scherer.73"
};

export const PRODUTOS: Product[] = [
  {
    id: 1,
    name: "Mangueiras de Alta Pressão",
    category: "Hidráulica",
    description: "Mangueiras hidráulicas e de ar com fabricação própria. Resistência extrema e medidas personalizadas para sua necessidade.",
    imageUrl: "/img/peca-mangueira.png",
    isCustomMade: true
  },
  {
    id: 2,
    name: "Kit Filtros Diesel Premium",
    category: "Filtros",
    description: "Conjunto completo de filtros (ar, óleo e combustível) para proteção máxima do sistema de injeção.",
    imageUrl: "/img/peca-filtro.png"
  },
  {
    id: 3,
    name: "Kit Embreagem Linha Pesada",
    category: "Transmissão",
    description: "Conjunto de platô, disco e rolamento reforçados para alta durabilidade em caminhões e ônibus.",
    imageUrl: "/img/peca-embreagem.png"
  },
  {
    id: 4,
    name: "Bicos Injetores Common Rail",
    category: "Injeção",
    description: "Componentes de alta precisão para sistemas de injeção eletrônica diesel, garantindo economia e potência.",
    imageUrl: "/img/peca-injecao.png"
  },
  {
    id: 5,
    name: "Óleos e Lubrificantes 15W40",
    category: "Lubrificantes",
    description: "Linha completa de óleos minerais e sintéticos para motores diesel de alto desempenho.",
    imageUrl: "/img/peca-lubrificante.png"
  },
  {
    id: 6,
    name: "Kit Correias e Tensores",
    category: "Motores",
    description: "Conjunto de correias dentadas e tensores de alta resistência para sincronismo perfeito do motor.",
    imageUrl: "/img/peca-correia.png"
  }
];

export const LINHAS_PRODUTOS: CategoryHighlight[] = [
  {
    id: 1,
    title: "Motor & Performance",
    description: "Turbinas, kits de motor, bombas d'água e componentes internos para máxima potência.",
    icon: "Settings",
    imageUrl: IMAGENS.CAT_MECANICO
  },
  {
    id: 2,
    title: "Lubrificantes & Filtros",
    description: "Linha completa de óleos minerais, sintéticos e filtros para proteção total do motor.",
    icon: "Droplet",
    imageUrl: IMAGENS.CAT_OLEO
  },
  {
    id: 3,
    title: "Injeção Eletrônica",
    description: "Bicos injetores, módulos e sensores de alta precisão para sistemas Common Rail.",
    icon: "Laptop",
    imageUrl: IMAGENS.CAT_TECNOLOGIA
  },
  {
    id: 4,
    title: "Câmbio & Diferencial",
    description: "Embreagens, cruzetas e peças de transmissão robustas para suportar carga pesada.",
    icon: "Wrench",
    imageUrl: IMAGENS.CAT_CHASSI
  },
  {
    id: 5,
    title: "Peças para Frota",
    description: "Condições especiais para abastecimento de frotas de caminhões e ônibus.",
    icon: "Truck",
    imageUrl: IMAGENS.CAT_FROTA
  },
  {
    id: 6,
    title: "Acessórios e Acabamento",
    description: "Itens de acabamento e acessórios para manter seu veículo sempre novo.",
    icon: "ShieldCheck",
    imageUrl: IMAGENS.CAT_PRATELEIRAS
  }
];

export const DEPOIMENTOS: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "Caminhoneiro Autônomo",
    text: "Sempre encontro a peça que preciso. O estoque deles é impressionante e o preço é o melhor da região.",
    rating: 5,
    imageUrl: IMAGENS.AVATAR_1
  },
  {
    id: 2,
    name: "Roberto Silva",
    role: "Gerente de Frota",
    text: "Compro todas as peças da frota na JPS. Entrega rápida e peças originais garantidas.",
    rating: 5,
    imageUrl: IMAGENS.AVATAR_2
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Proprietária de Van Escolar",
    text: "Fui muito bem atendida. Os vendedores entendem muito de diesel e me indicaram o óleo certo.",
    rating: 4.5,
    imageUrl: IMAGENS.AVATAR_3
  },
  {
    id: 4,
    name: "André Souza",
    role: "Transportadora Litoral",
    text: "Preço justo e peças originais. A turbina que comprei está perfeita. Recomendo.",
    rating: 5,
    imageUrl: IMAGENS.AVATAR_4
  },
  {
    id: 5,
    name: "Fernanda Lima",
    role: "Empresária",
    text: "Facilidade de comprar pelo WhatsApp e retirar na loja. Agilidade que eu precisava.",
    rating: 5,
    imageUrl: IMAGENS.AVATAR_5
  }
];