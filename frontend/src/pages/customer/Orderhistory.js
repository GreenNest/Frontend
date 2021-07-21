import React from 'react';
import {useState, useEffect} from 'react';
import { Link, useHistory } from "react-router-dom";
import Header from '../../components/Header';
import SignedHeader from '../../components/SignedHeader';
import Footer from '../../components/Footer';
import CustomerService from '../../services/CustomerService';


function Orderhistory() {
  var history = useHistory();
  const [header, setHeader] = useState(0);
    const[orders, setOrders]= useState([
      {orderid:1150, orderplaced:'2021/05/20', items:3, totalcost:'200LKR', oredrstatus:'Deliverd'},
      {orderid:1000, orderplaced:'2021/01/01', items:2, totalcost:'1250LKR', oredrstatus:'Deliverd'},
      {orderid:888, orderplaced:'2020/08/15', items:2, totalcost:'3000LKR', oredrstatus:'Deliverd'},
      {orderid:563, orderplaced:'2020/07/23', items:1, totalcost:'150LKR', oredrstatus:'Deliverd'},
      {orderid:299, orderplaced:'2020/03/18', items:1, totalcost:'500LKR', oredrstatus:'Deliverd'},
      {orderid:200, orderplaced:'2020/003/01', items:2, totalcost:'2000LKR', oredrstatus:'Deliverd'},
      {orderid:87, orderplaced:'2019/11/25', items:6, totalcost:'5000LKR', oredrstatus:'Deliverd'},
      {orderid:61, orderplaced:'2019/09/23', items:7, totalcost:'6250LKR', oredrstatus:'Deliverd'}
    ]);

  useEffect(async () => {
        if(sessionStorage.getItem("token") != null){
            console.log(sessionStorage.getItem("token"));
            let loinState = {
                cipher: sessionStorage.getItem("token")
            }
            CustomerService.checkUserLogin(loinState).then((result) => {
                console.log(result);
                if(result.data.loginState == 1){    
                    setHeader(<SignedHeader/>)
                }else{
                    setHeader(<Header/>)
                }
            });
        }else{
            setHeader(<Header/>)
        }
    }, [])
  

  return (
    <>
    {header}
    <section>
      <div className="coimage">
        <div class="bg-gray-100 relative p-3 mt-14 mb-20 mx-auto w-5/6 rounded-md">
          <h1 class="mt-6 font-bold text-center text-maingreen font-sans text-4xl">Your Orders</h1>
          <div class="mt-8">
            <div class="grid p-6 text-xl bg-maingreen text-white grid-cols-6">
              <div className="">Order ID</div>
              <div className="">Order Placed</div>
              <div className="">Items</div>
              <div>Total Cost</div>
              <div className="">Order Status</div>
            </div> 

            <div class="grid grid-cols-6 p-6 mt-8 text-lg bg-white">
                <div className="ml-4">1264</div>
                <div className="ml-4">2021/07/11</div>
                <div className="ml-4">4</div>
                <div className="ml-4">3550LKR</div>
                <div className="ml-4 font-medium text-red-600">Pending</div>
                <Link to="/profile/order/review" ><button className="w-20 ml-5 text-base font-medium text-blue-500 hover:text-blue-700 focus:outline-none focus:border-none">View more</button></Link>
              </div>
          

            {orders.map((order)=>(
              <div class="grid grid-cols-6 p-6 mt-8 text-lg bg-white"  key={order.orderid}>
                <div className="ml-4">{order.orderid}</div>
                <div className="ml-4">{order.orderplaced}</div>
                <div className="ml-4">{order.items}</div>
                <div className="ml-4">{order.totalcost}</div>
                <div className="ml-4 font-medium text-green-700">{order.oredrstatus}</div>
                <Link to="/profile/order/review" ><button className="w-20 ml-5 text-base font-medium text-blue-500 hover:text-blue-700 focus:outline-none focus:border-none">View more</button></Link>
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