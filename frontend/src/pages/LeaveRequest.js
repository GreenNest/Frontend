import React, {Component} from 'react';
import AccountantSidebar from './accountant/dashboard/components/accountantSidebar';

class LeaveRequest extends Component {
    
    render() {
        return (
            <>
            <AccountantSidebar/>
          <div className='flex justify-center w-full'>
            <div class="w-2/4 shadow-xl mt-8 ml-64 bg-gray-500 bg-opacity-25 rounded items-center flex justify-center"> 
                <form class="w-full max-w-lg justify-center mb-12" >

                    {/* <h3 class="font-sans text-2xl font-bold text-center mt-4 mb-8">Request a Leave</h3> */}
                    <div class=" text-maingreen font-bold text-2xl text-center p-2 mb-2">Request a Leave</div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full md:w-1/2 px-3  md:mb-0">
                                <label class="block  tracking-wide text-black text-lg font-semibold mb-4 mt-4">
                                    First Name
                                </label>
                                <input class="appearance-none block w-full border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  border-solid hover:border-hovergreen focus:border-maingreen py-3 px-4 mb-3 " 
                                type="text" 
                                
                                 /> 
                            </div>

                            <div class="w-full md:w-1/2 px-3 ">
                                <label class="block  tracking-wide text-black text-lg font-semibold mb-4 mt-4">
                                    Last Name
                                </label>
                                <input class="appearance-none block w-full border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline border-solid hover:border-hovergreen focus:border-maingreen py-3 px-4 mb-3" 
                                type="text" 
                                
                                />
                            </div>
                        </div>
                        
                            <div className="flex flex-wrap mb-2 -mx-3">
                                <div class="w-full px-3 ">
                                    <label class="block  tracking-wide text-black text-lg font-semibold mb-4 mt-4">
                                        Reason for the Leave
                                    </label>
                                    <input class="appearance-none block w-full border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline border-solid hover:border-hovergreen focus:border-maingreen py-3 px-4 mb-3" 
                                    type="text" 
                                    
                                    />
                                </div>
                            </div>

                            <div class="flex flex-wrap -mx-3 mb-4 mt-4  ">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block  tracking-wide text-black text-lg font-semibold mb-4 mt-4">
                                    Date (From)
                                </label>
                                <input class="appearance-none block w-full border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  border-solid hover:border-hovergreen focus:border-maingreen py-3 px-4 mb-3 " 
                                type="date" 
                                
                                 /> 
                            </div>

                            <div class="w-full md:w-1/2 px-3 ">
                                <label class="block  tracking-wide text-black text-lg font-semibold mb-4 mt-4">
                                    Date (To)
                                </label>
                                <input class="appearance-none block w-full border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  border-solid hover:border-hovergreen focus:border-maingreen py-3 px-4 mb-3" 
                                type="date" 
                                
                                />
                            </div>
                        </div>

                            
                            <div class="flex  md:flex justify-center md:justify-center  mt-6 ">
                            
                                <button className="bg-maingreen hover:bg-hovergreen p-4 justify-center text-white font-bold  rounded py-2 px-4 w-40">Submit</button>
                                <button className="bg-red-600 hover:bg-lightred p-4 justify-center text-white font-bold ml-12 rounded py-2 px-4 w-40">Cancel</button>
                    
                            </div>
                            
                           
                        


                </form>
            </div>
        </div>
        </>
        );
    }
}

export default LeaveRequest;