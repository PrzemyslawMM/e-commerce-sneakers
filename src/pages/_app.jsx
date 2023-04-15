/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
