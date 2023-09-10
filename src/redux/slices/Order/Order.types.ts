import { CartItem } from '@/redux/slices/Cart/Cart.types';

export type SaveOrderItem = {
  totalPrice: number;
  items: Array<CartItem>;
};
