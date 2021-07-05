import Dropdown from "../components/Dropdown";

const AddEmployee = (props) => {
    return (
        <div className="flex flex-col space-y-10">
            <h1 className="mt-10 text-3xl font-bold tracking-wide text-center text-black">Add Employeee</h1>
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
                        <div className="w-full px-3 space-y-2 md:w-1/2">
                            <label className="block text-xl font-bold tracking-wide text-black" for="grid-state">
                                State
                            </label>
                            <div className="relative">
                                <select className="block w-full px-4 py-3 pr-8 leading-tight text-black bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-400" id="grid-state">
                                    <option>Accountant</option>
                                    <option>Delivery Person</option>
                                    <option>Moderator</option>
                                    <option>Worker</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-black pointer-events-none">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
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

export default AddEmployee;