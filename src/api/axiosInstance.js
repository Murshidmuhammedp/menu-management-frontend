import axios from "axios"

const api = axios.create({
  // baseURL: "http://localhost:5432"
  baseURL: 'https://menu-management-backend-1.onrender.com'
});

export default api;