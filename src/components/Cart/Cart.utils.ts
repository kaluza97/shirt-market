import { CartItem } from '@/redux/slices/Cart/Cart.types';

export const calculateTotalCost = (cartItems: Array<CartItem>): number => {
  let totalCost = 0;

  cartItems.forEach((item) => {
    Object.values(item.quantities).forEach((quantity) => {
      totalCost = totalCost + item.price * quantity;
    });
  });

  return totalCost;
};
