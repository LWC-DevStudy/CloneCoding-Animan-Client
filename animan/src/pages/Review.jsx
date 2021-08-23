// LIBRARY
import React from 'react';
import ReviewCard from '../components/ReviewCard';
// STYLE
import styled, { css } from 'styled-components';
// ELEMENTS
import { Grid, Button } from '../elements/index';
import { flexHoz } from '../shared/style';
const Review = () => {
  return (
    <React.Fragment>
      <Grid margin="120px auto" width="1300px">
        <Grid
          margin="0 0 20px -8px"
          addstyle={() => {
            return css`
              ${flexHoz('flex-end')}
            `;
          }}
        >
          <Button width="200px" bgColor="buttonColor" color="white">
            글 작성
          </Button>
        </Grid>
        <Grid
          addstyle={() => {
            return css`
              display: flex;
              flex-wrap: wrap;
            `;
          }}
        >
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Review;
