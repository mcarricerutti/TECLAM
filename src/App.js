import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListConteiner/ItemListConteiner";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./style.css";


function App() {
  return (
    <div className="contBody">
      <NavBar background={'transparent'} />
      <ItemListContainer  title="Reyes de los teclados" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
