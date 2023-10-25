import logo from './logo.svg';
import './App.css';
import React from "react";
import {UserList} from "./components/UserList";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <>
        <Routes>
          <Route path="/user" element={<UserList/>}>
          </Route>
        </Routes>
      </>
  );
}

export default App;
