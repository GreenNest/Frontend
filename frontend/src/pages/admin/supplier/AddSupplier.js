import CheckBox from "../components/CheckBox";
import AdminSidebar from '../components/adminSidebar';

const AddSupplier = (props) => {
    return (
        <>
        <AdminSidebar/>
        <div className="flex flex-col space-y-10 ml-48 w-11/12">
            
            <div className="flex justify-center mx-16">
                <form className="w-full p-8  mt-6 bg-gray-500 bg-opacity-25 rounded-md shadow-inner md:w-1/2 sm:w-3/4">
                <div className="mt-0 mb-6 tracking-wide text-center text-maingreen font-bold text-2xl">Add Supplier</div>
                    <div className="flex flex-wrap mb-4">
                        <div className="w-full px-3 mb-4 space-y-2 md:w-1/2 md:mb-0">
                            <label className="text-lg p-1 w-2/3 font-semibold" for="grid-first-name">
                                First Name
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black outline-none text-lg rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2" id="grid-first-name" type="text" placeholder="" />
                        </div>
                        <div className="w-full px-3 space-y-2 md:w-1/2">
                            <label className="text-lg p-1 w-2/3 font-semibold" for="grid-last-name">
                                Last Name
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black outline-none text-lg rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2" id="grid-last-name" type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-4">
                        <div className="w-full px-3 space-y-2">
                            <label className="text-lg p-1 w-1/3 font-semibold" for="grid-address">
                                Address
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black outline-none text-lg rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2" id="grid-address" type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-4">
                        <div className="w-full px-3 mb-6 space-y-2 md:mb-0 md:w-1/2">
                            <label className="text-lg p-1 w-1/3 font-semibold" for="grid-first-name">
                                Email
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2" id="grid-first-name" type="text" placeholder="" />
                        </div>
                        <div className="w-full px-3 space-y-2 md:w-1/2">
                            <label className="text-lg p-1 w-1/3 font-semibold" for="grid-last-name">
                                Mobile
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black outline-none text-lg rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2" id="grid-last-name" type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full px-3 space-y-2">
                            <label className="text-lg p-2 w-2/3 font-semibold" for="grid-state">
                                Product Categories
                            </label>
                            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 ml-6 mt-2">
                                <CheckBox name="Fruit Plants" />
                                <CheckBox name="Food Plants" />
                                <CheckBox name="Flower Plants" />
                                <CheckBox name="Indoor Plants" />
                                <CheckBox name="Outdoor Plants" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center mt-6 -mb-12 space-x-6">
                        {/* <button type="submit" className="p-2 text-base font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none background-transparent hover:shadow-lg focus:outline-none bg-redcolor">Cancel</button>
                        <button type="submit" className="p-2 text-base font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none background-transparent hover:shadow-lg focus:outline-none bg-maingreen hover:bg-secondarygreen">Submit</button> */}
                        <button className="bg-maingreen hover:bg-hovergreen p-4 justify-center text-white font-bold  mb-8 rounded py-2 px-4 w-40">Submit</button>
                        <button className="bg-red-600 hover:bg-lightred p-4 justify-center text-white font-bold  mb-8 rounded py-2 px-4 w-40">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default AddSupplier;