// LIBRARY
import React from 'react';
import { useDispatch } from 'react-redux';
// STYLE
import styled, { css } from 'styled-components';
import { borderBox, flexBox, flexHoz } from '../shared/style';
// SHARED
import { removeToken } from '../shared/token';
//ELEMENTS
import { Grid, Text } from '../elements/index';
import Logo from '../shared/images/MainImage.png';

function Header() {
  return (
    <HeaderStyle>
      <Grid
        widt="100%"
        addstyle={() => {
          return css`
            ${flexBox('inline-flex')}
          `;
        }}
      >
        <Grid
          width="100%"
          padding="0px"
          addstyle={() => {
            return css`
              ${flexBox('flex-start')}
            `;
          }}
        >
          <Text margin="0px 20px 0px 60px" color="gray" size="16px">
            LOGIN
          </Text>
          <Text color="gray" size="16px">
            JOIN
          </Text>
        </Grid>
        <Grid
          width="100%"
          padding="0 25%"
          addstyle={() => {
            return css`
              ${flexHoz('center')}
            `;
          }}
        >
          <img src={Logo} alt="로고" width="130px" />
        </Grid>
        <Grid
          width="100%"
          padding="0px"
          addstyle={() => {
            return css`
              ${flexHoz('flex-end')}
            `;
          }}
        >
          <Text color="gray" width="90px" size="19px">
            Shop
          </Text>
          <Text color="gray" size="19px">
            review
          </Text>
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
