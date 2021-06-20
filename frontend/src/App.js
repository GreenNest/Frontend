import React from 'react';
import './styles/index.css';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import Orderhistory from './pages/customer/Orderhistory';
import Index from './pages/customer/Index';
import Order from './pages/customer/customerorder/Order';
import Shop from './pages/customer/Shop/Shop';
import Login from './pages/customer/Login';
import Product from './pages/customer/product/Product';
import Categoryadminview from './pages/accountant/categoryadminview/Categoryadminview';
import Signup from './pages/customer/Signup';


function App() {
  return (
    <>
    <Switch>
    <Route exact path="/" component={Index}/>
    <Route exact path="/shop" component={Shop}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/shop/product" component={Product}/>
    <Route exact path="/profile/order/review" component={Order}/>
    <Route exact path="/profile/orders" component={Orderhistory}/>
    <Route exact path="/admin/categoryview"  component={Categoryadminview} />
    <Route exact path="/signup" component={Signup} />

    </Switch>
    </>
  );
}

export default App;
