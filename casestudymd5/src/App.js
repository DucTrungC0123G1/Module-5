import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import Facility from "./components/facility/Facility";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import CustomerList from "./components/customers/CustomerList";
import {ToastContainer} from "react-toastify";
import CustomerCreate from "./components/customers/CustomerCreate";
import {CustomerEdit} from "./components/customers/CustomerEdit";

function App() {
  return (
      <>
          <Header></Header>
          <Routes>
              <Route path="/" element={<Facility></Facility>}/>
              <Route path="/customers" element={<CustomerList></CustomerList>}></Route>
              <Route path="customers/create" element={<CustomerCreate></CustomerCreate>}/>
              <Route path="/customers/edit/:id" element={<CustomerEdit></CustomerEdit>}/>
          </Routes>
          <ToastContainer/>
          <Footer></Footer>
      </>
  );
}

export default App;
