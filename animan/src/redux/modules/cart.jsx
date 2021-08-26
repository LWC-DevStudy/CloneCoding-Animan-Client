// import
import instance from '../../shared/axios';
import { createSlice } from '@reduxjs/toolkit';

// 장바구니에 넣기
export const addCartDB = (productId) => {
  return function (dispatch, getState, { history }) {
    instance
      .post(`/cart/${productId}`, {})
      .then((res) => {
        dispatch(addCart());
        window.alert('장바구니에 추가 되었습니다!');
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

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
        getCart: (state, action) => {
            state.carts = action.payload;
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