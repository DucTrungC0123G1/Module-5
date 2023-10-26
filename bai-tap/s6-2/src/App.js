import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes} from "react-router-dom";
import BookList from "./components/BookList";
import BookAdd from "./components/BookAdd";
import React from "react";
import {ToastContainer} from 'react-toastify';
import {BookEdit} from "./components/BookEdit";
import {ContractList} from "../../../casestudymd5/src/components/contract/ContractList";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<BookList/>}/>
                <Route path="/add" element={<BookAdd/>}/>
                <Route path="/edit/:id" element={<BookEdit/>}/>
                <Route path="/" element={<ContractList/>}/>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;
