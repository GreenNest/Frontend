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
import Login from './pages/customer/Login';
import Signup from './pages/customer/Signup';
import RequestPopup from './pages/customer/product/RequestPopup';
import Edit_profile from './pages/customer/Edit_profile';
import {BrowserRouter as Router} from 'react-router-dom';
import Updatestock from './pages/admin/Stock/Updatestock';
import Reports from './pages/admin/reports/Reports'
import ViewSupplier from './pages/admin/supplier/ViewSupplier';
import ViewEmployee from './pages/admin/employee/ViewEmployee';
import OrderRequest from './pages/moderator/orderRequest/OrderRequest';
import SupplierList from './pages/moderator/orderRequest/SupplierList';


ReactDOM.render(
  <React.StrictMode>
    <Router> 
      {/* <Header/>
      <App/>
      <Footer/> */}
      <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
