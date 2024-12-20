import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './10_useImperativeHandle/App';
import { ThemeContext, UserContext } from './05_useContext的使用/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ThemeContext value={{color: "red", fontSize: "50px"}}>
    <UserContext value={{name: "zjq", age: 20}}>
    <App />
    </UserContext>
    
  </ThemeContext>
    
  // </React.StrictMode>
);


