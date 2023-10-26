import axios from "axios";

export const getContractList = async () =>{
    try {
        const result = await axios.get(`http://localhost:8080/contracts`)
        console.log(result)
        return result.data;
    }catch (e) {
        console.log(e);
    }
}