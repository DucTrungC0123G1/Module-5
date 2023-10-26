import axios from "axios";
export const getCustomerType = async () =>{
    const result = await axios.get(`http://localhost:8080/customerType`);
    return result.data;
}