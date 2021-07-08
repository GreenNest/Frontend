import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CustomerService from '../../services/CustomerService';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = { 
           firstname: '',
           lastname:'',
           email:'',
           mobilenumber:'',
           password:'',
           confirmpassword:'',
           role: 'customer' 
         };
         this.handleSubmit = this.handleSubmit.bind(this);
    }

        handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
        }


    handleSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state.mobilenumber);
        let customer = {
            first_name: this.state.firstname,
            last_name: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            mobile: parseInt(this.state.mobilenumber),
            role: this.state.role
            
        }
        console.log('customer =>' + JSON.stringify(customer));
        CustomerService.createCustomer(customer).then((result) => {
            this.props.history.push('/login');
            
        });

    }
    cancel (){
        //push to home page
        this.props.history.push('/');
    }


    render() {
        return (
            <div className='flex justify-center w-full mb-20 '>
                <div class="w-2/4 shadow-xl mt-12 items-center flex justify-center"> 
                    <form class="w-full max-w-lg justify-center mb-20" onSubmit={this.handleSubmit}>

                        <h3 class="font-sans text-2xl font-bold text-center mt-4 mb-8">Create New Account</h3>
                            <div class="flex flex-wrap -mx-3 mb-6  ">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block  tracking-wide text-black font-bold mb-4 mt-4">
                                        First Name
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3 " 
                                    type="text"
                                    name="firstname" 
                                    value={this.state.firstname}
                                    onChange={this.handleChange}
                                    placeholder="eg: Nimal"/>
                                </div>

                                <div class="w-full md:w-1/2 px-3 ">
                                    <label class="block  tracking-wide text-black font-bold mb-4 mt-4">
                                        Last Name
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                                    type="text"
                                    name="lastname" 
                                    value={this.state.lastname}
                                    onChange={this.handleChange}
                                    placeholder="eg: Perera"/>
                                </div>

                                
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block  tracking-wide text-black font-bold mb-4 mt-4">
                                        Email
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                                    type="text"
                                    name="email" 
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    placeholder="eg: hiruni123@gmail.com"/>
                                </div>

                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block  tracking-wide text-black font-bold mb-4 mt-4">
                                        Mobile Number
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                                    type="number"
                                    name="mobilenumber" 
                                    value={this.state.mobilenumber}
                                    onChange={this.handleChange}
                                    placeholder="eg: Kuliyapitiya"/>
                                </div>

                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block  tracking-wide text-black font-bold mb-4 mt-4">
                                        Password
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                                    type="password"
                                    name="password" 
                                    value={this.state.password}
                                    onChange={this.handleChange}/>
                                </div>

                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block  tracking-wide text-black font-bold mb-4 mt-4">
                                        Confirm Password
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                                    type="password"
                                    name="confirmpassword"
                                    value={this.state.confirmpassword}
                                    onChange={this.handleChange}/>
                                </div>

                                <div class="justify-center items-center w-full">
                                <div class="md:justify-center items-center mt-3 mb-6 w-1/2">
                                    <div class="md:w-2/3"></div>
                                    <label class="md:w-full block text-black font-bold">
                                        <input class="ml-4 form-checkbox h-3 w-3 leading-tight" type="checkbox" />
                                            <span class="text-sm ml-2">
                                                I agree the to terms and conditions
                                            </span>
                                        </label>
                                </div>
                                </div>

                                
                                <div className="flex items-center">
                                    <div class="md:flex items-center md:justify-between mt-6 ml-20">
                                
                                    

                                            <button class="px-10 py-3  font-bold text-mainyellow bg-red-800 rounded hover:bg-red-400 focus:outline-none focus:shadow-outline" type="cancel" onClick={this.cancel.bind(this)}>
                                                Cancel
                                            </button>

                                            <button class="px-10 py-3 ml-20 font-bold text-mainyellow bg-maingreen rounded hover:bg-secondarygreen focus:outline-none focus:shadow-outline" type="submit">
                                                Sign Up
                                            </button>
                        
                                    </div>
                                </div>

                                <div class="mt-4">
                        
                                    <p class="mt-5 ml-4">If you have an account? 
                            
                                    <Link class=" ml-1 inline-block text-md font-bold text-black align-baseline hover:text-green-1000" to="/login">Sign In</Link>

                                    </p>
                                </div> 

                    </div>

                </form>
                </div>
            </div>
        );
    }
}

export default Signup;