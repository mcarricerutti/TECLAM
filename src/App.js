import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListConteiner";
import "./style.css";


function App() {
  return (
    <div className="contBody">
      <NavBar background={'transparent'} />
      <ItemListContainer  title="Reyes de los teclados" />
    </div>
  );
}

export default App;
