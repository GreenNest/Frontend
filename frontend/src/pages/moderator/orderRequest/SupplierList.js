import SupplierTable from "./components/SupplierTable";

const SupplierList = () => {
    return (
        <div className="flex flex-col mx-8 my-10 md:mx-40 sm:mx-10">
            <div className="mb-10 text-3xl font-bold">Fruit Plants Suppliers</div>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-base font-semibold tracking-wider text-left text-gray-500 uppercase">Name</th>
                                    <th className="px-6 py-3 text-base font-semibold tracking-wider text-left text-gray-500 uppercase">Address</th>
                                    <th className="px-6 py-3 text-base font-semibold tracking-wider text-left text-gray-500 uppercase">Mobile</th>
                                    <th className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <SupplierTable name="Sulakshanee Theja" email="sulakshanee@gmail.com" address="Pala Thawana, Sooriyawewa, Hambantota" mobile="0711234553" />
                                <SupplierTable name="Chathurika Perera" email="chathurika@gmail.com" address="Green House, No.265, Kurunagala" mobile="0715428643" />
                                <SupplierTable name="Hiruni Amarakoon" email="hiruni@gmail.com" address="Thuru Wimana, Kuliyapitiya, Kurunagala" mobile="0715829347" />
                                <SupplierTable name="Piyumi Dulanjalee" email="piyumi@gmail.com" address="Plant House, No.456, Matara" mobile="0772036782" />
                                <SupplierTable name="Hashan Chandima" email="hashan@gmail.com" address="Thuru Thuru, No.89, Kurunagala" mobile="0769299923" />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupplierList;