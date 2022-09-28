import React from "react";
import CartWidget from "./CardWidget";
import "./styles/NavBar.css";

const NavBar = ({ background }) => {

    //Declaro una variable donde voy a almacenar la ruta de la imagen que quiero mostrar
    const brand = ("logo.png");
    
    //la lógica antes del return
    return (
    <header className={`header background--${background}`}>
    
        <div className='container'>
            <div className='row'>
                <div className='col-xs-5 col-md-6 col-lg-7'>
                    {/* logo de la marca */}
                    <div className="logo-container">
                        <img src={brand} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
        
        <div className='container'>
            <div className='row'>
                <div className='col-xs-6 col-md-8 col-lg-8 '>
                    <nav className="navbar navbar-expand-lg">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav ">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Inicio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contacto</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Productos</a>
                                    </li>
                                </ul>
                        </div>
                    </nav>
                </div>
    
                <div className='col-xs-6 col-md-4 col-lg-4'>
                    {/* cart widget */}
                    <CartWidget />
                </div>
            </div>
        </div>
    </header>
    );
    };
    
    export default NavBar;