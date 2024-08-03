import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items:[],
    },
    reducers:{
        addItem:(state, action) => {
            state.items.push(action.payload)
        },
        removeItem:(state, action) => {
            // state.items.pop(action.payload)
            state.items = state.items.filter(item => item.card.info.id !== action.payload);
            console.log("lastTest", state.items)

        },
        clearCart:(state) => {
            state.items.length = 0
        },
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
