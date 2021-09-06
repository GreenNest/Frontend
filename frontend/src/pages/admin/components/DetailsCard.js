import CategoryLabel from './CategoryLabel';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { MdDeleteSweep } from 'react-icons/md';
import api from '../../../axiosContact';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DetailsCard(props) {

    const deleteSupplier = async (id) => {
        const res = await api.put(`/deleteSupplier/${id}`);
        return res.data;
    };

    const supplierDelete = async (id) => {
        if (window.confirm("Are you sure to remove this supplier?")) {
            const result = await deleteSupplier(id);
            if(result === 1){
                props.getSup();
                toast('Successfully Delete Supplier', {
                    autoClose: false,
                    closeOnClick: true,
                    progress: false,
                    position:toast.POSITION.TOP_CENTER
                });
            }
        }
    }

    return (
        <div className="w-full px-4 py-1 border-2 rounded-lg shadow-xl border-maingreen hover:bg-gray-500 hover:bg-opacity-25 sm:w-3/4 md:w-5/12">
            <div className="flex justify-end space-x-3">
                <Link to="/admin/editSupplier">
                        <FaIcons.FaEdit className="w-5 h-5 mt-2 hover:text-hovergreen"/>
                </Link>
                <MdDeleteSweep className="w-6 h-6 hover:text-red-700 mt-1.5" onClick={() => supplierDelete(props.id)} />
            </div>
            <div className="ml-1 font-medium">
                <p>{props.first_name} {props.last_name}</p>
                <p>{props.address}</p>
                <p>0{props.mobile}</p>
                <p>{props.email}</p>
            </div>
            
            <div className="grid items-center grid-cols-2 mt-5 text-sm gap-y-3 sm:grid-cols-3 sm:gap-x-2">
                {
                    props.categories.map((category, index) => (
                        <CategoryLabel key={index} categoryName={category.category_name} />
                    ))
                }
            </div>
        </div>
    );
}

export default DetailsCard;