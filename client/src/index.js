import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotePage from './pages/NotePage/NotePage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/home_feed/Home';
import Profile from './pages/profile/Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Home/>
    {/* <NotePage></NotePage> */}
    {/* <Profile/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
