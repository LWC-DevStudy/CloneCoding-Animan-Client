// import
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';

// 특정 카테고리 메뉴 가져오기
// /product/{category}
export const getCategoryDB = (category, product) => {
  return function (dispatch, getState, { history }) {
    const product_list = getState().product;
    console.log(product_list);
    instance
      .get(`/product/${category}`, { product: product })
      .then((res) => {
        let productList = res.data;
        console.log(productList);
        // let categoryList = res.data.product.filter((each) => {
        //   return each.category === category;
        // });
        // dispatch(getCategoryDB(categoryList));
        dispatch(getCategoryDB(productList));
      })
      .catch((err) => {
        console.error(err);
        console.log(product);
      });
  };
};

// 상품 전체 가져오기
// export const getProductDB = (product) => {
//   return function (dispatch, getState, { history }) {
//     instance
//       .get('/product', product)
//       .then((res) => {
//         let product_list = res.data;
//         console.log(product_list);
//         dispatch(getProduct(product_list));
//         console.log(product);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };
// };

// 상품 상세 가져오기
// /product/{productId}
export const getOneProductDB = (productId) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/product/${productId}`)
      .then((res) => {
        let detailProduct = res.data;
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

    // getProduct: (state, action) => {
    //   state.product = action.payload;
    // },

    getOneProduct: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { getCategory, getOneProduct, getProduct } = product.actions;

export default product;
