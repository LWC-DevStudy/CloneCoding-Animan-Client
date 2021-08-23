// LIBRARY
import React from 'react';
import styled, { css } from 'styled-components';

// ELEMENTS
import { Grid, Input } from '../elements/index';

// STYLE

// REDUX

const Comment = () => {
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
          <LiStyle>댓글111</LiStyle>
          <LiStyle>댓글222</LiStyle>
          <LiStyle>댓글333</LiStyle>
          <LiStyle>댓글444</LiStyle>
          <LiStyle>댓글555</LiStyle>
        </UlStyle>
      </Grid>

      <Grid margin="0 auto" width="500px">
        <Input
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
