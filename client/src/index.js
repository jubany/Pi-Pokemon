import React, { createContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./redux/store/index"
import Switch from 'react-switch';

const themeContext = createContext(null);

function MyComponent() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <Switch
  onChange={toggleTheme}  checked={theme === 'dark'} value={theme} className="switch-container" />
      <App />
    </themeContext.Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MyComponent />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

