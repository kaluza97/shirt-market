import { ProductType } from "@/components/Products/ProductsList.types";

export interface ShirtType {
    id: number;
    data: Array<ProductType>;
    loading: boolean;
    error: boolean;
};