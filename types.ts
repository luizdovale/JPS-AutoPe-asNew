export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  isCustomMade?: boolean;
}

export interface CategoryHighlight {
  id: number;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  imageUrl: string;
}