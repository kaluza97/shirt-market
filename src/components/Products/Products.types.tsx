import { z } from 'zod';

const sizeSchema = z.object({
  S: z.number(),
  M: z.number(),
  L: z.number(),
  XL: z.number(),
});

export const productSchema = z.object({
  category: z.string(),
  id: z.number(),
  img: z.string(),
  name: z.string(),
  price: z.number(),
  totalQuantity: sizeSchema,
});

export const productsListSchema = z.array(productSchema);
export type ProductType = z.infer<typeof productSchema>;

export interface ProductDetailProps {
  id: number;
}

export interface ProductDetailFormProps {
  id: number;
}

export type Categories = 'all' | 'men' | 'woman' | 'sale';

export interface ProductsListProps {
  productsLimit?: number;
  category: Categories;
}
