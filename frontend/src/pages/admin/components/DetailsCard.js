
import { ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrashAlt,
    faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';

import CategoryLabel from './CategoryLabel';

const DetailsCard = (props) => {
    return (
        <div className="w-auto p-3 border-2 border-gray-500 border-opacity-25 rounded-lg shadow-xl">
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
                <div className="flex justify-around mt-2 space-x-3">
                <CategoryLabel categoryName="Fruit Plants" />
                <CategoryLabel categoryName="Indoor Plants" />
                <CategoryLabel categoryName="Outdoor Plants" />
                </div>
            ) : null }
        </div>
    );
}

export default DetailsCard;