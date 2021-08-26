// import
import instance from '../../shared/axios';
import { createSlice } from '@reduxjs/toolkit';

// // 댓글 작성
// export const addCommentDB = (reviewId, commentContents) => {
//   return function (dispatch, getState, { history }) {
//     instance
//       .post(`/comment/${reviewId}`, { commentContents: commentContents })
//       .then((res) => {
//         dispatch(addComment(comment));
//         window.alert('댓글 달아주셔서 감사합니다!');
//         history.push('/rdetail');
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };
// };

// // 댓글 불러오기
// export const getCommentDB = (reviewId, comment) => {
//   return function (dispatch, getState, { history }) {
//     instance
//       .get(`/comment/${reviewId}`, reviewId)
//       .then((res) => {
//         let commentList = res.data;
//         dispatch(getComment(commentList));
//       })
//       .catch((err) => {
//         console.error(err);
//         console.log(comment);
//         console.log(reviewId);
//       });
//   };
// };

// // 댓글 삭제
// export const deleteCommentDB = (commentId) => {
//   return function (dispatch, getState, { history }) {
//     instance
//       .delete(`/comment/${commentId}`)
//       .then((res) => {
//         dispatch(deleteComment(commentId));
//         history.replace('/rdetail');
//         window.alert('댓글을 삭제하였습니다.');
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };
// };

// // 댓글 수정
// export const editCommentDB = (commentId, commentContents) => {
//   return function (dispatch, getState, { history }) {
//     instance
//       .put(`/comment/${commentId}`, {
//         commentId: commentId,
//         commentContents: commentContents,
//       })
//       .then((res) => {
//         dispatch(editComment(commentId, commentContents));
//         history.replace('/');
//         window.alert('댓글을 수정하였습니다.');
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };
// };

// const initialState = {
//   list: [],
//   // comment: null,
// };

// const comment = createSlice({
//   name: 'comment',
//   initialState,
//   reducers: {
//     addComment: (state, action) => {
//       const comment = action.payload.commentContents;
//       state.list.push(comment);
//     },

//     getComment: (state, action) => {
//       state.list = action.payload;
//     },

//     deleteComment: (state, action) =>
//       state.filter((comment) => comment.commentId !== action.payload),
//   },

//   editComment: (state, action) => {
//     const editList = state.list.map((comment) => {
//       if (comment.commentId === action.commentId) {
//         return action.comment;
//       }
//       return comment;
//     });
//     return { ...state, list: editList };
//   },
// });

// export const { addComment, getComment, deleteComment, editComment } =
//   comment.actions;

// export default comment;
