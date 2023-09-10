import { ProductItem } from '@/redux/slices/Product/Product.types';

type DateType = {
  nanoseconds: number;
  seconds: number;
};

export interface OrderItem {
  totalPrice: number;
  orderDate: DateType;
  items: Array<ProductItem>;
}

export interface OrderState {
  data: Array<OrderItem> | null;
  loading: boolean;
  error: boolean;
}
