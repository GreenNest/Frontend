import React from 'react'
import { useHistory } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import {useState} from 'react';
import '../../../styles/style.css';
import CustomerService from '../../../services/CustomerService';

function Ratemodel(props) {
    var history = useHistory();
    const [rating, setRating] = useState(0);
    const [descriptions, setDescriptions] = useState('');
    const [ message, setMessage] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let rate = {
            rate: rating,
            review: descriptions,
            date: new Date().toLocaleDateString('en-CA'),//new Date().toISOString().slice(0, 10),
            customer:{
               customer_id: props.customerId 
            },
            product:{
                product_id: props.pId
            }
        }
        CustomerService.addReview(rate).then((result) => {
            setMessage(result.data.message);
        }).catch((err) => {
            // if(err.response.status == 401){
            //     history.push("/login");
            // }
        })
    }
    
    return (
        <div className="absolute bg-white z-50 mt-36 ml-96 p-6 shadow-xl rounded-sm">
           <div>
           <form className="w-96" onSubmit={e => {handleSubmit(e)}}>
                <h2 className=" my-6 text-lg font-bold flex justify-center">Reviews & Rate</h2>
                <div className="flex justify-center my-6 space-x-4">
                {
                    [...Array(5)].map((star, index) => {
                        index +=1;
                        return(
                        <div
                            key={index}
                            className={index <= rating ? "text-yellow-600 h-8 w-8 outline-none border-none" : "text-gray-300 h-8 w-8 outline-none border-none"}
                            onClick={() => setRating(index)}
                            >
                            <FaStar className="star"/>
                        </div> ); 
                    })
                }
                
                </div>
                <div className="font-bold text-sm pb-1 flex justify-center items-center text-maingreen">{message}</div>
                <textarea className="w-5/6 h-32 ml-8 p-3 border-black border-2"
                    name="descriptions"
                    value={descriptions}
                    onChange = {e => setDescriptions(e.target.value)}
                    required />
                <div className="flex m-8 justify-center items-center"> 
                <button className="w-24 bg-secondarygreen hover:bg-lightgreen p-2 text-white text-center mr-7 rounded-sm focus:outline-none" type="submit">Send</button>
                <button className="w-24 bg-redcolor p-2 text-white text-center rounded-sm focus:outline-none" type="button" onClick={props.canclePopup1}>Close</button>
                </div>
            </form>
           </div>
        </div>
    )
}

export default Ratemodel

