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
        addstyle={() => {
          return css`
            ${flexBox()}
            @media screen and (max-width: 2000px) {
              margin: 2% 0 2% 15%;
            }
            @media screen and (max-width: 1800px) {
              margin: 2% 0 2% 4%;
            }
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
