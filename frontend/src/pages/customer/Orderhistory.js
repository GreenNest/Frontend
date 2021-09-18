import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import SignedHeader from '../../components/SignedHeader';
import Footer from '../../components/Footer';
import api from '../../axiosContact';

function Orderhistory() {


//  const Orderhistory = () => {
//    const[orders, setOrders]= useState([
//      {referanceid:10001, orderid:1100, orderplaced:'2019/03/23', items:1 , totalcost:2000,oredrstatus:'Deliverd'},
//      {referanceid:10002, orderid:1101, orderplaced:'2020/07/23', items:1 , totalcost:1000,oredrstatus:'Deliverd'},
//      {referanceid:10003, orderid:1102, orderplaced:'2020/06/25', items:4 , totalcost:3000,oredrstatus:'Pending'},
//      {referanceid:10004, orderid:1103, orderplaced:'2021/02/23', items:6 , totalcost:4500,oredrstatus:'Deliverd'},
//      {referanceid:10005, orderid:1104, orderplaced:'2021/02/26', items:7 , totalcost:6000,oredrstatus:'Deliverd'},
//      {referanceid:10006, orderid:1105, orderplaced:'2021/03/10', items:3 , totalcost:1200,oredrstatus:'Deliverd'},
//      {referanceid:10007, orderid:1106, orderplaced:'2021/04/21', items:1 , totalcost:2000,oredrstatus:'Deliverd'},
//      {referanceid:10008, orderid:1107, orderplaced:'2021/05/23', items:4 , totalcost:2100,oredrstatus:'Deliverd'}
//    ]);
    return (
     
      <section>

  // var history = useHistory();
  const [header, setHeader] = useState(0);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const x = JSON.parse(localStorage.getItem('authorization'));


  useEffect(() => {
    getHeader();
    getTotalOrders(parseInt(x.id));
  }, [])

    const getHeader = async() => {
        const x = JSON.parse(localStorage.getItem('authorization'));
        if(!x){
            setHeader(<Header/>)
        }else{
            setHeader(<SignedHeader/>)
        }
    }

    const getTotalOrders = async(id) => {
      const res = await api.get(`/order/get/${id}`);
      if(res.data.data != null){
        setData(res.data.data);
      }else{
        setMessage(res.data.message);
      }

    }

  const checkStatus = (name) => {
    if(name === "Pending"){
      return <div className="ml-4 font-medium text-red-600">{name}</div>
    }else if(name === "Processing"){
      return <div className="ml-4 font-medium text-yellow-500">{name}</div>
    }else{
      return <div className="ml-4 font-medium text-maingreen">{name}</div>
    }
  }
  
  return (
    <>
    {header}
    <section>
      <div className="coimage">

//       <img src={order} ></img>
      
//       <div  class=" bg-gray-100 relative p-3 pr-12 ml-36 z-50 -mt-96 mb-20 w-5/6 ">
       
//       <h1 class="text-4xl ml-96 mt-6 pl-36 font-bold">Your Orders</h1>
      
//       <div class=" w-100% mt-8" id="cutomer_o">
           
//       <div class="flex space-x-24 p-6 text-xl  bg-maingreen text-white w-100% ">
       
//         <h1 className="ml-8">Reference ID</h1>
//         <h1 className="ml-8">Order ID</h1>
//         <h1 className="ml-8">Order Placed</h1>
//         <h1 className="ml-8">Items</h1>
//         <h1 className="ml-8">Total Cost</h1>
//         <h1 className="ml-8" >Order Status</h1>
//       </div> 
//    </div>
//       <div>
//         {orders.map((order)=>(
//           <div class="flex space-x-36 p-6 m-10 border-l-4 boder-l-black text-lg bg-white  w-100%  overscroll-y-auto"  key={order.orderid} >
//             <h3>{order.referanceid}</h3>
//             <h3>{order.orderid}</h3>
//             <h3>{order.orderplaced}</h3>
//             <h3>{order.items}</h3>
//             <h3>{order.totalcost}</h3>
//             <h3 className="text-green-600">{order.oredrstatus}</h3>
//             <Link to="/profile/order/review" ><button className="w-20 text-sm text-blue-500 hover:text-red-600 focus:outline-none focus:border-none">View more</button></Link>
//           </div>
//         ))}

        <div class="bg-gray-100 relative p-3 mt-5 mb-20 mx-auto w-5/6 rounded-md">
          <h1 class="m-5 font-bold text-center text-maingreen font-sans text-4xl">Your Orders</h1>
          <div class="mt-8">
            <div class="grid p-6 text-xl bg-maingreen text-white grid-cols-5">
              <div className="">Order ID</div>
              <div className="">Order Placed</div>
              {/* <div className="">Items</div> */}
              <div>Total Cost</div>
              <div className="">Order Status</div>
            </div> 


            {data.length !== 0  ? (data.map((order)=>(
              <div class="grid grid-cols-5 p-6 mt-8 text-lg bg-white"  key={order.order_id}>
                <div className="ml-4">{order.order_id}</div>
                <div className="ml-4">{order.date.substring(0,10)}</div>
                <div className="ml-4">{order.total_price}</div>
                {checkStatus(order.order_status)}
                <Link to={"/profile/order/review/" +order.order_id} ><button className="w-20 ml-5 text-base font-medium text-blue-500 hover:text-blue-700 focus:outline-none focus:border-none">View more</button></Link>
              </div>
            ))) : <div className="flex items-center justify-center p-2 font-bold text-20">{message}</div>}
          </div>
        </div>
      </div>
   </section>
   <Footer/>
  </>
    )
}

export default Orderhistory;
