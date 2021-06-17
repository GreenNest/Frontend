import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Product from './pages/customer/Product';
import Review from './pages/customer/Review';
import Header from './components/Header';
import Footer from './components/Footer';
import Description from './components/Description';
import Index from './pages/customer/Index.js';
import SlideContainer from './pages/customer/home/components/slideContainer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Product /> */}
    <Review />
    <Header/>
    <Index/>
    <Description/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
