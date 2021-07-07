
const SupplierTable = (props) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-base font-medium text-gray-900">{props.name}</div>
                <div className="text-base text-gray-500">{props.email}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-base text-gray-900">{props.address}</div>
            </td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.mobile}</td>
            <td className="px-6 py-4 text-base font-medium text-left whitespace-nowrap">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Contact
                </a>
            </td>
        </tr>
    );
}

export default SupplierTable;