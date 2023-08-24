import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartType, Size } from '@/redux/slices/Cart/Cart.types';

const initialState: CartType = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{ id: number; size: Size }>) => {
            const { id, size } = action.payload;
            const existingCartItem = state.cart.find(item => item.id === id);

            if (existingCartItem) {
                state.cart = state.cart.map(item =>
                    item.id === id
                        ? { ...item, quantities: { ...item.quantities, [size]: item.quantities[size] + 1 } }
                        : item
                );
            } else {
                state.cart.push({
                    id,
                    quantities: {
                        ...(['S', 'M', 'L', 'XL'].reduce((acc, val) => ({ ...acc, [val]: val === size ? 1 : 0 }), {}) as CartItem['quantities']),
                    },
                });
            }
        },
        removeFromCart: (state, action: PayloadAction<{ id: number; size: Size }>) => {
            const { id, size } = action.payload;
            state.cart = state.cart.map(item =>
                item.id === id
                    ? {
                        ...item,
                        quantities: {
                            ...item.quantities,
                            [size]: item.quantities[size] > 0 ? item.quantities[size] - 1 : 0,
                        }
                    }
                    : item
            );
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
