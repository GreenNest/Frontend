import React from 'react';
import './styles/index.css';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import Orderhistory from './pages/customer/Orderhistory';
import Index from './pages/customer/Index';
import Order from './pages/customer/customerorder/Order';
import Shop from './pages/customer/Shop/Shop';
import Cart from './pages/customer/cart/Cart';
import Checkout from './pages/customer/cart/Checkout';
import Login from './pages/customer/Login';
import Signup from './pages/customer/Signup';
import Product from './pages/customer/product/Product';
import Dashboard from './pages/accountant/dashboard/Dashboard';
import Upcomingorders from './pages/moderator/orders/Upcomingorders';
import Ongoingorders from './pages/moderator/orders/Ongoingorders';
import Systemorders from './pages/moderator/orders/Systemorders';
import SupplierList from './pages/moderator/orderRequest/SupplierList';
import OrderRequest from './pages/moderator/orderRequest/OrderRequest';

// admin
import Reports from './pages/admin/reports/Reports';
import AddStock from './pages/admin/add-stock/AddStock';
import EditStock from './pages/admin/edit-stock/EditStock';
import Updatestock from './pages/admin/Stock/Updatestock';
import CategoryAdminView from './pages/admin/categoryadminview/CategoryAdminView';
import ItemAdminView from './pages/admin/itemadminview/ItemAdminView';
import ViewSupplier from './pages/admin/supplier/ViewSupplier';
import EditSupplier from './pages/admin/supplier/EditSupplier';
import AddSupplier from './pages/admin/supplier/AddSupplier';
import ViewEmployee from './pages/admin/employee/ViewEmployee';
import AddEmployee from './pages/admin/employee/AddEmployee';



function App() {
  return (
    <>
    <Switch>
    <Route exact path="/" component={Index}/>
    {/* <Route exact path="/" component={ViewEmployee}/> */}
    {/* <Route exact path="/" component={OrderRequest}/> */}
    <Route exact path="/shop" component={Shop}/>
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/chechout" component={Checkout}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/shop/product" component={Product}/>
    <Route exact path="/profile/order/review" component={Order}/>
    <Route exact path="/profile/orders" component={Orderhistory}/>
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/moderator/upcomingorders" component={Upcomingorders}/>
    <Route exact path="/moderator/ongoingorders" component={Ongoingorders}/>
    <Route exact path="/moderator/systemorders" component={Systemorders}/>
    <Route exact path="/moderator/supplierList" component={SupplierList} />

    {/* admin routes */}
    <Route exact path="/admin/reports" component={Reports} />
    <Route exact path="/admin/addItem" component={AddStock} />
    <Route exact path="/admin/editItem" component={EditStock} />
    <Route exact path="/admin/updateStock" component={Updatestock} />
    <Route exact path="/admin/categoryView"  component={CategoryAdminView} />
    <Route exact path="/admin/categoryView/itemView"  component={ItemAdminView} />
    <Route exact path="/admin/viewSupplier"  component={ViewSupplier} />
    <Route exact path="/admin/editSupplier" component={EditSupplier} />
    <Route exact path="/admin/addSupplier" component={AddSupplier} />
    <Route exact path="/admin/viewEmployee" component={ViewEmployee} />
    <Route exact path="/admin/addEmployee" component={AddEmployee} />
    </Switch>
    </>
  );
}

export default App;
