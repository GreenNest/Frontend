import React, { Component } from 'react';
import AdminSidebar from '../components/adminSidebar';
import CustomerService from "../../../services/CustomerService";
import axios from 'axios';
import CheckBox from "../components/CheckBox";

class AddStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category:[],
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
            error: null,
            data: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    componentDidMount(){
        axios.get("http://localhost:8080/api/v1/get/categories").then((response) => {
            console.log(response.data.data);
            this.setState({data: response.data.data});
            console.log(this.state.data);
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };
    handleChecked=(event) => {
        // this.setState({
        //     [event.target.name]:event.target.value
        // });
        let selected = this.state.category;
        selected.push(event.target.value);
        this.setState({ selected });
        //this.setState([...this.state.category , event.target.value]); 
    }
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
            image3:this.state.image_file3,
            categories:this.state.category
        }
        //console.log(form);
        let formData = new FormData();
        Object.keys(form).forEach((key) => {
            formData.append(key, form[key])

        })
        // for (var value of formData.values()) {
        //     console.log(value);
        // }
        //console.log(this.state.category);

        CustomerService.addProduct(formData).then((result) => {
            //console.log(result.data.message);
            this.setState({error: result.data.message});
            //console.log(this.state.error);
        }).catch((error) => {
            console.log(error.respose);
            })

    }
        //enctype="multipart/form-data"
    render() {
        const msg =this.state.error ? <div class="flex justify-center items-center text-maingreen">{this.state.error}</div>:'';
        const categories = this.state.data.map((item, index) => {
            <div key={index}>
                <label> {item}
                    <input
                        key = {index}
                        name={item}
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
            </div>
                             });

        return (
            <div>
            <AdminSidebar/>
            <div className="grid-container">
            {/* <div class="bg-maingreen"></div> */}
            <div className="mt-6 -ml-4 main-area">
               <div class="w-full m-16 bg-gray-500 bg-opacity-25 rounded ">
               {msg}
                  <form class="w-full justify-start p-4 flex flex-col items-center"  onSubmit={this.handleSubmit} > 
                        <div class=" text-maingreen font-bold text-2xl pb-2 mb-2">Add Item</div>
                        
                        <div class="grid grid-cols-1 w-full md:grid-cols-2">
                            
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class=" text-lg p-2 w-1/3 font-semibold">Item Name</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2" 
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    placeholder="Mango"
                                    required/>
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 font-semibold">Item details</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2"  
                                    type="text"
                                    name="details"
                                    value={this.state.details}
                                    onChange={this.handleChange}
                                    placeholder="description...." required/>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 w-full"> 
                            
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class=" text-lg p-2 w-1/3 font-semibold">Price</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2" 
                                    type="integer"
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.handleChange}
                                    placeholder="100" required/>
                            </div>
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
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 w-full">
                            
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 font-semibold">Item Quality</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2"  
                                    type="integer"
                                    name="quantity"
                                    value={this.state.quantity}
                                    onChange={this.handleChange}
                                    placeholder="1" required/>
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class=" text-lg p-2 w-1/3 font-semibold">Reorder Level</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2"  
                                    type="integer"
                                    name="reorder_level"
                                    value={this.state.reorder_level}
                                    onChange={this.handleChange}
                                    placeholder="1" required/>
                            </div>
                        </div>
                       <div class="grid grid-cols-1 md:grid-cols-2 w-full">
                            
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class=" text-lg p-2 w-1/3 font-semibold">Main Image</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid block border-2" 
                                    type="file"
                                    name="file"
                                    value={this.state.file[0]}
                                    onChange={this.handleFileChange} required/>
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 font-semibold">Other Images(1)</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid block border-2" 
                                    type="file"
                                    name="image_file1"
                                    value={this.state.image_file1[0]}
                                    onChange={this.handleFileChange} required/>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 w-full">
                            
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 font-semibold">Other Images(2)</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid block border-2" 
                                    type="file"
                                    name="image_file2"
                                    value={this.state.image_file2[0]}
                                    onChange={this.handleFileChange} required/>
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label className="w-1/3 p-2 text-lg font-semibold">Other Images(3)</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid block border-2" 
                                    type="file"
                                    name="image_file3"
                                    value={this.state.image_file3[0]}
                                    onChange={this.handleFileChange} required/>
                            </div>
                            
                            
                        </div>
                        <div className="flex flex-col justify-start w-full p-1">
                        <p className="w-1/3 p-2 text-lg font-semibold">Categories</p>
                        <div class="grid grid-cols-2 w-full gap-2 md:grid-cols-3">
                        
                        {
                            this.state.data.map((item, index) => 
                                <div key={index} className="pl-2 font-semibold">
                                    <label> {item}
                                    <input
                                        value={item}
                                        type="checkbox"
                                        className="w-4 h-4 ml-2" 
                                        onChange={this.handleChecked}/>
                                </label>
                                </div>
                            )
                        }
                            
                        </div>
                        </div>
                        <div class="flex w-full justify-center items-center mt-7 -mb-5">
                            {/* <div class=" w-1/3 p-3 bg-secondarygreen text-mainyellow font-bold text-lg rounded-sm mt-5 mb-5 flex justify-center items-center cursor-pointer mr-8">Submit</div> */}
                            <button className="justify-center w-40 p-4 px-4 py-2 mb-8 font-bold text-white rounded bg-maingreen hover:bg-hovergreen" type="submit">Submit</button>
                            <button className="justify-center w-40 p-4 px-4 py-2 mb-8 ml-12 font-bold text-white bg-red-600 rounded hover:bg-lightred" type="cancel">Cancel</button>
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

