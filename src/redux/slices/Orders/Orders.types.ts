import { ProductItem } from '@/redux/slices/Product/Product.types';
import { Timestamp } from 'firebase/firestore';

export interface OrderItem {
  totalPrice: number;
  orderDate: Timestamp;
  items: Array<ProductItem>;
}

export interface OrderState {
  data: Array<OrderItem> | null;
  loading: boolean;
  error: boolean;
}
