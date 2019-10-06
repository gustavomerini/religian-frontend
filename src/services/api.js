import axios from 'axios';

const api = axios.create({baseURL : 'https://religian-api.herokuapp.com'});

export default api;