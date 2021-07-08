
// import { ButtonIcon } from 'react-rainbow-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faTrashAlt,
//     faPencilAlt,
// } from '@fortawesome/free-solid-svg-icons';

import CategoryLabel from './CategoryLabel';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { MdDeleteSweep } from 'react-icons/md';

const DetailsCard = (props) => {
    return (
        <div className="w-full p-5 border-2 border-maingreen hover:bg-gray-500 hover:bg-opacity-25 rounded-lg shadow-xl sm:w-3/4 md:w-5/12">
            <div className="flex justify-end space-x-3">
            {/* <ButtonIcon className="w-7 h-7" size="mediam" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
            <ButtonIcon className="w-7 h-7" size="mediam" icon={<FontAwesomeIcon className="hover:text-red-700" icon={faTrashAlt} />} /> */}
            <Link to="/admin/editSupplier">
                    <FaIcons.FaEdit className="w-5 h-5 mt-2 hover:text-hovergreen"/>
            </Link>
            <MdDeleteSweep className="w-6 h-6 hover:text-red-700 mt-1.5"/>
            </div>
            <div className="ml-1 font-medium">
                <p>{props.name}</p>
                <p>{props.address}</p>
                <p>{props.mobile}</p>
                <p>{props.email}</p>
            </div>
            
            {props.supplier ? (
                <div className="grid grid-cols-2 items-center text-sm mt-5 gap-y-3 sm:grid-cols-3 sm:gap-x-2">
                    <CategoryLabel categoryName="Fruit Plants" />
                    <CategoryLabel categoryName="Indoor Plants" />
                    <CategoryLabel categoryName="Outdoor Plants" />
                    <CategoryLabel categoryName="Outdoor Plants" />
                    <CategoryLabel categoryName="Fruit Plants" />
                    <CategoryLabel categoryName="Indoor Plants" />
                </div>
            ) : null }
        </div>
    );
}

export default DetailsCard;