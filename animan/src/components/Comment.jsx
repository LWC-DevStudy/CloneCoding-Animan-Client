// LIBRARY
import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// ELEMENTS
import { Grid, Input, Button } from '../elements/index';

// REDUX
import {
  deleteCommentDB,
  editCommentDB,
  getCommentDB,
  addCommentDB,
} from '../redux/modules/comment';

const Comment = (props, {}) => {
  const dispatch = useDispatch();
  const reviewId = props.reviewId.reviewId;
  const [comment, setComment] = React.useState();

  const commentList = useSelector((state) => state.comment.list);

  console.log(commentList);

  React.useEffect(() => {
    dispatch(getCommentDB(reviewId));
  }, [reviewId]);

  const $comment = (event) => {
    setComment(event.target.value);
  };

  const addCommentBtn = () => {
    dispatch(addCommentDB(comment, reviewId));
  };

  const deleteCommentBtn = () => {
    dispatch(deleteCommentDB(comment.commentId));
  };

  const editCommentBtn = () => {
    dispatch(editCommentDB(comment.commentId, comment));
  };

  return (
    <Grid>
      <Grid
        border="solid 1px black"
        width="510px"
        height="auto"
        margin="0 auto"
        padding="0"
      >
        <UlStyle>
          <Button
            clickEvent={deleteCommentBtn}
            color="white"
            bgColor="buttonColor"
            padding="4px"
            margin="0 4px"
            addstyle={() => {
              return css`
                float: right;
              `;
            }}
          >
            삭제
          </Button>
          <Button
            clickEvent={editCommentBtn}
            color="white"
            bgColor="buttonColor"
            padding="4px"
            margin="0 4px"
            addstyle={() => {
              return css`
                float: right;
              `;
            }}
          >
            수정
          </Button>
          {commentList.map((comment, idx) => (
            <LiStyle key={idx}>{comment.commentContents}</LiStyle>
          ))}
        </UlStyle>
      </Grid>

      <Grid margin="0 auto" width="500px">
        <Input
          onChange={$comment}
          height="50px"
          padding="4px"
          type="text"
          margin="2% 0 0 -1%"
          placeholder="댓글을 입력해주세요."
          addstyle={() => {
            return css`
              text-align: center;
            `;
          }}
        />
      </Grid>
      <Button
        color="white"
        bgColor="buttonColor"
        padding="8px"
        clickEvent={addCommentBtn}
      >
        댓글작성
      </Button>
    </Grid>
  );
};

const UlStyle = styled.ul``;

const LiStyle = styled.li`
  list-style: none;
`;

export default Comment;
