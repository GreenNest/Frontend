import React, {useState, useEffect} from 'react';
import AccountantSidebar from './accountant/dashboard/components/accountantSidebar';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import CustomerService from "../services/CustomerService";

function LeaveRequest(){
    const [reason, setReason] = useState('');
    const [fDate, setFDate] = useState('');
    const [tDate, setTDate] = useState('');
    const x = JSON.parse(localStorage.getItem('authorization'));
    const [ message, setMessage] = useState('');
    const history = useHistory();
    const [today, setToday ] = useState(new Date().toLocaleDateString('en-CA'));

    const { id } = useParams();
    console.log(x.eid);

    useEffect(() => {
        checkValidate();
    }, [])

    const dataValidate = () => {
        if(fDate > tDate){
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = dataValidate();
        console.log(isValid);
        let request = {
            fromDate: fDate,
            toDate : tDate,
            reason : reason,
            employee: {
                nic : x.eid
            }
        }
        // console.log(request);
        CustomerService.sendLeaveRequest(request).then((result) => {
            setMessage(result.data.message);
            setReason("");
            setFDate("");
            setTDate("");
        }).catch((err) => {
            if(err.response.status == 401){
                history.push("/login");
            }else{
                setMessage(err.response.message);
            }
            
        })
    }

    const checkValidate = async() => {
        if(!x){
            <Redirect to='/login' />
        }else{
            if(x.roles[0] != "accountant" || x.roles[0] != "moderator"){
                // console.log(x.roles);
                history.push("/error");
            }
        }
    }

        return (
            <>
            <AccountantSidebar/>
          <div className='flex justify-center w-full'>
            <div class="w-2/4 shadow-xl mt-8 ml-64 bg-gray-500 bg-opacity-25 rounded items-center flex justify-center"> 
                <form class="w-full max-w-lg justify-center mb-12" onSubmit={e => {handleSubmit(e)}}>

                    {/* <h3 class="font-sans text-2xl font-bold text-center mt-4 mb-8">Request a Leave</h3> */}
                    <div class=" text-maingreen font-bold text-2xl text-center p-2 mb-2">Request a Leave</div>
                    <p className="flex justify-center items-center text-lg text-redcolor font-semibold">{message}</p>
                            <div className="flex flex-wrap mb-2 -mx-3">
                                <div class="w-full px-3 ">
                                    <label class="block  tracking-wide text-black text-lg font-semibold mb-4 mt-4">
                                        Reason for the Leave
                                    </label>
                                    <input class="appearance-none block w-full border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline border-solid hover:border-hovergreen focus:border-maingreen py-3 px-4 mb-3" 
                                        type="text" 
                                        name="reason"
                                        value={reason}
                                        onChange = {e => setReason(e.target.value)}
                                        required />
                                </div>
                            </div>

                            <div class="flex flex-wrap -mx-3 mb-4 mt-4  ">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block  tracking-wide text-black text-lg font-semibold mb-4 mt-4">
                                    Date (From)
                                </label>
                                <input class="appearance-none block w-full border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  border-solid hover:border-hovergreen focus:border-maingreen py-3 px-4 mb-3 " 
                                    type="date"
                                    name="fDate"
                                    min={today}
                                    value={fDate}
                                    onChange = {e => setFDate(e.target.value)} 
                                    required/> 
                            </div>

                            <div class="w-full md:w-1/2 px-3 ">
                                <label class="block tracking-wide text-black text-lg font-semibold mb-4 mt-4">
                                    Date (To)
                                </label>
                                <input class="appearance-none block w-full border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  border-solid hover:border-hovergreen focus:border-maingreen py-3 px-4 mb-3" 
                                    type="date"
                                    name="tDate"
                                    min={today}
                                    value={tDate}
                                    onChange = {e => setTDate(e.target.value)}
                                    required/>
                            </div>
                        </div>

                            
                            <div class="flex  md:flex justify-center md:justify-center  mt-6 ">
                            
                                <button className="bg-maingreen hover:bg-hovergreen p-4 justify-center text-white font-bold  rounded py-2 px-4 w-40 outline-none" type="submit">Submit</button>
                    
                            </div>
                            
                           
                        


                </form>
            </div>
        </div>
        </>
        );
    }

export default LeaveRequest;