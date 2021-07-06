import React from 'react';
import './styles/index.css';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import Orderhistory from './pages/customer/Orderhistory';
import Index from './pages/customer/index';
import Order from './pages/customer/customerorder/Order';
import Shop from './pages/customer/Shop/Shop';
import Cart from './pages/customer/cart/Cart';
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
import Ongoingorders from './pages/moderator/orders/Ongoingorders';
import Systemorders from './pages/moderator/orders/Systemorders';
import SupplierList from './pages/moderator/orderRequest/SupplierList';
import OrderRequest from './pages/moderator/orderRequest/OrderRequest';
import ViewSupplier from './pages/admin/supplier/ViewSupplier';
import AddSupplier from './pages/admin/supplier/AddSupplier';
import AddEmployee from './pages/admin/employee/AddEmployee';
import ViewEmployee from './pages/admin/employee/ViewEmployee';


function App() {
  return (
    <>
    <Switch>
    <Route exact path="/" component={Index}/>
    {/* <Route exact path="/" component={ViewEmployee}/> */}
    <Route exact path="/shop" component={Shop}/>
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/shop/product" component={Product}/>
    <Route exact path="/profile/order/review" component={Order}/>
    <Route exact path="/profile/orders" component={Orderhistory}/>
    <Route exact path="/admin/add-orders" component={AddStock}/>
    <Route exact path="/admin/categoryview"  component={Categoryadminview} />
    <Route exact path="/admin/categoryview/itemview"  component={Itemadminview} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/moderator/upcomingorders" component={Upcomingorders}/>
    <Route exact path="/moderator/ongoingorders" component={Ongoingorders}/>
    <Route exact path="/moderator/systemorders" component={Systemorders}/>
    <Route exact path="/moderator/supplierList" component={SupplierList} />
    <Route exact path="/admin/addSupplier" component={AddSupplier} />
    <Route exact path="/admin/addEmployee" component={AddEmployee} />
    </Switch>
    </>
  );
}

export default App;
