import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/v1/customer";
const url = "http://localhost:8080/api/v1/auth/login";

let config = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': "*"
}

class CustomerService {
    getCustomer(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    createCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL, customer);
    }

    logUser(email, password){
        console.log(email);
        // const options = {
        //     method: "POST",
        //     header: {
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*'
        //     },
        //     date: user,
        //     url,
        // }
        return axios.post('http://localhost:8080/api/v1/auth/login',{
            data:{
            userName: 'email',
            password: 'password'
        }},{
            header: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }
        ).then((response) => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }
}

export default new CustomerService();