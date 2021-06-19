import React from 'react';
import './styles/index.css';
// import './styles/shop.css';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import Orderhistory from './pages/customer/Orderhistory';
import Order from './pages/customer/Order';
import Shop from './pages/customer/Shop';
import Index from './pages/customer/Index';
import Login from './pages/customer/Login';
import Product from './pages/customer/product/Product';

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
    </Switch>
    </>
  );
}

export default App;
