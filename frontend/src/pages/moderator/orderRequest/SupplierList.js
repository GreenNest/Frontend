import SupplierTable from "./components/SupplierTable";
import ModeratorSidebar from '../components/moderatorSidebar';

const SupplierList = () => {
    return (
        <>
        <ModeratorSidebar/>
        <div className="w-11/12 ml-48">
        <div className="flex flex-col mx-8 my-10 mt-0 md:mx-40 sm:mx-10">
            <div className="flex mb-10 mt-8 justify-center font-bold text-2xl text-maingreen">Fruit Plants Suppliers</div>
            <div className="-my-2 flex overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-500 bg-opacity-25">
                                <tr>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left">Name</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left">Address</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left">Mobile</th>
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

            <div className="flex mb-10 mt-8 justify-center font-bold text-2xl text-maingreen">Flower Plants Suppliers</div>
            <div className="-my-2 flex overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-500 bg-opacity-25">
                                <tr>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left">Name</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left">Address</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left">Mobile</th>
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
        </div>
        </>
    );
}

export default SupplierList;