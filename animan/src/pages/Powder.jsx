// LIBRARY
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from 'styled-components';

// ELEMENTS
import { Grid } from '../elements/index';

// COMPONENT
import ProductCard from '../components/ProductCard';
import CategoryAll from '../components/CategoryAll';

// REDUX
import { getCategoryDB } from '../redux/modules/product';
import { flexBox } from '../shared/style';

const Powder = () => {
  const dispatch = useDispatch();
  const powder = 'powder';
  const productPowder = useSelector((state) => state.product.list);
  console.log(productPowder);

  React.useEffect(() => {
    dispatch(getCategoryDB(powder));
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
        addstyle={() => {
          return css`
            ${flexBox()};
            cursor: pointer;
          `;
        }}
      >
        {productPowder.length ? (
          productPowder.map((product, idx) => {
            return <ProductCard key={idx} {...product} />;
          })
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  );
};

export default Powder;
