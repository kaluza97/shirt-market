export interface CartType {
  cart: Array<CartItem>;
  lastItemToDelete: null | { id: number; size: Size };
}

export type Size = 'S' | 'M' | 'L' | 'XL';

export type Quantities = { [key in Size]: number };

export interface CartItem {
  id: number;
  img: string;
  name: string;
  price: number;
  quantities: Quantities;
}

export interface AddCartProps {
  id: number;
  img: string;
  name: string;
  price: number;
  size: Size;
}

export type SizeAndQuantity = {
  [key: string]: number;
};
