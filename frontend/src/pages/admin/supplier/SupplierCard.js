import { ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrashAlt,
    faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';

const SupplierCard = () => {
    return (
        <div className="w-auto p-3 border-2 border-gray-500 border-opacity-25 rounded-lg shadow-xl">
            <div className="flex justify-end space-x-3">
            <ButtonIcon variant="border" size="small" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
            <ButtonIcon variant="border" size="small" icon={<FontAwesomeIcon icon={faTrashAlt} />} />
            </div>
            <div className="ml-8 font-medium">
                <p>Sulakshanee Theja</p>
                <p>Thuru Plant Nursery, Kandy</p>
                <p>071-1229957</p>
                <p>sulakshanee@gmail.com</p>
            </div>
            <div className="flex justify-around mt-2 space-x-3">
                <label className="px-1 rounded-md bg-lightgreen">Fruit Plants</label>
                <label className="px-1 rounded-md bg-lightgreen">Outdoor Plants</label>
                <label className="px-1 rounded-md bg-lightgreen">Indoor Plants</label>
            </div>
        </div>
    );
}

export default SupplierCard;