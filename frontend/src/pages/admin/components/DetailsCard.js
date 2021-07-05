
import { ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrashAlt,
    faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';

import CategoryLabel from './CategoryLabel';

const DetailsCard = (props) => {
    return (
        <div className="w-full p-5 border-2 border-gray-500 border-opacity-25 rounded-lg shadow-xl sm:w-3/4 md:w-5/12">
            <div className="flex justify-end space-x-3">
            <ButtonIcon variant="border" size="small" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
            <ButtonIcon variant="border" size="small" icon={<FontAwesomeIcon icon={faTrashAlt} />} />
            </div>
            <div className="ml-8 font-medium">
                <p>{props.name}</p>
                <p>{props.address}</p>
                <p>{props.mobile}</p>
                <p>{props.email}</p>
            </div>
            
            {props.supplier ? (
                <div className="grid grid-cols-2 mt-5 gap-y-3 sm:grid-cols-3 sm:gap-x-2">
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