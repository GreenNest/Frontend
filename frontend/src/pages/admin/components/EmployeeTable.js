
const EmployeeTable = (props) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-base font-medium text-gray-900">{props.name}</div>
                <div className="text-base text-gray-500">{props.email}</div>
            </td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.nic}</td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.address}</td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.mobile}</td>
        </tr>                    
    );
}

export default EmployeeTable;