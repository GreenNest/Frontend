// import axios from 'axios';


// export const jwtToken = localStorage.getItem("authorization");

// axios.interception.request.use(
//     function(config) {
//         if(jwtToken){
//             config.header['authorization'] = "Bearer " + jwtToken.token;
//         }
//         return config;
        
//     },
//     function (err) {
//         return Promise.reject(err);
        
//     }
// )

export default function LocalStorage() {
  const user = JSON.parse(localStorage.getItem('authorization'));

  if (user && user.token) {
      console.log("token" + user.token);
    return { Authorization: 'Bearer ' +user.token }; // for Spring Boot back-end
    //return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}