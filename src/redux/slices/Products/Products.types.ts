import { Categories, ProductType } from '@/components/Products/Products.types';
import { FieldPath, WhereFilterOp } from 'firebase/firestore';

export interface ShirtType {
  data: Array<ProductType>;
  loading: boolean;
  error: boolean;
}

export type FetchProductsArgs = {
  limitValue?: number;
  categoryQuery: {
    fieldPath: string | FieldPath;
    opStr: WhereFilterOp;
    value: Categories | Array<Categories>;
  };
};
