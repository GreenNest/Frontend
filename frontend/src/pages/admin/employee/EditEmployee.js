import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomerService from '../../../services/CustomerService';
import AdminSidebar from '../components/adminSidebar';


const initialState = {
    firstname: '',
    lastname: '',
    address: '',
    nic: '',
    email: '',
    mobile: '',
    role: 'accountant',
    password: '12345',
    account_status: 0,
    email_err: '',
    mobile_err: ''
}
toast.configure();

class AddEmployee extends Component{

    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
    });
    };

    validate(){
        let email_err= "";
        let mobile_err = "";
        let formValid = "";


        if(!this.state.email.includes("@")){
           email_err = "Invalida email";
           formValid = false;
        }

        if(this.state.mobile.length < 10){
            mobile_err = "Invalid mobile number";
            formValid = false;
        }

        if(email_err || mobile_err){
            this.setState({ email_err, mobile_err})
            return false;
        }
        
        return true;
     
    }


    handleSubmit = (event)=>{
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
           console.log(this.state);

           let employee = {
               nic: this.state.nic,
               first_name: this.state.firstname,
               last_name: this.state.last_name,
               address: this.state.address,
               mobile: parseInt(this.state.mobile),
               account_status: 0,
               userProfile: {
                   email: this.state.email,
                   password: this.state.password,
                   authorities:[
                    {
                        roleCode: this.state.role
                    }
                ]
               }
           }

           console.log("employee = " + JSON.stringify(employee));
           CustomerService.createEmployee(employee).then((result) => {
               console.log(result);
               if(result.data == true){
                   toast('Successfully create an account', {
                   autoClose: false,
                   closeOnClick: true,
                   progress: false,
                   position:toast.POSITION.TOP_CENTER
                   });
               }
               else{
                   toast('Already have an account please signup', {
                    autoClose: false,
                    closeOnClick: true,
                    progress: false,
                    position:toast.POSITION.TOP_CENTER
                });
               }
           })

           this.setState(initialState);

        }
    }

    
    render() {
        return (
            <>
            <AdminSidebar/>
        <div className="flex flex-col space-y-5">
            
            <div className="flex justify-center mx-10">
                <form className="w-full p-8 mt-4 mb-6 ml-64 bg-gray-500 bg-opacity-25 rounded shadow-inner md:w-1/2 sm:w-3/4"  onSubmit={this.handleSubmit}>
                <div className="mb-8 -mt-2 text-2xl font-bold tracking-wide text-center text-maingreen">Add Employeee</div>
                    <div className="flex flex-wrap mb-2">
                        <div className="w-full px-3 mb-6 space-y-2 md:w-1/2 md:mb-0">
                            <label className="block text-lg font-semibold tracking-wide text-black" for="grid-first-name">
                                First Name
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black border-2 rounded outline-none hover:border-hovergreen focus:border-maingreen" id="grid-first-name" 
                            type="text" 
                            name="firstname"
                            value={this.state.firstname}
                            onChange={this.handleChange}
                            placeholder="eg: Nimal" />
                        </div>
                        <div className="w-full px-3 space-y-2 md:w-1/2">
                            <label className="block text-lg font-semibold tracking-wide text-black" for="grid-last-name">
                                Last Name
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black border-2 rounded outline-none hover:border-hovergreen focus:border-maingreen" id="grid-last-name" 
                            type="text"
                            name="lastname"
                            value={this.state.lastname}
                            onChange={this.handleChange} 
                            placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-2">
                        <div className="w-full px-3 space-y-2">
                            <label className="block text-lg font-semibold tracking-wide text-black" for="grid-address">
                                Address
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black border-2 rounded outline-none hover:border-hovergreen focus:border-maingreen" id="grid-address" 
                            type="text"
                            name="address"
                            value={this.state.address}
                            onChange={this.handleChange} 
                            placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-2">
                        <div className="w-full px-3 space-y-2 md:w-1/2">
                            <label className="block text-lg font-semibold tracking-wide text-black" for="grid-nic">
                                NIC
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black border-2 rounded outline-none hover:border-hovergreen focus:border-maingreen" id="grid-nic" 
                            type="text"
                            name="nic"
                            value={this.state.nic}
                            onChange={this.handleChange} 
                            placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-2">
                        <div className="w-full px-3 mb-6 space-y-2 md:mb-0 md:w-1/2">
                            <label className="block text-lg font-semibold tracking-wide text-black" for="grid-first-name">
                                Email
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black border-2 rounded outline-none hover:border-hovergreen focus:border-maingreen" id="grid-first-name" 
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange} 
                            placeholder="" />
                            <div class="text-red-600 pl-1">{this.state.email_err}</div>
                        </div>
                        <div className="w-full px-3 space-y-2 md:w-1/2">
                            <label className="block text-lg font-semibold tracking-wide text-black" for="grid-last-name">
                                Mobile
                            </label>
                            <input className="block w-full px-4 py-3 leading-tight text-black border-2 rounded outline-none hover:border-hovergreen focus:border-maingreen" id="grid-last-name" 
                            type="number"
                            name="mobile"
                            value={this.state.mobile}
                            onChange={this.handleChange}
                            placeholder="" />
                            <div class="text-red-600 pl-1">{this.state.mobile_err}</div>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-2">
                        <div className="w-full px-3 space-y-2 md:w-1/2">
                            <label className="block text-lg font-semibold tracking-wide text-black" for="role">
                                State
                            </label>
                            <div className="relative">
                                <select className="block w-full px-4 py-3 pr-8 leading-tight text-black border-2 rounded outline-none hover:border-hovergreen focus:border-maingreen" 
                                id="role" 
                                name="role" 
                                value={this.state.role} 
                                onChange={this.handleChange}>
                                    <option value="accountant">Accountant</option>
                                    <option value="delivery-person">Delivery Person</option>
                                    <option value="moderator">Moderator</option>
                                    <option value="worker">Worker</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center mt-4 -mb-4 space-x-8">
                        {/* <button type="submit" className="p-2 text-base font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none background-transparent hover:shadow-lg focus:outline-none bg-redcolor">Cancel</button>
                        <button type="submit" className="p-2 text-base font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none background-transparent hover:shadow-lg focus:outline-none bg-maingreen hover:bg-secondarygreen">Submit</button> */}
                        <button className="justify-center w-40 p-4 px-4 py-2 font-bold text-white rounded bg-maingreen hover:bg-hovergreen" type="submit">Submit</button>
                        <button className="justify-center w-40 p-4 px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-lightred" type="cancel">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
    }
}

export default AddEmployee;