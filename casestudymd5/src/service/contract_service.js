import axios from "axios";

export const getContractList = async (codeSearch) => {
    try {
        const result = await axios.get(`http://localhost:8080/contracts?code_like=${codeSearch}`)
        console.log(result)
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export const deleteContract = async (id) => {
    try {
        return await axios.delete(`http://localhost:8080/contracts/${id}`)
    } catch (e) {
        console.log(e)
    }
}
export const createContract = async (contract) => {
    try {
        return await axios.post(`http://localhost:8080/contracts`, contract);
    } catch (e) {
        console.log(e)
    }

}
export const getContractById = async (id) => {
    const result = await axios.get(`http://localhost:8080/contracts/${id}`)
    return result.data
}
export const editContract = async (contract) => {
    try {
        return await axios.put(`http://localhost:8080/contracts/${contract.id}`,contract);
    } catch (e) {
        console.log(e)
    }
}