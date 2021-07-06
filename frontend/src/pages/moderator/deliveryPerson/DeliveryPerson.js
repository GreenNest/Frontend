
const DeliveryPerson = () => {
    return (
        <div className="flex flex-col my-10 lg:mx-32 sm:mx-10">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="mb-10 text-3xl font-bold">Delivery Persons</div>
                    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-lg font-bold tracking-wider text-left text-gray-700 uppercase">Name</th>
                                    <th className="px-6 py-3 text-lg font-bold tracking-wider text-left text-gray-700 uppercase">NIC</th>
                                    <th className="px-6 py-3 text-lg font-bold tracking-wider text-left text-gray-700 uppercase">Mobile</th>
                                    <th className="px-6 py-3 text-lg font-bold tracking-wider text-left text-gray-700 uppercase">Status</th>
                                    <th className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-base font-medium text-gray-900">Sulakshanee Theja</div>
                                        <div className="text-base text-gray-500">Sulakshanee@gmail.com</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-base text-gray-900">977224523v</div>
                                    </td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">0711229957</td>
                                    <td className="px-6 py-4 text-base font-semibold whitespace-nowrap text-secondarygreen">Available</td>
                                    <td className="px-6 py-4 text-base font-medium text-left whitespace-nowrap">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Contact
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-base font-medium text-gray-900">Sulakshanee Theja</div>
                                        <div className="text-base text-gray-500">Sulakshanee@gmail.com</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-base text-gray-900">977224523v</div>
                                    </td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">0711229957</td>
                                    <td className="px-6 py-4 text-base font-semibold text-red-500 whitespace-nowrap">Unavailable</td>
                                    <td className="px-6 py-4 text-base font-medium text-left whitespace-nowrap">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Contact
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-base font-medium text-gray-900">Sulakshanee Theja</div>
                                        <div className="text-base text-gray-500">Sulakshanee@gmail.com</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-base text-gray-900">977224523v</div>
                                    </td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">0711229957</td>
                                    <td className="px-6 py-4 text-base font-semibold whitespace-nowrap text-secondarygreen">Available</td>
                                    <td className="px-6 py-4 text-base font-medium text-left whitespace-nowrap">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Contact
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeliveryPerson;