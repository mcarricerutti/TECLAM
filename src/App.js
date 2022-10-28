import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListConteiner/ItemListConteiner";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./style.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Provider from "./context/CartContext";
import Form from "./components/Formulario/Formu";
import Contacto from "./components/PageContacto/Contacto";
import Select from "./components/seleccionProd/Select";



function App() {
  return (
    <Provider>
      
    <BrowserRouter>
    <div className="contBody">
      <NavBar background={'transparent'} />
      <Routes>

        <Route path="/" element={< Home title="Reyes del infra🌎" />}/>
        <Route path="/home" element={< Home title="Reyes del infra🌎" />}/>
        <Route path="/products" element={<ItemListContainer/>}/>
        <Route path="/products/:prodName" element={<ItemListContainer/>}/>
        <Route path="/select" element={<Select/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Form/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        
      </Routes>

    </div>
    </BrowserRouter>

    </Provider>
  );
}

export default App;
