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
import {ContractList} from "./components/contract/ContractList";
import {ContractCreate} from "./components/contract/ContractCreate";
import ContractEdit from "./components/contract/ContractEdit";

function App() {
  return (
      <>
          <Header></Header>
          <Routes>
              <Route path="/" element={<Facility/>}/>
              <Route path="/customers" element={<CustomerList/>}/>
              <Route path="customers/create" element={<CustomerCreate/>}/>
              <Route path="/customers/edit/:id" element={<CustomerEdit/>}/>
              <Route path="/contracts" element={<ContractList/>}/>
              <Route path="/contracts/create" element={<ContractCreate/>}/>
              <Route path="/contracts/edit/:id" element={<ContractEdit/>}/>

          </Routes>
          <ToastContainer/>
          <Footer></Footer>
      </>
  );
}

export default App;
