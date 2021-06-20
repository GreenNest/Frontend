import React from 'react';
import './styles/index.css';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import Orderhistory from './pages/customer/Orderhistory';
import Index from './pages/customer/Index';
import Order from './pages/customer/customerorder/Order';
import Shop from './pages/customer/Shop/Shop';
import Login from './pages/customer/Login';
import Product from './pages/customer/product/Product';
<<<<<<< HEAD
import Categoryadminview from './pages/admin/categoryadminview/Categoryadminview';
import Itemadminview from './pages/admin/itemadminview/Itemadminview';
=======
import Categoryadminview from './pages/accountant/categoryadminview/Categoryadminview';
import Signup from './pages/customer/Signup';

>>>>>>> 6caf665936e83d8e60e3d543cdfd402e03559c46

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
<<<<<<< HEAD
    <Route exact path="/admin/itemview"  component={Itemadminview} />
=======
    <Route exact path="/signup" component={Signup} />

>>>>>>> 6caf665936e83d8e60e3d543cdfd402e03559c46
    </Switch>
    </>
  );
}

export default App;
