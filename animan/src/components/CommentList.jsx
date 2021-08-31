import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';

// ELEMENT
import { Button, Grid } from '../elements/index.jsx';
import { flexBox } from '../shared/style.jsx';

// REDUX
import { deleteCommentDB } from '../redux/modules/comment.jsx';

function CommentList({ comment }) {
  const commentId = comment.commentId;
  const dispatch = useDispatch();

  const deleteBtn = () => {
    dispatch(deleteCommentDB(commentId));
  };

  return (
    <Grid
      addstyle={() => {
        return css`
          ${flexBox()}
        `;
      }}
    >
      <UlStyle>
        <LiStyle>{comment.commentContents}</LiStyle>
      </UlStyle>
      <Grid
        addstyle={() => {
          return css`
            display: flex;
            justify-content: flex-end;
          `;
        }}
      >
        {/* <Button margin="4px" color="white" bgColor="buttonColor" padding="6px">
          수정
        </Button> */}
        <Button
          clickEvent={deleteBtn}
          margin="4px 12px 4px 4px"
          color="white"
          bgColor="buttonColor"
          padding="6px"
        >
          삭제
        </Button>
      </Grid>
    </Grid>
  );
}

const UlStyle = styled.ul`
  margin: 0;
  padding: 0;
  margin-left: 10%;
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

export default CommentList;
