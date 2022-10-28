import { Link } from "react-router-dom";

const Select = () => {
  
    return(
        <div className="container contenedorSelect">
            <div className="row">
                <div className="col-lg-4">
                    <Link to="/products/teclados">
                        <img src="https://res.cloudinary.com/dpruqtqw2/image/upload/v1666368752/Captura_de_pantalla_264_s2sfrf.png" alt="imgCategory" className="imgSelect"/>
                    </Link>
                </div>
                
                <div className="col-lg-4">
                    <Link to="/products/esqueletoTeclado">
                        <img src="https://res.cloudinary.com/dpruqtqw2/image/upload/v1666368763/Captura_de_pantalla_265_itvaqx.png" alt="imgCategory" className="imgSelect"/>
                    </Link>
                </div>
            

                <div className="col-lg-4">
                    <Link to="/products/teclas">
                        <img src="https://res.cloudinary.com/dpruqtqw2/image/upload/v1666368778/Captura_de_pantalla_266_e3dky6.png" alt="imgCategory" className="imgSelect"/>
                    </Link>
                </div>
               
            </div>
        </div>
    )
}

export default Select;