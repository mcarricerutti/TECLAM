import { Link } from "react-router-dom";

const Select = () => {
  
    return(
        <div className="container contenedorSelect">
            <div className="row">
                <div className="col-lg-4">
                    <Link to="/products/teclados">
                        <img src="https://res.cloudinary.com/dpruqtqw2/image/upload/v1667224147/Captura_de_pantalla_264_ye6xt6.png" alt="imgCategory" className="imgSelect"/>
                    </Link>
                </div>
                
                <div className="col-lg-4">
                    <Link to="/products/esqueletoTeclado">
                        <img src="https://res.cloudinary.com/dpruqtqw2/image/upload/v1667224133/Captura_de_pantalla_265_irbwor.png" alt="imgCategory" className="imgSelect"/>
                    </Link>
                </div>
            

                <div className="col-lg-4">
                    <Link to="/products/teclas">
                        <img src="https://res.cloudinary.com/dpruqtqw2/image/upload/v1667224138/Captura_de_pantalla_266_qpu2xq.png" alt="imgCategory" className="imgSelect"/>
                    </Link>
                </div>
               
            </div>
        </div>
    )
}

export default Select;