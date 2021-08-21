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
import ProductList from '../components/ProductList';

const Shop = () => {
  return (
    <Grid>
      <Grid
        width="800px"
        padding="20px"
        margin="2% 0 2% 4%"
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

      <Grid margin="0 0 10% 0">
        <ProductList />
      </Grid>
    </Grid>
  );
};

export default Shop;
