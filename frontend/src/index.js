import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
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
import Updatestock from './pages/admin/Stock/Updatestock';
import Reports from './pages/admin/reports/Reports'
import ViewSupplier from './pages/admin/supplier/ViewSupplier';
import CashonDelivery from './pages/accountant/CashonDelivery';
import StatusPopup from './pages/accountant/StatusPopup'
import ViewEmployee from './pages/admin/employee/ViewEmployee';
import OrderRequest from './pages/moderator/orderRequest/OrderRequest';
import SupplierList from './pages/moderator/orderRequest/SupplierList';
import DeliveryPerson from './pages/moderator/deliveryPerson/DeliveryPerson';
import InvoiceHistory from './pages/accountant/InvoiceHistory';
import AddEmployee from './pages/admin/employee/AddEmployee';

ReactDOM.render(
  <React.StrictMode>
    <Router> 
      <Header/>
      <App/>
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
