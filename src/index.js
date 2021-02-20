import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import App from './App';
import { store } from './store';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  user-select: none;
  box-sizing: border-box;
  &:active, 
  &:focus {
    outline: none;
  }
}
body {
  font-family: 'Montserrat', sans-serif;
  background-color: #f3f6f9;
  overflow-x: hidden;
  min-width: 320px;
}
a {
  text-decoration: none;
  transition: all 0.15s linear;
}
button {
  transition: all 0.15s linear;
  &:disabled{
    pointer-events: none;
    background-color: grey;
    opacity: 0.6;
  }
}
`

const theme = {
  color: {
    primary: "green",
    secondary: "blue"
  },
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Global />
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
