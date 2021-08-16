import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/v1/customer";
const url = "http://localhost:8080/api/v1/login";
const employee_url = "http://localhost:8080/api/v1/employee";
const session = "http://localhost:8080/api/v1/sessionKey";
const login_Credit = "http://localhost:8080/api/v1/checkLoginState";
const logouturl = "http://localhost:8080/api/v1/logout";

let config = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': "*"
}
//;charset=UTF-8

class CustomerService {
    getCustomer(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    createCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL, customer);
    }

    logUser(user){
        return axios.post(url, user);
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
    // logoutUser(userId){
    //     return axios.post(logouturl, userId);
    // }

}

export default new CustomerService();