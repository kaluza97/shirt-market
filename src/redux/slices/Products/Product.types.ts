import { ProductType } from '@/components/Products/Products.types';

export interface ShirtType {
    data: Array<ProductType>;
    loading: boolean;
    error: boolean;
}
