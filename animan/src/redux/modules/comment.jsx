// import
import instance from '../../shared/axios';
import { createSlice } from '@reduxjs/toolkit';
import { getToken } from '../../shared/token';

// 댓글 작성
export const addCommentDB = (commentContents, reviewId) => {
  return function (dispatch, getState, { history }) {
    const token = getToken('token');
    instance.defaults.headers.common['authorization'] = `${token}`;
    instance
      .post(`/comment/${reviewId}`, { commentContents })
      .then((res) => {
        dispatch(addComment(commentContents));
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
        console.log(commentList);
        dispatch(getComment(commentList));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

const initialState = {
  list: [],
  // comment: [],
};

const comment = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment: (state, action) => {
      const comments = action.payload;
      state.list.push(comments);
    },

    getComment: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addComment, getComment } = comment.actions;

export default comment;
