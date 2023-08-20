import { ProductType } from "@/components/Products/ProductsList.types";

export interface ShirtsState {
    id: number;
    data: Array<ProductType>;
    loading: boolean;
    error: boolean;
};