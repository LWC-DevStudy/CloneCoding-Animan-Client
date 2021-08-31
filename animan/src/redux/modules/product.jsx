// import
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';

// 특정 카테고리 메뉴 가져오기
export const getCategoryDB = (category) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/product/category/${category}`)
      .then((res) => {
        let productList = res.data;
        dispatch(getCategory(productList));
      })
      .catch((err) => {
        console.error(err);
        console.log(product);
      });
  };
};

// 상품 상세 가져오기
export const getOneProductDB = (productId) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/product/id/${productId}`)
      .then((res) => {
        let detailProduct = res.data;
        console.log(detailProduct);
        dispatch(getOneProduct(detailProduct));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

// initialState
const initialState = {
  product: [],
};

// redux
const product = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getCategory: (state, action) => {
      state.list = action.payload;
    },

    getOneProduct: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { getCategory, getOneProduct } = product.actions;

export default product;
