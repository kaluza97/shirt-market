import { ProductItem } from '@/redux/slices/Product/Product.types';

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
