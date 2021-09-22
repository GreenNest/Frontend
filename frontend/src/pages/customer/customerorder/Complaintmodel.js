import React, {useState} from 'react'
import CustomerService from '../../../services/CustomerService';
import {useHistory } from 'react-router-dom';


function Complaintmodel(props) {
    const [description, setDescription] = useState('');
    const [ message, setMessage] = useState('');
    var history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        let complain = {
            complain: description,
            customer:{
               customer_id: props.customerId 
            },
            orderDetails:{
                order_id: props.orderId
            }
        }
        CustomerService.addcomplain(complain).then((result) => {
            setMessage(result.data.message);
        }).catch((err) => {
            if(err.response.status == 401){
                history.push("/login");
            }
            setMessage(err.message);
        })
        // console.log(complain);
    }
    return (
        <div className="absolute bg-white z-50 mt-36 ml-96 p-6 shadow-xl rounded-sm">
           <div>
           <form className="w-96" onSubmit={e => {handleSubmit(e)}}>
                <h2 className="ml-20 my-6 text-lg font-bold">Write Your Complaint</h2>
                <div className="font-bold text-sm pb-1 flex justify-center items-center text-redcolor">{message}</div>
                <textarea className="w-5/6 h-32 ml-8 p-3 border-black border-2"
                    name="description"
                    value={description}
                    onChange={ e => setDescription(e.target.value)}></textarea>
                <div className="flex m-8 justify-center items-center"> 
                <button className="w-24 bg-redcolor p-2 text-white text-center rounded-sm focus:outline-none mr-7" type="button" onClick={props.canclePopup2}>Close</button>
                <button className="w-24 bg-secondarygreen hover:bg-lightgreen p-2 text-white text-center rounded-sm focus:outline-none" type="submit">Send</button>
                </div>
            </form>
           </div>
        </div>
    )
}

export default Complaintmodel
