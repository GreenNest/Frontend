import React from 'react';
import './styles/index.css';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import Orderhistory from './pages/customer/Orderhistory';
import Index from './pages/customer/Index';
import Order from './pages/customer/customerorder/Order';
import Shop from './pages/customer/Shop/Shop';
import Login from './pages/customer/Login';
import Signup from './pages/customer/Signup';
import Product from './pages/customer/product/Product';
import Categoryadminview from './pages/admin/categoryadminview/Categoryadminview';
import Itemadminview from './pages/admin/itemadminview/Itemadminview';
import AddStock from './pages/admin/add-stock/AddStock';
import EditStock from './pages/admin/edit-stock/EditStock';
import Dashboard from './pages/accountant/dashboard/Dashboard';
//import Categoryadminview from './pages/accountant/categoryadminview/Categoryadminview';
import Upcomingorders from './pages/moderator/orders/Upcomingorders';
import Cashondelivery from './pages/moderator/orders/Cashondelivery';


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
    <Route exact path="/admin/add-orders" component={AddStock}/>
    <Route exact path="/admin/categoryview"  component={Categoryadminview} />
    <Route exact path="/admin/categoryview/itemview"  component={Itemadminview} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/moderator/upcomingorders" component={Upcomingorders}/>

    </Switch>
    </>
  );
}

export default App;
