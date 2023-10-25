import logo from './logo.svg';
import './App.css';
import React from "react";

import {Route, Routes} from "react-router-dom";
import UserList from "./components/UserList";

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
