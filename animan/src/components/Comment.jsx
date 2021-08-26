// LIBRARY
import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// ELEMENTS
import { Grid, Input, Button } from '../elements/index';

// REDUX
import review, {
  deleteCommentDB,
  editCommentDB,
  getCommentDB,
} from '../redux/modules/review';

const Comment = (comment, review) => {
  const dispatch = useDispatch();
  const [comments, setComment] = React.useState('');

  const reviewId = useSelector((state) => state.review.list.reviewId);
  console.log(reviewId);

  React.useEffect(() => {
    dispatch(getCommentDB());
  }, []);

  const $comment = (event) => {
    setComment(event.target.value);
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
          <LiStyle>
            댓글111
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
          </LiStyle>
          <LiStyle>댓글222</LiStyle>
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
    </Grid>
  );
};

const UlStyle = styled.ul``;

const LiStyle = styled.li`
  list-style: none;
`;

export default Comment;
