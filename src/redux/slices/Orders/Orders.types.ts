import { Timestamp } from 'firebase/firestore';

interface Sizes {
  S: number;
  M: number;
  L: number;
  XL: number;
}

interface Item {
  id: number;
  img: string;
  name: string;
  price: number;
  quantities: Sizes;
}

type DateType = {
  nanoseconds: number;
  seconds: number;
};

export interface OrderItem {
  totalPrice: number;
  orderDate: DateType;
  items: Item[];
}

export interface OrderState {
  data: Array<OrderItem> | null;
  loading: boolean;
  error: boolean;
}
