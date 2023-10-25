import './App.css';
import {TodoList} from "./components/TodoList";
import React from "react";
import {Routes, Route} from "react-router-dom";
import {TodoCreate} from "./components/TodoCreate";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<TodoList/>}/>
                <Route path="/add" element={<TodoCreate/>}/>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;
