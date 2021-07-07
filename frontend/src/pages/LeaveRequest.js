import React, {Component} from 'react';

class LeaveRequest extends Component {
    
    render() {
        return (
          <div className='flex justify-center w-full mb-20 '>
            <div class="w-2/4 shadow-xl mt-12 items-center flex justify-center"> 
                <form class="w-full max-w-lg justify-center mb-20" >

                    <h3 class="font-sans text-2xl font-bold text-center mt-4 mb-8">Request a Leave</h3>
                        <div class="flex flex-wrap -mx-3 mb-6  ">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block  tracking-wide text-black font-bold mb-4 mt-4">
                                    First Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3 " 
                                type="text" 
                                
                                 /> 
                            </div>

                            <div class="w-full md:w-1/2 px-3 ">
                                <label class="block  tracking-wide text-black font-bold mb-4 mt-4">
                                    Last Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                                type="text" 
                                
                                />
                            </div>
                        </div>
                        
                            <div className="flex flex-wrap mb-6 -mx-3">
                                <div class="w-full px-3 ">
                                    <label class="block  tracking-wide text-black font-bold mb-4 mt-4">
                                        Reason for the Leave
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                                    type="text area" 
                                    
                                    />
                                </div>
                            </div>

                            <div class="flex flex-wrap -mx-3 mb-6  ">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block  tracking-wide text-black font-bold mb-4 mt-4">
                                    Date (From)
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3 " 
                                type="date" 
                                
                                 /> 
                            </div>

                            <div class="w-full md:w-1/2 px-3 ">
                                <label class="block  tracking-wide text-black font-bold mb-4 mt-4">
                                    Date (To)
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                                type="date" 
                                
                                />
                            </div>
                        </div>

                            
                            <div class="flex  md:flex justify-between md:justify-between  mt-6 ">
                            
                                

                                <button class="px-10 py-2  font-bold text-mainyellow bg-red-800 rounded hover:bg-red-400 focus:outline-none focus:shadow-outline" type="cancel">
                                    Cancel
                                </button>

                                <button class="px-10 py-2  font-bold text-mainyellow bg-maingreen rounded hover:bg-secondarygreen focus:outline-none focus:shadow-outline" type="submit">
                                    Submit
                                </button>
                    
                            </div>
                            
                           
                        


                </form>
            </div>
        </div>
        );
    }
}

export default LeaveRequest;