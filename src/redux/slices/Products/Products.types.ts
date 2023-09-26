import {
  CategoryQuery,
  ProductType,
} from '@/components/Products/Products.types';

export interface ShirtType {
  data: Array<ProductType>;
  loading: boolean;
  error: boolean;
}

export type FetchProductsArgs = {
  limitValue?: number;
  categoryQuery: CategoryQuery;
};
