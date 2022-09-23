import * as React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css'
import Login from "./components/Login.js";
import Protected from "./components/Protected";
import Home from "./components/Home.js";
import Books from "./components/Books.js";
import SingleBook from "./components/SingleBook.js";
import PageNotFound from "./components/PageNotFound";
import Signup from "./components/Signup";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import FallBack from "./components/FallBack";



function App() {
  const status = useSelector(state => state.LoginStatus.status)
  console.log(' app status is '+ status)
  return (
    
    <div >
      <Header/>
      <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/FallBack" element={<FallBack />} />
      <Route path="/Books" element={<Protected isLoggedIn={status}><Books /></Protected>} />
      <Route path="/SingleBook" element={<Protected isLoggedIn={status}><SingleBook /></Protected>} />
      <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
