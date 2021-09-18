import React from 'react';
import './styles/index.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// customer
import Index from './pages/customer/index'; //
import Signup from './pages/customer/Signup'; //
import ForgetPassword from './pages/customer/ForgetPassword';
import ResetPassword from './pages/customer/ResetPassword';
import OTPcheck from './pages/customer/OTPcheck';
import Login from './pages/customer/Login'; //
import Shop from './pages/customer/Shop/Shop'; //
import FruitsList from './pages/customer/Shop/FruitsList'; 
import Product from './pages/customer/product/Product'; //
import Order from './pages/customer/customerorder/Order'; //
import Cart from './pages/customer/cart/Cart';//
import Checkout from './pages/customer/cart/Checkout';//
import Orderhistory from './pages/customer/Orderhistory';//


// admin
import AdminDashboard from './pages/admin/dashboard/Dashboard';
import Reports from './pages/admin/reports/Reports';
import AddStock from './pages/admin/stock/AddStock';
import EditStock from './pages/admin/stock/EditStock';
import Updatestock from './pages/admin/stock/UpdateStock';
import ViewCategories from './pages/admin/category/ViewCategories';
import ProductByCategory from './pages/admin/stock/ProductByCategory';
import ViewSupplier from './pages/admin/supplier/ViewSupplier';
import EditSupplier from './pages/admin/supplier/EditSupplier';
import AddSupplier from './pages/admin/supplier/AddSupplier';
import ViewEmployee from './pages/admin/employee/ViewEmployee';
import AddEmployee from './pages/admin/employee/AddEmployee';
import EditEmployee from './pages/admin/employee/EditEmployee';

// moderator
import ModDashboard from './pages/moderator/dashboard/Dashboard';
import Upcomingorders from './pages/moderator/orders/Upcomingorders';
import OngoingOrders from './pages/moderator/orders/Ongoingorders';
import SystemOrders from './pages/moderator/orders/Systemorders';
import SupplierList from './pages/moderator/orderRequest/SupplierList';
import OrderRequest from './pages/moderator/orderRequest/OrderRequest';
import DeliveryPerson from './pages/moderator/deliveryPerson/DeliveryPerson';
import ModLeaveRequests from './pages/LeaveRequest';
import ModLeaveStats from './pages/LeaveStat';

// accountant
import AccDashboard from './pages/accountant/dashboard/Dashboard';
import CODeliveries from './pages/accountant/CashonDelivery';
import InvoiceHistory from './pages/accountant/InvoiceHistory';
import EmployeeSalary from './pages/accountant/EmployeeSalary';
import AccLeaveRequests from './pages/LeaveRequest';
import AccLeaveStats from './pages/LeaveStat';
import Invoice from './pages/accountant/Invoice';

import Error from './pages/Error';

function App() {
  return (
    <>
    <Switch>

    {/* customer routes */}
    <Route exact path="/" component={Index}/>
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login}/>
    <Route exact path="/shop" component={Shop}/>
    {/* <Route exact path="/shop/:category" component={Shop}/> */}
    <Route exact path="/fruits" component={FruitsList}/>
    <Route exact path="/shop/product/:id" component={Product}/>
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/checkout" component={Checkout}/>
    <Route exact path="/profile/orders" component={Orderhistory}/>
    <Route exact path="/profile/order/review/:oId" component={Order}/>
    <Route exact path="/forgetpassword" component={ForgetPassword}/>
    <Route exact path="/user/changePassword/:email" component={ResetPassword}/>
    <Route exact path="/verify/code/:email" component={OTPcheck}/>

    {/* admin routes */}
    <Route exact path="/admin/dashboard" component={AdminDashboard} />
    <Route exact path="/admin/reports" component={Reports} />
    <Route exact path="/admin/addItem" component={AddStock} />
    <Route exact path="/admin/editItem" component={EditStock} />
    <Route exact path="/admin/updateStock" component={Updatestock} />
    <Route exact path="/admin/viewCategories" component={ViewCategories} />
    <Route exact path="/admin/categoryView/productsView/:name" component={ProductByCategory} />
    <Route exact path="/admin/viewSupplier" component={ViewSupplier} />
    <Route exact path="/admin/editSupplier/:id" component={EditSupplier} />
    <Route exact path="/admin/addSupplier" component={AddSupplier} />
    <Route exact path="/admin/viewEmployee" component={ViewEmployee} />
    <Route exact path="/admin/addEmployee" component={AddEmployee} />
    <Route exact path="/admin/editEmployee/:nic" component={EditEmployee} />

    {/* moderator routes */}
    <Route exact path="/moderator/dashboard" component={ModDashboard} />
    <Route exact path="/moderator/upcomingOrders" component={Upcomingorders}/>
    <Route exact path="/moderator/ongoingOrders" component={OngoingOrders}/>
    <Route exact path="/moderator/systemOrders" component={SystemOrders}/>
    <Route exact path="/moderator/supplierList" component={SupplierList} />
    <Route exact path="/moderator/orderRequests" component={OrderRequest} />
    <Route exact path="/moderator/deliveryPersons" component={DeliveryPerson} />
    <Route exact path="/moderator/leaveRequests" component={ModLeaveRequests} />
    <Route exact path="/moderator/leaveStats" component={ModLeaveStats} />

    {/* accountant routes */}
    <Route exact path="/accountant/dashboard" component={AccDashboard} />
    <Route exact path="/accountant/coDeliveries" component={CODeliveries} />
    <Route exact path="/accountant/invoiceHistory" component={InvoiceHistory} />
    <Route exact path="/accountant/leaveRequests" component={AccLeaveRequests} />
    <Route exact path="/accountant/leaveStats" component={AccLeaveStats} />
    <Route exact path="/accountant/salary" component={EmployeeSalary} />
    <Route exact path="/accountant/invoice" component={Invoice}/>
    <Route exact path="/error" component={Error}/>
    </Switch>
    </>
  );
}

export default App;
