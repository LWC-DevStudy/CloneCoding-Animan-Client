//LIBRARY
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';
//REDUX
import { imgActions } from './image';

// 리뷰 등록
export const addReviewDB = (post) => {
  return function (dispatch, getState, { history }) {
    const imgFile = getState();
    console.log(imgFile);
    if (imgFile.length) {
      dispatch(
        imgActions.uploadImageDB(() => {
          const imageUrl = getState().image.imageUrl;
          const postInfo = {
            reviewContents: post,
            reviewImage: imageUrl,
          };
          instance
            .post('/review', postInfo)
            .then((res) => {
              dispatch(addReview(postInfo));
              dispatch(imgActions.setInitialState());
              history.push('/review');
            })
            .catch((err) => {
              console.log(err);
            });
        })
      );
    }
    return;
  };
};

// 리뷰 가져오기
export const getReviewDB = (limit = 30) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/review/?page=0&limit=${limit + 1}`)
      .then((res) => {
        let reviewList = res.data;

        if (reviewList.length < limit + 1) {
          dispatch(getReview(reviewList, null));
          return;
        }

        reviewList.pop();
        dispatch(getReview(reviewList, limit));
      })
      .catch((err) => {
        window.alert('페이지에 오류가 있어요!', err);
      });
  };
};

export const getMoreReviewDB = (limit = 30) => {
  return function (dispatch, getState) {
    // 콘솔
    const start = getState().review.page;
    console.log(start);

    if (start === null) return;

    instance
      .get(`/review/?page=${start}&limit=${limit + 1}`)
      .then((res) => {
        const reviewList = res.data;

        if (reviewList.length < limit + 1) {
          dispatch(getMoreReview(reviewList, null));
          return;
        }

        reviewList.pop();
        dispatch(getMoreReview(reviewList, start + limit));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 리뷰 상세 가져오기
export const getOneReviewDB = (reviewId = '') => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/review/${reviewId}`)
      .then((res) => {
        let detailReview = res.data;
        dispatch(getOneReview(detailReview));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 리뷰 수정
export const editReviewDB = (reviewId, reviewContents) => {
  return function (dispatch, getState, { history }) {
    instance
      .put(`/review/${reviewId}`, {
        reviewId: reviewId,
        reviewContents: reviewContents,
      })
      .then((res) => {
        window.alert('게시글 수정 완료');
        history.replace('/');
      })
      .catch((err) => {
        window.alert(reviewId, reviewContents);
        console.log(err);
      });
  };
};

// 리뷰 삭제
export const deleteReviewDB = (reviewId) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/review/${reviewId}`)
      .then((res) => {
        dispatch(deleteReview(reviewId));

        window.alert('게시물 삭제 완료');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const initialState = {
  list: [],
  page: 0,
};

// 리듀서
const review = createSlice({
  name: 'review',
  initialState,
  reducers: {
    addReview(state, action) {
      const reviewImage = action.payload.reviewImage;
      const reviewContents = action.payload.reviewContents;
      state.list.push(reviewImage, reviewContents);
    },

    getReview: (state, action) => {
      state.list = { list: action.payload, page: action.start };
    },

    getMoreReview: (state, action) => {
      state.list = { list: action.payload, page: action.start };
    },

    getOneReview: (state, action) => {
      state.list = action.payload;
    },

    editReview: (state, action) => {
      const editList = state.list.map((review) => {
        if (review.reviewId === action.reviewId) {
          return action.review;
        }
        return review;
      });
      return { ...state, list: editList };
    },

    deleteReview: (state, action) => {
      const deleteList = state.list.filter(
        (review) => review.reviewId !== action.reviewId
      );

      return { ...state, list: deleteList };
    },
  },
});

export const {
  addReview,
  getReview,
  editReview,
  deleteReview,
  getOneReview,
  getMoreReview,
} = review.actions;
export default review;
