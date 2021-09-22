import React,{useState} from 'react';
import CustomerService from "../../services/CustomerService";
import { Link } from "react-router-dom";
import Invoice from './Invoice';
function InvoicePopup(props){
  const [finvoice, setFinvoice] = useState('');
  const [message, setMessage] = useState('');
  console.log(props.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    let file= {
        invoice: finvoice,
        id:props.id
    }
    let formData = new FormData();
    Object.keys(file).forEach((key) => {
        formData.append(key, file[key])
    })

    CustomerService.sendInvoice(formData).then((res) => {
        setMessage(res.data.message);
    })

    console.log(formData);

   
  }


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-2/5 max-w-3xl mx-auto my-6">
            {/*content*/}
            <form className="relative flex flex-col w-full px-5 bg-gray-200 border-0 rounded-lg shadow-inner outline-none focus:outline-none" onSubmit={e => {handleSubmit(e)}}>
              {/*header*/}
              <div className="flex items-start justify-center p-5 border-b border-gray-400 border-solid rounded-t">
                <h3 className="text-2xl font-bold text-maingreen">Send Invoice</h3>
              </div>
    
              {/*body*/}
              <div className="flex flex-col items-center justify-center p-4">
              <div className="inline-flex items-center justify-center text-sm font-semibold text-redcolor mb-1">{message}</div>
                <input type="file" 
                  name={finvoice}
                  value={finvoice[0]}
                  onChange={e => setFinvoice(e.target.files[0])} required/>

                </div>
              {/*footer*/}
              <div className="flex items-center justify-center p-4 border-t border-gray-400 border-solid rounded-b">
                <button 
                  className="w-24 p-2 text-center text-white rounded-sm cursor-pointer bg-redcolor mr-7 focus:outline-none"
                  type="button"
                  onClick={props.canclePopup}>
                  Close
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

export default InvoicePopup;
