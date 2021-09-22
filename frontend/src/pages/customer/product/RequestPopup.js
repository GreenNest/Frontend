import React, { useState } from 'react';
import CustomerService from '../../../services/CustomerService';
import { useHistory } from 'react-router-dom';

function RequestPopup(props){
  const[descriptions, setDescriptions] = useState('');
  const [amount, setAmount] = useState(0);
  const id =props.productId;
  const x = JSON.parse(localStorage.getItem('authorization'));
  const [ message, setMessage] = useState('');
  var history = useHistory();


  const validate = () => {
    if(amount < props.count){
      setMessage("Request amount available in stock");
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    const isValid = validate();
    if(isValid){
      e.preventDefault();
    let response = {
      description: descriptions,
      quantity: parseInt(amount),
      productName: props.productName,
      customer:{
        customer_id: x.id
      }
    }
    CustomerService.addResponse(response).then((result) => {
      setMessage(result.data.message);
      setDescriptions('');
      setAmount('');
    }).catch((err) => {
      // if(err.response.status == 401){
      //   history.push("/login");
      // }
      setDescriptions('');
      setAmount('');
    })
    }
    setDescriptions("");
    setAmount("");

  }

  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        {/*content*/}
        <div className="relative flex flex-col w-full px-5 bg-gray-200 border-0 rounded-lg shadow-inner outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-center p-5 border-b border-gray-400 border-solid rounded-t">
            <h3 className="text-2xl font-bold text-maingreen">ADD ORDER REQUEST</h3>
          </div>
           <div className="flex justify-center items-center w-full text-maingreen">{message}</div>
          {/*body*/}
          <form onSubmit={e => {handleSubmit(e)}}>
          <div className="relative flex-auto p-6">
            <div>
              <label className="font-medium">Product Category</label>
              <input
                type='text'
                className="w-full p-2 mb-4 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
                id='productCategory'
                value={props.categoryName}
              />
            </div>
            <div>
              <label className="font-medium">Product</label>
              <input
                type='text'
                className="w-full p-2 mb-4 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
                id='product'
                value={props.productName}
              />
            </div>
            <div>
              <label className="font-medium">Quantity</label>
              <input
                type='number'
                name = "amount"
                className="w-full p-2 mb-4 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
                value={amount}
                onChange = {e => setAmount(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="font-medium">Description</label>
              <textarea
                className="w-full p-2 mb-2 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
                name="descriptions"
                value={descriptions}
                onChange = {e => setDescriptions(e.target.value)}
                required
              />
            </div>
          </div>

          {/*footer*/}
          <div className="flex items-center justify-end p-4 border-t border-gray-400 border-solid rounded-b">
            <button 
              className="px-6 py-2 mb-1 mr-2 text-base font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-redcolor background-transparent hover:shadow-lg focus:outline-none hover:bg-lightred"
              type="button"
              onClick={props.canclePopup}
              >
              {/* onClick={props.canclePopup} */}
              Cancel
            </button>
            <button 
              className="px-6 py-2 mb-1 mr-1 text-base font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-maingreen hover:shadow-lg focus:outline-none hover:bg-secondarygreen"
              type="submit"
              // onClick={() => setShowModal(false)}
            >
              Submit
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestPopup;