import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

ReactDOM.render(
  <>
    <Routes />
    <GlobalStyles />
  </>,
  document.getElementById('root')
);
