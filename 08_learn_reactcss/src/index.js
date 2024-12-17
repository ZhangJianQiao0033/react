import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './05_CSS_in_js写法/App'
import { ThemeProvider } from 'styled-components';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ThemeProvider theme={{color: "purple"}}>
      <App />
    </ThemeProvider>
    
  </React.StrictMode>
);


