import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, Size } from './CartSlice.interface';

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (
            state,
            action: PayloadAction<{ id: number; size: Size; totalQuantities: number }>
        ) => {
            const { id, size, totalQuantities } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem && existingItem.quantities[size] < totalQuantities) {
                existingItem.quantities = {
                    ...existingItem.quantities,
                    [size]: existingItem.quantities[size] + 1,
                };
            } else {
                const newItem = {
                    id,
                    quantities: {
                        S: 0,
                        M: 0,
                        L: 0,
                        XL: 0,
                        [size]: 1,
                    },
                };
                state.items.push(newItem);
            }
        },
        removeFromCart: (
            state,
            action: PayloadAction<{ id: number; size: Size }>
        ) => {
            const { id, size } = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);

            if (itemIndex !== -1) {
                const newQuantities = {
                    ...state.items[itemIndex].quantities,
                    [size]: Math.max(state.items[itemIndex].quantities[size] - 1, 0),
                };

                if (newQuantities.S + newQuantities.M + newQuantities.L + newQuantities.XL === 0) {
                    state.items.splice(itemIndex, 1);
                } else {
                    state.items[itemIndex].quantities = newQuantities;
                }
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
