import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CustomerService from '../../services/CustomerService';


class Login extends Component {
    
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange =(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        let user = {
            userName: this.state.email,
            password: this.state.password
        }

        let newuser = JSON.stringify(user);
        console.log(newuser);
        CustomerService.logUser(this.state.email, this.state.password).then((result) => {
            console.log(result);
        })


    }


    render() {
        return (
            <div class="flex justify-center items-center w-full ">
            <div class=" flex justify-center items-center w-1/4 mt-20 mb-16 shadow-xl">
                
                
            <form class='bg-white shadow-lg rounded px-8 pt-6 pb-8  w-full' 
            onSubmit={this.handleSubmit}>
                <p class="text-3xl mb-5 text-center font-bold"> Login </p>
                <div class='mb-4'>
                    <label class='block mb-2 text-md font-bold text-gray-700'>
                        Email
                    </label>
                    <input class='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black' 
                    type="text" placeholder="email" 
                    name="email"
                    value={this.state.email} 
                    onChange={this.handleChange}/>
                </div>

                <div class="mb-6">
                    <label class="block mb-2 text-md font-bold text-gray-700">
                        Password
                    </label>
                    <input class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none border-500 focus:outline-none focus:shadow-outline  focus:bg-white focus:border-black" 
                    type="password" placeholder="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange} />
                </div>

                <div class="flex items-center justify-center">
                <a class="inline-block text-md font-bold text-black align-baseline hover:text-green-800" href="#">
                        Forgot Password?
                    </a>
                </div>

                <div class="flex items-center justify-center mt-4">
                    <button class="px-5 py-2 font-bold text-mainyellow bg-maingreen rounded hover:bg-secondarygreen focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                    
                </div>
                

                <div class="mt-4">
                {/* <a class="inline-block text-md font-bold text-black align-baseline hover:text-green-1000" href="#"> */}
                    If you don't have an account? 
                    {/* </a> */}
                    <Link class="ml-1 inline-block text-md font-bold text-black align-baseline hover:text-green-1000" to="/signup"> Sign Up</Link>
                 </div> 
            </form>
            </div>
            </div>
            
            

        );
    }
}

export default Login;