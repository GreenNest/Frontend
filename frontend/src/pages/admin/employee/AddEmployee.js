import Dropdown from "../components/Dropdown";

const AddEmployee = (props) => {
    return (
        // <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        //     <div className="relative w-auto max-w-3xl mx-auto my-6">
        //         <div className="relative flex flex-col w-full px-5 bg-gray-200 border-0 rounded-lg shadow-inner outline-none focus:outline-none">
        //             <div className="flex items-start justify-center p-5 border-b border-gray-400 border-solid rounded-t">
        //                 <h3 className="text-2xl font-bold text-maingreen">ADD SUPPLIER</h3>
        //             </div>

        //             <div className="relative grid grid-cols-2 p-6 gap-x-10 gap-y-5">
        //                 <div>
        //                     <label className="font-medium">Name</label>
        //                     <input
        //                         type='text'
        //                         className="w-full p-1 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
        //                         id='name'
        //                     />
        //                 </div>
        //                 <div>
        //                     <label className="font-medium">Address</label>
        //                     <input
        //                         type='text'
        //                         className="w-full p-1 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
        //                         id='address'
        //                     />
        //                 </div>
        //                 <div>
        //                     <label className="font-medium">Mobile No</label>
        //                     <input
        //                         type='text'
        //                         className="w-full p-1 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
        //                         id='mobile'
        //                     />
        //                 </div>
        //                 <div>
        //                     <label className="font-medium">Email</label>
        //                     <input
        //                         type="text"
        //                         className="w-full p-1 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
        //                         id='email'
        //                     />
        //                 </div>
        //                 <div>
        //                     <Dropdown />
        //                 </div>
        //             </div>

        //             <div className="flex items-center justify-end p-4 border-t border-gray-400 border-solid rounded-b">
        //                 <button 
        //                     className="px-6 py-2 mb-1 mr-2 text-base font-bold text-red-600 uppercase transition-all duration-150 ease-linear bg-gray-400 rounded shadow outline-none background-transparent hover:bg-gray-500 hover:shadow-lg focus:outline-none"
        //                     type="button"
        //                     onClick={props.canclePopup}
        //                     >
        //                     Cancel
        //                 </button>
        //                 <button 
        //                     className="px-6 py-2 mb-1 mr-1 text-base font-bold text-blue-900 uppercase transition-all duration-150 ease-linear bg-gray-400 rounded shadow outline-none hover:shadow-lg focus:outline-none hover:bg-gray-500"
        //                     type="button"
        //                     // onClick={() => setShowModal(false)}
        //                     >
        //                     Submit
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
  
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <h1 className="mt-20 text-3xl font-bold">Add Employeee</h1>
            <div className="relative w-1/2 mx-auto my-6 border rounded-lg shadow-inner">
                <form class="w-full max-w-lg my-10 mx-auto">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-black text-sm font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-100 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-black text-sm font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                        <input class="appearance-none block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-black text-sm font-bold mb-2" for="grid-password">
                                Address
                            </label>
                            <input class="appearance-none block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-black font-bold mb-2 text-sm" for="grid-first-name">
                                Email
                            </label>
                            <input class="appearance-none block w-full bg-gray-100 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-black text-sm font-bold mb-2" for="grid-last-name">
                                Mobile
                            </label>
                        <input class="appearance-none block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-black text-sm font-bold mb-2" for="grid-state">
                                State
                            </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-100 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-end -mx-3 space-x-4">
                        <button type="submit" className="p-2 text-base font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none background-transparent hover:shadow-lg focus:outline-none bg-redcolor">Cancel</button>
                        <button type="submit" className="p-2 text-base font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none background-transparent hover:shadow-lg focus:outline-none bg-maingreen hover:bg-secondarygreen">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddEmployee;