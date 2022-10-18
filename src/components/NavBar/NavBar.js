import React from "react";
import CartWidget from "../CardWidget/CardWidget";
import {Link, NavLink} from "react-router-dom";
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";


const NavBar = ({ background }) => {

    //Declaro una variable donde voy a almacenar la ruta de la imagen que quiero mostrar
    const brand = ("logo.png");
    
    //la lógica antes del return
    return (
    <header className={`header background--${background}`}>

        <nav className="nav">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <Link to="/">
                        <img src={brand} className="logo" alt="logo" />
                    </Link>
                </div>

                <div className="col-lg-6">
                    <ul>
                        <NavLink to="/">Home</NavLink>
                        <NavLink>
                        <NavDropdownMenu title="Productos">
                            <DropdownSubmenu>
                                <NavLink className="nameProd" to="/products/teclados">Keyboards</NavLink>
                            </DropdownSubmenu>
                            <DropdownSubmenu>
                                <NavLink className="nameProd" to="/products/esqueletoTeclado">Keyboard Kits</NavLink>
                            </DropdownSubmenu>
                            <DropdownSubmenu>
                                <NavLink className="nameProd" to="/products/teclas">Keycaps</NavLink>
                            </DropdownSubmenu>
                        </NavDropdownMenu>
                        </NavLink>
                        <NavLink to="">Contacto</NavLink>
                    </ul>
                </div>

                <div className="col-lg-2">
                    <Link to="/cart">
                        <div className="contLogoCarrito">
                            <CartWidget />
                        </div>
                    </Link>
                </div>

            </div>
        </div>
        </nav>

       

    </header>
    );
    };
    
    export default NavBar;