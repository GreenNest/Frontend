import React, {useState} from 'react';
import { toast } from 'react-toastify';
import api from '../../../axiosContact';

function AddCategory(props) {

    const [category, setcategory] = useState("");

    const categoryAdd = async () => {
        const res = await api.get(`/addCategory/${category}`);
        return res.data;
    }

    const addCategory = async () => {
        const result = await categoryAdd();
        if(result === 1){
            toast('Successfully Add Category', {
                autoClose: false,
                closeOnClick: true,
                progress: false,
                position:toast.POSITION.TOP_CENTER
            });
        }
    }

    return (
        <div className="absolute flex justify-center w-full">
            <div className="flex flex-col items-center justify-center w-1/3 p-8 mt-20 bg-gray-200 border-2 border-gray-400 rounded-md shadow-2xl border-opacity-1000 gap-y-4">
                <h2 className="mb-5 text-2xl font-bold text-center text-maingreen">Add Category</h2>
                <input className="w-4/6 placeholder-gray-500 placeholder-opacity-100 border-2 outline-none h-14 hover:border-hovergreen focus:border-maingreen"
                    placeholder="Eg: Fruit Plants"
                    name="category"
                    type="text"
                    onChange={(e) => {
                        setcategory(e.target.value);
                    }}
                />
                <div className="flex flex-wrap gap-x-5"> 
                    <button className="justify-center p-4 px-4 py-2 font-bold text-white rounded w-36 bg-maingreen hover:bg-hovergreen" onClick={addCategory}>Submit</button>
                    <button className="justify-center p-4 px-4 py-2 font-bold text-white bg-red-600 rounded w-36 hover:bg-lightred" onClick={props.canclePopup}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default AddCategory;
