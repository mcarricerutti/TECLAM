import CartWidget from "../CardWidget/CardWidget";
import {Link, NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const NavBar = ({ background }) => {

    const brand = ("logo.png");

    return (
    <header className={`header background--${background}`}>

        <nav className="nav">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <Link to="/home">
                        <img src={brand} className="logo" alt="logo" />
                    </Link>
                </div>

                <div className="col-lg-6">
                    <ul>
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/select">Productos</NavLink>
                        <NavLink to="/contacto">Contacto</NavLink>
                    </ul>
                </div>

                <div className="col-lg-2">
                    <NavLink to="/cart">
                        <div className="contLogoCarrito">
                            <CartWidget />
                        </div>
                    </NavLink>
                </div>

            </div>
        </div>
        </nav>

       

    </header>
    );
    };
    
    export default NavBar;