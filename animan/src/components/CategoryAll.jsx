// LIBRARY
import React from 'react';
import styled from 'styled-components';

// ROUTE
import { Link } from 'react-router-dom';

// ELEMENTS
import { Grid } from '../elements/index';

const CategoryAll = () => {
  return (
    <Grid>
      <Link to="/shop">
        <CategoryAllImg
          src={'https://cdn.imweb.me/thumbnail/20210720/b38ae9aead427.png'}
        />
      </Link>
      <Link to="/powder">
        <CategoryPowderImg src="https://cdn.imweb.me/thumbnail/20210720/be9d6ef5b7cf8.png" />
      </Link>
      <Link to="cookie">
        <CategoryCookieImg src="https://cdn.imweb.me/thumbnail/20210720/a629b0e02f2ba.png" />
      </Link>
    </Grid>
  );
};

const CategoryAllImg = styled.img`
  width: 120px;
  margin-left: 8%;
  padding: 10px;
  cursor: pointer;
`;

const CategoryPowderImg = styled.img`
  width: 170px;
  padding: 10px;
  cursor: pointer;
`;

const CategoryCookieImg = styled.img`
  width: 180px;
  padding: 10px;
  cursor: pointer;
`;

export default CategoryAll;
