
const DeliveryPersonTable = (props) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-base font-medium text-gray-900">{props.first_name} {props.last_name}</div>
                <div className="text-base font-medium text-gray-500">{props.email}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-base font-medium text-gray-900">{props.address}</div>
            </td>
            <td className="px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap">0{props.mobile}</td>
            {
                props.status === 1 ? (
                    <td className="px-6 py-4 text-base font-medium text-green-800 whitespace-nowrap">Available</td>
                ) :
                    <td className="px-6 py-4 text-base font-medium text-red-800 whitespace-nowrap">Not Available</td>
            }
            <td className="px-6 py-4 text-base font-medium text-left whitespace-nowrap">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Contact
                </a>
            </td>
        </tr>
    );
}

export default DeliveryPersonTable;