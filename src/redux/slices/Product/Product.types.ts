import { ProductType } from "@/components/Products/Products.types";

export interface ProductState {
    data: ProductType | null;
    loading: boolean;
    error: boolean;
}