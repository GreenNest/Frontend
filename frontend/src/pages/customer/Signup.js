import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = { 

           firstname: '',
           lastname:'',
           email:'',
           mobilenumber:'',
           password:'',
           confirmpassword:'' 


         };


        }

        handlefirstnameChange = (event) =>{
            this.state({
                firstname: event.target.value
            })
        }

        handlelastnameChange = (event) =>{
            this.state({
                lastname: event.target.value
            })
        }

        

        handleemailChange = (event) =>{
            this.state({
                email: event.target.value
            })
        }

        handlemobilenumberChange = (event) =>{
            this.state({
                mobilenumber: event.target.value
            })
        }

        handlepasswordChange = (event) =>{
            this.state({
                password: event.target.value
            })
        }

        handleconfirmpasswordChange = (event) =>{
            this.state({
                confirmpassword: event.target.value
            })
        }

    handleSubmit = (event)=>{
    }


    render() {
        return (
            <div className='flex justify-center w-full mb-20 '>
                <div class="w-2/4 shadow-xl mt-12 items-center flex justify-center"> 
                    <form class="w-full max-w-lg justify-center mb-20" onSubmit={this.handleSubmit}>

                        <h3 class="font-sans text-2xl font-bold text-center mt-4 mb-8">Create New Account</h3>
                            <div class="flex flex-wrap -mx-3 mb-6  ">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-black font-bold mb-4 mt-4">
                                        First Name
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3 " 
                                    type="text" 
                                    value={this.state.firstname}
                                    onChange={this.handlefirstnameChange}
                                    placeholder="eg: Nimal"/>
                                </div>

                                <div class="w-full md:w-1/2 px-3 ">
                                    <label class="block uppercase tracking-wide text-black font-bold mb-4 mt-4">
                                        Last Name
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                                    type="text" 
                                    value={this.state.lastname}
                                    onChange={this.handlelastnameChange}
                                    placeholder="eg: Perera"/>
                                </div>

                                
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-black font-bold mb-4 mt-4">
                                        Email
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                                    type="text" 
                                    value={this.state.email}
                                    onChange={this.handleemailChange}
                                    placeholder="eg: hiruni123@gmail.com"/>
                                </div>

                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-black font-bold mb-4 mt-4">
                                        Mobile Number
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                                    type="number" 
                                    value={this.state.mobilenumber}
                                    onChange={this.handlemobilenumberChange}
                                    placeholder="eg: Kuliyapitiya"/>
                                </div>

                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-black font-bold mb-4 mt-4">
                                        Password
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                                    type="password" 
                                    value={this.state.password}
                                    onChange={this.handlepasswordChange}/>
                                </div>

                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-black font-bold mb-4 mt-4">
                                        Confirm Password
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                                    type="password" 
                                    value={this.state.confirmpassword}
                                    onChange={this.handleconfirmpasswordChange}/>
                                </div>

                                <div class="justify-center items-center w-full">
                                <div class="md:justify-center mt-3 mb-6 w-1/2">
                                    <div class="md:w-2/3"></div>
                                    <label class="md:w-full block text-black font-bold">
                                        <input class="ml-4 form-checkbox h-3 w-3 leading-tight" type="checkbox" />
                                            <span class="text-sm ml-2">
                                                I agree the to terms and conditions
                                            </span>
                                        </label>
                                </div>
                                </div>

                                <div class="md:flex items-center md:justify-between mt-6 ml-20">
                                
                                    

                                    <button class="px-10 py-3  font-bold text-mainyellow bg-red-800 rounded hover:bg-red-400 focus:outline-none focus:shadow-outline" type="submit">
                                        Cancel
                                    </button>

                                    <button class="px-10 py-3 ml-20 font-bold text-mainyellow bg-maingreen rounded hover:bg-secondarygreen focus:outline-none focus:shadow-outline" type="submit">
                                        Sign Up
                                    </button>
                        
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