import React, {useEffect, useState} from "react";
import * as TodoService from "../service/TodoService";
import {Link, NavLink} from "react-router-dom";

export function TodoList() {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        getAllTodoList();
        console.log(todos)
    }, [])
    const getAllTodoList = async () => {
        const result = await TodoService.getAll();
        console.log(result);
        setTodos(result);
    }

    return (
        <div>
            <Link to="/add">
                create
            </Link>
            <h1>TodoList</h1>
            <thead>
            <tbody>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Complete</th>
                </tr>
                {
                    todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.userId}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed ? "Yes" : "No"}</td>
                        </tr>
                    ))
                }
            </table>
            </tbody>
            </thead>
        </div>
    )
}