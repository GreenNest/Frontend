import React from 'react';
import {useState} from 'react';
import order from '../../assets/order.jpg';


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
     
      <section>

      <div className="coimage">
      <img src={order} ></img>
      
      
      <div  class=" bg-gray-100 relative p-3 ml-36 z-50 -mt-96 mb-20 w-5/6 ">
       
      <h1 class="text-4xl ml-96 mt-6 text-4xl pl-36 font-bold">Your Orders</h1>
      
      <div class=" w-100% mt-28 " id="cutomer_o">
           
      <div class="flex   space-x-24 p-6 m-10 text-xl  w-100% ">
       
        <h1>Reference ID</h1>
        <h1>Order ID</h1>
        <h1>Order Placed</h1>
        <h1>Items</h1>
        <h1>Total Cost</h1>
        <h1 >Order Status</h1>
      </div> 
   </div>
      <div>
        {orders.map((order)=>(
          <div class="flex  space-x-36 p-6 m-10 border-l-4 text-lg bg-gray-200  w-100%  overscroll-y-auto"  key={order.orderid} >
            <h3>{order.referanceid}</h3>
            <h3>{order.orderid}</h3>
            <h3>{order.orderplaced}</h3>
            <h3>{order.items}</h3>
            <h3>{order.totalcost}</h3>
            <h3 className="text-green-600">{order.oredrstatus}</h3>
            <button className="text-blue-500 text-sm w-20 hover:bg-blue-200">View more</button>
          </div>
        ))}

      </div>
   </div>
   </div>
   </section>
    )
}

export default Orderhistory;