import React from "react";
import CartWidget from "../CardWidget/CardWidget";

const NavBar = ({ background }) => {

    //Declaro una variable donde voy a almacenar la ruta de la imagen que quiero mostrar
    const brand = ("logo.png");
    
    //la lógica antes del return
    return (
    <header className={`header background--${background}`}>

        
        <div className='container'>
            <div className='row'>

                    <nav className="navbar navbar-expand">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <a className="nav-link" href="//">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="//">Contacto</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="//">Productos</a>
                                </li>
                            </ul>
                        </div>

                        <div className="logo-container">
                            <img src={brand} alt="logo" />
                        </div>

                        <div className=''>
                            {/* cart widget */}
                            <CartWidget />
                        </div>

                    </nav>
            </div>
        </div>
    </header>
    );
    };
    
    export default NavBar;