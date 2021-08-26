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
      // state.list = action.payload.content;
      // state.start = action.payload.number;
      console.log(action.payload);
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

// 댓글 작성
export const addCommentDB = (reviewId, commentContents) => {
  return function (dispatch, getState, { history }) {
    instance
      .post(`/comment/${reviewId}`, { commentContents: commentContents })
      .then((res) => {
        dispatch(addComment(comment));
        window.alert('댓글 달아주셔서 감사합니다!');
        history.push('/rdetail');
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

// 댓글 불러오기
export const getCommentDB = (reviewId) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/comment/${reviewId}`)
      .then((res) => {
        let commentList = res.data;
        dispatch(getComment(commentList));
      })
      .catch((err) => {
        console.error(err);
        console.log(reviewId);
      });
  };
};

// 댓글 삭제
export const deleteCommentDB = (commentId) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/comment/${commentId}`)
      .then((res) => {
        dispatch(deleteComment(commentId));
        history.replace('/rdetail');
        window.alert('댓글을 삭제하였습니다.');
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

// 댓글 수정
export const editCommentDB = (commentId, commentContents) => {
  return function (dispatch, getState, { history }) {
    instance
      .put(`/comment/${commentId}`, {
        commentId: commentId,
        commentContents: commentContents,
      })
      .then((res) => {
        dispatch(editComment(commentId, commentContents));
        history.replace('/');
        window.alert('댓글을 수정하였습니다.');
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

const comment = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment: (state, action) => {
      const comment = action.payload.commentContents;
      state.list.push(comment);
    },

    getComment: (state, action) => {
      state.list = action.payload;
    },

    deleteComment: (state, action) =>
      state.filter((comment) => comment.commentId !== action.payload),
  },

  editComment: (state, action) => {
    const editList = state.list.map((comment) => {
      if (comment.commentId === action.commentId) {
        return action.comment;
      }
      return comment;
    });
    return { ...state, list: editList };
  },
});

export const { addComment, getComment, deleteComment, editComment } =
  comment.actions;

export const {
  addReview,
  getReview,
  editReview,
  deleteReview,
  getOneReview,
  getMoreReview,
} = review.actions;
export default review;
