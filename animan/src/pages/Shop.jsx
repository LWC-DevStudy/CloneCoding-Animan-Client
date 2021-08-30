// LIBRARY
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from 'styled-components';

// STYLE
import { flexBox } from '../shared/style';

// ELEMENTS
import { Grid } from '../elements';

// COMPONENTS
import CategoryAll from '../components/CategoryAll';
import ProductCard from '../components/ProductCard';

// REDUX
import { getCategoryDB } from '../redux/modules/product';

const Shop = () => {
  const dispatch = useDispatch();
  const all = 'all';
  const productList = useSelector((state) => state.product.list);
  console.log(productList);

  React.useEffect(() => {
    dispatch(getCategoryDB(all));
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
        margin="0 0 0 5%"
        addstyle={() => {
          return css`
            display: flex;
            flex-wrap: wrap;
            cursor: pointer;
          `;
        }}
      >
        {productList.length ? (
          productList.map((product, idx) => {
            return <ProductCard key={idx} {...product} />;
          })
        ) : (
          <></>
        )}

        {/* <ProductList /> */}
      </Grid>
    </Grid>
  );
};

export default Shop;
