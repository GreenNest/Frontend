import React from 'react';
import './styles/index.css';
import './styles/shop.css';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import Orderhistory from './pages/customer/Orderhistory';
import Order from './pages/customer/Order';
import Shop from './pages/customer/Shop';

function App() {
  return (
    
   <Router>     
        <Switch>
          <Route exact path="/pages/customer/order_history">
               <Orderhistory />
          </Route>
          <Route  path="/pages/customer/order">
               <Order/>
          </Route>
          <Route  path="/pages/customer/Shop">
               <Shop/>
          </Route>
        </Switch>
   </Router>
  );
}

export default App;
