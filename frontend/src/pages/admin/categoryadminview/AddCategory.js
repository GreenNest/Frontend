import React, {useState} from 'react';
import { toast } from 'react-toastify';
import api from '../../../axiosContact';

function AddCategory() {

    const [category, setcategory] = useState("");

    // const categoryAdd = async () => {
    //     const res = await api.post("/addCategory", {
    //         categoryName: category,
    //     });
    //     return res.data;
    // }

    // var hello
    const categoryAdd = async () => {
        const res = await api.get(`/addCategory/${category}`);
        return res.data;
    }

    const addCategory = async () => {
        const result = await categoryAdd();
        if(result == 1){
            toast('Successfully add category', {
                autoClose: false,
                closeOnClick: true,
                progress: false,
                position:toast.POSITION.TOP_CENTER
            });
        }
    }

    return (
        <div className="absolute z-50 p-6 ml-20 bg-gray-300 rounded-sm shadow-xl mt-36">
            {console.log(category)}
            <form className="w-96 ">
                <h2 className="my-6 ml-20 text-lg">Add Category</h2>
                <input className="w-5/6 h-16 ml-8 placeholder-gray-500 placeholder-opacity-100 border-2 border-black "
                    placeholder="Enter Category Name"
                    name="category"
                    type="text"
                    onChange={(e) => {
                        setcategory(e.target.value);
                    }}
                />
                <div className="flex items-center justify-center m-8"> 
                    <button className="w-24 p-2 text-center text-white rounded-sm bg-secondarygreen hover:bg-lightgreen mr-7 focus:outline-none" onClick={addCategory}>Add</button>
                    <button className="w-24 p-2 text-center text-white rounded-sm bg-redcolor focus:outline-none">Close</button>
                </div>
            </form>
        </div>
    );
}

export default AddCategory;
