import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
    return (
        <div className="container contDetail">
            <div className="row">
                <div className="col-lg-5">
                    <img src={item.image} alt={item.title} className="imgDetail" />
                </div>
                
                <div className="col-lg-7">
                <h2 className="titleDetail">{item.title}</h2>
                <p>
                    <li className="itemDetails">Se agrega un peso pintado de color al 75S.</li>
                    <li className="itemDetails">Caja apilada de acrílico y diseño de 81 teclas.</li>
                    <li className="itemDetails">Terminal Hotswap, compatible con interruptores mecánicos de 3/5 pines, admite interruptor Cherry/interruptor Gateron/interruptor Kailh BOX, etc.</li>
                    <li className="itemDetails">Compatible con Windows/Mac/Linus.</li>
                    <li className="itemDetails">Cable tipo C desmontable y LED orientados al sur.</li>
                </p>
                <ItemCount stock={20}/>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;