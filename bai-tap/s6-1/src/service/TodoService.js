import axios from "axios";

export const getAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/todos');
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export const addTodo = async (todo) => {
    try {
        return await axios.post('http://localhost:8080/todos/', todo);

    } catch (e) {
        console.log(e);
    }
}