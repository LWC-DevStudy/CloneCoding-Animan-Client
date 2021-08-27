// LIBRARY
import React from 'react';
import { history } from '../redux/configureStore';

// STYLE
import { css } from 'styled-components';

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
      clickEvent={() => {
        history.push(`/rdetail/${review.reviewId}`);
      }}
    >
      <Image src={review.reviewImage} />
    </Grid>
  );
}

export default ReviewCard;
