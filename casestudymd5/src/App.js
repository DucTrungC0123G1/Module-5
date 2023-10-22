import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/header/Header";
import Facility from "./components/facility/Facility";
import Footer from "./components/footer/Footer";

function App() {
  return (
   <div>
     <Header/>
     <Facility/>
     <Footer/>
   </div>
  );
}

export default App;
