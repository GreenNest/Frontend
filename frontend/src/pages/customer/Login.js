import React, { Component } from 'react';

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
//p-25 w-2/4 items-center mt-20 ml-40 mr-60 shadow-inner
    render() {
        return (
            <div class="flex justify-center w-full container">
            <div class="w-2/4 shadow-inner mt-8">
            <form class='bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4' 
            onSubmit={this.handleSubmit}>
                <div class='mb-4'>
                    <label class='block mb-2 text-md font-bold text-gray-700'>
                        Email
                    </label>
                    <input class='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' 
                    type="text" placeholder="email" 
                    value={this.state.email} 
                    onChange={this.handleEmailChange}/>
                </div>

                <div class="mb-6">
                    <label class="block mb-2 text-md font-bold text-gray-700">
                        Password
                    </label>
                    <input class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none border-500 focus:outline-none focus:shadow-outline" 
                    type="password" placeholder="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}/>
                </div>

                <div class="flex items-center justify-center">
                <a class="inline-block text-md font-bold text-green-500 align-baseline hover:text-green-800" href="#">
                        Forgot Password?
                    </a>
                </div>

                <div class="flex items-center justify-center mt-4">
                    <button class="px-4 py-2 font-bold text-mainyellow bg-maingreen rounded hover:bg-secondarygreen focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                    
                </div>
                

                <div class>
                <a class="inline-block text-md font-bold text-green-800 align-baseline hover:text-green-1000" href="#">
                    If you don't have an account? Sign Up
                    </a>
                </div>
            </form>
            </div>
         </div>

        );
    }
}

export default Login;