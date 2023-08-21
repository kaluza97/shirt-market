import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartType, Size } from '@/redux/slices/Cart/Cart.types';

const initialState: CartType = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{ id: number; size: Size; totalQuantities: number }>) => {
            const { id, size, totalQuantities } = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem && existingItem.quantities[size] < totalQuantities) {
                existingItem.quantities[size]++;
            } else {
                // ..spread operator
                state.items.push({
                    id,
                    quantities: {
                        S: 0,
                        M: 0,
                        L: 0,
                        XL: 0,
                        [size]: 1,
                    },
                });
            }
        },
        removeFromCart: (state, action: PayloadAction<{ id: number; size: Size }>) => {
            const { id, size } = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);

            if (itemIndex !== -1) {
                const { quantities } = state.items[itemIndex];
                const newQuantities = { ...quantities, [size]: Math.max(quantities[size] - 1, 0) };

                if (Object.values(newQuantities).reduce((sum, value) => sum + value, 0) === 0) {
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
