import { Size } from '@/redux/slices/Cart/Cart.types';
import { Dispatch, SetStateAction } from 'react';
import { z } from 'zod';

const sizeSchema = z.object({
  S: z.number(),
  M: z.number(),
  L: z.number(),
  XL: z.number(),
});

export const productSchema = z.object({
  id: z.number(),
  img: z.string(),
  name: z.string(),
  price: z.number(),
  totalQuantity: sizeSchema,
});

export const productsListSchema = z.array(productSchema);
export type ProductType = z.infer<typeof productSchema>;
type QuantitiesType = z.infer<typeof sizeSchema>;

export interface ProductDetailProps {
  id: number;
}

export interface ProductDetailFormProps {
  id: number;
}
