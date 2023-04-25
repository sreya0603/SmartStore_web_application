import React from 'react';
import './App.css';
import Navb from './design/navbar';
import Login from './pages/Login';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Navb />
      <BrowserRouter>
      <Routes>
        <Route index element={<Products/>} />
        <Route exact path="/Products" element={<Products/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="*" element={<h1>404 Error Found</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
