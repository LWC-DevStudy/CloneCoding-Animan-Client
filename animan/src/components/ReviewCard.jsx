// LIBRARY
import React from 'react';
// STYLE
import styled, { css } from 'styled-components';
// ELEMENTS
import { Image, Grid } from '../elements/index';

function ReviewCard({ review }) {
  return (
    <Grid
      width="200px"
      height="200px"
      margin="0.5px 60px 0.5px 0px"
      addstyle={() => {
        return css`
          cursor: pointer;
        `;
      }}
    >
      <Image src={review.reviewImage} />
    </Grid>
  );
}

export default ReviewCard;
