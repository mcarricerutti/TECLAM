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
                <p>{item.description}</p>
                <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;