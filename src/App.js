import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login"
import {ThemeProvider, createTheme} from "@mui/material";

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
              </Routes>
          </BrowserRouter>
      </ThemeProvider>
  )
}

export default App;
