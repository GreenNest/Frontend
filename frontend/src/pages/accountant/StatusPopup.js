import React,{useState} from 'react';
import CustomerService from "../../services/CustomerService";
import { Link, useHistory } from "react-router-dom";
import Invoice from './Invoice';
function StatusPopup(props){
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState('');
  var history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    CustomerService.updateCoDeliveryStatus(props.id, status).then((result) => {
      setMessage(result.data.message);
      setTimeout(() => {
          history.push("/accountant/invoice/" +props.id);
         }, 3000);
    }).catch((err)=>{
      // if(err.response.status == 401){
      //   history.push("/login");
      // }else{
      //   setMessage(err.response.message);
      // }
      setMessage(err.response.message);
      
    })
  }


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-1/3 max-w-3xl mx-auto my-6">
            {/*content*/}
            <form className="relative flex flex-col w-full px-5 bg-gray-200 border-0 rounded-lg shadow-inner outline-none focus:outline-none" onSubmit={e => {handleSubmit(e)}}>
              {/*header*/}
              <div className="flex items-start justify-center p-5 border-b border-gray-400 border-solid rounded-t">
                <h3 className="text-2xl font-bold text-maingreen">Edit Order Status  </h3>
              </div>
    
              {/*body*/}
              <div className="flex flex-col items-center justify-center p-4">
              <div className="inline-flex items-center justify-center text-lg font-semibold text-redcolor">{message}</div>
              <label className="inline-flex items-center justify-center mt-3">
                <input type="checkbox" class="form-checkbox h-8 w-8 text-green-600" 
                  value={status}
                  onChange={e => setStatus(true)} required/><span class="ml-6 text-gray-700 text-xl">Paid</span>
                </label>

                </div>
              {/*footer*/}
              <div className="flex items-center justify-center p-4 border-t border-gray-400 border-solid rounded-b">
                <button 
                  className="w-24 p-2 text-center text-white rounded-sm cursor-pointer bg-redcolor mr-7 focus:outline-none"
                  type="button"
                  onClick={props.canclePopup}>
                  Cancel
                </button>
                <button 
                  className="w-24 p-2 text-center text-white rounded-sm cursor-pointer bg-secondarygreen hover:bg-lightgreen focus:outline-none" type="submit"
                >
                  Done
                </button>
                
              </div>
            </form>
          </div>
        </div>
      );

}

export default StatusPopup;