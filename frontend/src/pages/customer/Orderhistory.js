import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import SignedHeader from '../../components/SignedHeader';
import Footer from '../../components/Footer';
import api from '../../axiosContact';

function Orderhistory() {

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
