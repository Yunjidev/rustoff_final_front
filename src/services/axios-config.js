import axios from 'axios';
import Cookies from 'js-cookie';


const API = axios.create({
  baseURL: 'https://rustoff-final-app-e6752fce9f21.herokuapp.com/'
});

API.interceptors.request.use(({ headers, ...config }) => ({
  ...config,
  headers: {
    ...headers,
    'Content-Type': 'application/json',
    Authorization: `Bearer ${headers.Authorization ? headers.Authorization : Cookies.get('token')}`,
  },
}));

export default API;
