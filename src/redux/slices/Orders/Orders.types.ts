import { ProductItem } from '@/redux/slices/Product/Product.types';
import { CartItem } from '@/redux/slices/Cart/Cart.types';

export interface OrderItem {
  totalPrice: number;
  orderDate: string;
  items: Array<ProductItem>;
}

export interface OrderState {
  data: Array<OrderItem> | null;
  loading: boolean;
  error: boolean;
}

export type SaveOrderItem = {
  orderDate: string;
  totalPrice: number;
  items: Array<CartItem>;
};
