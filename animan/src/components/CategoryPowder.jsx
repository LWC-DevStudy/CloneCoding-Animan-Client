// LIBRARY
import React from 'react';
import styled from 'styled-components';

// ELEMENTS
import { Grid } from '../elements/index';

// STYLE

// REDUX

const CategoryPowder = () => {
  return (
    <Grid>
      <CategoryPowderImg
        src={'https://cdn.imweb.me/thumbnail/20210720/be9d6ef5b7cf8.png'}
      />
    </Grid>
  );
};

const CategoryPowderImg = styled.img`
  width: 170px;
  padding: 10px;
  cursor: pointer;
`;

export default CategoryPowder;
