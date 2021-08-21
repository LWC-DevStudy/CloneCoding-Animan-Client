// LIBRARY
import React from 'react';
import styled from 'styled-components';

// ELEMENTS
import { Grid } from '../elements/index';

// STYLE

// REDUX

const CategoryCookie = () => {
  return (
    <Grid>
      <CategoryCookieImg src="https://cdn.imweb.me/thumbnail/20210720/a629b0e02f2ba.png" />
    </Grid>
  );
};

const CategoryCookieImg = styled.img`
  width: 180px;
  padding: 10px;
  cursor: pointer;
`;

export default CategoryCookie;
