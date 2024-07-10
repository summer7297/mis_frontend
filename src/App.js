import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

import { Login } from "./pages/Login"
import { Register } from "./pages/Register";

const theme = createTheme({
  palette: {
    primary: {
      main: '#50B498'
    },
      secondary: {
      main: '#9CDBA6'
    }
  }
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/register" element={<Register />} />
              </Routes>
          </BrowserRouter>
      </ThemeProvider>
  )
}

export default App;
