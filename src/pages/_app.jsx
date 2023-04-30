/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import '../styles/import_font.css';

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 16px;
    width: 100vw;
    display: flex;
    justify-content: center;
  }
`;

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
