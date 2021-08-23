// LIBRARY
import React from 'react';
import styled from 'styled-components';

// ELEMENTS
import { Grid } from '../elements/index';

// STYLE

// REDUX

const CategoryAll = () => {
  return (
    <Grid>
      <CategoryAllImg
        src={'https://cdn.imweb.me/thumbnail/20210720/b38ae9aead427.png'}
      />
    </Grid>
  );
};

const CategoryAllImg = styled.img`
  width: 120px;
  margin-left: 12%;
  padding: 10px;
  cursor: pointer;
`;

export default CategoryAll;
