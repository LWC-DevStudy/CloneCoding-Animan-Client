// LIBRARY
import React from 'react';
// STYLE
import styled, { css } from 'styled-components';
// ELEMENTS
import { Image, Grid } from '../elements/index';

function ReviewCard() {
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
      <Image src="https://cdn.pixabay.com/photo/2021/08/18/22/42/australian-shepherd-6556697_1280.jpg" />
    </Grid>
  );
}

export default ReviewCard;
