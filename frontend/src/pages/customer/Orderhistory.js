import React from 'react';
import {useState} from 'react';
import order from '../../assets/order.jpg';
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import Footer from '../../components/Footer';


 const Orderhistory = () => {
   const[orders, setOrders]= useState([
     {referanceid:10001, orderid:1100, orderplaced:'2021/07/23', items:4 , totalcost:2000,oredrstatus:'Deliverd'},
     {referanceid:10001, orderid:1101, orderplaced:'2021/07/23', items:4 , totalcost:2000,oredrstatus:'Deliverd'},
     {referanceid:10001, orderid:1102, orderplaced:'2021/07/23', items:4 , totalcost:2000,oredrstatus:'Pending'},
     {referanceid:10001, orderid:1103, orderplaced:'2021/07/23', items:4 , totalcost:2000,oredrstatus:'Deliverd'},
     {referanceid:10001, orderid:1104, orderplaced:'2021/07/23', items:4 , totalcost:2000,oredrstatus:'Deliverd'},
     {referanceid:10001, orderid:1105, orderplaced:'2021/07/23', items:4 , totalcost:2000,oredrstatus:'Deliverd'},
     {referanceid:10001, orderid:1106, orderplaced:'2021/07/23', items:4 , totalcost:2000,oredrstatus:'Deliverd'},
     {referanceid:10001, orderid:1107, orderplaced:'2021/07/23', items:4 , totalcost:2000,oredrstatus:'Deliverd'}
   ]);
    return (
      <>
      <Header/>
     
      <section>

      <div className="coimage">
      <img src={order} ></img>
      
      <div  class=" bg-gray-100 relative p-3 ml-36 z-50 -mt-96 mb-20 w-5/6 ">
       
      <h1 class="text-4xl ml-96 mt-6 pl-36 font-bold">Your Orders</h1>
      
      <div class=" w-100% mt-8" id="cutomer_o">
           
      <div class="flex space-x-24 p-6 text-xl  bg-maingreen text-white w-100% ">
       
        <h1 className="ml-8">Reference ID</h1>
        <h1 className="ml-8">Order ID</h1>
        <h1 className="ml-8">Order Placed</h1>
        <h1 className="ml-8">Items</h1>
        <h1 className="ml-8">Total Cost</h1>
        <h1 className="ml-8" >Order Status</h1>
      </div> 
   </div>
      <div>
        {orders.map((order)=>(
          <div class="flex space-x-36 p-6 m-10 border-l-4 boder-l-black text-lg bg-white  w-100%  overscroll-y-auto"  key={order.orderid} >
            <h3>{order.referanceid}</h3>
            <h3>{order.orderid}</h3>
            <h3>{order.orderplaced}</h3>
            <h3>{order.items}</h3>
            <h3>{order.totalcost}</h3>
            <h3 className="text-green-600">{order.oredrstatus}</h3>
            <Link to="/profile/order/review" ><button className="w-20 text-sm text-blue-500 hover:text-red-600 focus:outline-none focus:border-none">View more</button></Link>
          </div>
        ))}

      </div>
   </div>
   </div>
   </section>
   <Footer/>
   </>
    )
}

export default Orderhistory;