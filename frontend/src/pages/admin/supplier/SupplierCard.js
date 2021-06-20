import { ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrashAlt,
    faPencilAlt,
    faLocationArrow,
    faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

const SupplierCard = () => {
    return (
        <div className="h-screen bg-indigo-700">
            <div className="w-1/4 bg-gray-400">
                <div>
                <ButtonIcon variant="border" size="small" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
                </div>
                <div>
                    <p>Sulakshanee Theja</p>
                    <p>Thuru Plant Nursery, Kandy</p>
                    <p>071-1229957</p>
                    <p>sulakshanee@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default SupplierCard;