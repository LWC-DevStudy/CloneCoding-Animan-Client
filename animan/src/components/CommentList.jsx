import React from 'react';
import styled from 'styled-components';

function CommentList({ comment }) {
  return (
    <UlStyle>
      <LiStyle>{comment.commentContents}</LiStyle>
    </UlStyle>
  );
}

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

export default CommentList;
