import { FieldPath, WhereFilterOp } from 'firebase/firestore';
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
  specialPrice: z.number().optional(),
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

export type Categories = 'men' | 'woman' | 'sale' | null;

export type CategoryQuery = {
  fieldPath: string | FieldPath;
  opStr: WhereFilterOp;
  value: Categories | Array<Categories>;
};

export interface ProductsListProps {
  productsLimit?: number;
  categoryQuery: CategoryQuery;
}
