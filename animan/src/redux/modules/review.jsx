//LIBRARY
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';
//REDUX
import { imgActions } from './image';

// 리뷰 등록
export const addReviewDB = (post) => {
  return function (dispatch, getState, { history }) {
    const imgFile = getState().image.file;
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
export const getReviewDB = (limit = 10) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/review?page=0&size=${limit}`)
      .then((res) => {
        let reviewList = res.data;
        console.log(reviewList);
        if (reviewList.length < limit + 1) {
          dispatch(getReview(reviewList, null));
          return;
        }

        dispatch(getReview(reviewList, limit));
      })
      .catch((err) => {
        window.alert('페이지에 오류가 있어요!');
        console.log(err);
      });
  };
};

export const getMoreReviewDB = (limit = 11) => {
  return function (dispatch, getState, { history }) {
    // 콘솔
    let start = getState().review.start;
    console.log(start);

    if (start === null) {
      return;
    } else {
      start += 1;
    }

    instance
      .get(`/review/?page=${start}&size=${limit}`)
      .then((res) => {
        const reviewList = res.data;

        if (reviewList.length < limit + 1) {
          dispatch(getMoreReview(reviewList, null));
          return;
        }
        reviewList.content.pop();
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
      .get(`/review/${reviewId.reviewId}`)
      .then((res) => {
        let detailReview = res.data;
        dispatch(getOneReview(detailReview));
      })
      .catch((err) => {
        console.error(err);
        console.log(reviewId);
      });
  };
};

// 리뷰 수정
export const editReviewDB = (reviewId, reviewContents) => {
  return function (dispatch, getState, { history }) {
    const imgFile = getState().image.file;
    if (imgFile.length) {
      dispatch(
        imgActions.uploadImageDB(() => {
          const imageUrl = getState().image.imageUrl;
          instance
            .put(`/review/${reviewId}`, {
              reviewId: reviewId,
              reviewContents: reviewContents,
              reviewImage: imageUrl,
            })
            .then((res) => {
              window.alert('게시글 수정 완료');
              history.replace(`/review`);
            })
            .catch((err) => {
              console.error(err);
            });
        })
      );
    }
    return;
  };
};

// 리뷰 삭제
export const deleteReviewDB = (reviewId) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/review/${reviewId.reviewId}`)
      .then((res) => {
        dispatch(deleteReview(reviewId));
        window.alert('게시물 삭제 완료');
        history.push('/review');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const initialState = {
  list: [],
  page: 0,
  start: 0,
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
      state.list = action.payload.content;
      state.start = action.payload.number;
    },

    getMoreReview: (state, action) => {
      return {
        ...state,
        list: [...state.list, ...action.payload.content],
        start: action.payload.number,
      };
    },

    getOneReview: (state, action) => {
      state.list = action.payload;
    },

    editReview: (state, action) => {
      console.log('수정 요청 완료!');
    },

    deleteReview: (state, action) => {
      console.log('삭제 요청 완료!');
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
