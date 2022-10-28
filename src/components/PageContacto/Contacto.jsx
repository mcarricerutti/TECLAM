const Contacto = () => {
    return(
        <>
        <div className="container contenedorContacto">
            <div className="row">
            <p className="titleContacto">MANTENETE EN CONTACTO</p>
                <div className="col-lg-4">
                    <img className="imgContacto" src="https://res.cloudinary.com/dpruqtqw2/image/upload/v1666968353/keyboards_vntc49.png" alt="imgContacto"/>
                </div>
                <div className="col-lg-4">
                    <p className="textContacto">- contacto@teclam.com</p>
                    <p className="textContacto">- Shop Online: +54 9 3574 54-9087</p>
                    <p className="subTitleContac">DIRECCIÓN LOCAL AL PÚBLICO</p>
                    <h4 className="infoContac">MAIPÚ 1668,SANTA ROSA DE RÍO PRIMERO, CÓRDOBA</h4>

                    <p className="subTitleContac">NUESTROS HORARIOS</p>
                    <h4 className="infoContac">Lunes a Sábados</h4>
                    <h4 className="infoContac">9am-13pm</h4>
                    <h4 className="infoContac">16pm-20pm</h4>
                </div>
                <div className="col-lg-4">
                   <img className="imgContacto" src="https://res.cloudinary.com/dpruqtqw2/image/upload/v1666968353/keyboards_vntc49.png" alt="imgContacto"/>
                </div>

            </div>

        </div>
        </>
    )
}

export default Contacto;