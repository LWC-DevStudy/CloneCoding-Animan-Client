// STYLE
import { css } from 'styled-components';

export const borderBox = (radius = '3px', padding = 0) => {
  return css`
    box-sizing: border-box;
    padding: ${padding};
    border-radius: ${radius};
  `;
};

export const flexBox = (sortHoz = 'center', sortVer = 'center') => {
  return css`
    display: flex;
    justify-content: ${sortHoz};
    align-items: ${sortVer};
  `;
};

export const flexHoz = (sort = 'center') => {
  return css`
    display: flex;
    align-items: ${sort};
  `;
};

export const flexVer = (sort = 'center') => {
  return css`
    display: flex;
    align-items: ${sort};
  `;
};

const theme = {
  palette: {
    black: '#3C3733',
    brown: '#5B4C3D',
    buttonColor: '#06581E',
    footerColor:'#004815',
    gray: '#3C3733B3',
    white: '255, 255, 255',
  },

  size: {
    defaultWidth: '540px',
  },
};

export default theme;