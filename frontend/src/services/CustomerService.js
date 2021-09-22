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
        return axios.post(`${API}reviews/add`, rate, data())
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
    sendLeaveRequest(request){
        return axios.post(`${API}leave/add`, request, data())
    }
    getProductRivews(id){
        return axios.get(`${API}reviews/get/${id}`, data())
    }
    updateStockAmount(amount, id){
        return axios.put(`${API}product/update/${id}/${amount}`, data())
    }
    getCartItems(id){
        return axios.get(`${API}cart/get/${id}`, data())
    }
    deleteCartItems(id){
        return axios.delete(`${API}cart/delete/${id}`, data());
    }
    getOrders(id){
        return axios.get(`${API}orderItems/get/${id}`, data())
    }
    getInvoiceDetails(id){
        return axios.get(`${API}get/invoiceDetails/${id}`)
    }
    sendInvoice(file){
        return axios.post(`${API}invoice/send`, file)
    }
    getGraphOrderData(){
        return axios.get(`${API}order/getCount`)
    }
    getGraphLeaveCount(id){
        return axios.get(`${API}leave/count/${id}`)
    }
    getEmployeeSalary(type){
        return axios.get(`${API}employee/salary/${type}`)
    }
    getOrderHistory(id){
        return axios.get(`${API}order/get/${id}`)
    }
    getCustomerOrderRequest(id){
        return axios.get(`${API}customer/orderRequest/${id}`, data())
    }
    updateOrderRequest(id){
        return axios.put(`${API}customer/orderRequest/delete/${id}`, data())
    }
    acceptOrderReqest(oid){
        return axios.post(`${API}customer/acceptRequest/${oid}`)
    }
    getCategoryCount(){
        return axios.get(`${API}category/count`)
    }
    getOrderCount(){
        return axios.get(`${API}orderType/count`)
    }
    getTheCartAmount(id){
        return axios.get(`${API}cart/get/${id}`)
    }
    addtheOrder(order){
        return axios.post(`${API}order/add`, order)
    }
    addOrderItems(items, oid){
        return axios.post(`${API}orderItems/add/${oid}`, items)
    }



}

export default new CustomerService();