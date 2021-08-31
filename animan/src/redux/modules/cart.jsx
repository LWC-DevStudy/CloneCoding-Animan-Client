// import
import instance from '../../shared/axios';
import { createSlice } from '@reduxjs/toolkit';

// 장바구니에 넣기
export const addCartDB = (product, productId, count, totalPrice) => {
  return function (dispatch, getState, { history }) {
    const productImg = getState().product.list.productImage;
    const productTitle = getState().product.list.title;
    const _productId = getState().product.list.productId;
    const productWished = false;
    const cartInfo = {
      cartPrice: totalPrice,
      cartQuantity: count,
      cartImage: productImg,
      cartId: _productId,
      cartWished: productWished,
      cartTitle: productTitle,
    };
    instance
      .post(`/cart/${productId}`, { cartInfo })
      .then((res) => {
        console.log(res);
        dispatch(addCart(cartInfo));
        window.alert('선택하신 상품을 장바구니에 담았습니다.');
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

// 장바구니 가져오기
export const getCartDB = () => {
  return function (dispatch, getState, { history }) {
    instance
      .get('/cart')
      .then((res) => {
        dispatch(getCart(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

// 장바구니에서 제거
export const deleteCartDB = (productId) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/cart/${productId}`)
      .then((res) => {
        dispatch(deleteCart(productId));
        window.alert('선택하신 상품을 장바구니에서 제거했습니다.');
        history.push('/cart');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//initialState
const initialState = {
  carts: [],
  price: 0,
  last_price: 0,
};

// REDUX
const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const userName = action.payload.userName;
      const cartPrice = action.payload.cartPrice;
      const cartQuantity = action.payload.cartQuantity;
      const cartImage = action.payload.cartImage;
      const cartId = action.payload.cartId;
      const cartWished = action.payload.cartWished;
      state.carts.push(
        userName,
        cartPrice,
        cartQuantity,
        cartImage,
        cartId,
        cartWished,
      );
    },
    getCart: (state, action) => {
      state.carts = action.payload;
    },
    totalPrice: (state, action) => {
      state.price = action.payload;
    },
    changeItem: (state, action) => {
      let idx = state.carts.findIndex(
        (c) => c.productId === action.payload.productId,
      );
      state.carts[idx].count = action.payload.value;
      state.carts[idx].countPrice = action.payload.extraPrice;
    },
    deleteCart: (state, action) => {
      let idx = state.carts.findIndex(
        (d) => d.productId === action.payload.productId,
      );
      if (idx !== -1) {
        state.carts.splice(idx, 1);
        state.carts.length === 0
          ? window.location.replace('/')
          : window.alert('삭제 완료!');
      }
    },
  },
});

export const { addCart, getCart, totalPrice, changeItem, deleteCart } =
  cart.actions;

export default cart;
