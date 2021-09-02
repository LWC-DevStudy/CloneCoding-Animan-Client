// import
import instance from '../../shared/axios';
import { createSlice } from '@reduxjs/toolkit';

// 장바구니에 넣기
export const addCartDB = (count, totalPrice) => {
  return function (dispatch, getState, { history }) {
    const username = getState().user.user_info;
    const productImg = getState().product.list.productImage;
    const productTitle = getState().product.list.title;
    const _productId = getState().product.list.productId;
    const cartInfo = {
      price: totalPrice,
      quantity: count,
      productImage: productImg,
      productId: _productId,
      title: productTitle,
      username: username,
    };
    instance
      .post(`/cart/${_productId}`,cartInfo)
      .then((res) => {
        console.log(res);
        if (username) {
          dispatch(addCart(cartInfo));
          window.alert('선택하신 상품을 장바구니에 담았습니다.');
        } else {
          window.alert('장바구니 기능은 로그인 후에 사용하실 수 있습니다.');
        }
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
export const deleteCartDB = (cartId) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/cart/${cartId}`)
      .then((res) => {
        dispatch(deleteCart(cartId));
        window.alert('선택하신 상품을 장바구니에서 제거했습니다.');
        window.location.reload();
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
      const price = action.payload.price;
      const quantity = action.payload.quantity;
      const productImage = action.payload.productImage;
      const productId = action.payload.productId;
      const title = action.payload.title;
      const username = action.payload.username;
      state.carts.push(
        price,
        quantity,
        productImage,
        productId,
        title,
        username,
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
