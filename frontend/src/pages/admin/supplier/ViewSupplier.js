
const ViewSupplier = () => {
    return (
        <div className="bg-gray-600">
            <div className="w-3/4 h-screen pt-5 m-auto bg-blue-300">
                <div className="flex justify-between w-5/6 m-auto bg-indigo-600">
                    <button type="button" className="flex-initial px-3 font-bold text-white rounded-md bg-maingreen hover:bg-secondarygreen">+ ADD Supplier</button>
                    <div class="relative text-gray-400 focus-within:text-gray-400">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </span>
                        <input type="search" name="q" className="py-3 pl-10 text-sm text-black bg-white rounded-md focus:outline-none" placeholder="Search..." autocomplete="off"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewSupplier;