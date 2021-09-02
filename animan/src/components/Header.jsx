// LIBRARY
import React from 'react';

// STYLE
import styled, { css } from 'styled-components';
import { borderBox, flexBox, flexHoz } from '../shared/style';

// ROUTE
import { Link } from 'react-router-dom';

// ELEMENTS
import { Grid, Text } from '../elements/index';

// IMAGE
import Logo from '../shared/images/MainImage.png';

function Header() {
  return (
    <HeaderStyle>
      <Grid
        width="100%"
        padding="10px"
        addstyle={() => {
          return css`
            ${flexBox('inline-flex')}
          `;
        }}
      >
        <Grid
          margin="0 0 0 -2%"
          width="100%"
          addstyle={() => {
            return css`
              ${flexBox('flex-start')}
            `;
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/login">
            <Text
              margin="0px 0px 0px 60px"
              width="100px"
              color="gray"
              size="16px"
            >
              LOGIN
            </Text>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/register">
            <Text color="gray" size="16px">
              JOIN
            </Text>
          </Link>
        </Grid>
        <Grid
          margin="0 0 0 4%"
          addstyle={() => {
            return css`
              ${flexHoz('center')}
            `;
          }}
        >
          <Link to="/">
            <img src={Logo} alt="로고" width="130px" />
          </Link>
        </Grid>
        <Grid
          margin="0 2% 0 0"
          width="100%"
          addstyle={() => {
            return css`
              ${flexHoz('flex-end')}
            `;
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/shop">
            <Text color="gray" width="90px" size="19px">
              Shop
            </Text>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/review">
            <Text color="gray" size="19px">
              Review
            </Text>
          </Link>
        </Grid>
      </Grid>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  background: rgb(${(props) => props.theme.palette.white});
  width: 100%;
  ${borderBox(0, '0px')};
  height: auto;
`;

export default Header;
