// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// STYLE
import { flexBox } from '../shared/style';

// ELEMENTS
import { Grid } from '../elements';

// COMPONENTS
import CategoryAll from '../components/CategoryAll';
import CategoryPowder from '../components/CategoryPowder';
import CategoryCookie from '../components/CategoryCookie';

const Shop = () => {
  return (
    <Grid
      width="800px"
      padding="20px"
      margin="10vh 0 0 0"
      al
      addstyle={() => {
        return css`
          ${flexBox()}
        `;
      }}
    >
      <CategoryAll />
      <CategoryPowder />
      <CategoryCookie />
    </Grid>
  );
};

export default Shop;
