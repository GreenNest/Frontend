import React, { Component } from 'react';
import AdminSidebar from '../components/adminSidebar';
import CustomerService from "../../../services/CustomerService";

class AddStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category:'',
            name:'',
            details:'',
            price:'',
            quantity:'',
            reorder_level:'',
            image_file1:'',
            image_file2:'',
            image_file3:'',
            isfeatured:'true',
            itemid:'',
            file:'',
            error: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };
    handleFileChange = (event) => {
        this.setState({
            [event.target.name]:event.target.files[0],
        });
    };
    handleFilesChange = (event) => {
        this.setState({
            [event.target.name]:event.target.files,
        });
    };

    handleSubmit = (event) =>{
        event.preventDefault();
        var form = {
            name: this.state.name,
            details: this.state.details,
            price: this.state.price,
            amount: this.state.quantity,
            isfeatured: this.state.isfeatured,
            reorderLevel: this.state.reorder_level,
            file:this.state.file,
            image1:this.state.image_file1,
            image2:this.state.image_file2,
            image3:this.state.image_file3
        }
        console.log(form);
        let formData = new FormData();
        Object.keys(form).forEach((key) => {
            formData.append(key, form[key])

        })
        for (var value of formData.values()) {
            console.log(value);
        }

        CustomerService.addProduct(formData).then((result) => {
            console.log(result.data.message);
            this.setState({error: result.data.message});
            console.log(this.state.error);
        }).catch((error) => {
            console.log(error.respose);
        })

    }
        //enctype="multipart/form-data"
    render() {
        const msg =this.state.error ? <div class="flex justify-center items-center text-maingreen">{this.state.error}</div>:'';

        return (
            <div>
            <AdminSidebar/>
            <div className="grid-container">
            {/* <div class="bg-maingreen"></div> */}
            <div className="main-area -mt-8 -ml-4">
               <div class="w-full m-16 bg-gray-500 bg-opacity-25 rounded ">
               {msg}
                  <form class="w-full justify-center p-4 flex flex-col items-center"  onSubmit={this.handleSubmit} > 
                        <div class=" text-maingreen font-bold text-2xl pb-2 mb-2">Add Item</div>
                        
                        <div class="grid grid-cols-2 w-full">
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="p-2 w-1/3 text-lg font-semibold">Category Name</label>
                                <select class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2"
                                    id = "category"
                                    name= "category"
                                    value={this.state.category}
                                    onChange={this.handleChange}>
                                    <option value="fruits">Fruits</option>
                                    <option value="flowers">Flowers</option>
                                    <option value="herbal">Flowers</option>
                                    <option value="vegetables">Vegetables</option>
                                </select>
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class=" text-lg p-2 w-1/3 font-semibold">Item Name</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2" 
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    placeholder="Mango"  />
                            </div>
                        </div>
                        <div class="grid grid-cols-2 w-full"> 
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 font-semibold">Item details</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2"  
                                    type="text"
                                    name="details"
                                    value={this.state.details}
                                    onChange={this.handleChange}
                                    placeholder="description...." />
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class=" text-lg p-2 w-1/3 font-semibold">Price</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2" 
                                    type="integer"
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.handleChange}
                                    placeholder="100" />
                            </div>
                        </div>
                        <div class="grid grid-cols-2 w-full">
                            
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 font-semibold">Item Quality</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2"  
                                    type="integer"
                                    name="quantity"
                                    value={this.state.quantity}
                                    onChange={this.handleChange}
                                    placeholder="1" />
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class=" text-lg p-2 w-1/3 font-semibold">Reorder Level</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2"  
                                    type="integer"
                                    name="reorder_level"
                                    value={this.state.reorder_level}
                                    onChange={this.handleChange}
                                    placeholder="1" />
                            </div>
                        </div>
                       <div class="grid grid-cols-2 w-full">
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 font-semibold">Featured</label>
                                <select class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2"
                                    id = "isfeatured"
                                    name= "isfeatured"
                                    value={this.state.isfeatured}
                                    onChange={this.handleChange}>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class=" text-lg p-2 w-1/3 font-semibold">Main Image</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid block border-2" 
                                    type="file"
                                    name="file"
                                    value={this.state.file[0]}
                                    onChange={this.handleFileChange} />
                            </div>
                        </div>
                        <div class="grid grid-cols-2 w-full">
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 font-semibold">Other Images(1)</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid block border-2" 
                                    type="file"
                                    name="image_file1"
                                    value={this.state.image_file1[0]}
                                    onChange={this.handleFileChange} />
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 font-semibold">Other Images(2)</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid block border-2" 
                                    type="file"
                                    name="image_file2"
                                    value={this.state.image_file2[0]}
                                    onChange={this.handleFileChange} />
                            </div>
                            
                        </div>
                        <div class="grid grid-cols-2 w-full">
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 font-semibold">Other Images(3)</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid block border-2" 
                                    type="file"
                                    name="image_file3"
                                    value={this.state.image_file3[0]}
                                    onChange={this.handleFileChange} />
                            </div>
                            
                        </div>
                        <div class="flex w-full justify-center items-center mt-7 -mb-5">
                            {/* <div class=" w-1/3 p-3 bg-secondarygreen text-mainyellow font-bold text-lg rounded-sm mt-5 mb-5 flex justify-center items-center cursor-pointer mr-8">Submit</div> */}
                            <button className="bg-maingreen hover:bg-hovergreen p-4 justify-center text-white font-bold mb-8 rounded py-2 px-4 w-40" type="submit">Submit</button>
                            <button className="bg-red-600 hover:bg-lightred p-4 justify-center text-white font-bold ml-12 mb-8 rounded py-2 px-4 w-40" type="cancel">Cancel</button>
                            {/* <div class="w-1/3 p-3 bg-redcolor text-mainyellow font-bold text-lg rounded-sm mt-5 mb-5 flex justify-center items-center cursor-pointer">Cancel</div> */}
                        </div>
                  </form>
               </div>
            </div>
            </div>
            </div>
        );
    }
}

export default AddStock;

