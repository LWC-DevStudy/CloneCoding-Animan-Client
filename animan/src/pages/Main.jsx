// LIBRARY
import React from 'react';
import styled, { css } from 'styled-components';

// ROUTE
import { Link } from 'react-router-dom';

// STYLE
import { flexBox } from '../shared/style';

// ELEMENTS
import { Grid, Text } from '../elements/index';

// COMPONENTS
import ProductList from '../components/ProductList';

// COMPONENTS
import ProductList from '../components/ProductList'

const Main = () => {
  return (
    <Grid>
      <BackgroundImage />

      <Grid
        margin="20% 0"
        addstyle={() => {
          return css`
            ${flexBox()}
            flex-direction: column;
          `;
        }}
      >
        <Link to="/">
          <TitleTextImage src="https://cdn.imweb.me/thumbnail/20210715/544dacbfb222f.png" />
        </Link>

        <Text
          cursor="pointer"
          margin="0"
          color="white"
          size="20px"
          fontWeight="700"
          lineHeight="2"
        >
          natural petfood animan | Social economy enterprise
        </Text>

        <Text
          cursor="pointer"
          margin="0"
          color="white"
          size="18px"
          fontWeight="300"
          lineHeight="2"
        >
          “우리 아이와 오랫동안 건강하게 함께 했으면 좋겠다”
        </Text>

        <Text
          cursor="pointer"
          margin="0"
          color="white"
          size="18px"
          fontWeight="300"
          lineHeight="1.2"
        >
          애니먼은 건강한 생활은 먹는 것에서 출발한다는 믿음으로
        </Text>

        <Text
          cursor="pointer"
          margin="0"
          color="white"
          size="18px"
          fontWeight="300"
          lineHeight="1.2"
        >
          곤충을 주 원료로 한 반려동물 기능성 식품을 제조하고 있습니다
        </Text>
      </Grid>

      <Grid
        addstyle={() => {
          return css`
            ${flexBox()}
          `;
        }}
      >
        <Text
          width="auto"
          margin="0 0 3% 0"
          color="green"
          size="40px"
          fontWeight="800"
          lineHeight="3"
          addstyle={() => {
            return css`
              height: 100%;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              @media screen and (max-width: 1200px) {
                margin: 8% 0 5% 0;
              }
              @media screen and (max-width: 1100px) {
                margin: 12% 0 5% 0;
              }
              @media screen and (max-width: 1000px) {
                margin: 16% 0 5% 0;
              }
              @media screen and (max-width: 900px) {
                margin: 25% 0 5% 0;
              }
              @media screen and (max-width: 800px) {
                display: none;
              }
            `;
          }}
        >
          natural petfood . ANIMAN
        </Text>
      </Grid>

      <Grid margin="0 0 10% 0">
        <ProductList />
      </Grid>
    </Grid>
  );
};

const TitleTextImage = styled.img`
  width: auto;
  height: 69px;
  cursor: pointer;
`;

const BackgroundImage = styled.div`
  background-image: url(https://cdn.imweb.me/thumbnail/20210715/33f163438b4bf.png);
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export default Main;
