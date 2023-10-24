import logo from './logo.svg';
import './App.css';
import {TodoList} from "./components/TodoList";
import React from "react";
import {Routes, Route} from "react-router-dom";
import {TodoCreate} from "./components/TodoCreate";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<TodoList/>}></Route>
                <Route path="/add" element={<TodoCreate/>}></Route>
            </Routes>

        </>
    );
}

export default App;
