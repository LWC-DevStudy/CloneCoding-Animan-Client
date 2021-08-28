// LIBRARY
import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// ELEMENTS
import { Grid, Input, Button } from '../elements/index';

// REDUX
import { getCommentDB, addCommentDB } from '../redux/modules/comment';
import CommentList from './CommentList';

const Comment = (props) => {
  const dispatch = useDispatch();
  const reviewId = props.reviewId.reviewId;
  const [comments, setComment] = React.useState();
  const commentList = useSelector((state) => state.comment.list);

  React.useEffect(() => {
    dispatch(getCommentDB(reviewId));
  }, [reviewId, commentList.length]);

  const $comment = (event) => {
    setComment(event.target.value);
  };

  const addCommentBtn = () => {
    dispatch(addCommentDB(comments, reviewId));
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
        {commentList.map((comment, idx) => {
          return <CommentList key={idx} comment={comment} />;
        })}
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
        <Button
          margin="2% auto"
          color="white"
          bgColor="buttonColor"
          padding="8px"
          clickEvent={addCommentBtn}
          addstyle={() => {
            return css`
              display: block;
            `;
          }}
        >
          댓글작성
        </Button>
      </Grid>
    </Grid>
  );
};

const UlStyle = styled.ul`
  margin: 0;
  padding: 0;
`;

const LiStyle = styled.li`
  list-style: none;
  margin: 2% 0;
  padding: 0;
  display: flex;
  text-align: center;
  justify-content: center;
  color: ${(props) => `rgb(${props.theme.palette.buttonColor})`};
`;

export default Comment;
