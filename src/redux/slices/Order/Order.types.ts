import { CartItem } from '@/redux/slices/Cart/Cart.types';

export type OrderItemType = {
  totalPrice: number;
  items: Array<CartItem>;
};
