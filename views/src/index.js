import React from 'react';
import ReactDOM from 'react-dom';
// Libs
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset';
// Components
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
