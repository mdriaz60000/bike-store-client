
import axios from "axios";

const axiosHost = axios.create({
    baseURL:'bike.json',
   // withCredentials:true,
   //  
})
    
const useAxiosHost = () => {

    return  axiosHost
}
export default useAxiosHost;