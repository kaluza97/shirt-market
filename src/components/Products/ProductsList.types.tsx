import { z } from 'zod';

const sizeSchema = z.object({
  S: z.number(),
  M: z.number(),
  L: z.number(),
  XL: z.number(),
});

const productSchema = z.object({
  id: z.number(),
  img: z.string(),
  name: z.string(),
  price: z.number(),
  totalQuantity: sizeSchema,
});

export const productsListSchema = z.array(productSchema);

export type ProductType = z.infer<typeof productSchema>;
