import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CustomerService from '../../services/CustomerService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header';


const initialState = {
    firstname: '',
    lastname:'',
    email:'',
    mobilenumber:'',
    password:'',
    confirmpassword:'',
    role: 'customer',
    password_err:'',
    email_err: '',
    mobile_err: '' ,
    message:''
}

toast.configure();

class Signup extends Component {
    state = initialState;



    handleChange = event => {

        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
    });
        // this.setState({
        //     [event.target.name]:event.target.value
        // });
    };


    validate(){
        let password_err = "";
        let email_err = "";
        let mobile_err = "";
        let formValid = "";
        if(this.state.password.length < 8 ){
            password_err = "Password must be more than 8 characters";
        }
        else if(this.state.password !== this.state.confirmpassword){
            password_err = "Password does not match"
        }else{
            
           formValid = true;
        }

        if(!this.state.email.includes("@")){
           email_err = "Invalida email";
        }

        if(this.state.mobilenumber.length < 10){
            mobile_err = "Invalid mobile number";
        }

        if(password_err || email_err || mobile_err){
            this.setState({ email_err, mobile_err, password_err})
            return false;
        }
        
        return true;

    }


    handleSubmit = (event)=>{
        event.preventDefault();
        const isValid = this.validate();
        
        if(isValid){
            let customer = {
            first_name: this.state.firstname,
            last_name: this.state.lastname,
            mobile: parseInt(this.state.mobilenumber),
            profile:{
                email: this.state.email,
                password: this.state.password,
                authorities:[
                    {
                        roleCode: this.state.role
                    }
                ]
            }
            
        }
            //console.log('customer =>' + JSON.stringify(customer));
        CustomerService.createCustomer(customer).then((result) => {
            // this.props.history.push('/login');
            console.log(result.data);
            if(result.data === true){
                toast('Successfully create an account', {
                   autoClose: false,
                   closeOnClick: true,
                   progress: false,
                   position:toast.POSITION.TOP_CENTER
                });
            }
            else{
                toast('Already have an account with this email', {
                    autoClose: false,
                    closeOnClick: true,
                    progress: false,
                    position:toast.POSITION.TOP_CENTER
                });
            }
            this.setState(initialState);
        
            
        });

    }
        
       

    }
    cancel (){
        //push to home page
        this.props.history.push('/');
    }

    render() {
        return (
<>
            <Header/>
            <div className="flex justify-center w-full mb-16">
                <div class="w-2/4 shadow-xl mt-12 items-center flex justify-center border-2 border-green-900 rounded-md"> 
                    <form class="w-full max-w-lg justify-center mb-10" onSubmit={this.handleSubmit}>
                        <h3 class="font-sans text-3xl font-bold text-center mt-5 mb-8 text-maingreen">Create New Account</h3>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block tracking-wide text-black font-semibold mb-3 mt-4 text-lg">
                                    First Name
                                </label>
                                <input class="rounded w-full p-2 border-solid outline-none hover:border-hovergreen focus:border-maingreen border shadow border-black border-opacity-25 leading-tight text-gray-700" 
                                type="text"
                                name="firstname" 
                                value={this.state.firstname}
                                onChange={this.handleChange}
                                placeholder="Nimal"/>
                            </div>

                            <div class="w-full md:w-1/2 px-3">
                                <label class="block  tracking-wide text-black font-semibold mb-3 mt-4 text-lg">
                                    Last Name
                                </label>
                                <input class="rounded w-full p-2 border-solid outline-none hover:border-hovergreen focus:border-maingreen border shadow border-black border-opacity-25 leading-tight text-gray-700" 
                                type="text"
                                name="lastname" 
                                value={this.state.lastname}
                                onChange={this.handleChange}
                                placeholder="Perera"/>
                            </div>

                            <div class="w-full md:w-1/2 px-3">
                                <label class="block  tracking-wide text-black font-semibold mb-3 mt-4 text-lg">
                                    Email
                                </label>
                                <input class="rounded w-full p-2 border-solid outline-none hover:border-hovergreen focus:border-maingreen border shadow border-black border-opacity-25 leading-tight text-gray-700" 
                                type="text"
                                name="email" 
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="example@gmail.com"/>
                                <div class="text-red-600">{this.state.email_err}</div>
                            </div>

                            <div class="w-full md:w-1/2 px-3">
                                <label class="block  tracking-wide text-black font-semibold mb-3 mt-4 text-lg">
                                    Mobile Number
                                </label>
                                <input class="rounded w-full p-2 border-solid outline-none hover:border-hovergreen focus:border-maingreen border shadow border-black border-opacity-25 leading-tight text-gray-700" 
                                type="text"
                                name="mobilenumber" 
                                value={this.state.mobilenumber}
                                onChange={this.handleChange}
                                placeholder=""/>
                                <div class="text-red-600">{this.state.mobile_err}</div>
                            </div>

                            <div class="w-full md:w-1/2 px-3">
                                <label class="block  tracking-wide text-black font-semibold mb-3 mt-4 text-lg">
                                    Password
                                </label>
                                <input class="rounded w-full p-2 border-solid outline-none hover:border-hovergreen focus:border-maingreen border shadow border-black border-opacity-25 leading-tight text-gray-700" 
                                type="password"
                                name="password" 
                                value={this.state.password}
                                onChange={this.handleChange}/>
                                <div class="text-red-600">{this.state.password_err}</div>
                            </div>

                            <div class="w-full md:w-1/2 px-3">
                                <label class="block  tracking-wide text-black font-semibold mb-3 mt-4 text-lg">
                                    Confirm Password
                                </label>
                                <input class="rounded w-full p-2 border-solid outline-none hover:border-hovergreen focus:border-maingreen border shadow border-black border-opacity-25 leading-tight text-gray-700" 
                                type="password"
                                name="confirmpassword"
                                value={this.state.confirmpassword}
                                onChange={this.handleChange}/>
                            </div>

                            <div class="justify-center items-center w-full">
                                <div class="md:justify-center items-center mt-6 mb-6">
                                        <label class="md:w-full block text-black font-medium">
                                            <input class="ml-4 form-checkbox h-3 w-3 leading-tight" type="checkbox" />
                                               <span> I agree the to terms and conditions
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
            </>
        );
    }
}

export default Signup;