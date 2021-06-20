import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Product from './pages/customer/product/Product';
import Header from './components/Header';
import Footer from './components/Footer';
import Description from './pages/customer/home/components/Description';
import Featured from './pages/customer/home/components/Featured';
import SlideContainer from './pages/customer/home/components/slideContainer';
import reportWebVitals from './reportWebVitals';
import Orderhistory from './pages/customer/Orderhistory';
import {BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App/>
    {/* <Header/>
      <App/>
    <Footer/> */}
    </Router>
 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
