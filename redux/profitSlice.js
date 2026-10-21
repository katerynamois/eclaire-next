import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    amount: 0
};

const profitSlice = createSlice({
    name: 'profit',
    initialState,
    reducers: {
        sellEclair(state) {
            state.amount += 5;
        },

        buyIngredients(state) {
            state.amount -= 2;
        }
    }
});

export const { sellEclair, buyIngredients } = profitSlice.actions;
export default profitSlice.reducer;
