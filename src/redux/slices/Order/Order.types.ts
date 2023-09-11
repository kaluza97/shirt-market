import { CartItem } from '@/redux/slices/Cart/Cart.types';
import { Timestamp } from 'firebase/firestore';

export type SaveOrderItem = {
  orderDate: Timestamp;
  totalPrice: number;
  items: Array<CartItem>;
};
