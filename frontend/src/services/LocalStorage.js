
export default function LocalStorage() {
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