import React from 'react';
import { Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import { Home } from './pages/HomePage/HomePage';
import { Tweets } from './pages/TweetsPage/TweetsPage';
import { GlobalStyles } from './assets/global/GlobalStyles';
import { theme } from './assets/global/theme';
import { ThemeProvider } from 'styled-components';
import { SharedLayout } from './assets/components/SharedLayout/SharedLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HashRouter>
        <SharedLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tweets" element={<Tweets />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </SharedLayout>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
