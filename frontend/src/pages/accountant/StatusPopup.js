import React,{useState} from 'react';
import CustomerService from "../../services/CustomerService";
function StatusPopup(props){
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    CustomerService.updateCoDeliveryStatus(props.id, status).then((result) => {
      setMessage(result.data.message);
    }).catch((err)=>{
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
              <div className="flex p-4 justify-center items-center flex-col">
              <div className="inline-flex items-center justify-center text-redcolor font-semibold text-lg">{message}</div>
              <label class="inline-flex items-center justify-center mt-3">
                <input type="checkbox" class="form-checkbox h-8 w-8 text-green-600" 
                  value={status}
                  onChange={e => setStatus(true)} required/><span class="ml-6 text-gray-700 text-xl">Paid</span>
                </label>

                </div>
              {/*footer*/}
              <div className="flex items-center justify-center p-4 border-t border-gray-400 border-solid rounded-b">
                <button 
                  className="w-24 bg-redcolor p-2 mr-7 text-white text-center rounded-sm focus:outline-none cursor-pointer"
                  type="button"
                  onClick={props.canclePopup}>
                  Cancel
                </button>
                <button 
                  className="w-24 bg-secondarygreen hover:bg-lightgreen p-2 text-white text-center rounded-sm focus:outline-none cursor-pointer" type="submit"
                  type="submit">
                  Done
                </button>
                
              </div>
            </form>
          </div>
        </div>
      );

}

export default StatusPopup;