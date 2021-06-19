import React, { Component } from 'react';

class Edit_profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 

           firstname: '',
           lastname:'',
           address1:'',
           address2:'',
           email:'',
           mobilenumber:'',
          


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

        handleaddress1Change = (event) =>{
            this.state({
                address1: event.target.value
            })
        }

        handleaddress2Change = (event) =>{
            this.state({
                address2: event.target.value
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

    handleSubmit = (event)=>{
    }

       

        
    render() {
        return (
            <div className='container flex justify-center w-full mb-20'>
                <div class="w-2/4 shadow-card mt-12 items-center flex justify-center"> 
                <form class="w-full max-w-lg justify-center mb-20"  onSubmit={this.handleSubmit}>
                    {/* <h3 class="font-sans text-2xl font-bold text-center mt-4 mb-5">Create your account</h3> */}
                    <div class="flex flex-wrap -mx-3 mb-6  ">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-black font-bold mb-4 mt-4">
                                First Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3 " 
                            type="text" 
                            value={this.state.firstname}
                            onChange={this.handlefirstnameChange}
                            placeholder=" Nimal"/>
                        </div>

                        <div class="w-full md:w-1/2 px-3  ">
                            <label class="block uppercase tracking-wide text-black font-bold mb-4 mt-4">
                                Last Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                            type="text" 
                            value={this.state.lastname}
                            onChange={this.handlelastnameChange}
                            placeholder=" Perera"/>
                        </div>

                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-black font-bold mb-4 mt-4">
                                Address Line 1
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                            type="text" 
                            value={this.state.address1}
                            onChange={this.handleaddress1Change}
                            placeholder=" No.08"/>
                        </div>

                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-black font-bold mb-4 mt-4">
                                Address Line 2
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                            type="text" 
                            value={this.state.address2}
                            onChange={this.handleaddress2Change}
                            placeholder=" Muththettuwa Waththa"/>
                        </div>

                        

                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-black font-bold mb-4 mt-4">
                                Email
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                            type="text" 
                            value={this.state.email}
                            onChange={this.handleemailChange}
                            placeholder=" hiruni123@gmail.com"/>
                        </div>

                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-black font-bold mb-4 mt-4">
                                Mobile Number
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3" 
                            type="number" 
                            value={this.state.mobilenumber}
                            onChange={this.handlemobilenumberChange}
                            placeholder=" Kuliyapitiya"/>
                        </div>

                        <div class="flex items-end justify-end mt-6 ">
                        
                            <button class="px-10 py-3 font-bold text-mainyellow bg-maingreen rounded hover:bg-secondarygreen focus:outline-none focus:shadow-outline" type="submit">
                                 Submit
                            </button>

                            
                   
                        </div>

                       

                    </div>

                </form>
                </div>
            </div>
        );
    }
}

export default Edit_profile;