import "./App.css";

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/HomePage/HomePage";
import { Tweets } from "./pages/TweetsPage/TweetsPage";
import { GlobalStyles } from "./assets/global/GlobalStyles";
import { theme } from "./assets/global/theme";
import { ThemeProvider } from "styled-components";
import { SharedLayout } from "./assets/components/SharedLayout/SharedLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <SharedLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tweets" element={<Tweets />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </SharedLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
