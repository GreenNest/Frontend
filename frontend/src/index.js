import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';

import App from './App';
import Header from './components/Header';
import SignedHeader from './components/SignedHeader';
import Footer from './components/Footer';
import AdminSidebar from './pages/admin/components/adminSidebar';
import ModeratorSidebar from './pages/moderator/components/moderatorSidebar';
import AccountantSidebar from './pages/accountant/dashboard/components/accountantSidebar';
import Product from './pages/customer/product/Product';
import Description from './pages/customer/home/components/Description';
import Featured from './pages/customer/home/components/Featured';
import SlideContainer from './pages/customer/home/components/slideContainer';
import reportWebVitals from './reportWebVitals';
import Login from './pages/customer/Login';
import Signup from './pages/customer/Signup';
import RequestPopup from './pages/customer/product/RequestPopup';
import Edit_profile from './pages/customer/Edit_profile';
import ViewSupplier from './pages/admin/supplier/ViewSupplier';
import CashonDelivery from './pages/accountant/CashonDelivery';
import StatusPopup from './pages/accountant/StatusPopup';
import ViewEmployee from './pages/admin/employee/ViewEmployee';
import OrderRequest from './pages/moderator/orderRequest/OrderRequest';
import SupplierList from './pages/moderator/orderRequest/SupplierList';
import DeliveryPerson from './pages/moderator/deliveryPerson/DeliveryPerson';
import InvoiceHistory from './pages/accountant/InvoiceHistory';
import Upcomingorders from './pages/moderator/orders/Upcomingorders';
import Ongoingorders from './pages/moderator/orders/Ongoingorders';
import Dashboard from './pages/accountant/dashboard/Dashboard';

import AddEmployee from './pages/admin/employee/AddEmployee';
import AddSupplier from './pages/admin/supplier/AddSupplier';
import Categoryadminview from './pages/admin/categoryadminview/Categoryadminview';
import Itemadminview from './pages/admin/itemadminview/Itemadminview';
import LeaveRequest from './pages/LeaveRequest';
import LeaveStat from './pages/LeaveStat';
import Reports from './pages/admin/reports/Reports';
import AddStock from './pages/admin/add-stock/AddStock';
import Updatestock from './pages/admin/Stock/Updatestock';

ReactDOM.render(
  <React.StrictMode>
    <Router> 
       {/* <Header/>   */}
        {/* <AdminSidebar />   */}
        {/* <ModeratorSidebar />   */}
        {/* <AccountantSidebar />   */}
        <App/>  
      {/* <Footer/>   */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
