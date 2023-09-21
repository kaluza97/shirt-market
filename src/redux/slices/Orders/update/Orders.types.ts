import { CartItem } from '@/redux/slices/Cart/Cart.types';

export type SaveOrderItem = {
  orderDate: string;
  totalPrice: number;
  items: Array<CartItem>;
};
