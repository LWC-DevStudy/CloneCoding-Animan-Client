// LIBRARY
import React from 'react';
// STYLE
import styled, { css } from 'styled-components';
import { flexBox, flexHoz, flexVer } from '../shared/style';
// ELEMENTS
import { Grid, Text } from '../elements/index';
// COMPONENTS
import ProductCard from '../components/ProductCard';

const WishList = () => {
  return (
    <React.Fragment>
      <Grid width="100%" height="auto">
        <Grid width="90%" margin="auto">
          <Grid
            addstyle={() => {
              return css`
                ${flexHoz('flex-start')}
              `;
            }}
          >
            <Text margin="60px 0 20px 6px">위시리스트</Text>
            <WishCount>1</WishCount>
          </Grid>
          <Grid margin="auto" width="1308px">
            <Grid
              addstyle={() => {
                return css`
                  display: flex;
                  flex-wrap: wrap;
                `;
              }}
            >
              <ProductCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const WishCount = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: rgb(${(props) => props.theme.palette.brown});
  text-align: center;
  line-height: 1.5;
  color: white;
  margin: 58px 0 0 5px;
`;

export default WishList;
