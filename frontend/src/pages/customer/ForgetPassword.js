import React,{useState} from 'react';
import CustomerService from '../../services/CustomerService';
import { useHistory, useLocation } from "react-router-dom";

function ForgetPassword() {
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');
    const [err, setErr] = useState('');
    const history = useHistory();

     const handleSubmit = (e) => {
       e.preventDefault();
       let token = {
         email: userEmail
       }
      let formData = new FormData();
      Object.keys(token).forEach((key) => {
        formData.append(key, token[key])
      })
      CustomerService.resetPassword(formData).then((response) => {
         setMessage(response.data.message);
         setTimeout(() => {
           history.push("/verify/code/" +userEmail);
         }, 3000);
       }).catch((err) => {
         setMessage(err.response.data.message);
       })

     }


    return (
        <div className="w-full h-screen flex justify-center items-center">
           <div className="w-3/6 bg-white rounded shadow-lg border-gray-400 border-solid border">
              <form className="p-6" onSubmit={e => {handleSubmit(e)}}>
              <h2 className="flex justify-center items-center font-bold text-30 text-maingreen">Forget Password</h2>
              <div className="flex justify-start items-center flex-col">
              <div className="flex justify-center items-center text-xs text-redcolor">{message}</div>
              <label className="text-lg w-full font-semibold">Enter your email</label>
              <input class="rounded w-full p-2 border-solid outline-none hover:border-hovergreen focus:border-maingreen border shadow border-black border-opacity-25 leading-tight text-gray-700"
                type="text"
                name="userEmail"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value) }
                required
                />
                <button class="px-10 py-2 ml-16 font-bold text-white bg-maingreen rounded hover:bg-secondarygreen focus:outline-none focus:shadow-outline text-lg" type="submit">Submit</button>

              
              </div>
              
              </form>
           </div>
            
        </div>
    )
}

export default ForgetPassword
