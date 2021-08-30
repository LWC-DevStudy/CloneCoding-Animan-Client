// LIBRARY
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from 'styled-components';

// STYLE
import { flexBox } from '../shared/style';

// ELEMENTS
import { Grid } from '../elements/index';

// COMPONENTS
import CategoryAll from '../components/CategoryAll';
import ProductCard from '../components/ProductCard';

// REDUX
import { getCategoryDB } from '../redux/modules/product';

const Cookie = () => {
  const dispatch = useDispatch();
  const cookie = 'cookie';
  const productCookie = useSelector((state) =>
    state.product.list ? state.product.list : Array(0, 2, 34)
  );
  console.log(productCookie);

  React.useEffect(() => {
    dispatch(getCategoryDB(cookie));
  }, []);

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
      </Grid>

      <Grid
        width="1320px"
        margin="auto"
        addstyle={() => {
          return css`
            display: flex;
            flex-wrap: wrap;
            cursor: pointer;
          `;
        }}
      >
        {productCookie.length ? (
          productCookie.map((product, idx) => {
            return <ProductCard key={idx} {...product} />;
          })
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  );
};

export default Cookie;
