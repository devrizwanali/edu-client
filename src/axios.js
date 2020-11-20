import axios from 'axios';

//get the token from localstorage
const token = localStorage.getItem('token');
if(token) {
  axios.defaults.headers.common['Authorization']= `Bearer ${token}`
}

export default axios;