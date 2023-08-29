import { CartItem, Size } from '@/redux/slices/Cart/Cart.types';

const calculateTotalCostForProduct = (
  quantities: Record<Size, number>,
  price: number
): number => {
  let totalCost = 0;
  Object.entries(quantities).forEach(([_size, quantity]) => {
    totalCost += price * quantity;
  });
  return totalCost;
};

export const calculateTotalCostForAllProducts = (
  cartItems: CartItem[]
): number => {
  let totalCost = 0;
  cartItems.forEach((item) => {
    totalCost += calculateTotalCostForProduct(item.quantities, item.price);
  });
  return totalCost;
};
