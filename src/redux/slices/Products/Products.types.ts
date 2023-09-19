import { ProductType } from '@/components/Products/Products.types';
import { FieldPath, WhereFilterOp } from 'firebase/firestore';

export interface ShirtType {
  data: Array<ProductType>;
  loading: boolean;
  error: boolean;
}

export type QueryCondition = {
  fieldPath: string | FieldPath;
  opStr: WhereFilterOp;
  value: string | number | Array<string | number>;
};

export type FetchProductsArgs = {
  limitValue?: number;
  queryCondition: QueryCondition;
};
