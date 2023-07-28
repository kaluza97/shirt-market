import { z } from 'zod';

const productSchema = z.object({
  img: z.string(),
  name: z.string(),
  price: z.number(),
});

export const productsListSchema = z.array(productSchema);


export type ProductType = {
  img: string;
  name: string;
  price: number;
};
