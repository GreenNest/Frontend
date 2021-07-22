import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CustomerService from '../../services/CustomerService';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header';
import axios from 'axios';

toast.configure();
const initialState = {
    error: ''
}
class Login extends Component {
     state = initialState;
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            loginState: false,
            error:''
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
        let loginModel = {
            userName: this.state.email,
            password: this.state.password
        }

        let newuser = JSON.stringify(loginModel);
        console.log(loginModel);
        
        axios.post("http://localhost:8080/api/v1/auth/login", loginModel).then((response) => {
            console.log(response.data);
            if(response.data.token){
                console.log("9999");
                localStorage.setItem("authorization", JSON.stringify(response.data))
                const x = JSON.parse(localStorage.getItem('authorization'));
                console.log(x.token);
                console.log(x.roles);
                if(x.roles[0] == 'customer'){
                    console.log("you are customer");
                    this.props.history.push("/");
                }
            }
        }).catch((err) => {
            console.log(err.response);
            if(err && err.response){
                this.setState({error: "Something wet wrong please try again."})
            }
        });

        // CustomerService.logUser(loginModel).then((result) => {
        //     console.log(result.data);
        //     let response = result.data;

        //     if(response == "username not found"){
        //         console.log(response);
        //         toast('username not found', {
        //             autoClose: false,
        //             closeOnClick: true,
        //             progress: false,
        //             position:toast.POSITION.TOP_CENTER
        //         });
        //     }
        //     else if(response == "incorrect password"){
        //         console.log(response);
        //         toast('incorrect password', {
        //             autoClose: false,
        //             closeOnClick: true,
        //             progress: false,
        //             position:toast.POSITION.TOP_CENTER
        //         });
        //     }else{
        //         console.log(response[0]);
        //         let sessionDetails = {
        //             userId: response[1]
        //         }
        //         CustomerService.cresteSessionKey(sessionDetails).then((result) => {
        //             console.log(result.data);
        //             sessionStorage.setItem("token", result.data);
        //             if(response[0] == "customer"){
        //                 this.setState({loginState: true});
        //                 this.props.history.push("/");
        //             }else if(response[0] == "admin"){
        //                 this.props.history.push("/admin/dashboard");
        //             }else if(response[0] == "moderator"){
        //                 this.props.history.push("/moderator/dashboard");
        //             }else if(response[0] == "worker"){
        //                 this.props.history.push("/");
        //             }else if(response[0] == "accountant"){
        //                 this.props.history.push("/accountant/dashboard");
        //             }else{
        //                 console.log("not found");
        //             }
                   
        //         })
        //     }

        // })


    }


    render() {
        return (
            <>
            <Header isLog={this.state.loginState}/>
            <div class="flex justify-center items-center w-full ">
            <div class=" flex justify-center items-center w-1/4 mt-20 mb-16 shadow-xl">
                
                
            <form class='bg-white shadow-lg rounded px-8 pt-6 pb-8  w-full' 
            onSubmit={this.handleSubmit}>
                <p class="text-3xl mb-5 text-center font-bold"> Login </p>
                <div class="text-red-600 p-1 flex justify-center">{this.state.error}</div>
                <div class='mb-4'>
                    <label class='block mb-2 text-md font-bold text-gray-700'>
                        Email
                    </label>
                    <input class='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black' 
                    type="text" placeholder="email" 
                    name="email"
                    value={this.state.email} 
                    onChange={this.handleChange} required/>
                </div>

                <div class="mb-6">
                    <label class="block mb-2 text-md font-bold text-gray-700">
                        Password
                    </label>
                    <input class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none border-500 focus:outline-none focus:shadow-outline  focus:bg-white focus:border-black" 
                    type="password" placeholder="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange} required/>
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

            
            </>

        );
    }
}

export default Login;