import { ProductType } from '@/components/Products/Products.types';
import { FieldPath, WhereFilterOp } from 'firebase/firestore';

export interface ProductsState {
  data: Array<ProductType>;
  loading: boolean;
  error: boolean;
}

export type CategoryQuery = {
  fieldPath: string | FieldPath;
  opStr: WhereFilterOp;
  value: string | number | Array<string | number>;
};

export type FetchProductsArgs = {
  limitValue?: number;
  categoryQuery: CategoryQuery;
};
