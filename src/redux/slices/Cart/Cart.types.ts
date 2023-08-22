export interface CartType {
    cart: Array<CartItem>;
}

export type Size = 'S' | 'M' | 'L' | 'XL';

export interface CartItem {
    id: number;
    quantities: {
        [key in Size]: number;
    };
};