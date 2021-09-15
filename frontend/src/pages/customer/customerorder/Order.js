import React from 'react';
import {useState, useEffect} from 'react';
import Complaintmodel from './Complaintmodel';
import Ratemodel from './Ratemodel';
import b_avacado from "../../../assets/b_avacado.jpg"
import lemmon from "../../../assets/lemmon.jpg"
import plastic_pot from "../../../assets/plastic_pot.jpg"
import sensavaria from "../../../assets/sensavaria.jpg"
import Header from '../../../components/Header';
import SignedHeader from '../../../components/SignedHeader';
import Footer from '../../../components/Footer';
import api from '../../../axiosContact';
import { useParams } from 'react-router-dom';
function Order(){
      const [model1,setModel1] =useState(false);
      const [model2,setModel2] =useState(false);
      const [header, setHeader] = useState(0);
      const [data, setData] = useState([]);
      const [product, setProduct] = useState(0);
      const [order, setOrder] = useState(0);
      const { oId } = useParams();
      
      const x = JSON.parse(localStorage.getItem('authorization'));


      const toggleModel = (id) => {
        setModel1(!model1);
        setProduct(id);
      }

      const togglecomplain = () => {
        setModel2(!model2)
      }
      
      useEffect(async () => {
        getHeader();
        getOrderItems();
      
    }, [])

    const getHeader = async() => {
        const x = JSON.parse(localStorage.getItem('authorization'));
        if(!x){
            setHeader(<Header/>)
        }else{
            setHeader(<SignedHeader/>)
        }
    }

    const getOrderItems = async(id) => {
      const res = await api.get(`/orderItems/get/1`);
      if(res.data.data != null){
        setData(res.data.data);
      }
    }


  
    return (
      <>
      {header}
      <div className="w-100% h-auto mt-14 shadow-xl pb-14">             
        <div>
          <div className="flex-row justify-center w-5/6 mx-auto bg-gray-100 rounded-md item-center">
            <div>
              {model2 ?
                  <Complaintmodel canclePopup2={() => setModel2(false)} customerId={parseInt(x.id)} orderId={parseInt(oId)}/> :null
              }
              {model1 ?  
                  <Ratemodel canclePopup1={() => setModel1(false)} customerId={parseInt(x.id)} pId={product}/> : null
              }
            </div>
            <div className="grid grid-cols-6 p-6 mb-4 text-xl font-bold item-center">
              <div className="mx-2 "></div>
              <div className="mx-2 ">Ordered Items</div>
              <div className="mx-2 ml-8">Price</div>
              <div className="mx-2 ">Quantity</div>
              <div className="mx-2 -ml-3">Subtotal</div>
              <div className="mx-2 "></div>
            </div>
            <div className="p-6 ml-12 text-lg divide-y item-center">
              {data.length != 0 ? ( data.map((item, id)=>(
                <div class=" grid grid-cols-6 " key={id} >
                  <div className="my-4 "><img className="w-12 h-12 " src={"data:image/jpeg;base64," +item.image} alt="not found" /></div>
                  <div className="my-4 -ml-5">{item.name}</div>
                  <div className="my-4 ">{item.price/item.quantity} LKR</div>
                  <div className="my-4 ">{item.quantity}</div>
                  <div className="my-4 -ml-4">{item.price.toFixed(2)} LKR</div>
                  <div className="my-4 "><button className="h-12 text-base font-medium text-black bg-yellow-200 rounded w-36 hover:bg-yellow-300 focus:outline-none" onClick={() => toggleModel(item.productId)}>Review & Rate </button></div>                          
                </div>                        
              ) )) : <div className="font-bold text-20 p-2 flex justify-center items-center">Loading...</div>}                     
            </div>

            <div className="flex justify-end pb-10 mr-14">
              <button className="h-12 text-base font-medium text-white bg-red-800 rounded place-content-end w-36 hover:bg-red-600 focus:outline-none" onClick={togglecomplain}>Complain</button>                   
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    )
}

export default Order;