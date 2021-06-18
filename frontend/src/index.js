import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Product from './pages/customer/product/Product';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Description from './pages/customer/home/components/Description';
import Featured from './pages/customer/home/components/Featured';
import Index from './pages/customer/Index.js';
import SlideContainer from './pages/customer/home/components/slideContainer';
import reportWebVitals from './reportWebVitals';
import Login from './pages/customer/Login';
import Shop from './pages/customer/Shop';
import Orderhistory from './pages/customer/Orderhistory';


ReactDOM.render(
  <React.StrictMode>
    {/* <Product /> */}
    <Header/>
    <Index/>
    <Description/>
    <Featured/>
    <Footer/>
    {/* <Sidebar/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
