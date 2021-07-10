import Dropdown from "../components/Dropdown";

const AddEmployee = (props) => {
    return (
        <div className="flex flex-col space-y-5">
            
            <div className="flex justify-center mx-10">
                <form className="w-full p-8 mb-6 ml-64 mt-4 bg-gray-500 bg-opacity-25 rounded shadow-inner md:w-1/2 sm:w-3/4">
                <div className="-mt-2 mb-8 tracking-wide text-center text-maingreen font-bold text-2xl">Add Employeee</div>
                    <div className="flex flex-wrap mb-2">
                        <div className="w-full px-3 mb-6 space-y-2 md:w-1/2 md:mb-0">
                            <label className="block text-lg font-semibold tracking-wide text-black" for="grid-first-name">
                                First Name
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black outline-none hover:border-hovergreen focus:border-maingreen border-2 rounded" id="grid-first-name" type="text" placeholder="" />
                        </div>
                        <div className="w-full px-3 space-y-2 md:w-1/2">
                            <label className="block text-lg font-semibold tracking-wide text-black" for="grid-last-name">
                                Last Name
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black outline-none hover:border-hovergreen focus:border-maingreen border-2 rounded" id="grid-last-name" type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-2">
                        <div className="w-full px-3 space-y-2">
                            <label className="block text-lg font-semibold tracking-wide text-black" for="grid-address">
                                Address
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black outline-none hover:border-hovergreen focus:border-maingreen border-2 rounded" id="grid-address" type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-2">
                        <div className="w-full px-3 space-y-2 md:w-1/2">
                            <label className="block text-lg font-semibold tracking-wide text-black" for="grid-nic">
                                NIC
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black outline-none hover:border-hovergreen focus:border-maingreen border-2 rounded" id="grid-nic" type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-2">
                        <div className="w-full px-3 mb-6 space-y-2 md:mb-0 md:w-1/2">
                            <label className="block text-lg font-semibold tracking-wide text-black" for="grid-first-name">
                                Email
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black outline-none hover:border-hovergreen focus:border-maingreen border-2 rounded" id="grid-first-name" type="text" placeholder="" />
                        </div>
                        <div className="w-full px-3 space-y-2 md:w-1/2">
                            <label className="block text-lg font-semibold tracking-wide text-black" for="grid-last-name">
                                Mobile
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black outline-none hover:border-hovergreen focus:border-maingreen border-2 rounded" id="grid-last-name" type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-2">
                        <div className="w-full px-3 space-y-2 md:w-1/2">
                            <label className="block text-lg font-semibold tracking-wide text-black" for="grid-state">
                                State
                            </label>
                            <div className="relative">
                                <select className="block w-full px-4 py-3 pr-8 leading-tight text-black outline-none hover:border-hovergreen focus:border-maingreen border-2 rounded" id="grid-state">
                                    <option>Accountant</option>
                                    <option>Delivery Person</option>
                                    <option>Moderator</option>
                                    <option>Worker</option>
                                </select>
                                {/* <div className="absolute inset-y-0 right-0 flex items-center px-2 text-black pointer-events-none">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center mt-4 -mb-4 space-x-8">
                        {/* <button type="submit" className="p-2 text-base font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none background-transparent hover:shadow-lg focus:outline-none bg-redcolor">Cancel</button>
                        <button type="submit" className="p-2 text-base font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none background-transparent hover:shadow-lg focus:outline-none bg-maingreen hover:bg-secondarygreen">Submit</button> */}
                        <button className="bg-maingreen hover:bg-hovergreen p-4 justify-center text-white font-bold rounded py-2 px-4 w-40">Submit</button>
                        <button className="bg-red-600 hover:bg-lightred p-4 justify-center text-white font-bold rounded py-2 px-4 w-40">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddEmployee;