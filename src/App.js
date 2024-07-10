import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

import { Login } from "./pages/Login"
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";

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
    document.title = "Maungawhau Institute of Studies (MIS)"

  return (
      <ThemeProvider theme={theme}>
          <Router>
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
          </Router>
      </ThemeProvider>
  )
}

export default App;
