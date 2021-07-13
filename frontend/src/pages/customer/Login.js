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
            <div class="flex justify-center items-center w-full">
                <div class="flex justify-center items-center mt-14 mb-16 shadow-xl border-2 border-maingreen rounded-md">  
                    <form class='bg-white shadow-lg rounded w-full px-14 py-8' onSubmit={this.handleSubmit}>
                        <p class="font-sans text-3xl font-bold text-center mb-8 text-maingreen"> Login </p>
                        <div class='mb-4'>
                            <label class='block tracking-wide text-black font-semibold mb-3 mt-4 text-lg'>
                                Email
                            </label>
                            <input class='rounded w-full p-2 border-solid outline-none hover:border-hovergreen focus:border-maingreen border shadow border-black border-opacity-25 leading-tight text-gray-700' 
                            type="text" placeholder="example@gmail.com" 
                            value={this.state.email} 
                            onChange={this.handleEmailChange}/>
                        </div>

                        <div class="mb-6">
                            <label class="block tracking-wide text-black font-semibold mb-3 mt-4 text-lg">
                                Password
                            </label>
                            <input class="rounded w-full p-2 border-solid outline-none hover:border-hovergreen focus:border-maingreen border shadow border-black border-opacity-25 leading-tight text-gray-700" 
                            type="password" placeholder=""
                            value={this.state.password}
                            onChange={this.handlePasswordChange} />
                        </div>

                        <div class="flex items-center justify-center">
                        <a class="inline-block text-base font-semibold text-black align-baseline hover:text-green-800" href="#">
                                Forgot Password?
                            </a>
                        </div>

                        <div class="flex items-center justify-center mt-4">
                            <button class="px-8 py-2 font-bold text-white text-lg bg-maingreen rounded hover:bg-secondarygreen focus:outline-none focus:shadow-outline" type="submit">
                                Sign In
                            </button> 
                        </div>

                        <div class="mt-4 text-base font-medium">
                        {/* <a class="inline-block text-md font-bold text-black align-baseline hover:text-green-1000" href="#"> */}
                            If you don't have an account? 
                            {/* </a> */}
                            <Link class="ml-1 inline-block text-base font-bold text-maingreen align-baseline hover:text-green-1000 tracking-wide" to="/signup"> Sign Up</Link>
                        </div> 
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;