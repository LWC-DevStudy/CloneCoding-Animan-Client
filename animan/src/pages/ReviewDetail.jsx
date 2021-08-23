// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// STYLE
import { flexBox } from '../shared/style';

// ELEMENTS
import { Grid, Text, Image, Button } from '../elements/index';

// COMPONENTS
import Comment from '../components/Comment';

const ReviewDetail = () => {
  return (
    <Grid width="550px" height="auto" margin="3% auto" border="solid 1px black">
      <Grid>
        <Image src="https://cdn.pixabay.com/photo/2021/08/18/22/42/australian-shepherd-6556697_1280.jpg" />
      </Grid>

      <Grid
        addstyle={() => {
          return css`
            ${flexBox()}
          `;
        }}
      >
        <Text>userID</Text>
      </Grid>

      <hr />

      <Grid
        addstyle={() => {
          return css`
            ${flexBox()}
          `;
        }}
      >
        <Text>content</Text>
      </Grid>

      <hr />

      <Comment />

      <Grid
        width="220px"
        margin="2% auto"
        addstyle={() => {
          return css`
            ${flexBox('space-between')}
          `;
        }}
      >
        <Button color="white" bgColor="buttonColor" padding="8px">
          댓글작성
        </Button>
        <Button color="white" bgColor="buttonColor" padding="8px">
          수정하기
        </Button>
        <Button color="white" bgColor="buttonColor" padding="8px">
          삭제하기
        </Button>
      </Grid>
    </Grid>
  );
};

export default ReviewDetail;
