import React, { useState } from 'react';
import CustomerService from '../../services/CustomerService';
import { useHistory, useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword(){
    const {email} = useParams();
    const history = useHistory();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [ error, setError] = useState('');
    console.log(email);

    const handleSubmit = (e) => {
       e.preventDefault();
       const isValid = validate();
       let x = email;
       if(isValid){
           let data = {
               email: x,
               password: newPassword
           }
           let formData = new FormData();
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key])
            })
            CustomerService.updatePassword(formData).then((result) => {
                setError(result.data.message);
                setTimeout(() => {
                    history.push("/login");
                }, 3000);

            })
       }
    }

    const validate = () =>{
        if(newPassword !== confirmPassword){
            setError("Password did not match");
            return false;
        }    
        return true;
    }
    
        return (
            <>
            <div class="flex justify-center items-center w-full ">
            
            <div class=" flex justify-center items-center w-1/4 mt-20 mb-16 shadow-xl">
                
                
            <form class='bg-white shadow-lg rounded px-8 pt-6 pb-8  w-full' onSubmit={e => {handleSubmit(e)}}>
                <p class="text-3xl mb-5 text-center font-bold"> Reset Password </p>
                
                <div class="text-red-600 p-1 flex justify-center">{error}</div>
                <div class='mb-4'>
                    <label class='block mb-2 text-md font-bold text-gray-700'>
                        New Password
                    </label>
                    <input class='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black' 
                    type="password"  
                    name="newPassword"
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} required/>
                </div>

                <div class="mb-6">
                    <label class="block mb-2 text-md font-bold text-gray-700">
                        Confirm Password
                    </label>
                    <input class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none border-500 focus:outline-none focus:shadow-outline  focus:bg-white focus:border-black" 
                    type="password" 
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} required/>
                </div>
                    <div class="flex items-center justify-center mt-4">
                        <button class="px-8 py-2 font-bold text-white text-lg bg-maingreen rounded hover:bg-secondarygreen focus:outline-none focus:shadow-outline" type="submit">
                            Reset
                        </button> 
                    </div>
            </form>
                </div>
            </div>
            </>

        );
    
}

export default ResetPassword;
