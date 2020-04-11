import axios from "axios"
const axiosInstance = axios.create({
    baseURL:"https://burger-app-1faea.firebaseio.com/"

})
export default axiosInstance;
