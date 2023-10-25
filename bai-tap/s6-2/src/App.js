import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import BookList from "./components/BookList";
import BookAdd from "./components/BookAdd";
function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<BookList/>}/>
          <Route path="/add" element={<BookAdd/>}/>
        </Routes>
      </>
  );
}

export default App;
