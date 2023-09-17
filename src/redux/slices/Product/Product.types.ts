import { ProductType } from '@/components/Products/Products.types';

interface Sizes {
  S: number;
  M: number;
  L: number;
  XL: number;
}

export interface ProductItem {
  id: number;
  img: string;
  name: string;
  price: number;
  specialPrice?: number;
  quantities: Sizes;
}

export interface ProductState {
  data: ProductType | null;
  loading: boolean;
  error: boolean;
}
