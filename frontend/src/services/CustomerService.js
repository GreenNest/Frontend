import axios from 'axios';
import LocalStorage from './LocalStorage';

const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/v1/customer";
const url = "http://localhost:8080/api/v1/login";
const url2 = "http://localhost:8080/api/v1/auth/login";
const employee_url = "http://localhost:8080/api/v1/employee";
const session = "http://localhost:8080/api/v1/sessionKey";
const login_Credit = "http://localhost:8080/api/v1/checkLoginState";
const logouturl = "http://localhost:8080/api/v1/logout";
HEAD
// const employees_url = "http://localhost:8080/api/v1/employees";

const pp = "http://localhost:8080/api/v1/user";
const product = "http://localhost:8080/api/v1/add/product";


let config = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': "*"
}
//;charset=UTF-8

const getToken=()=>{
    const x = JSON.parse(localStorage.getItem('authorization'));
    return x.token;
}
const x = JSON.parse(localStorage.getItem('authorization'));

class CustomerService {
    getCustomer(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    createCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL, customer);
    }

    logUser(user){
        return axios.post(url2, user);
    }

    createEmployee(employee){
        return axios.post(employee_url, employee);
    }

    cresteSessionKey(userId){
        return axios.post(session, userId);
    }
    checkUserLogin(token){
        return axios.post(login_Credit, token);
    }
    logoutUser(userId){
        return axios.post(logouturl, userId);
    }
    getCustomerDetails(){
        return axios.get(pp, { headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+x.token
            },
        })
    }
    addProduct(data){
        return axios.post(product, data)
    }

    // getEmployees(){
    //     return axios.get(employees_url);
    // }

}

export default new CustomerService();