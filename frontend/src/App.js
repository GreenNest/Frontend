import React from 'react';
import './styles/index.css';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";

// customer
import Index from './pages/customer/Index';
import Signup from './pages/customer/Signup';
import Login from './pages/customer/Login';
import Shop from './pages/customer/Shop/Shop';
import Product from './pages/customer/product/Product';
import Order from './pages/customer/customerorder/Order';
import Cart from './pages/customer/cart/Cart';
import Checkout from './pages/customer/cart/Checkout';
import Orderhistory from './pages/customer/Orderhistory';


// admin
import AdminDashboard from './pages/accountant/dashboard/Dashboard';
import Reports from './pages/admin/reports/Reports';
import AddStock from './pages/admin/add-stock/AddStock';
import EditStock from './pages/admin/edit-stock/EditStock';
import Updatestock from './pages/admin/Stock/Updatestock';
import CategoryAdminView from './pages/admin/categoryadminview/Categoryadminview';
import ItemAdminView from './pages/admin/itemadminview/Itemadminview';
import ViewSupplier from './pages/admin/supplier/ViewSupplier';
import EditSupplier from './pages/admin/supplier/EditSupplier';
import AddSupplier from './pages/admin/supplier/AddSupplier';
import ViewEmployee from './pages/admin/employee/ViewEmployee';
import AddEmployee from './pages/admin/employee/AddEmployee';

// moderator
import ModDashboard from './pages/accountant/dashboard/Dashboard';
import Upcomingorders from './pages/moderator/orders/Upcomingorders';
import OngoingOrders from './pages/moderator/orders/Ongoingorders';
import SystemOrders from './pages/moderator/orders/Systemorders';
import SupplierList from './pages/moderator/orderRequest/SupplierList';
import OrderRequest from './pages/moderator/orderRequest/OrderRequest';
import DeliveryPerson from './pages/moderator/deliveryPerson/DeliveryPerson';

// accountant
import AccDashboard from './pages/accountant/dashboard/Dashboard';
import CODeliveries from './pages/accountant/CashonDelivery';
import InvoiceHistory from './pages/accountant/InvoiceHistory';


function App() {
  return (
    <>
    <Switch>

    {/* customer routes */}
    <Route exact path="/" component={Index}/>
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login}/>
    <Route exact path="/shop" component={Shop}/>
    <Route exact path="/shop/product" component={Product}/>
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/chechout" component={Checkout}/>
    <Route exact path="/profile/orders" component={Orderhistory}/>
    <Route exact path="/profile/order/review" component={Order}/>


    {/* admin routes */}
    <Route exact path="/admin/dashboard" component={AdminDashboard} />
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

    {/* moderator routes */}
    <Route exact path="/moderator/dashboard" component={ModDashboard} />
    <Route exact path="/moderator/upcomingOrders" component={Upcomingorders}/>
    <Route exact path="/moderator/ongoingOrders" component={OngoingOrders}/>
    <Route exact path="/moderator/systemOrders" component={SystemOrders}/>
    <Route exact path="/moderator/supplierList" component={SupplierList} />
    <Route exact path="/moderator/orderRequests" component={OrderRequest} />
    <Route exact path="/moderator/deliveryPersons" component={DeliveryPerson} />

    {/* accountant routes */}
    <Route exact path="/accountant/dashboard" component={AccDashboard} />
    <Route exact path="/accountant/coDeliveries" component={CODeliveries} />
    <Route exact path="/accountant/invoiceHistory" component={InvoiceHistory} />

    </Switch>
    </>
  );
}

export default App;
