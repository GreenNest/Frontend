import React, { Component } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import AdminSidebar from '../components/adminSidebar';
import CustomerService from "../../../services/CustomerService";
import axios from 'axios';

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
    
    // var history = useHistory();

    // checkValidate = async() => {
    //     const y = JSON.parse(localStorage.getItem('authorization')); 
    //     if(!y){
    //         <Redirect to='/login' />
    //     }else{
    //         if(y.roles[0] == "moderator" || y.roles[0] == "customer" || y.roles[0] == "accountant"){
    //             history.push("/error");
    //         }
            
    //     }
    // }

    componentDidMount(){
        // checkValidate();
        axios.get("http://localhost:8080/api/v1/get/categories").then((response) => {
            this.setState({data: response.data.data});
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };

    handleChecked=(event) => {
        let selected = this.state.category;
        selected.push(event.target.value);
        this.setState({ selected });
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
        let formData = new FormData();
        Object.keys(form).forEach((key) => {
            formData.append(key, form[key])

        })

        CustomerService.addProduct(formData).then((result) => {
            this.setState({error: result.data.message});
        }).catch((error) => {
            console.log(error.respose);
            })
        this.setState();
    }

    render() {
        const msg = this.state.error ? <div class="flex justify-center items-center text-maingreen">{this.state.error}</div> : '';
        this.state.data.map((item, index) => (
            <div key={index}>
                <label> {item}
                    <input
                        key = {index}
                        name={item}
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                    />
                </label>
            </div>
        ));

        return (
            <>
                <AdminSidebar/>
                <div className="w-10/12 h-full ml-44">
                    <div class="float-right w-5/6 mt-10 mb-8 mr-5 bg-gray-500 bg-opacity-25 rounded">
                        {msg}
                        <form class="w-full justify-start p-4 flex flex-col items-center ml-3 -mt-3" onSubmit={this.handleSubmit}> 
                            <h4 className="m-8 text-3xl font-bold text-center text-maingreen">Edit Item</h4>
                            <div class="grid grid-cols-1 w-full md:grid-cols-2">
                                <div class="flex justify-start items-center p-1 mb-3 w-full">
                                    <label class=" text-lg p-2 w-1/3 font-semibold">Item Name</label>
                                    <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2" 
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        placeholder="Eg: Mango"
                                        required
                                    />
                                </div>
                                <div class="flex justify-start items-center p-1 mb-3 w-full">
                                    <label class="text-lg p-2 w-1/3 font-semibold">Item Details</label>
                                    <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2"  
                                        type="text"
                                        name="details"
                                        value={this.state.details}
                                        onChange={this.handleChange}
                                        placeholder="Eg: Description"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 w-full">
                                <div class="flex justify-start items-center p-1 mb-3 w-full">
                                    <label class=" text-lg p-2 w-1/3 font-semibold">Item Price</label>
                                    <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2" 
                                        type="integer"
                                        name="price"
                                        value={this.state.price}
                                        onChange={this.handleChange}
                                        placeholder="Eg: 250"
                                        required
                                    />
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
                                    <label class="text-lg p-2 w-1/3 font-semibold">Item Quantity</label>
                                    <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2"  
                                        type="integer"
                                        name="quantity"
                                        value={this.state.quantity}
                                        onChange={this.handleChange}
                                        placeholder="Eg: 100"
                                        required
                                    />
                                </div>
                                <div class="flex justify-start items-center p-1 mb-3 w-full">
                                    <label class=" text-lg p-2 w-1/3 font-semibold">Reorder Level</label>
                                    <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2"  
                                        type="integer"
                                        name="reorder_level"
                                        value={this.state.reorder_level}
                                        onChange={this.handleChange}
                                        placeholder="Eg: 10"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 w-full">
                                <div class="flex justify-start items-center p-1 mb-3 w-full">
                                    <label class=" text-lg p-2 w-1/3 font-semibold">Main Image</label>
                                    <input class="w-1/2 outline-none text-sm rounded p-2 border-solid block border-2" 
                                        type="file"
                                        name="file"
                                        value={this.state.file[0]}
                                        onChange={this.handleFileChange}
                                        required
                                    />
                                </div>
                                <div class="flex justify-start items-center p-1 mb-3 w-full">
                                    <label class="text-lg p-2 w-1/3 font-semibold">Other Images(1)</label>
                                    <input class="w-1/2 outline-none text-sm rounded p-2 border-solid block border-2" 
                                        type="file"
                                        name="image_file1"
                                        value={this.state.image_file1[0]}
                                        onChange={this.handleFileChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 w-full">
                                <div class="flex justify-start items-center p-1 mb-3 w-full">
                                    <label class="text-lg p-2 w-1/3 font-semibold">Other Images(2)</label>
                                    <input class="w-1/2 outline-none text-sm rounded p-2 border-solid block border-2" 
                                        type="file"
                                        name="image_file2"
                                        value={this.state.image_file2[0]}
                                        onChange={this.handleFileChange}
                                        required
                                    />
                                </div>
                                <div class="flex justify-start items-center p-1 mb-3 w-full">
                                    <label className="w-1/3 p-2 text-lg font-semibold">Other Images(3)</label>
                                    <input class="w-1/2 outline-none text-sm rounded p-2 border-solid block border-2" 
                                        type="file"
                                        name="image_file3"
                                        value={this.state.image_file3[0]}
                                        onChange={this.handleFileChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-start w-full p-1">
                                <label className="w-1/3 p-2 text-lg font-semibold">Item Categories</label>
                                <div class="grid grid-cols-2 gap-2 mt-1 ml-6 md:grid-cols-4">
                                    {
                                        this.state.data.map((item, index) => 
                                            <div key={index} className="inline-flex items-center">
                                                <input
                                                    value={item}
                                                    type="checkbox"
                                                    className="w-4 h-4" 
                                                    onChange={this.handleChecked}
                                                />
                                                <label className="mt-1 ml-4 font-medium">{item}</label>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div class="flex flex-wrap justify-center mt-8 space-x-8 -mb-3">
                                <button className="justify-center w-40 p-4 px-4 py-2 mb-8 font-bold text-white rounded bg-maingreen hover:bg-hovergreen">Submit</button>
                                <button className="justify-center w-40 p-4 px-4 py-2 mb-8 font-bold text-white bg-red-600 rounded hover:bg-lightred">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default AddStock;

