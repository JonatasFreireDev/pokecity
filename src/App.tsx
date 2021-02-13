import React from 'react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import AppProvider from './hooks';
import GlobalStyle from './styles/global';
import { Colors } from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Colors}>
      <AppProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
