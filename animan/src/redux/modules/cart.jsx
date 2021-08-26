// import
import { createSlice } from "@reduxjs/toolkit";

//initialState
const initialState = {
  carts: [],
  price: 0,
  last_price : 0,
}

// REDUX
const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.carts.push(action.payload)
            window.alert('메뉴가 추가되었습니다!')
        },
        totalPrice: (state, action) => {
            state.price = action.payload
        },
        changeItem: (state, action) => {
            let idx = state.carts.findIndex((c) => c._id === action.payload._id)
            state.carts[idx].count = action.payload.value
            state.carts[idx].countPrice = action.payload.extraPrice
        },
        deleteCart: (state, action) => {
            let idx = state.carts.findIndex((d) => d.name === action.payload)
            if (idx !== -1) {
                state.carts.splice(idx, 1);
                state.carts.length === 0 ? window.location.replace('/') : window.alert('삭제 완료!')
            }
        }
    }
});

export const { addCart, totalPrice, changeItem, deleteCart } = cart.actions;

export default cart;