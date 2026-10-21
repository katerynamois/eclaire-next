import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cakes: [],
    totalItems: 0,
    totalPrice: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existing = state.cakes.find(cake => cake.id === action.payload.id);

            if (existing) {
                existing.quantity += 1;
            } else {
                state.cakes.push({ ...action.payload, quantity: 1 });
            }

            state.totalItems += 1;
            state.totalPrice += action.payload.price;
        },

        removeFromCart(state, action) {
            const cakeToRemove = state.cakes.find(cake => cake.id === action.payload);
            if (!cakeToRemove) return;

            if (cakeToRemove.quantity > 1) {
                cakeToRemove.quantity -= 1;
            } else {
                state.cakes = state.cakes.filter(cake => cake.id !== action.payload);
            }

            state.totalItems -= 1;
            state.totalPrice -= cakeToRemove.price;
        },

        clearCart() {
            return initialState;
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
