import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Login extends Component {
    
    constructor(props){
        super(props);
        this.state={

            email: '',
            password: ''

        };
    }

    handleEmailChange =(event)=> {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange =(event)=>{
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event)=>{
        
    }
    render() {
        return (
            <div class="flex justify-center w-full container">
            <div class=" flex justify-center w-full mt-16 mb-16">
            <form class='bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-2/4' 
            onSubmit={this.handleSubmit}>
                <p class="text-secondarygreen text-20 text-center font-bold"> Login </p>
                <div class='mb-4'>
                    <label class='block mb-2 text-md font-bold text-gray-700'>
                        Email
                    </label>
                    <input class='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black' 
                    type="text" placeholder="email" 
                    value={this.state.email} 
                    onChange={this.handleEmailChange}/>
                </div>

                <div class="mb-6">
                    <label class="block mb-2 text-md font-bold text-gray-700">
                        Password
                    </label>
                    <input class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none border-500 focus:outline-none focus:shadow-outline  focus:bg-white focus:border-black" 
                    type="password" placeholder="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange} />
                </div>

                <div class="flex items-center justify-center">
                <a class="inline-block text-md font-bold text-black align-baseline hover:text-green-800" href="#">
                        Forgot Password?
                    </a>
                </div>

                <div class="flex items-center justify-center mt-4">
                    <button class="px-4 py-2 font-bold text-mainyellow bg-maingreen rounded hover:bg-secondarygreen focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                    
                </div>
                

                <div class>
                {/* <a class="inline-block text-md font-bold text-black align-baseline hover:text-green-1000" href="#"> */}
                    If you don't have an account? 
                    {/* </a> */}
                    <Link class="inline-block text-md font-bold text-black align-baseline hover:text-green-1000" to="/signup">Sign Up</Link>
                 </div> 
            </form>
            </div>
        //  </div>

        );
    }
}

export default Login;