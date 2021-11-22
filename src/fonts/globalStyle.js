import {  createGlobalStyle } from 'styled-components';
import robotoCondensedBold from './roboto_condensed/RobotoCondensed-Bold.ttf';
import robotoCondensedRegular from './roboto_condensed/RobotoCondensed-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Condensed Bold';
    src: url(${robotoCondensedBold});
    font-weight: 'bold';
    font-style: normal
  };

  @font-face {
    font-family: 'Roboto Condensed Regular';
    src: url(${robotoCondensedRegular});
    font-style: normal
  };
`

export default GlobalStyle;