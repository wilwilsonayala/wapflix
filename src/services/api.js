import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000', // URL del JSON Server
});

export default api;