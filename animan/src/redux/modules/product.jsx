// import
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';

// axios
// 특정 카테고리 메뉴 가져오기
// /product/{category}
// /product?category=${category}
export const getCategoryDB = (category) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/product/${category}`)
      .then((res) => {
        let productList = res.data.product.filter((each) => {
          return each.category === category;
        });
        dispatch(getCategoryDB(productList));
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
      state.product = action.payload;
    },
  },
});

export const { getCategory } = product.actions;

export default product;
