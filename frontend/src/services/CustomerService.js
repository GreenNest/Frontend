import axios from 'axios';
import LocalStorage from './LocalStorage';

const API = "http://localhost:8080/api/v1/";
const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/v1/customer";
const url = "http://localhost:8080/api/v1/login";
const url2 = "http://localhost:8080/api/v1/auth/login";
const employee_url = "http://localhost:8080/api/v1/employee";
const session = "http://localhost:8080/api/v1/sessionKey";
const login_Credit = "http://localhost:8080/api/v1/checkLoginState";
const logouturl = "http://localhost:8080/api/v1/logout";
const pp = "http://localhost:8080/api/v1/user";
const product = "http://localhost:8080/api/v1/add/product";

const x = JSON.parse(localStorage.getItem('authorization'));
// const config = {
//         headers: {
//           Authorization: 'Bearer '+x.token
//         }
//     }
const data = () =>{
    const user = JSON.parse(localStorage.getItem('authorization'));

  if (user && user.token) {
      const config = {
        headers: {
          Authorization: 'Bearer '+user.token
        }
      }
    return config; // for Spring Boot back-end
    //return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}

console.log(data());


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

    addResponse(response){
        return  axios.post(`${API}request/add`, response)
    }

    addToCart(cart){
        return axios.post(`${API}cart/add`, cart)
    }

    addReview(rate){
        return axios.post(`${API}reviews/add`, rate)
    }

    addcomplain(complain){
        return axios.post(`${API}complain/add`, complain)
    }
    
    getSingleProduct(id){
        return axios.get(`${API}get/product/${id}`,data())
    }

    resetPassword(email){
        return axios.post(`${API}customer/resetPassword`, email)
    }

    getVerificationCode(email){
        return axios.get(`${API}verificationCode/get/${email}`)
    }
    updatePassword(data){
        return axios.put(`${API}userPassword/get`, data)
    }
    getAllCoOrders(){
        return axios.get(`${API}orders/cashOnDelivery`)
    }
    updateCoDeliveryStatus(id, status){
        return axios.put(`${API}orderStatus/update/${id}/${status}`)
    }




}

export default new CustomerService();