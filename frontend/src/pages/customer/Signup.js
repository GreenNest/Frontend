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
            <div className="flex justify-center w-full mb-16">
                <div class="w-2/4 shadow-xl mt-12 items-center flex justify-center border-2 border-green-900 rounded-md"> 
                    <form class="w-full max-w-lg justify-center mb-10" onSubmit={this.handleSubmit}>
                        <h3 class="font-sans text-3xl font-bold text-center mt-5 mb-8 text-maingreen">Create New Account</h3>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block tracking-wide text-black font-bold mb-3 mt-4 text-lg">
                                    First Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4" 
                                type="text"
                                name="firstname" 
                                value={this.state.firstname}
                                onChange={this.handleChange}
                                placeholder="Nimal"/>
                            </div>

                            <div class="w-full md:w-1/2 px-3">
                                <label class="block  tracking-wide text-black font-bold mb-3 mt-4 text-lg">
                                    Last Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4" 
                                type="text"
                                name="lastname" 
                                value={this.state.lastname}
                                onChange={this.handleChange}
                                placeholder="Perera"/>
                            </div>

                            <div class="w-full md:w-1/2 px-3">
                                <label class="block  tracking-wide text-black font-bold mb-3 mt-4 text-lg">
                                    Email
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4" 
                                type="text"
                                name="email" 
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="hiruni123@gmail.com"/>
                            </div>

                            <div class="w-full md:w-1/2 px-3">
                                <label class="block  tracking-wide text-black font-bold mb-3 mt-4 text-lg">
                                    Mobile Number
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4" 
                                type="text"
                                name="mobilenumber" 
                                value={this.state.mobilenumber}
                                onChange={this.handleChange}
                                placeholder=""/>
                            </div>

                            <div class="w-full md:w-1/2 px-3">
                                <label class="block  tracking-wide text-black font-bold mb-3 mt-4 text-lg">
                                    Password
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-2 px-4" 
                                type="password"
                                name="password" 
                                value={this.state.password}
                                onChange={this.handleChange}/>
                            </div>

                            <div class="w-full md:w-1/2 px-3">
                                <label class="block  tracking-wide text-black font-bold mb-3 mt-4 text-lg">
                                    Confirm Password
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-2 px-4" 
                                type="password"
                                name="confirmpassword"
                                value={this.state.confirmpassword}
                                onChange={this.handleChange}/>
                            </div>

                            <div class="justify-center items-center w-full">
                                <div class="md:justify-center items-center mt-6 mb-6">
                                        <label class="md:w-full block text-black font-medium">
                                            <input class="ml-4 form-checkbox h-3 w-3 leading-tight" type="checkbox" />
                                            <span class="ml-2 text-base">
                                                I agree the to terms and conditions
                                            </span>
                                        </label>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div class="md:flex items-center md:justify-between mt-4 ml-20">
                                    <button class="px-10 py-2 ml-8 font-bold text-white bg-red-800 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline text-lg" type="cancel" onClick={this.cancel.bind(this)}>
                                        Cancel
                                    </button>
                                    <button class="px-10 py-2 ml-16 font-bold text-white bg-maingreen rounded hover:bg-secondarygreen focus:outline-none focus:shadow-outline text-lg" type="submit">
                                        Sign Up
                                    </button>
                                </div>
                            </div>

                            <div class="mt-3">
                                <p class="mt-5 ml-4 text-base font-medium">If you have an account? 
                                    <Link class="ml-1 inline-block text-base font-bold text-maingreen align-baseline hover:text-green-1000 tracking-wide" to="/login">Sign In</Link>
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