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
    justify-content: ${sort};
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
    black: '60, 55, 51',
    brown: '91, 76, 61',
    buttonColor: '6, 88, 30',
    footerColor: '0, 72, 21',
    green: '9, 120, 9',
    gray: '114, 114, 114',
    white: '255, 255, 255',
  },

  size: {
    defaultWidth: '540px',
  },
};

export default theme;
