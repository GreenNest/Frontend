import React,{useState, useEffect} from 'react';
import CustomerService from '../../services/CustomerService';
import { useHistory, useParams } from "react-router-dom";

function OTPcheck() {
  const history = useHistory();
  const [otp, setOtp] = useState(0);
  const [message, setMessage] = useState('');
  const [requestCode, setRequestCode] = useState(0);
  const {email} = useParams();
  console.log(email);

    useEffect(() => {
      getVerifyCode();
    }, [])

    const getVerifyCode = async() => {
      let userEmail = email;
      CustomerService.getVerificationCode(userEmail).then((response) => {
        setRequestCode(response.data.data);
      }).catch((err) => {
        console.log(err);
      })
    }

     const handleSubmit = (e) => {
       e.preventDefault();
       if(requestCode != otp){
         setMessage("Invalida code");
       }else{
         setMessage("Verifying...");
         setTimeout(() => {
           history.push("/user/changePassword/" +email);
         }, 3000);
       }
     }


    return (
        <div className="w-full h-screen flex justify-center items-center">
           <div className=" bg-white w-2/5 rounded shadow-lg border-gray-400 border-solid border">
              <form className="p-6" onSubmit={e => {handleSubmit(e)}}>
              <h2 className="flex justify-center items-center font-bold text-30 text-maingreen">Verification</h2>
              <div className="flex justify-start items-center flex-col">
              <div className="flex justify-center items-center text-lg text-redcolor">{message}</div>
              <label className="w-full text-lg font-semibold">Enter the verification code that we will send to your email.</label>
              <input class="rounded w-full p-2 border-solid outline-none hover:border-hovergreen focus:border-maingreen border shadow border-black border-opacity-25 leading-tight text-gray-700"
                type="number"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value) }
                required
                />
                <button class="px-10 py-2 font-bold text-white bg-maingreen rounded hover:bg-secondarygreen focus:outline-none focus:shadow-outline text-lg mt-5" type="submit">Submit</button>
              </div>
              
              </form>
           </div>
            
        </div>
    )
}

export default OTPcheck

