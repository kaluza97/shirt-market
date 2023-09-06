import { SizeAndQuantity } from '@/redux/slices/Cart/Cart.types';

const summedSingleQuantity = (quantity: SizeAndQuantity): number => {
  let singleQuantityTotal = 0;
  Object.values(quantity).map((singleSize) => {
    singleQuantityTotal = singleQuantityTotal + singleSize;
  });
  return singleQuantityTotal;
};

export const summedQuantities = (quantities: Array<SizeAndQuantity>) => {
  let total = 0;
  quantities.map((singleQuantity) => {
    total = total + summedSingleQuantity(singleQuantity);
  });
  return total;
};
