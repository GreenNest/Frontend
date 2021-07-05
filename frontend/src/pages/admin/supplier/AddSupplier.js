
const AddSupplier = (props) => {
    return (
        // <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        //     <div className="relative w-auto max-w-3xl mx-auto my-6">
        //         {/*content*/}
        //         <div className="relative flex flex-col w-full px-5 bg-gray-200 border-0 rounded-lg shadow-inner outline-none focus:outline-none">
        //             {/*header*/}
        //             <div className="flex items-start justify-center p-5 border-b border-gray-400 border-solid rounded-t">
        //                 <h3 className="text-2xl font-bold text-maingreen">ADD SUPPLIER</h3>
        //             </div>

        //             {/*body*/}
        //             <div className="relative flex-auto p-6">
        //                 <div>
        //                     <label className="font-medium">Name</label>
        //                     <input
        //                         type='text'
        //                         className="w-full p-1 mb-4 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
        //                         id='name'
        //                     />
        //                 </div>
        //                 <div>
        //                     <label className="font-medium">Address</label>
        //                     <input
        //                         type='text'
        //                         className="w-full p-1 mb-4 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
        //                         id='address'
        //                     />
        //                 </div>
        //                 <div>
        //                     <label className="font-medium">Mobile No</label>
        //                     <input
        //                         type='text'
        //                         className="w-full p-1 mb-4 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
        //                         id='mobile'
        //                     />
        //                 </div>
        //                 <div>
        //                     <label className="font-medium">Email</label>
        //                     <input
        //                         type="text"
        //                         className="w-full p-1 mb-4 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
        //                         id='email'
        //                     />
        //                 </div>
        //                 <div>
        //                     <label className="font-medium">Product Categories</label>
        //                     <input
        //                         type="text"
        //                         className="w-full p-1 mb-2 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
        //                         id='categories'
        //                     />
        //                 </div>
        //             </div>

        //             {/*footer*/}
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

        <div className="flex flex-col space-y-10">
            <h1 className="mt-10 text-3xl font-bold tracking-wide text-center text-black">Add Supplier</h1>
            <div className="flex justify-center mx-10">
                <form className="w-full p-8 mb-10 border-2 border-black border-opacity-25 rounded-md shadow-inner md:w-1/2 sm:w-3/4">
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full px-3 mb-6 space-y-2 md:w-1/2 md:mb-0">
                            <label className="block text-xl font-bold tracking-wide text-black" for="grid-first-name">
                                First Name
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-400" id="grid-first-name" type="text" placeholder="" />
                        </div>
                        <div className="w-full px-3 space-y-2 md:w-1/2">
                            <label className="block text-xl font-bold tracking-wide text-black" for="grid-last-name">
                                Last Name
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-400" id="grid-last-name" type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full px-3 space-y-2">
                            <label className="block text-xl font-bold tracking-wide text-black" for="grid-password">
                                Address
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-400" id="grid-password" type="password" placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full px-3 mb-6 space-y-2 md:mb-0 md:w-1/2">
                            <label className="block text-xl font-bold tracking-wide text-black" for="grid-first-name">
                                Email
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-400" id="grid-first-name" type="text" placeholder="" />
                        </div>
                        <div className="w-full px-3 space-y-2 md:w-1/2">
                            <label className="block text-xl font-bold tracking-wide text-black" for="grid-last-name">
                                Mobile
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-400" id="grid-last-name" type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full px-3 space-y-2">
                            <label className="block text-xl font-bold tracking-wide text-black" for="grid-state">
                                Product Categories
                            </label>
                            <div className="flex flex-wrap justify-between">
                                <div>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="w-4 h-4" />
                                        <span className="ml-2 font-medium">Fruits Plants</span>
                                    </label>
                                </div>
                                 <div>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="w-4 h-4" />
                                        <span className="ml-2 font-medium">Indoor Plants</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="w-4 h-4" />
                                        <span className="ml-2 font-medium">Outdoor Plants</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-end mt-10 -mb-2 space-x-4">
                        <button type="submit" className="p-2 text-base font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none background-transparent hover:shadow-lg focus:outline-none bg-redcolor">Cancel</button>
                        <button type="submit" className="p-2 text-base font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none background-transparent hover:shadow-lg focus:outline-none bg-maingreen hover:bg-secondarygreen">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddSupplier;