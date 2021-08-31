// LIBRARY
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';

export const wishToggleDB = (productId) => {
  return function (dispatch, getState, { history }) {
    instance
      .post(`/wish/${productId}`)
      .then((res) => {
        dispatch(wishToggle());
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getWishDB = (productId) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/wish`)
      .then((res) => {
        dispatch(getWish(res.data.wished));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const unWishedToggleDB = (productId) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/wish/{productId}`)
      .then((res) => {
        dispatch(unWishedToggle());
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

const initialState = {
  wish_list: [],
};

const wish = createSlice({
  name: 'wish',
  initialState,
  reducers: {
    wishToggle: (state, action) => {
      state.is_wish = true;
    },
    getWish: (state, action) => {
      state.is_wish = action.payload;
    },
    unWishedToggle: (state, action) => {
      state.wish_list = action.payload;
    },
  },
});

export const { wishToggle, getWish, unWishedToggle } = wish.actions;

export default wish;
