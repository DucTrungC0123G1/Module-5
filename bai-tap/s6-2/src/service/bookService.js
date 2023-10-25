import axios from "axios";

export const getAll = async () => {
    try {
        const res = await axios.get("http://localhost:8080/books");
        console.log(res)
        return res.data;
    } catch (e) {
        alert("ERROR")
    }
}
export const add = async (data) => {
    try {
        return await axios.post("http://localhost:8080/books", data);
    } catch (e) {
        alert("ERROR")
    }

}
export const removeBook = async (id) => {
    try {
        return await axios.delete(`http://localhost:8080/books/${id}`);
    } catch (e) {
        alert("error")
    }
}
export const findById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/books/${id}`)
        return res.data;
    } catch (e) {
        alert("error findId")
    }
}
export const editBook = async (data) => {
    try {
        return await axios.put(`http://localhost:8080/books/${data.id}`, data);
    } catch (e) {
        alert("error edit")
    }
}