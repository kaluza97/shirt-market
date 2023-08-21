export interface CartType {
    items: CartItem[];
}

interface CartItem {
    id: number;
    quantities: {
        S: number;
        M: number;
        L: number;
        XL: number;
    };
}

export type Size = 'S' | 'M' | 'L' | 'XL';
